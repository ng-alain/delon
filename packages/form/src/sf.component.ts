import { Platform } from '@angular/cdk/platform';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  SimpleChange,
  SimpleChanges,
  TemplateRef,
  ViewEncapsulation
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { merge, Observable, Subject, filter, takeUntil } from 'rxjs';

import { ACLService } from '@delon/acl';
import { AlainI18NService, ALAIN_I18N_TOKEN, DelonLocaleService, LocaleData } from '@delon/theme';
import { AlainConfigService, AlainSFConfig } from '@delon/util/config';
import { BooleanInput, InputBoolean } from '@delon/util/decorator';
import { deepCopy } from '@delon/util/other';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import type { NzFormControlStatusType } from 'ng-zorro-antd/form';

import { mergeConfig } from './config';
import type { ErrorData } from './errors';
import type { SFButton, SFLayout, SFMode, SFValueChange } from './interface';
import { FormProperty, PropertyGroup } from './model/form.property';
import { FormPropertyFactory } from './model/form.property.factory';
import type { SFSchema } from './schema/index';
import type { SFOptionalHelp, SFUISchema, SFUISchemaItem, SFUISchemaItemRun } from './schema/ui';
import { TerminatorService } from './terminator.service';
import { di, resolveIfSchema, retrieveSchema } from './utils';
import { SchemaValidatorFactory } from './validator.factory';
import { WidgetFactory } from './widget.factory';

export function useFactory(
  schemaValidatorFactory: SchemaValidatorFactory,
  cogSrv: AlainConfigService
): FormPropertyFactory {
  return new FormPropertyFactory(schemaValidatorFactory, cogSrv);
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
      deps: [SchemaValidatorFactory, AlainConfigService]
    },
    TerminatorService
  ],
  host: {
    '[class.sf]': 'true',
    '[class.sf__inline]': `layout === 'inline'`,
    '[class.sf__horizontal]': `layout === 'horizontal'`,
    '[class.sf__search]': `mode === 'search'`,
    '[class.sf__edit]': `mode === 'edit'`,
    '[class.sf__no-error]': `onlyVisual`,
    '[class.sf__no-colon]': `noColon`,
    '[class.sf__compact]': `compact`
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class SFComponent implements OnInit, OnChanges, OnDestroy {
  static ngAcceptInputType_liveValidate: BooleanInput;
  static ngAcceptInputType_firstVisual: BooleanInput;
  static ngAcceptInputType_onlyVisual: BooleanInput;
  static ngAcceptInputType_compact: BooleanInput;
  static ngAcceptInputType_loading: BooleanInput;
  static ngAcceptInputType_disabled: BooleanInput;
  static ngAcceptInputType_noColon: BooleanInput;
  static ngAcceptInputType_cleanValue: BooleanInput;
  static ngAcceptInputType_delay: BooleanInput;

  private destroy$ = new Subject<void>();
  private _renders = new Map<string, TemplateRef<void>>();
  private _item!: Record<string, unknown>;
  private _valid = true;
  private _defUi!: SFUISchemaItem;
  readonly options: AlainSFConfig;

  _inited = false;
  locale: LocaleData = {};
  rootProperty: FormProperty | null = null;
  _formData!: Record<string, unknown>;
  _btn!: SFButton;
  _schema!: SFSchema;
  _ui!: SFUISchema;
  get btnGrid(): NzSafeAny {
    return this._btn.render!.grid;
  }

  // #region fields

  /** 表单布局，等同 `nzLayout`，默认：horizontal */
  @Input() layout: SFLayout = 'horizontal';
  /** JSON Schema */
  @Input() schema!: SFSchema;
  /** UI Schema */
  @Input() ui!: SFUISchema;
  /** 表单默认值 */
  @Input() formData?: Record<string, NzSafeAny>;
  /**
   * 按钮
   * - 值为 `null` 或 `undefined` 表示手动添加按钮，但保留容器
   * - 值为 `none` 表示手动添加按钮，且不保留容器
   * - 使用 `spanLabelFixed` 固定标签宽度时，若无 `render.class` 则默认为居中状态
   */
  @Input() button?: SFButton | 'none' | null = {};
  /**
   * 是否实时校验，默认：`true`
   * - `true` 每一次都校验
   * - `false` 提交时校验
   */
  @Input() @InputBoolean() liveValidate = true;
  /** 指定表单 `autocomplete` 值 */
  @Input() autocomplete: 'on' | 'off';
  /**
   * Whether to display error visuals immediately
   *
   * 是否立即显示错误视觉
   */
  @Input() @InputBoolean() firstVisual = true;
  /**
   * Whether to only display error visuals but not error text
   *
   * 是否只展示错误视觉不显示错误文本
   */
  @Input() @InputBoolean() onlyVisual = false;
  @Input() @InputBoolean() compact = false;
  /**
   * Form default mode, will force override `layout`, `firstVisual`, `liveValidate` parameters
   *
   * 表单预设模式，会强制覆盖 `layout`，`firstVisual`，`liveValidate` 参数
   */
  @Input()
  set mode(value: SFMode) {
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
  get mode(): SFMode {
    return this._mode;
  }
  private _mode!: SFMode;
  /**
   * Whether to load status，when `true` reset button is disabled status, submit button is loading status
   */
  @Input() @InputBoolean() loading = false;
  @Input() @InputBoolean() disabled = false;
  @Input() @InputBoolean() noColon = false;
  @Input() @InputBoolean() cleanValue = false;
  @Input() @InputBoolean() delay = false;
  @Output() readonly formValueChange = new EventEmitter<SFValueChange>();
  @Output() readonly formChange = new EventEmitter<Record<string, unknown>>();
  @Output() readonly formSubmit = new EventEmitter<Record<string, unknown>>();
  @Output() readonly formReset = new EventEmitter<Record<string, unknown>>();
  @Output() readonly formError = new EventEmitter<ErrorData[]>();
  // #endregion

  /**
   * Whether the form is valid
   *
   * 表单是否有效
   */
  get valid(): boolean {
    return this._valid;
  }

  /**
   * The value of the form
   *
   * 表单值
   */
  get value(): { [key: string]: NzSafeAny } {
    return this._item;
  }

  /**
   * Get form element property based on [path](https://ng-alain.com/form/qa#path)
   *
   * 根据[路径](https://ng-alain.com/form/qa#path)获取表单元素属性
   */
  getProperty(path: string): FormProperty | null | undefined {
    return this.rootProperty?.searchProperty(path);
  }

  /**
   * Get element value based on [path](https://ng-alain.com/form/qa#path)
   *
   * 根据[路径](https://ng-alain.com/form/qa#path)获取表单元素值
   */
  getValue(path: string): NzSafeAny {
    return this.getProperty(path)?.value;
  }

  /**
   * Set form element new value based on [path](https://ng-alain.com/form/qa#path)
   *
   * 根据[路径](https://ng-alain.com/form/qa#path)设置某个表单元素属性值
   */
  setValue(path: string, value: NzSafeAny): this {
    const item = this.getProperty(path);
    if (!item) {
      throw new Error(`Invalid path: ${path}`);
    }
    item.resetValue(value, false);
    return this;
  }

  /**
   * Update the feedback status of the widget
   *
   * 更新小部件的反馈状态
   *
   * ```ts
   * // Validate status of the widget
   * this.sf.updateFeedback('/name', 'validating');
   * // Clean validate status of the widget
   * this.sf.updateFeedback('/name');
   * ```
   */
  updateFeedback(path: string, status: NzFormControlStatusType = ''): this {
    this.getProperty(path)?.updateFeedback(status);
    return this;
  }

  onSubmit(e: Event): void {
    e.preventDefault();
    e.stopPropagation();
    if (!this.liveValidate) this.validator();
    if (!this.valid) return;
    this.formSubmit.emit(this.value);
  }

  constructor(
    private formPropertyFactory: FormPropertyFactory,
    private terminator: TerminatorService,
    private dom: DomSanitizer,
    private cdr: ChangeDetectorRef,
    private localeSrv: DelonLocaleService,
    @Optional() private aclSrv: ACLService,
    @Optional() @Inject(ALAIN_I18N_TOKEN) private i18nSrv: AlainI18NService,
    cogSrv: AlainConfigService,
    private platform: Platform
  ) {
    this.options = mergeConfig(cogSrv);
    this.liveValidate = this.options.liveValidate as boolean;
    this.firstVisual = this.options.firstVisual as boolean;
    this.autocomplete = this.options.autocomplete as 'on' | 'off';
    this.delay = this.options.delay as boolean;
    this.localeSrv.change.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.locale = this.localeSrv.getData('sf');
      if (this._inited) {
        this.validator({ emitError: false, onlyRoot: false });
        this.coverButtonProperty();
        this.cdr.markForCheck();
      }
    });
    const refSchemas: Array<Observable<NzSafeAny> | null> = [
      this.aclSrv ? this.aclSrv.change : null,
      this.i18nSrv ? this.i18nSrv.change : null
    ].filter(o => o != null);
    if (refSchemas.length > 0) {
      merge(...(refSchemas as Array<Observable<NzSafeAny>>))
        .pipe(
          filter(() => this._inited),
          takeUntil(this.destroy$)
        )
        .subscribe(() => this.refreshSchema());
    }
  }

  protected fanyi(key: string): string {
    return (this.i18nSrv ? this.i18nSrv.fanyi(key) : '') || key;
  }

  private inheritUI(ui: SFUISchemaItemRun): void {
    ['optionalHelp'].filter(key => !!this._defUi[key]).forEach(key => (ui[key] = { ...this._defUi[key], ...ui[key] }));
  }

  private coverProperty(): void {
    const isHorizontal = this.layout === 'horizontal';
    const _schema = deepCopy(this.schema);
    const { definitions } = _schema;

    const inFn = (
      schema: SFSchema,
      _parentSchema: SFSchema,
      uiSchema: SFUISchemaItemRun,
      parentUiSchema: SFUISchemaItemRun,
      uiRes: SFUISchemaItemRun
    ): void => {
      if (!Array.isArray(schema.required)) schema.required = [];

      Object.keys(schema.properties!).forEach(key => {
        const uiKey = `$${key}`;
        const property = retrieveSchema(schema.properties![key] as SFSchema, definitions);
        const curSetUi = deepCopy({
          ...(property.ui as SFUISchemaItem),
          ...uiSchema[uiKey]
        });
        const ui = deepCopy({
          widget: property.type,
          ...(property.format && (this.options.formatMap as NzSafeAny)[property.format]),
          ...(typeof property.ui === 'string' ? { widget: property.ui } : null),
          ...(!property.format && !property.ui && Array.isArray(property.enum) && property.enum.length > 0
            ? { widget: 'select' }
            : null),
          ...this._defUi,
          ...parentUiSchema,
          ...curSetUi
        }) as SFUISchemaItemRun;
        // 继承父节点布局属性
        if (isHorizontal) {
          if (parentUiSchema.spanLabelFixed) {
            if (!curSetUi.spanLabelFixed) {
              ui.spanLabelFixed = parentUiSchema.spanLabelFixed;
            }
          } else {
            if (!ui.spanLabel)
              ui.spanLabel = typeof parentUiSchema.spanLabel === 'undefined' ? 5 : parentUiSchema.spanLabel;
            if (!ui.spanControl)
              ui.spanControl = typeof parentUiSchema.spanControl === 'undefined' ? 19 : parentUiSchema.spanControl;
            if (!ui.offsetControl)
              ui.offsetControl =
                typeof parentUiSchema.offsetControl === 'undefined' ? null : parentUiSchema.offsetControl;
          }
        } else {
          ui.spanLabel = null;
          ui.spanControl = null;
          ui.offsetControl = null;
        }
        // 内联强制清理 `grid` 参数
        if (this.layout === 'inline') {
          delete ui.grid;
        }
        // 非水平布局强制清理 `spanLabelFixed` 值
        if (this.layout !== 'horizontal') {
          ui.spanLabelFixed = null;
        }
        // 当指定标签为固定宽度时无须指定 `spanLabel`，`spanControl`
        if (ui.spanLabelFixed != null && ui.spanLabelFixed > 0) {
          ui.spanLabel = null;
          ui.spanControl = null;
        }
        if (ui.widget === 'date' && ui.end != null) {
          const dateEndProperty = schema.properties![ui.end];
          if (dateEndProperty) {
            dateEndProperty.ui = {
              ...(dateEndProperty.ui as SFUISchemaItem),
              widget: ui.widget,
              hidden: true
            };
          } else {
            ui.end = null;
          }
        }
        this.inheritUI(ui);
        if (ui.optionalHelp) {
          if (typeof ui.optionalHelp === 'string') {
            ui.optionalHelp = {
              text: ui.optionalHelp
            } as SFOptionalHelp;
          }
          const oh = (ui.optionalHelp = {
            text: '',
            icon: 'question-circle',
            placement: 'top',
            trigger: 'hover',
            mouseEnterDelay: 0.15,
            mouseLeaveDelay: 0.1,
            ...ui.optionalHelp
          });
          if (oh.i18n) {
            oh.text = this.fanyi(oh.i18n);
          }
          if (!oh.text) {
            ui.optionalHelp = undefined;
          }
        }
        if (ui.i18n) {
          property.title = this.fanyi(ui.i18n);
        }
        if (ui.descriptionI18n) {
          property.description = this.fanyi(ui.descriptionI18n);
        }
        if (property.description) {
          ui._description = this.dom.bypassSecurityTrustHtml(property.description);
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
          const uiSchemaInArr = (uiSchema[uiKey] || {}).$items || {};
          ui.$items = {
            ...(property.items.ui as SFUISchemaItem),
            ...uiSchemaInArr[uiKey],
            ...ui.$items
          };
          inFn(property.items, property.items, uiSchemaInArr, ui.$items, ui.$items);
        }

        if (property.properties && Object.keys(property.properties).length) {
          inFn(property, schema, uiSchema[uiKey] || {}, ui, ui);
        }
      });
    };

    if (this.ui == null) this.ui = {};
    this._defUi = {
      onlyVisual: this.options.onlyVisual,
      size: this.options.size,
      liveValidate: this.liveValidate,
      ...this.options.ui,
      ...(_schema as NzSafeAny).ui,
      ...this.ui['*']
    };
    if (this.onlyVisual === true) {
      this._defUi.onlyVisual = true;
    }
    // 内联强制清理 `grid` 参数
    if (this.layout === 'inline') {
      delete this._defUi.grid;
    }

    // root
    this._ui = { ...this._defUi };

    inFn(_schema, _schema, this.ui, this.ui, this._ui);

    // cond
    resolveIfSchema(_schema, this._ui);

    this._schema = _schema;
    delete _schema.ui;

    di(this._ui, 'cover schema & ui', this._ui, _schema);
  }

  private coverButtonProperty(): void {
    this._btn = {
      render: { size: 'default' },
      ...this.locale,
      ...this.options.button,
      ...(this.button as SFButton)
    };
    const firstKey = Object.keys(this._ui).find(w => w.startsWith('$'));
    const btnRender = this._btn.render!;
    if (this.layout === 'horizontal') {
      const btnUi = firstKey ? this._ui[firstKey] : this._defUi;
      if (!btnRender.grid) {
        btnRender.grid = {
          offset: btnUi.spanLabel,
          span: btnUi.spanControl
        };
      }
      // fixed label
      if (btnRender.spanLabelFixed == null) {
        btnRender.spanLabelFixed = btnUi.spanLabelFixed;
      }
      // 固定标签宽度时，若不指定样式，则默认居中
      if (!btnRender.class && typeof btnUi.spanLabelFixed === 'number' && btnUi.spanLabelFixed > 0) {
        btnRender.class = 'text-center';
      }
    } else {
      btnRender.grid = {};
    }
    if (this._mode) {
      this.mode = this._mode;
    }

    di(this._ui, 'button property', this._btn);
  }

  ngOnInit(): void {
    if (!this.platform.isBrowser) {
      return;
    }
    this.validator();
    this._inited = true;
  }

  ngOnChanges(changes: { [P in keyof this]?: SimpleChange } & SimpleChanges): void {
    if (!this.platform.isBrowser) {
      return;
    }
    const ingoreRender = ['disabled', 'loading'];
    if (Object.keys(changes).every(key => ingoreRender.includes(key))) {
      this.cdr.detectChanges();
      return;
    }
    if (!this.delay) {
      this.refreshSchema();
    }
  }

  /** @internal */
  _addTpl(path: string, templateRef: TemplateRef<void>): void {
    if (!this._inited) {
      return;
    }
    if (this._renders.has(path)) {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        console.warn(`Duplicate definition "${path}" custom widget`);
      }
      return;
    }
    this._renders.set(path, templateRef);
    this.attachCustomRender();
  }

  private attachCustomRender(): void {
    this._renders.forEach((tpl, path) => {
      const property = this.rootProperty?.searchProperty(path);
      if (property == null) {
        return;
      }
      property.ui._render = tpl;
    });
  }

  /**
   * Validator the form is valid
   *
   * 校验表单是否有效
   * - `emitError` 当表单无效时是否触发 `formError` 事件，默认：`true`
   * - `onlyRoot` 只对根进行检验，不进行向下逐个递归，根已经包含整个 Json Schema，默认：`true`
   */
  validator(options: { emitError?: boolean; onlyRoot?: boolean } = { emitError: true, onlyRoot: true }): boolean {
    if (this.rootProperty == null || !this.platform.isBrowser) {
      return false;
    }
    const fn = (property: FormProperty): void => {
      property._runValidation();
      if (!(property instanceof PropertyGroup) || !property.properties) return;
      if (Array.isArray(property.properties)) {
        property.properties.forEach(p => fn(p));
      } else {
        Object.keys(property.properties).forEach(key =>
          fn((property.properties as { [key: string]: FormProperty })[key])
        );
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
    return this._valid;
  }

  /**
   * Refresh the form Schema, when specifying `newSchema` means to replace the current Schema
   *
   * 刷新 Schema，当指定 `newSchema` 表示替换当前的 Schema
   *
   * 可以针对某个表单元素进行刷新，例如：
   * ```
   * // 获取某个元素
   * const statusProperty = this.sf.getProperty('/status')!;
   * // 重置 `schema` 或 `ui` 参数
   * statusProperty.schema.enum = ['1', '2', '3'];
   * // 调用 `reset` 重置初始值
   * statusProperty.widget.reset('2');
   * ```
   */
  refreshSchema(newSchema?: SFSchema, newUI?: SFUISchema): this {
    if (!this.platform.isBrowser) {
      return this;
    }
    if (newSchema) this.schema = newSchema;
    if (newUI) this.ui = newUI;

    if (!this.schema || typeof this.schema.properties === 'undefined') throw new Error(`Invalid Schema`);
    if (this.schema.ui && typeof this.schema.ui === 'string')
      throw new Error(`Don't support string with root ui property`);

    this.schema.type = 'object';

    this._formData = { ...this.formData };

    if (this._inited) this.terminator.destroy();

    this.cleanRootSub();

    this.coverProperty();
    this.coverButtonProperty();

    this.rootProperty = this.formPropertyFactory.createProperty(this._schema, this._ui, this.formData!);
    this.attachCustomRender();
    this.cdr.detectChanges();
    this.reset();

    let isFirst = true;
    this.rootProperty.valueChanges.subscribe(res => {
      this._item = { ...(this.cleanValue ? null : this.formData), ...res.value };
      if (isFirst) {
        isFirst = false;
        return;
      }
      this.formChange.emit(this._item);
      this.formValueChange.emit({ value: this._item, path: res.path, pathValue: res.pathValue });
    });
    this.rootProperty.errorsChanges.subscribe(errors => {
      this._valid = !(errors && errors.length);
      this.formError.emit(errors!);
      this.cdr.detectChanges();
    });

    return this;
  }

  /**
   * Reset form
   *
   * 重置表单
   *
   * @param [emit] 是否触发 `formReset` 事件，默认：`false`
   */
  reset(emit: boolean = false): this {
    if (this.rootProperty == null || !this.platform.isBrowser) {
      return this;
    }
    this.rootProperty.resetValue(this.formData, false);
    Promise.resolve().then(() => this.cdr.detectChanges());
    if (emit) {
      this.formReset.emit(this.value);
    }
    return this;
  }

  private cleanRootSub(): void {
    if (!this.rootProperty) return;
    this.rootProperty.errorsChanges.unsubscribe();
    this.rootProperty.valueChanges.unsubscribe();
  }

  ngOnDestroy(): void {
    this.cleanRootSub();
    this.terminator.destroy();
    const { destroy$ } = this;
    destroy$.next();
    destroy$.complete();
  }
}
