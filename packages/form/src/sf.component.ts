import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  SimpleChange,
  SimpleChanges,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { ACLService } from '@delon/acl';
import { DelonLocaleService, LocaleData } from '@delon/theme';
import { deepCopy, InputBoolean, deepMergeKey } from '@delon/util';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { DelonFormConfig } from './config';
import { ErrorData } from './errors';
import { SFButton, SFLayout } from './interface';
import { FormProperty, PropertyGroup } from './model/form.property';
import { FormPropertyFactory } from './model/form.property.factory';
import { SFSchema } from './schema/index';
import { SFUISchema, SFUISchemaItem, SFUISchemaItemRun, SFOptionalHelp } from './schema/ui';
import { TerminatorService } from './terminator.service';
import { di, resolveIf, retrieveSchema, FORMATMAPS } from './utils';
import { SchemaValidatorFactory } from './validator.factory';
import { WidgetFactory } from './widget.factory';

export function useFactory(schemaValidatorFactory: SchemaValidatorFactory, options: DelonFormConfig) {
  return new FormPropertyFactory(schemaValidatorFactory, options);
}

@Component({
  selector: 'sf, [sf]',
  exportAs: 'sf',
  templateUrl: './sf.component.html',
  providers: [
    WidgetFactory,
    {
      provide: FormPropertyFactory,
      useFactory,
      deps: [SchemaValidatorFactory, DelonFormConfig],
    },
    TerminatorService,
  ],
  host: {
    '[class.sf]': 'true',
    '[class.sf__inline]': `layout === 'inline'`,
    '[class.sf__search]': `mode === 'search'`,
    '[class.sf__edit]': `mode === 'edit'`,
    '[class.sf__no-error]': `onlyVisual`,
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SFComponent implements OnInit, OnChanges, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  private _renders = new Map<string, TemplateRef<void>>();
  private _item: {};
  private _valid = true;
  private _defUi: SFUISchemaItem;
  private _inited = false;

  locale: LocaleData = {};
  rootProperty: FormProperty | null = null;
  _formData: {};
  _btn: SFButton;
  _schema: SFSchema;
  _ui: SFUISchema;

  // #region fields

  /** 表单布局，等同 `nzLayout`，默认：horizontal */
  @Input() layout: SFLayout = 'horizontal';
  /** JSON Schema */
  @Input() schema: SFSchema;
  /** UI Schema */
  @Input() ui: SFUISchema;
  /** 表单默认值 */
  @Input() formData: {};
  /**
   * 按钮
   * - 值为 `null` 或 `undefined` 表示手动添加按钮，但保留容器
   * - 值为 `none` 表示手动添加按钮，且不保留容器
   * - 使用 `spanLabelFixed` 固定标签宽度时，若无 `render.class` 则默认为居中状态
   */
  @Input() button: SFButton | 'none' = {};
  /**
   * 是否实时校验，默认：`true`
   * - `true` 每一次都校验
   * - `false` 提交时校验
   */
  @Input() @InputBoolean() liveValidate = true;
  /** 指定表单 `autocomplete` 值 */
  @Input() autocomplete: 'on' | 'off';
  /** 立即显示错误视觉 */
  @Input() @InputBoolean() firstVisual = true;
  /** 是否只展示错误视觉不显示错误文本 */
  @Input() @InputBoolean() onlyVisual = false;
  /** 表单模式 */
  @Input()
  set mode(value: 'default' | 'search' | 'edit') {
    switch (value) {
      case 'search':
        this.layout = 'inline';
        this.firstVisual = false;
        this.liveValidate = false;
        if (this._btn) {
          this._btn.submit = this._btn.search;
        }
        break;
      case 'edit':
        this.layout = 'horizontal';
        this.firstVisual = false;
        this.liveValidate = true;
        if (this._btn) {
          this._btn.submit = this._btn.edit;
        }
        break;
    }
    this._mode = value;
  }
  get mode() {
    return this._mode;
  }
  private _mode: 'default' | 'search' | 'edit';
  /**
   * Whether to load status，when `true` reset button is disabled status, submit button is loading status
   */
  @Input() @InputBoolean() loading = false;
  @Input() @InputBoolean() disabled = false;
  /** 数据变更时回调 */
  @Output() readonly formChange = new EventEmitter<{}>();
  /** 提交表单时回调 */
  @Output() readonly formSubmit = new EventEmitter<{}>();
  /** 重置表单时回调 */
  @Output() readonly formReset = new EventEmitter<{}>();
  /** 表单校验结果回调 */
  @Output() readonly formError = new EventEmitter<ErrorData[]>();
  // #endregion

  /** 表单校验状态 */
  get valid(): boolean {
    return this._valid;
  }

  /** 表单值 */
  get value(): { [key: string]: any } {
    return this._item;
  }

  /**
   * 根据路径获取表单元素属性
   * @param path [路径](https://ng-alain.com/form/qa#path)
   */
  getProperty(path: string): FormProperty | null {
    return this.rootProperty!.searchProperty(path);
  }

  /**
   * 根据路径获取表单元素当前值
   * @param path [路径](https://ng-alain.com/form/qa#path)
   */
  getValue(path: string): any {
    return this.getProperty(path)!.value;
  }

  /**
   * 根据路径设置某个表单元素属性值
   * @param path [路径](https://ng-alain.com/form/qa#path)
   * @param value 新值
   */
  setValue(path: string, value: any): this {
    const item = this.getProperty(path);
    if (!item) {
      throw new Error(`Invalid path: ${path}`);
    }
    item.resetValue(value, false);
    return this;
  }

  onSubmit(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    if (!this.liveValidate) this.validator();
    if (!this.valid) return;
    this.formSubmit.emit(this.value);
  }

  constructor(
    private formPropertyFactory: FormPropertyFactory,
    private terminator: TerminatorService,
    private options: DelonFormConfig,
    @Optional() private aclSrv: ACLService,
    private cdr: ChangeDetectorRef,
    private i18n: DelonLocaleService,
  ) {
    this.liveValidate = options.liveValidate as boolean;
    this.firstVisual = options.firstVisual as boolean;
    this.autocomplete = options.autocomplete as 'on' | 'off';
    this.i18n.change.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      this.locale = this.i18n.getData('sf');
      if (this._inited) {
        this.validator({ emitError: false, onlyRoot: false });
        this.coverButtonProperty();
        this.cdr.markForCheck();
      }
    });
    if (this.aclSrv) {
      this.aclSrv.change
        .pipe(
          filter(() => this._inited),
          takeUntil(this.unsubscribe$),
        )
        .subscribe(() => this.refreshSchema());
    }
  }

  private coverProperty() {
    const isHorizontal = this.layout === 'horizontal';
    const _schema = deepCopy(this.schema);
    const { definitions } = _schema;

    const inFn = (
      schema: SFSchema,
      _parentSchema: SFSchema,
      uiSchema: SFUISchemaItemRun,
      parentUiSchema: SFUISchemaItemRun,
      uiRes: SFUISchemaItemRun,
    ) => {
      if (!Array.isArray(schema.required)) schema.required = [];

      Object.keys(schema.properties!).forEach(key => {
        const uiKey = `$${key}`;
        const property = retrieveSchema(schema.properties![key] as SFSchema, definitions);
        const ui = deepMergeKey(
          {},
          true,
          { widget: property.type },
          property.format && FORMATMAPS[property.format],
          typeof property.ui === 'string' ? { widget: property.ui } : null,
          !property.format && !property.ui && Array.isArray(property.enum) && property.enum.length > 0 ? { widget: 'select' } : null,
          this._defUi,
          property.ui,
          uiSchema[uiKey],
        ) as SFUISchemaItemRun;
        // 继承父节点布局属性
        if (isHorizontal) {
          if (parentUiSchema.spanLabelFixed) {
            if (!ui.spanLabelFixed) {
              ui.spanLabelFixed = parentUiSchema.spanLabelFixed;
            }
          } else {
            if (!ui.spanLabel) ui.spanLabel = typeof parentUiSchema.spanLabel === 'undefined' ? 5 : parentUiSchema.spanLabel;
            if (!ui.spanControl) ui.spanControl = typeof parentUiSchema.spanControl === 'undefined' ? 19 : parentUiSchema.spanControl;
            if (!ui.offsetControl)
              ui.offsetControl = typeof parentUiSchema.offsetControl === 'undefined' ? null : parentUiSchema.offsetControl;
          }
        } else {
          ui.spanLabel = null;
          ui.spanControl = null;
          ui.offsetControl = null;
        }
        if (ui.widget === 'date' && ui.end != null) {
          const dateEndProperty = schema.properties![ui.end];
          if (dateEndProperty) {
            dateEndProperty.ui = {
              ...(dateEndProperty.ui as SFUISchemaItem),
              hidden: true,
            };
          } else {
            ui.end = null;
          }
        }
        if (ui.optionalHelp) {
          if (typeof ui.optionalHelp === 'string') {
            ui.optionalHelp = {
              text: ui.optionalHelp,
            } as SFOptionalHelp;
          }
          ui.optionalHelp = {
            text: '',
            icon: 'question-circle',
            placement: 'top',
            trigger: 'hover',
            mouseEnterDelay: 0.15,
            mouseLeaveDelay: 0.1,
            ...ui.optionalHelp,
          };
          if (!ui.optionalHelp.text) {
            ui.optionalHelp = undefined;
          }
        }
        ui.hidden = typeof ui.hidden === 'boolean' ? ui.hidden : false;
        if (ui.hidden === false && ui.acl && this.aclSrv && !this.aclSrv.can(ui.acl)) {
          ui.hidden = true;
        }

        uiRes[uiKey] = ui;
        delete property.ui;

        if (ui.hidden === true) {
          const idx = schema.required!.indexOf(key);
          if (idx !== -1) {
            schema.required!.splice(idx, 1);
          }
        }

        if (property.items) {
          uiRes[uiKey].$items = uiRes[uiKey].$items || {};
          inFn(property.items, property.items, (uiSchema[uiKey] || {}).$items || {}, ui, uiRes[uiKey].$items);
        }

        if (property.properties && Object.keys(property.properties).length) {
          inFn(property, schema, uiSchema[uiKey] || {}, ui, uiRes[uiKey]);
        }
      });
    };

    const inIfFn = (schema: SFSchema, ui: SFUISchemaItemRun) => {
      Object.keys(schema.properties!).forEach(key => {
        const property = schema.properties![key];
        const uiKey = `$${key}`;
        resolveIf(property, ui[uiKey]);
        if (property.items) {
          inIfFn(property.items, ui[uiKey].$items);
        }
        if (property.properties) {
          inIfFn(property, ui[uiKey]);
        }
      });
    };

    if (this.ui == null) this.ui = {};
    this._defUi = {
      onlyVisual: this.options.onlyVisual,
      size: this.options.size,
      liveValidate: this.liveValidate,
      firstVisual: this.firstVisual,
      ...this.options.ui,
      ..._schema.ui,
      ...this.ui['*'],
    };
    if (this.onlyVisual === true) {
      this._defUi.onlyVisual = true;
    }

    // root
    this._ui = { ...this._defUi };

    inFn(_schema, _schema, this.ui, this.ui, this._ui);

    // cond
    resolveIf(_schema, this._ui);
    inIfFn(_schema, this._ui);

    this._schema = _schema;

    di(this._ui, 'cover schema & ui', this._ui, _schema);
  }

  private coverButtonProperty() {
    this._btn = {
      render: { size: 'default' },
      ...this.locale,
      ...this.options.button,
      ...(this.button as SFButton),
    };
    const firstKey = Object.keys(this._ui).find(w => w.startsWith('$'));
    if (this.layout === 'horizontal') {
      const btnUi = firstKey ? this._ui[firstKey] : this._defUi;
      if (!this._btn.render!.grid) {
        this._btn.render!.grid = {
          offset: btnUi.spanLabel,
          span: btnUi.spanControl,
        };
      }
      // fixed label
      if (this._btn.render!.spanLabelFixed == null) {
        this._btn.render!.spanLabelFixed = btnUi.spanLabelFixed;
      }
      // 固定标签宽度时，若不指定样式，则默认居中
      if (!this._btn.render!.class && (typeof btnUi.spanLabelFixed === 'number' && btnUi.spanLabelFixed > 0)) {
        this._btn.render!.class = 'text-center';
      }
    } else {
      this._btn.render!.grid = {};
    }
    if (this._mode) {
      this.mode = this._mode;
    }

    di(this._ui, 'button property', this._btn);
  }

  ngOnInit(): void {
    this._inited = true;
    this.validator();
  }

  ngOnChanges(changes: { [P in keyof this]?: SimpleChange } & SimpleChanges): void {
    if (Object.keys(changes).length === 1 && (changes.loading || changes.disabled)) {
      this.cdr.detectChanges();
      return;
    }
    this.refreshSchema();
  }

  /** @internal */
  _addTpl(path: string, templateRef: TemplateRef<void>) {
    if (this._renders.has(path)) {
      console.warn(`Duplicate definition "${path}" custom widget`);
      return;
    }
    this._renders.set(path, templateRef);
    this.attachCustomRender();
  }

  private attachCustomRender() {
    this._renders.forEach((tpl, path) => {
      const property = this.rootProperty!.searchProperty(path);
      if (property == null) {
        return;
      }
      property.ui._render = tpl;
    });
  }

  validator(options: { emitError?: boolean; onlyRoot?: boolean } = { emitError: true, onlyRoot: true }): this {
    const fn = (property: FormProperty) => {
      if (property == null) return;
      property._runValidation();
      if (!(property instanceof PropertyGroup) || !property.properties) return;
      if (Array.isArray(property.properties)) {
        property.properties.forEach(p => fn(p));
      } else {
        Object.keys(property.properties).forEach(key => fn(property.properties![key]));
      }
    };
    if (options.onlyRoot) {
      this.rootProperty!._runValidation();
    } else {
      fn(this.rootProperty!);
    }

    const errors = this.rootProperty!.errors;
    this._valid = !(errors && errors.length);
    if (options.emitError && !this._valid) this.formError.emit(errors!);
    this.cdr.detectChanges();
    return this;
  }

  /**
   * 刷新 Schema，一般需要动态修改 Schema 某个值时可以方便调用
   */
  refreshSchema(newSchema?: SFSchema, newUI?: SFUISchema): this {
    if (newSchema) this.schema = newSchema;
    if (newUI) this.ui = newUI;

    if (!this.schema || typeof this.schema.properties === 'undefined') throw new Error(`Invalid Schema`);
    if (this.schema.ui && typeof this.schema.ui === 'string') throw new Error(`Don't support string with root ui property`);

    this.schema.type = 'object';

    this._formData = { ...this.formData };

    if (this._inited) this.terminator.destroy();

    this.cleanRootSub();

    this.coverProperty();
    this.coverButtonProperty();

    this.rootProperty = this.formPropertyFactory.createProperty(this._schema, this._ui, this.formData);
    this.attachCustomRender();
    this.cdr.detectChanges();
    this.reset();

    let isFirst = true;
    this.rootProperty.valueChanges.subscribe(value => {
      this._item = { ...this.formData, ...value };
      if (isFirst) {
        isFirst = false;
        return;
      }
      this.formChange.emit(this._item);
    });
    this.rootProperty.errorsChanges.subscribe(errors => {
      this._valid = !(errors && errors.length);
      this.formError.emit(errors!);
      this.cdr.detectChanges();
    });

    return this;
  }

  /**
   * 重置表单
   * @param [emit] 是否触发 `formReset` 事件，默认：`false`
   */
  reset(emit = false): this {
    this.rootProperty!.resetValue(this.formData, false);
    Promise.resolve().then(() => this.cdr.detectChanges());
    if (emit) {
      this.formReset.emit(this.value);
    }
    return this;
  }

  private cleanRootSub() {
    if (!this.rootProperty) return;
    this.rootProperty.errorsChanges.unsubscribe();
    this.rootProperty.valueChanges.unsubscribe();
  }

  ngOnDestroy(): void {
    this.cleanRootSub();
    this.terminator.destroy();
    const { unsubscribe$ } = this;
    unsubscribe$.next();
    unsubscribe$.complete();
  }
}
