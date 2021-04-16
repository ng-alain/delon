import { AlainSFConfig } from '@delon/util/config';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { SF_SEQ } from '../const';
import { ErrorData } from '../errors';
import { SFFormValueChange, SFUpdateValueAndValidity, SFValue } from '../interface';
import { SFSchema, SFSchemaType } from '../schema';
import { SFUISchema, SFUISchemaItem, SFUISchemaItemRun } from '../schema/ui';
import { isBlank } from '../utils';
import { SchemaValidatorFactory } from '../validator.factory';
import { Widget } from '../widget';

export abstract class FormProperty {
  private _errors: ErrorData[] | null = null;
  private _valueChanges = new BehaviorSubject<SFFormValueChange>({ path: null, pathValue: null, value: null });
  private _errorsChanges = new BehaviorSubject<ErrorData[] | null>(null);
  private _visible = true;
  private _visibilityChanges = new BehaviorSubject<boolean>(true);
  private _root: PropertyGroup;
  private _parent: PropertyGroup | null;
  _objErrors: { [key: string]: ErrorData[] } = {};
  schemaValidator: (value: SFValue) => ErrorData[];
  schema: SFSchema;
  ui: SFUISchema | SFUISchemaItemRun;
  formData: {};
  _value: SFValue = null;
  widget: Widget<FormProperty, SFUISchemaItem>;
  path: string;

  constructor(
    schemaValidatorFactory: SchemaValidatorFactory,
    schema: SFSchema,
    ui: SFUISchema | SFUISchemaItem,
    formData: {},
    parent: PropertyGroup | null,
    path: string,
    private _options: AlainSFConfig,
  ) {
    this.schema = schema;
    this.ui = ui;
    this.schemaValidator = schemaValidatorFactory.createValidatorFn(schema, {
      ingoreKeywords: this.ui.ingoreKeywords as string[],
      debug: (ui as SFUISchemaItem)!.debug!,
    });
    this.formData = formData || schema.default;
    this._parent = parent;
    if (parent) {
      this._root = parent.root;
    } else {
      this._root = this as any;
    }
    this.path = path;
  }

  get valueChanges(): BehaviorSubject<SFFormValueChange> {
    return this._valueChanges;
  }

  get errorsChanges(): BehaviorSubject<ErrorData[] | null> {
    return this._errorsChanges;
  }

  get type(): SFSchemaType {
    return this.schema.type!;
  }

  get parent(): PropertyGroup | null {
    return this._parent;
  }

  get root(): PropertyGroup {
    return this._root;
  }

  get value(): SFValue {
    return this._value;
  }

  get errors(): ErrorData[] | null {
    return this._errors;
  }

  get visible(): boolean {
    return this._visible;
  }

  get valid(): boolean {
    return this._errors === null || this._errors.length === 0;
  }

  get options(): AlainSFConfig {
    return this._options;
  }

  /**
   * 设置值
   *
   * @param onlySelf `true` 只对当前字段更新值和校验；`false` 包含上级字段
   */
  abstract setValue(value: SFValue, onlySelf: boolean): void;

  /**
   * 重置值，默认值为 `schema.default`
   *
   * @param onlySelf `true` 只对当前字段更新值和校验；`false` 包含上级字段
   */
  abstract resetValue(value: SFValue, onlySelf: boolean): void;

  /**
   * @internal
   */
  abstract _hasValue(): boolean;

  /**
   *  @internal
   */
  abstract _updateValue(): void;

  /**
   * 更新值且校验数据
   */
  updateValueAndValidity(options?: SFUpdateValueAndValidity): void {
    options = { onlySelf: false, emitValidator: true, emitValueEvent: true, updatePath: '', updateValue: null, ...options };
    this._updateValue();

    if (options.emitValueEvent) {
      options.updatePath = options.updatePath || this.path;
      options.updateValue = options.updateValue == null ? this.value : options.updateValue;
      this.valueChanges.next({ value: this.value, path: options.updatePath, pathValue: options.updateValue });
    }

    // `emitValidator` 每一次数据变更已经包含完整错误链路，后续父节点数据变更无须再触发校验
    if (options.emitValidator && this.ui.liveValidate === true) {
      this._runValidation();
    }

    if (this.parent && !options.onlySelf) {
      this.parent.updateValueAndValidity({ ...options, emitValidator: false });
    }
  }

  /** 根据路径搜索表单属性 */
  searchProperty(path: string): FormProperty | null {
    let prop: FormProperty = this;
    let base: PropertyGroup | null = null;

    let result = null;
    if (path[0] === SF_SEQ) {
      base = this.findRoot();
      result = base.getProperty(path.substr(1));
    } else {
      while (result === null && prop.parent !== null) {
        prop = base = prop.parent;
        result = base.getProperty(path);
      }
    }
    return result!;
  }

  /** 查找根表单属性 */
  findRoot(): PropertyGroup {
    let property: FormProperty = this;
    while (property.parent !== null) {
      property = property.parent;
    }
    return property as PropertyGroup;
  }

  // #region process errors

  private isEmptyData(value: {}): boolean {
    if (isBlank(value)) return true;
    switch (this.type) {
      case 'string':
        return ('' + value).length === 0;
    }
    return false;
  }

  /**
   * @internal
   */
  _runValidation(): void {
    let errors: ErrorData[];
    // The definition of some rules:
    // 1. Should not ajv validator when is empty data and required fields
    // 2. Should not ajv validator when is empty data
    const isEmpty = this.isEmptyData(this._value);
    if (isEmpty && this.ui._required) {
      errors = [{ keyword: 'required' }];
    } else if (isEmpty) {
      errors = [];
    } else {
      errors = this.schemaValidator(this._value) || [];
    }
    const customValidator = (this.ui as SFUISchemaItemRun).validator;
    if (typeof customValidator === 'function') {
      const customErrors = customValidator(this.value, this, this.findRoot());
      if (customErrors instanceof Observable) {
        customErrors.subscribe(res => {
          this.setCustomErrors(errors, res);
          this.widget.detectChanges();
        });
        return;
      }
      this.setCustomErrors(errors, customErrors);
      return;
    }

    this._errors = errors;
    this.setErrors(this._errors);
  }

  private setCustomErrors(errors: ErrorData[], list: ErrorData[]): void {
    // fix error format
    const hasCustomError = list != null && list.length > 0;
    if (hasCustomError) {
      list.forEach(err => {
        if (!err.message) {
          throw new Error(`The custom validator must contain a 'message' attribute to viewed error text`);
        }
        err._custom = true;
      });
    }
    this._errors = this.mergeErrors(errors, list);
    this.setErrors(this._errors);
  }

  private mergeErrors(errors: ErrorData[], newErrors: ErrorData | ErrorData[]): ErrorData[] {
    if (newErrors) {
      if (Array.isArray(newErrors)) {
        errors = errors.concat(...newErrors);
      } else {
        errors.push(newErrors);
      }
    }
    return errors;
  }

  protected setErrors(errors: ErrorData[], emitFormat: boolean = true): void {
    if (emitFormat && errors && !this.ui.onlyVisual) {
      const l = (this.widget && this.widget.l.error) || {};
      errors = errors.map((err: ErrorData) => {
        let message =
          err._custom === true && err.message
            ? err.message
            : (this.ui.errors || {})[err.keyword] || this._options.errors![err.keyword] || l[err.keyword] || ``;

        if (message && typeof message === 'function') {
          message = message(err) as string;
        }

        if (message) {
          if (~(message as string).indexOf('{')) {
            message = (message as string).replace(/{([\.a-zA-Z0-9]+)}/g, (_v: string, key: string) => err.params![key] || '');
          }
          err.message = message as string;
        }
        return err;
      });
    }
    this._errors = errors;
    this._errorsChanges.next(errors);
    // Should send errors to parent field
    if (this._parent) {
      this._parent.setParentAndPlatErrors(errors, this.path);
    }
  }

  setParentAndPlatErrors(errors: ErrorData[], path: string): void {
    this._objErrors[path] = errors;
    const platErrors: ErrorData[] = [];
    Object.keys(this._objErrors).forEach(p => {
      const property = this.searchProperty(p);
      if (property && !property.visible) return;
      platErrors.push(...this._objErrors[p]);
    });
    this.setErrors(platErrors, false);
  }

  // #endregion

  // #region condition

  /**
   * Set the hide or display of widget
   * 设置小部件的隐藏或显示
   */
  setVisible(visible: boolean): void {
    this._visible = visible;
    this._visibilityChanges.next(visible);
    // 部分数据源来自 reset
    if (this.root.widget?.sfComp?._inited === true) {
      this.resetValue(this.value, true);
    }
  }

  // A field is visible if AT LEAST ONE of the properties it depends on is visible AND has a value in the list
  _bindVisibility(): void {
    const visibleIf = (this.ui as SFUISchemaItem).visibleIf;
    if (typeof visibleIf === 'object' && Object.keys(visibleIf).length === 0) {
      this.setVisible(false);
    } else if (visibleIf !== undefined) {
      const propertiesBinding: Array<Observable<boolean>> = [];
      for (const dependencyPath in visibleIf) {
        if (visibleIf.hasOwnProperty(dependencyPath)) {
          const property = this.searchProperty(dependencyPath);
          if (property) {
            const valueCheck = property.valueChanges.pipe(
              map(res => {
                const vi = visibleIf[dependencyPath];
                if (typeof vi === 'function') {
                  return vi(res.value);
                }
                if (vi.indexOf('$ANY$') !== -1) {
                  return res.value.length > 0;
                } else {
                  return vi.indexOf(res.value) !== -1;
                }
              }),
            );
            const visibilityCheck = property._visibilityChanges;
            const and = combineLatest([valueCheck, visibilityCheck]).pipe(map(results => results[0] && results[1]));
            propertiesBinding.push(and);
          } else {
            console.warn(`Can't find property ${dependencyPath} for visibility check of ${this.path}`);
          }
        }
      }

      combineLatest(propertiesBinding)
        .pipe(
          map(values => values.indexOf(true) !== -1),
          distinctUntilChanged(),
        )
        .subscribe(visible => this.setVisible(visible));
    }
  }

  // #endregion
}

export abstract class PropertyGroup extends FormProperty {
  properties: { [key: string]: FormProperty } | FormProperty[] | null = null;

  getProperty(path: string): FormProperty | undefined {
    const subPathIdx = path.indexOf(SF_SEQ);
    const propertyId = subPathIdx !== -1 ? path.substr(0, subPathIdx) : path;

    let property = (this.properties as { [key: string]: FormProperty })[propertyId];
    if (property !== null && subPathIdx !== -1 && property instanceof PropertyGroup) {
      const subPath = path.substr(subPathIdx + 1);
      property = (property as PropertyGroup).getProperty(subPath)!;
    }
    return property;
  }

  forEachChild(fn: (formProperty: FormProperty, str: string) => void): void {
    for (const propertyId in this.properties) {
      if (this.properties.hasOwnProperty(propertyId)) {
        const property = (this.properties as { [key: string]: FormProperty })[propertyId];
        fn(property, propertyId);
      }
    }
  }

  forEachChildRecursive(fn: (formProperty: FormProperty) => void): void {
    this.forEachChild(child => {
      fn(child);
      if (child instanceof PropertyGroup) {
        (child as PropertyGroup).forEachChildRecursive(fn);
      }
    });
  }

  _bindVisibility(): void {
    super._bindVisibility();
    this._bindVisibilityRecursive();
  }

  private _bindVisibilityRecursive(): void {
    this.forEachChildRecursive(property => {
      property._bindVisibility();
    });
  }

  isRoot(): boolean {
    return this === this.root;
  }
}
