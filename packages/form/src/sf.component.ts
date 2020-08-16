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
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ACLService } from '@delon/acl';
import { AlainI18NService, ALAIN_I18N_TOKEN, DelonLocaleService, LocaleData } from '@delon/theme';
import { AlainConfigService, AlainSFConfig, BooleanInput, deepCopy, InputBoolean } from '@delon/util';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { merge, Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { mergeConfig } from './config';
import { ErrorData } from './errors';
import { SFButton, SFLayout, SFValueChange } from './interface';
import { FormProperty, PropertyGroup } from './model/form.property';
import { FormPropertyFactory } from './model/form.property.factory';
import { SFSchema } from './schema/index';
import { SFOptionalHelp, SFUISchema, SFUISchemaItem, SFUISchemaItemRun } from './schema/ui';
import { TerminatorService } from './terminator.service';
import { di, resolveIf, retrieveSchema } from './utils';
import { SchemaValidatorFactory } from './validator.factory';
import { WidgetFactory } from './widget.factory';

export function useFactory(schemaValidatorFactory: SchemaValidatorFactory, cogSrv: AlainConfigService): FormPropertyFactory {
  return new FormPropertyFactory(schemaValidatorFactory, cogSrv);
}

export type SFMode = 'default' | 'search' | 'edit';

@Component({
  selector: 'sf, [sf]',
  exportAs: 'sf',
  templateUrl: './sf.component.html',
  providers: [
    WidgetFactory,
    {
      provide: FormPropertyFactory,
      useFactory,
      deps: [SchemaValidatorFactory, AlainConfigService],
    },
    TerminatorService,
  ],
  host: {
    '[class.sf]': 'true',
    '[class.sf__inline]': `layout === 'inline'`,
    '[class.sf__horizontal]': `layout === 'horizontal'`,
    '[class.sf__search]': `mode === 'search'`,
    '[class.sf__edit]': `mode === 'edit'`,
    '[class.sf__no-error]': `onlyVisual`,
    '[class.sf__no-colon]': `noColon`,
    '[class.sf__compact]': `compact`,
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
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

  private unsubscribe$ = new Subject<void>();
  private _renders = new Map<string, TemplateRef<void>>();
  private _item: {};
  private _valid = true;
  private _defUi: SFUISchemaItem;
  readonly options: AlainSFConfig;

  _inited = false;
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
  @Input() @InputBoolean() compact = false;
  /** 表单模式 */
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
  private _mode: SFMode;
  /**
   * Whether to load status，when `true` reset button is disabled status, submit button is loading status
   */
  @Input() @InputBoolean() loading = false;
  @Input() @InputBoolean() disabled = false;
  @Input() @InputBoolean() noColon = false;
  @Input() @InputBoolean() cleanValue = false;
  @Output() readonly formValueChange = new EventEmitter<SFValueChange>();
  @Output() readonly formChange = new EventEmitter<{}>();
  @Output() readonly formSubmit = new EventEmitter<{}>();
  @Output() readonly formReset = new EventEmitter<{}>();
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
    private platform: Platform,
  ) {
    this.options = mergeConfig(cogSrv);
    this.liveValidate = this.options.liveValidate as boolean;
    this.firstVisual = this.options.firstVisual as boolean;
    this.autocomplete = this.options.autocomplete as 'on' | 'off';
    this.localeSrv.change.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      this.locale = this.localeSrv.getData('sf');
      if (this._inited) {
        this.validator({ emitError: false, onlyRoot: false });
        this.coverButtonProperty();
        this.cdr.markForCheck();
      }
    });
    const refSchemas: Array<Observable<any> | null> = [
      this.aclSrv ? this.aclSrv.change : null,
      this.i18nSrv ? this.i18nSrv.change : null,
    ].filter(o => o != null);
    if (refSchemas.length > 0) {
      merge(...(refSchemas as Array<Observable<any>>))
        .pipe(
          filter(() => this._inited),
          takeUntil(this.unsubscribe$),
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
      uiRes: SFUISchemaItemRun,
    ) => {
      if (!Array.isArray(schema.required)) schema.required = [];

      Object.keys(schema.properties!).forEach(key => {
        const uiKey = `$${key}`;
        const property = retrieveSchema(schema.properties![key] as SFSchema, definitions);
        const ui = {
          widget: property.type,
          ...(property.format && (this.options.formatMap as NzSafeAny)[property.format]),
          ...(typeof property.ui === 'string' ? { widget: property.ui } : null),
          ...(!property.format && !property.ui && Array.isArray(property.enum) && property.enum.length > 0 ? { widget: 'select' } : null),
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
              hidden: true,
            };
          } else {
            ui.end = null;
          }
        }
        this.inheritUI(ui);
        if (ui.optionalHelp) {
          if (typeof ui.optionalHelp === 'string') {
            ui.optionalHelp = {
              text: ui.optionalHelp,
            } as SFOptionalHelp;
          }
          const oh = (ui.optionalHelp = {
            text: '',
            icon: 'question-circle',
            placement: 'top',
            trigger: 'hover',
            mouseEnterDelay: 0.15,
            mouseLeaveDelay: 0.1,
            ...ui.optionalHelp,
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
          property._description = this.dom.bypassSecurityTrustHtml(property.description);
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
            ...ui.$items,
          };
          inFn(property.items, property.items, uiSchemaInArr, ui.$items, ui.$items);
        }

        if (property.properties && Object.keys(property.properties).length) {
          inFn(property, schema, uiSchema[uiKey] || {}, ui, ui);
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
    // 内联强制清理 `grid` 参数
    if (this.layout === 'inline') {
      delete this._defUi.grid;
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

  private coverButtonProperty(): void {
    this._btn = {
      render: { size: 'default' },
      ...this.locale,
      ...this.options.button,
      ...(this.button as SFButton),
    };
    const firstKey = Object.keys(this._ui).find(w => w.startsWith('$'));
    const btnRender = this._btn.render!;
    if (this.layout === 'horizontal') {
      const btnUi = firstKey ? this._ui[firstKey] : this._defUi;
      if (!btnRender.grid) {
        btnRender.grid = {
          offset: btnUi.spanLabel,
          span: btnUi.spanControl,
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
  _addTpl(path: string, templateRef: TemplateRef<void>): void {
    if (this._renders.has(path)) {
      console.warn(`Duplicate definition "${path}" custom widget`);
      return;
    }
    this._renders.set(path, templateRef);
    this.attachCustomRender();
  }

  private attachCustomRender(): void {
    this._renders.forEach((tpl, path) => {
      const property = this.rootProperty!.searchProperty(path);
      if (property == null) {
        return;
      }
      property.ui._render = tpl;
    });
  }

  validator(options: { emitError?: boolean; onlyRoot?: boolean } = { emitError: true, onlyRoot: true }): this {
    if (!this.platform.isBrowser) {
      return this;
    }
    const fn = (property: FormProperty) => {
      property._runValidation();
      if (!(property instanceof PropertyGroup) || !property.properties) return;
      if (Array.isArray(property.properties)) {
        property.properties.forEach(p => fn(p));
      } else {
        Object.keys(property.properties).forEach(key => fn((property.properties as { [key: string]: FormProperty })[key]));
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
   * 刷新整个 Schema，当指定 `newSchema` 表示替换当前的 Schema
   *
   * 若希望对某个表单元素进行刷新请使用：
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
   * 重置表单
   * @param [emit] 是否触发 `formReset` 事件，默认：`false`
   */
  reset(emit: boolean = false): this {
    if (!this.platform.isBrowser) {
      return this;
    }
    this.rootProperty!.resetValue(this.formData, false);
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
    const { unsubscribe$ } = this;
    unsubscribe$.next();
    unsubscribe$.complete();
  }
}
