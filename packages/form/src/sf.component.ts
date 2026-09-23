import { Platform } from '@angular/cdk/platform';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  Injector,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChange,
  SimpleChanges,
  TemplateRef,
  ViewEncapsulation,
  booleanAttribute,
  inject,
  input,
  linkedSignal,
  model,
  output,
  signal
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DomSanitizer } from '@angular/platform-browser';
import { merge, filter, skip } from 'rxjs';

import { ACLService } from '@delon/acl';
import { ALAIN_I18N_TOKEN, DelonLocaleService, LocaleData } from '@delon/theme';
import { AlainConfigService, AlainSFConfig } from '@delon/util/config';
import { deepCopy } from '@delon/util/other';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import type { NzFormControlStatusType } from 'ng-zorro-antd/form';

import { mergeConfig } from './config';
import { SF_SEQ } from './const';
import type { ErrorData } from './errors';
import type { SFButton, SFLayout, SFMode, SFValue, SFValueChange } from './interface';
import { FormProperty, PropertyGroup } from './model/form.property';
import { FormPropertyFactory } from './model/form.property.factory';
import type { SFSchema } from './schema/index';
import type { SFOptionalHelp, SFUISchema, SFUISchemaItem, SFUISchemaItemRun } from './schema/ui';
import { TerminatorService } from './terminator.service';
import { di, resolveIfSchema, retrieveSchema } from './utils';
import { SchemaValidatorFactory } from './validator.factory';
import { WidgetFactory } from './widget.factory';

export function useFactory(
  injector: Injector,
  schemaValidatorFactory: SchemaValidatorFactory,
  cogSrv: AlainConfigService
): FormPropertyFactory {
  return new FormPropertyFactory(injector, schemaValidatorFactory, cogSrv);
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
      deps: [Injector, SchemaValidatorFactory, AlainConfigService]
    },
    TerminatorService
  ],
  host: {
    class: 'sf',
    '[class.sf__inline]': `layout() === 'inline'`,
    '[class.sf__horizontal]': `layout() === 'horizontal'`,
    '[class.sf__search]': `mode() === 'search'`,
    '[class.sf__edit]': `mode() === 'edit'`,
    '[class.sf__no-error]': `onlyVisual()`,
    '[class.sf__no-colon]': `noColon()`,
    '[class.sf__compact]': `compact()`,
    '[class.sf__collapse]': `expandable() && !expanded()`
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false
})
export class SFComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  private readonly formPropertyFactory = inject(FormPropertyFactory);
  private readonly terminator = inject(TerminatorService);
  private readonly dom = inject(DomSanitizer);
  private readonly localeSrv = inject(DelonLocaleService);
  private readonly aclSrv = inject(ACLService);
  private readonly i18nSrv = inject(ALAIN_I18N_TOKEN);
  private readonly platform = inject(Platform);
  private readonly cogSrv = inject(AlainConfigService);
  readonly options: AlainSFConfig = mergeConfig(this.cogSrv);

  private _renders = new Map<string, TemplateRef<void>>();
  private _item!: Record<string, unknown>;
  private _defUi!: SFUISchemaItem;

  _inited = false;

  /**
   * @internal 首次渲染是否已完成
   *
   * 用于 `Widget.ngAfterViewInit` 里「不显示首次校验视觉」的门控。
   * 不能用 `_inited`：它在 `ngOnInit` 里就置真，而 widget 的 `errorsChanges` 订阅
   * 是在 `BehaviorSubject` 上**订阅即回放**的——若那时 `_inited` 已为真，抑制就失效。
   * `ngAfterViewInit` 晚于子 widget 的订阅建立，才是正确时机。
   */
  _rendered = false;

  /** @internal 静默窗口标记，见 `_runSilently()` */
  private _silent = false;

  /**
   * @internal 在静默窗口内执行 `fn`：期间的值变更不触发 `formChange` / `formValueChange`
   *
   * widget 在自身 `ngAfterViewInit` 里推入初值时用它——那是初值同步（含格式化 `schema.default`），
   * 不是用户变更，否则页面加载就会被当成一次改动。
   */
  _runSilently(fn: () => void): void {
    const prev = this._silent;
    this._silent = true;
    try {
      fn();
    } finally {
      this._silent = prev;
    }
  }
  _formData!: Record<string, unknown>;
  _schema!: SFSchema;
  _ui!: SFUISchema;
  readonly expandable = input(false, { transform: booleanAttribute });
  readonly expanded = model(false);

  // #region 响应式状态
  //
  // 以下状态被 `<sf>` 模板直接读取。采用 signal 内核 + 同名 getter/setter，
  // 使外部写法（`sf.locale` / `sf.rootProperty` / `sf.valid` / `sf._btn`）保持有效，
  // 同时在模板中读取时自动建立依赖。

  private readonly _valid$ = signal(true);
  /** @internal 内部可写 */
  get _valid(): boolean {
    return this._valid$();
  }
  set _valid(value: boolean) {
    this._valid$.set(value);
  }
  get valid(): boolean {
    return this._valid$();
  }

  private readonly _locale$ = signal<LocaleData>({});
  get locale(): LocaleData {
    return this._locale$();
  }
  set locale(value: LocaleData) {
    this._locale$.set(value);
  }

  private readonly _rootProperty$ = signal<FormProperty | null>(null);
  get rootProperty(): FormProperty | null {
    return this._rootProperty$();
  }
  set rootProperty(value: FormProperty | null) {
    this._rootProperty$.set(value);
  }

  private readonly _btn$ = signal<SFButton | null>(null);
  /** @internal */
  get _btn(): SFButton {
    return this._btn$()!;
  }
  set _btn(value: SFButton) {
    this._btn$.set(value);
  }

  /** @internal 是否存在 collapse: true 的字段 */
  protected _hasCollapse = signal(false);
  get btnGrid(): NzSafeAny {
    return this._btn.render!.grid;
  }
  // #endregion

  // #region fields

  /** 表单布局，等同 `nzLayout`，默认：horizontal */
  readonly layoutInput = input<SFLayout | undefined>(undefined, { alias: 'layout' });
  readonly layout = linkedSignal<SFLayout | undefined, SFLayout>({
    source: () => this.layoutInput(),
    computation: (next, prev) => next ?? prev?.value ?? 'horizontal'
  });
  /** JSON Schema */
  readonly schemaInput = input<SFSchema | undefined>(undefined, { alias: 'schema' });
  /**
   * 输入侧的有效 schema：`refreshSchema(newSchema)` 可在内部替换它；
   * 渲染用的仍是 `coverProperty()` 产出的 `_schema`
   */
  private readonly _schemaValue$ = linkedSignal<SFSchema | undefined, SFSchema | undefined>({
    source: () => this.schemaInput(),
    computation: next => next
  });
  /** UI Schema */
  readonly uiInput = input<SFUISchema | undefined>(undefined, { alias: 'ui' });
  /**
   * 输入侧的有效 ui：`refreshSchema(_, newUI)` 可在内部替换它；
   * 渲染用的仍是 `coverProperty()` 产出的 `_ui`
   */
  private readonly _uiValue$ = linkedSignal<SFUISchema | undefined, SFUISchema | undefined>({
    source: () => this.uiInput(),
    computation: next => next
  });
  /** 表单默认值 */
  readonly formData = input<Record<string, NzSafeAny> | undefined>();
  /**
   * 按钮
   * - 值为 `null` 或 `undefined` 表示手动添加按钮，但保留容器
   * - 值为 `none` 表示手动添加按钮，且不保留容器
   * - 使用 `spanLabelFixed` 固定标签宽度时，若无 `render.class` 则默认为居中状态
   */
  readonly button = input<SFButton | 'none' | null | undefined>({});
  /**
   * 是否实时校验，默认：`true`
   * - `true` 每一次都校验
   * - `false` 提交时校验
   */
  readonly liveValidateInput = input<unknown>(undefined, { alias: 'liveValidate' });
  readonly liveValidate = linkedSignal<unknown, boolean>({
    source: () => this.liveValidateInput(),
    computation: (next, prev) =>
      next === undefined ? (prev?.value ?? Boolean(this.options.liveValidate)) : booleanAttribute(next)
  });
  /**
   * 指定表单 `autocomplete` 值
   *
   * 未绑定时回落到全局配置 `options.autocomplete`
   */
  readonly autocompleteInput = input<'on' | 'off' | undefined>(undefined, { alias: 'autocomplete' });
  readonly autocomplete = computed<'on' | 'off'>(
    () => this.autocompleteInput() ?? (this.options.autocomplete as 'on' | 'off')
  );
  /**
   * Whether to display error visuals immediately
   *
   * 是否立即显示错误视觉
   */
  readonly firstVisualInput = input<unknown>(undefined, { alias: 'firstVisual' });
  readonly firstVisual = linkedSignal<unknown, boolean>({
    source: () => this.firstVisualInput(),
    computation: (next, prev) =>
      next === undefined ? (prev?.value ?? Boolean(this.options.firstVisual)) : booleanAttribute(next)
  });
  /**
   * Whether to only display error visuals but not error text
   *
   * 是否只展示错误视觉不显示错误文本
   */
  readonly onlyVisual = input(false, { transform: booleanAttribute });
  readonly compact = input(false, { transform: booleanAttribute });
  /**
   * Form default mode, will force override `layout`, `firstVisual`, `liveValidate` parameters
   *
   * 表单预设模式，会强制覆盖 `layout`，`firstVisual`，`liveValidate` 参数
   */
  readonly mode = input<SFMode | undefined>(undefined);

  /** 预设模式的级联：输入变化时（`ngOnChanges`）与按钮重建后（`coverButtonProperty`）都要应用 */
  private _applyMode(mode: SFMode | undefined): void {
    switch (mode) {
      case 'search':
        this.layout.set('inline');
        this.firstVisual.set(false);
        this.liveValidate.set(false);
        if (this._btn) {
          this._btn.submit = this._btn.search;
        }
        break;
      case 'edit':
        this.layout.set('horizontal');
        this.firstVisual.set(false);
        this.liveValidate.set(true);
        if (this._btn) {
          this._btn.submit = this._btn.edit;
        }
        break;
    }
  }
  /**
   * Whether to load status，when `true` reset button is disabled status, submit button is loading status
   */
  readonly loading = input(false, { transform: booleanAttribute });
  readonly disabled = input(false, { transform: booleanAttribute });
  readonly noColon = input(false, { transform: booleanAttribute });
  readonly cleanValue = input(false, { transform: booleanAttribute });
  readonly delayInput = input<unknown>(undefined, { alias: 'delay' });
  readonly delay = linkedSignal<unknown, boolean>({
    source: () => this.delayInput(),
    computation: (next, prev) =>
      next === undefined ? (prev?.value ?? Boolean(this.options.delay)) : booleanAttribute(next)
  });
  readonly formValueChange = output<SFValueChange>();
  readonly formChange = output<Record<string, unknown>>();
  readonly formSubmit = output<Record<string, unknown>>();
  readonly formReset = output<Record<string, unknown>>();
  readonly formError = output<ErrorData[]>();
  // #endregion

  /**
   * Whether the form is valid
   *
   * 表单是否有效
   */
  /**
   * The value of the form
   *
   * 表单值
   */
  get value(): Record<string, NzSafeAny> {
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
   * Set form element new `disabled` based on [path](https://ng-alain.com/form/qa#path)
   *
   * 根据[路径](https://ng-alain.com/form/qa#path)设置某个表单元素 `disabled` 状态
   */
  setDisabled(path: string, status: boolean): this {
    const property = this.getProperty(path);
    if (!property) {
      throw new Error(`Invalid path: ${path}`);
    }
    property.schema.readOnly = status;
    return this;
  }

  /**
   * Set form element new `required` based on [path](https://ng-alain.com/form/qa#path)
   *
   * 根据[路径](https://ng-alain.com/form/qa#path)设置某个表单元素 `required` 状态
   */
  setRequired(path: string, status: boolean): this {
    const property = this.getProperty(path);
    if (!property) {
      throw new Error(`Invalid path: ${path}`);
    }

    const key = path.split(SF_SEQ).pop()!;
    const parentRequired = property.parent?.schema.required ?? [];
    const idx = parentRequired.findIndex(w => w === key);
    if (status) {
      if (idx === -1) parentRequired.push(key);
    } else {
      if (idx !== -1) parentRequired.splice(idx, 1);
    }
    // 就地 push/splice 后写回同一个引用时，代理按 `Object.is` 判定相等、不会通知，因此写入新数组
    property.parent!.schema.required = [...parentRequired];
    property.ui._required = status;
    this.validator({ onlyRoot: false });
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
    if (!this.liveValidate()) this.validator();
    if (!this.valid) return;
    this.formSubmit.emit(this.value);
  }

  constructor() {
    this.localeSrv.change.pipe(takeUntilDestroyed()).subscribe(() => {
      this.locale = this.localeSrv.getData('sf');
      if (this._inited) {
        this.validator({ emitError: false, onlyRoot: false });
        this.coverButtonProperty();
      }
    });
    merge(this.aclSrv.change, this.i18nSrv.change)
      .pipe(
        filter(() => this._inited),
        takeUntilDestroyed()
      )
      .subscribe(() => this.refreshSchema());
  }

  protected fanyi(key: string): string {
    return this.i18nSrv.fanyi(key) ?? key;
  }

  private inheritUI(ui: SFUISchemaItemRun): void {
    ['optionalHelp'].filter(key => !!this._defUi[key]).forEach(key => (ui[key] = { ...this._defUi[key], ...ui[key] }));
  }

  private coverProperty(): void {
    const isHorizontal = this.layout() === 'horizontal';
    const _schema = deepCopy(this._schemaValue$()!);
    const { definitions } = _schema;

    // 重置折叠检测状态
    this._hasCollapse.set(false);

    const inFn = (
      schema: SFSchema,
      _parentSchema: SFSchema,
      uiSchema: SFUISchemaItemRun,
      parentUiSchema: SFUISchemaItemRun,
      uiRes: SFUISchemaItemRun
    ): void => {
      if (!Array.isArray(schema.required)) schema.required = [];

      Object.keys(schema.properties!).forEach(key => {
        const uiKeyPrefix = '$';
        const uiKey = uiKeyPrefix + key;
        const property = retrieveSchema(schema.properties![key] as SFSchema, definitions);
        const curUi = {
          ...(property.ui as SFUISchemaItem),
          ...uiSchema[uiKey]
        };
        const ui = {
          ...this._defUi,
          ...parentUiSchema,
          // 忽略部分会引起呈现的属性
          visibleIf: undefined,
          hidden: undefined,
          optional: undefined,
          optionalHelp: undefined,
          widget: property.type,
          ...(property.format && (this.options.formatMap as NzSafeAny)[property.format]),
          ...(typeof property.ui === 'string' ? { widget: property.ui } : null),
          ...(!property.format && !property.ui && Array.isArray(property.enum) && property.enum.length > 0
            ? { widget: 'select' }
            : null),
          ...curUi
        } as SFUISchemaItemRun;
        Object.keys(ui)
          .filter(key => key.startsWith(uiKeyPrefix))
          .forEach(key => delete ui[key]);
        // 继承父节点布局属性
        if (isHorizontal) {
          if (parentUiSchema.spanLabelFixed) {
            if (!curUi.spanLabelFixed) {
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
        if (this.layout() === 'inline') {
          delete ui.grid;
        }
        // 非水平布局强制清理 `spanLabelFixed` 值
        if (this.layout() !== 'horizontal') {
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

        if (ui.collapse) this._hasCollapse.set(true);

        uiRes[uiKey] = ui;
        delete property.ui;

        if (ui.hidden === true) {
          const idx = schema.required!.indexOf(key);
          if (idx !== -1) {
            schema.required!.splice(idx, 1);
          }
        }

        if (property.items) {
          ui.$items = {
            ...(property.items.ui as SFUISchemaItem),
            ...uiSchema[uiKey],
            ...ui.$items
          };
          inFn(property.items, property.items, uiSchema[uiKey]?.$items ?? {}, ui.$items, ui.$items);
          delete property.items.ui;
        }

        if (property.properties && Object.keys(property.properties).length) {
          inFn(property, schema, uiSchema[uiKey] ?? {}, ui, ui);
        }
      });
    };

    if (this._uiValue$() == null) this._uiValue$.set({});
    this._defUi = {
      onlyVisual: this.options.onlyVisual,
      size: this.options.size,
      liveValidate: this.liveValidate(),
      ...this.options.ui,
      ...(_schema as NzSafeAny).ui,
      ...this._uiValue$()!['*']
    };
    if (this.onlyVisual() === true) {
      this._defUi.onlyVisual = true;
    }
    // 内联强制清理 `grid` 参数
    if (this.layout() === 'inline') {
      delete this._defUi.grid;
    }

    // root
    this._ui = { ...this._defUi };

    inFn(_schema, _schema, this._uiValue$()!, this._uiValue$()!, this._ui);

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
      ...(this.button() as SFButton)
    };
    const firstKey = Object.keys(this._ui).find(w => w.startsWith('$'));
    const btnRender = this._btn.render!;
    if (this.layout() === 'horizontal') {
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
    if (this.mode()) {
      this._applyMode(this.mode());
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

  ngAfterViewInit(): void {
    this._rendered = true;
  }

  ngOnChanges(changes: { [P in keyof this]?: SimpleChange } & SimpleChanges): void {
    if (!this.platform.isBrowser) {
      return;
    }
    // 级联与原先 setter 的时机一致（都早于模板检查）
    if (changes['mode']) {
      this._applyMode(this.mode());
    }
    // `disabled` / `loading` 只驱动各自的 signal 与模板，不需要重建 schema
    const ingoreRender = ['disabled', 'loading'];
    if (Object.keys(changes).every(key => ingoreRender.includes(key))) {
      return;
    }
    if (!this.delay()) {
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
        Object.keys(property.properties).forEach(key => fn((property.properties as Record<string, FormProperty>)[key]));
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
    if (newSchema) this._schemaValue$.set(newSchema);
    if (newUI) this._uiValue$.set(newUI);

    const schema = this._schemaValue$();
    if (!schema || typeof schema.properties === 'undefined') throw new Error(`Invalid Schema`);
    if (schema.ui && typeof schema.ui === 'string') throw new Error(`Don't support string with root ui property`);

    schema.type = 'object';

    this._formData = { ...this.formData() };

    if (this._inited) this.terminator.destroy();

    this.cleanRootSub();

    this.coverProperty();
    this.coverButtonProperty();

    this.rootProperty = this.formPropertyFactory.createProperty(this._schema, this._ui, this.formData()!);
    // 把 `cleanValue` 镜像到属性树：`reset()` 早于 widget 创建，模型层不能经 widget 读取它
    this.rootProperty._cleanValue = this.cleanValue();
    this.attachCustomRender();
    // 此处不需要额外的结构 CD，`reset()` 直接作用于属性树：
    //  ① `setErrors()` 的文案在 widget 缺失时回落到 `DelonLocaleService`；
    //  ② widget 在自身 `ngAfterViewInit` 里推入初值，那时 `ngOnInit` 已跑完；
    //  ③ 首次校验视觉由 `_rendered` 门控，不依赖 widget 的创建时机。
    this.reset();

    // `valueChanges` 是 `BehaviorSubject`，订阅时会回放当前值：先用它初始化 `_item`，
    // 再用 `skip(1)` 把这条回放排除掉——回放是初值，不是变更
    const rootProperty = this.rootProperty!;
    const toItem = (value: SFValue): Record<string, unknown> => ({
      ...(this.cleanValue() ? null : this.formData()),
      ...value
    });
    this._item = toItem(rootProperty.value);
    rootProperty.valueChanges.pipe(skip(1)).subscribe(res => {
      this._item = toItem(res.value);
      // 初值同步也是值变更，但它不是用户改的，见 `_runSilently()`
      if (this._silent) return;
      this.formChange.emit(this._item);
      this.formValueChange.emit({ value: this._item, path: res.path, pathValue: res.pathValue });
    });
    this.rootProperty.errorsChanges.subscribe(errors => {
      this._valid = !(errors && errors.length);
      this.formError.emit(errors!);
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
    this.rootProperty.resetValue(this.formData(), false);
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
  }
}
