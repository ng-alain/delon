import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
import { deepCopy, InputBoolean } from '@delon/util';
import { Subscription } from 'rxjs';

import { DelonFormConfig } from './config';
import { ErrorData } from './errors';
import { SFButton } from './interface';
import { FormProperty } from './model/form.property';
import { FormPropertyFactory } from './model/form.property.factory';
import { SFSchema } from './schema/index';
import { SFUISchema, SFUISchemaItem, SFUISchemaItemRun } from './schema/ui';
import { TerminatorService } from './terminator.service';
import { di, resolveIf, retrieveSchema, FORMATMAPS } from './utils';
import { SchemaValidatorFactory } from './validator.factory';
import { WidgetFactory } from './widget.factory';

export function useFactory(schemaValidatorFactory: SchemaValidatorFactory, options: DelonFormConfig) {
  return new FormPropertyFactory(schemaValidatorFactory, options);
}

@Component({
  selector: 'sf, [sf]',
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
    '[class.sf-search]': `mode === 'search'`,
    '[class.sf-edit]': `mode === 'edit'`,
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SFComponent implements OnInit, OnChanges, OnDestroy {
  private i18n$: Subscription;
  // tslint:disable-next-line:no-any
  locale: any = {};
  private _renders = new Map<string, TemplateRef<void>>();
  private _item: {};
  private _valid = true;
  private _defUi: SFUISchemaItem;
  private _inited = false;

  rootProperty: FormProperty = null;
  _formData: {};
  _btn: SFButton;
  _schema: SFSchema;
  _ui: SFUISchema;

  // #region fields

  /** 表单布局，等同 `nzLayout`，默认：horizontal */
  @Input() layout: 'horizontal' | 'vertical' | 'inline' = 'horizontal';
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
  /** 表单模式 */
  @Input()
  set mode(value: 'default' | 'search' | 'edit') {
    switch (value) {
      case 'search':
        this.layout = 'inline';
        this.firstVisual = false;
        this.liveValidate = false;
        if (this._btn) this._btn.submit = this._btn.search;
        break;
      case 'edit':
        this.layout = 'horizontal';
        this.firstVisual = false;
        this.liveValidate = true;
        if (this._btn) this._btn.submit = this._btn.edit;
        break;
    }
    this._mode = value;
  }
  get mode() {
    return this._mode;
  }
  private _mode: 'default' | 'search' | 'edit';

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
  // tslint:disable-next-line:no-any
  get value(): { [key: string]: any } {
    return this._item;
  }

  /**
   * 根据路径获取表单元素属性
   */
  getProperty(path: string): FormProperty {
    return this.rootProperty.searchProperty(path);
  }

  /**
   * 根据路径获取表单元素当前值
   */
  // tslint:disable-next-line:no-any
  getValue(path: string): any {
    return this.getProperty(path)!.value;
  }

  /**
   * 根据路径设置某个表单元素属性值
   * @param path 路径
   * @param value 新值
   */
  // tslint:disable-next-line:no-any
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
    private cdr: ChangeDetectorRef,
    private i18n: DelonLocaleService,
  ) {
    this.liveValidate = options.liveValidate;
    this.firstVisual = options.firstVisual;
    this.autocomplete = options.autocomplete;
    this.i18n$ = this.i18n.change.subscribe(() => {
      this.locale = this.i18n.getData('sf');
      if (this._inited) {
        this.coverButtonProperty();
        this.cdr.detectChanges();
      }
    });
  }

  private coverProperty() {
    const isHorizontal = this.layout === 'horizontal';
    const _schema = deepCopy(this.schema);
    const { definitions } = _schema;

    const inFn = (
      schema: SFSchema,
      parentSchema: SFSchema,
      uiSchema: SFUISchemaItemRun,
      parentUiSchema: SFUISchemaItemRun,
      uiRes: SFUISchemaItemRun,
    ) => {
      Object.keys(schema.properties).forEach(key => {
        const uiKey = `$${key}`;
        const property = retrieveSchema(
          schema.properties[key] as SFSchema,
          definitions,
        );
        const ui = {
          widget: property.type,
          ...(property.format && FORMATMAPS[property.format]),
          ...(typeof property.ui === 'string' ? { widget: property.ui } : null),
          ...(!property.ui && Array.isArray(property.enum) && property.enum.length > 0 ? { widget: 'select' } : null),
          ...this._defUi,
          ...(property.ui as SFUISchemaItem),
          ...uiSchema[uiKey],
        } as SFUISchemaItemRun;
        // 继承父节点布局属性
        if (isHorizontal) {
          if (parentUiSchema.spanLabelFixed) {
            if (!ui.spanLabelFixed) {
              ui.spanLabelFixed = parentUiSchema.spanLabelFixed;
            }
          } else {
            if (!ui.spanLabel)
              ui.spanLabel =
                typeof parentUiSchema.spanLabel === 'undefined'
                  ? 5
                  : parentUiSchema.spanLabel;
            if (!ui.spanControl)
              ui.spanControl =
                typeof parentUiSchema.spanControl === 'undefined'
                  ? 19
                  : parentUiSchema.spanControl;
            if (!ui.offsetControl)
              ui.offsetControl =
                typeof parentUiSchema.offsetControl === 'undefined'
                  ? null
                  : parentUiSchema.offsetControl;
          }
        } else {
          ui.spanLabel = null;
          ui.spanControl = null;
          ui.offsetControl = null;
        }
        if (ui.widget === 'date' && ui.end != null && parentSchema) {
          const dateEndProperty = parentSchema.properties[ui.end];
          if (dateEndProperty) {
            dateEndProperty.ui = {
              ...(dateEndProperty.ui as SFUISchemaItem),
              hidden: true,
            };
          } else {
            ui.end = '';
          }
        }
        ui.hidden = typeof ui.hidden === 'boolean' ? ui.hidden : false;

        uiRes[uiKey] = ui;
        delete property.ui;

        if (property.items) {
          uiRes[uiKey].$items = uiRes[uiKey].$items || {};
          inFn(
            property.items,
            property.items,
            (uiSchema[uiKey] || {}).$items || {},
            ui,
            uiRes[uiKey].$items,
          );
        }

        if (property.properties && Object.keys(property.properties).length) {
          inFn(property, schema, uiSchema[uiKey] || {}, ui, uiRes[uiKey]);
        }
      });
    };

    const inIfFn = (schema: SFSchema, ui: SFUISchemaItemRun) => {
      Object.keys(schema.properties).forEach(key => {
        const property = schema.properties[key];
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

    // root
    this._ui = { ...this._defUi };

    inFn(_schema, _schema, this.ui, this.ui, this._ui);

    // cond
    resolveIf(_schema, this._ui);
    inIfFn(_schema, this._ui);

    this._schema = _schema;

    if (this._ui.debug) {
      di('cover schema & ui', this._ui, _schema);
    }
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
      if (!this._btn.render.grid) {
        this._btn.render.grid = {
          offset: btnUi.spanLabel,
          span: btnUi.spanControl,
        };
      }
      // fixed label
      if (this._btn.render.spanLabelFixed == null) {
        this._btn.render.spanLabelFixed = btnUi.spanLabelFixed;
      }
      // 固定标签宽度时，若不指定样式，则默认居中
      if (
        !this._btn.render.class &&
        (typeof btnUi.spanLabelFixed === 'number' && btnUi.spanLabelFixed > 0)
      ) {
        this._btn.render.class = 'text-center';
      }
    } else {
      this._btn.render.grid = {};
    }
    if (this._mode) {
      this.mode = this._mode;
    }
    if (this._ui.debug) di('button property', this._btn);
  }

  ngOnInit(): void {
    this._inited = true;
    this.validator();
  }

  ngOnChanges(): void {
    this.refreshSchema();
  }

  /** @internal */
  _addTpl(path: string, templateRef: TemplateRef<void>) {
    const property = this.rootProperty.searchProperty(path);
    if (!property) {
      console.warn(`未找到路径：${path}`);
      return;
    }
    if (this._renders.has(path)) {
      console.warn(`已经存在相同自定义路径：${path}`);
      return;
    }
    this._renders.set(path, templateRef);
    const pui: SFUISchemaItemRun = this.rootProperty.searchProperty(path).ui;
    pui._render = templateRef;
  }

  private attachCustomRender() {
    this._renders.forEach((tpl, path) => {
      const pui: SFUISchemaItemRun = this.rootProperty.searchProperty(path).ui;
      if (!pui._render) pui._render = tpl;
    });
  }

  validator(): this {
    this.rootProperty._runValidation();
    const errors = this.rootProperty.errors;
    this._valid = !(errors && errors.length);
    if (!this._valid) this.formError.emit(errors);
    this.cdr.detectChanges();
    return this;
  }

  /**
   * 刷新 Schema，一般需要动态修改 Schema 某个值时可以方便调用
   */
  refreshSchema(newSchema?: SFSchema, newUI?: SFUISchema): this {
    if (newSchema) this.schema = newSchema;
    if (newUI) this.ui = newUI;

    if (!this.schema || typeof this.schema.properties === 'undefined')
      throw new Error(`Invalid Schema`);
    if (this.schema.ui && typeof this.schema.ui === 'string')
      throw new Error(`Don't support string with root ui property`);

    this.schema.type = 'object';

    this._formData = { ...this.formData };

    if (this._inited) this.terminator.destroy();

    this.cleanRootSub();

    this.coverProperty();
    this.coverButtonProperty();

    this.rootProperty = this.formPropertyFactory.createProperty(
      this._schema,
      this._ui,
      this.formData,
    );
    this.attachCustomRender();

    this.rootProperty.valueChanges.subscribe(value => {
      this._item = { ...this.formData, ...value };
      this.formChange.emit(this._item);
    });
    this.rootProperty.errorsChanges.subscribe(errors => {
      this._valid = !(errors && errors.length);
      this.formError.emit(errors);
      this.cdr.detectChanges();
    });

    return this.reset();
  }

  /**
   * 重置表单
   * @param [emit] 是否触发 `formReset` 事件，默认：`false`
   */
  reset(emit = false): this {
    this.rootProperty.resetValue(this.formData, false);
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
    this.i18n$.unsubscribe();
  }
}
