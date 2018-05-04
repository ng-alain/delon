import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges, Input, SimpleChange, Output, EventEmitter, TemplateRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { DelonFormConfig } from './config';
import { di, retrieveSchema, FORMATMAPS, resolveIf } from './utils';
import { TerminatorService } from './terminator.service';
import { SFSchema } from './schema/index';
import { SFUISchema, SFUISchemaItem, SFRenderSchema, SFUISchemaItemRun } from './schema/ui';
import { FormProperty } from './model/form.property';
import { FormPropertyFactory } from './model/form.property.factory';
import { SchemaValidatorFactory } from './validator.factory';
import { WidgetFactory } from './widget.factory';
import { SFButton } from './interface';
import { ErrorData } from './errors';

export function useFactory(schemaValidatorFactory: any, options: DelonFormConfig) {
    return new FormPropertyFactory(schemaValidatorFactory, options);
}

@Component({
    selector: 'sf, [sf]',
    template: `
    <form nz-form [nzLayout]="layout" (submit)="onSubmit($event)" [attr.autocomplete]="autocomplete">
        <sf-item [formProperty]="rootProperty"></sf-item>
        <nz-form-item [ngClass]="_btn.render.class">
            <nz-col class="ant-form-item-control-wrapper"
                [nzSpan]="_btn.render.grid.span" [nzOffset]="_btn.render.grid.offset"
                [nzXs]="_btn.render.grid.xs" [nzSm]="_btn.render.grid.sm" [nzMd]="_btn.render.grid.md"
                [nzLg]="_btn.render.grid.lg" [nzXl]="_btn.render.grid.xl">
                <div class="ant-form-item-control">
                    <ng-container *ngIf="button">
                        <button type="submit" nz-button [nzType]="_btn.submit_type" [disabled]="liveValidate && !valid">{{_btn.submit}}</button>
                        <button *ngIf="_btn.reset" (click)="reset()" type="button" nz-button [nzType]="_btn.reset_type">{{_btn.reset}}</button>
                    </ng-container>
                    <ng-content></ng-content>
                </div>
            </nz-col>
        </nz-form-item>
    </form>`,
    providers: [
        WidgetFactory,
        {
            provide: FormPropertyFactory,
            useFactory: useFactory,
            deps: [SchemaValidatorFactory, DelonFormConfig]
        },
        TerminatorService
    ],
    host: {
        '[class.delon-sf]': 'true'
    },
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SFComponent implements OnInit, OnChanges, OnDestroy {

    rootProperty: FormProperty = null;
    _formData: any;
    _btn: SFButton;
    _ui: SFUISchema;
    private _item: any;
    private _valid = true;
    private _defUi: SFUISchemaItem;
    private inited = false;

    // region: fields

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
     * - 指定 `null` 或 `undefined` 表示手动添加按钮
     * - 使用固定 `label` 标签宽度时，若无 `render.class` 则默认为居中状态
     */
    @Input() button: SFButton = {};

    /**
     * 是否实时校验，默认：`true`
     * - `true` 每一次都校验
     * - `false` 提交时校验
     */
    @Input()
    get liveValidate() { return this._liveValidate; }
    set liveValidate(value: any) {
        this._liveValidate = coerceBooleanProperty(value);
    }
    private _liveValidate = true;

    /** 指定表单 `autocomplete` 值 */
    @Input() autocomplete: 'on' | 'off';

    /** 立即显示错误视觉 */
    @Input()
    get firstVisual() { return this._firstVisual; }
    set firstVisual(value: any) {
        this._firstVisual = coerceBooleanProperty(value);
    }
    private _firstVisual = true;

    /** 数据变更时回调 */
    @Output() formChange = new EventEmitter<{}>();

    /** 提交表单时回调 */
    @Output() formSubmit = new EventEmitter<{}>();

    /** 重置表单时回调 */
    @Output() formReset = new EventEmitter<{}>();

    /** 表单校验结果回调 */
    @Output() formError = new EventEmitter<ErrorData[]>();

    // endregion

    get valid(): boolean {
        return this._valid;
    }

    get item(): any {
        return this._item;
    }

    onSubmit(e: Event) {
        e.preventDefault();
        e.stopPropagation();
        if (!this.liveValidate) this.validator();
        if (!this.valid) return;
        this.formSubmit.emit(this.item);
    }

    constructor(
        private formPropertyFactory: FormPropertyFactory,
        private terminator: TerminatorService,
        private options: DelonFormConfig,
        private cd: ChangeDetectorRef
    ) {
        this.liveValidate = options.liveValidate;
        this.firstVisual = options.firstVisual;
        this.autocomplete = options.autocomplete;
    }

    private coverProperty() {
        const isHorizontal = this.layout === 'horizontal';
        const { definitions } = this.schema;

        const inFn = (schema: SFSchema, parentSchema: SFSchema, uiSchema: SFUISchemaItemRun, parentUiSchema: SFUISchemaItemRun, uiRes: SFUISchemaItemRun) => {
            Object.keys(schema.properties).forEach(key => {
                const uiKey = `$${key}`;
                const property = retrieveSchema(schema.properties[key] as SFSchema, definitions);
                const ui = Object.assign(
                    { widget: property.type },
                    property.format && FORMATMAPS[property.format],
                    typeof property.ui === 'string' ? { widget: property.ui } : null,
                    !property.ui && Array.isArray(property.enum) && property.enum.length > 0 ? { widget: 'select' } : null,
                    this._defUi,
                    property.ui,
                    uiSchema[uiKey]
                ) as SFUISchemaItemRun;
                // 继承父节点布局属性
                if (isHorizontal) {
                    if (parentUiSchema.spanLabelFixed) {
                        if (!ui.spanLabelFixed) ui.spanLabelFixed = parentUiSchema.spanLabelFixed;
                    } else {
                        if (!ui.spanLabel) ui.spanLabel = typeof parentUiSchema.spanLabel === 'undefined' ? 5 : parentUiSchema.spanLabel;
                        if (!ui.spanControl) ui.spanControl = typeof parentUiSchema.spanControl === 'undefined' ? 19 : parentUiSchema.spanControl;
                        if (!ui.offsetControl) ui.offsetControl = typeof parentUiSchema.offsetControl === 'undefined' ? null : parentUiSchema.offsetControl;
                    }
                } else {
                    ui.spanLabel = null;
                    ui.spanControl = null;
                    ui.offsetControl = null;
                }

                uiRes[uiKey] = ui;
                delete property.ui;

                if (property.items) {
                    uiRes[uiKey]['$items'] = uiRes[uiKey]['$items'] || {};
                    inFn(property.items, property.items, (uiSchema[uiKey] || {})['$items'] || {}, ui, uiRes[uiKey]['$items']);
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
        this._defUi = Object.assign(<SFUISchemaItem>{
            onlyVisual: this.options.onlyVisual,
            size: this.options.size,
            liveValidate: this.liveValidate,
            firstVisual: this.firstVisual
        }, this.schema.ui, this.ui['*']);
        delete this.ui['*'];

        // root
        this._ui = Object.assign({}, this._defUi);

        inFn(this.schema, this.schema, this.ui, this.ui, this._ui);

        // cond
        resolveIf(this.schema, this._ui);
        inIfFn(this.schema, this._ui);

        if (this._ui.debug) di('cover schema & ui', this._ui, this.schema);
    }

    private coverButtonProperty() {
        this._btn = Object.assign({ render: {} }, this.options.button, this.button);
        const firstKey = Object.keys(this._ui).find(w => w.startsWith('$'));
        if (this.layout === 'horizontal') {
            const btnUi = firstKey ? this._ui[firstKey] : this._defUi;
            if (!this._btn.render.grid) {
                this._btn.render.grid = {
                    offset: btnUi.spanLabel,
                    span: btnUi.spanControl
                };
            }
            // 固定标签宽度时，若不指定样式，则默认居中
            if (!this._btn.render.class && (typeof btnUi.spanLabelFixed === 'number' && btnUi.spanLabelFixed > 0)) {
                this._btn.render.class = 'text-center';
            }
        } else {
            this._btn.render.grid = {};
        }

        if (this._ui.debug) di('button property', this._btn);
    }

    ngOnInit(): void {
        this.inited = true;
        this.validator();
    }

    ngOnChanges(changes: { [P in keyof this]?: SimpleChange } & SimpleChanges): void {
        this.refreshSchema();
    }

    /** @internal */
    _addTpl(path: string, templateRef: TemplateRef<{}>) {
        const property = this.rootProperty.searchProperty(path);
        if (!property) {
            console.warn(`未找到路径 ${path}`);
            return ;
        }
        (property.ui as SFUISchemaItemRun)._render = templateRef;
    }

    private validator() {
        this.rootProperty._runValidation();
        const errors = this.rootProperty.errors;
        this._valid = !(errors && errors.length);
        this.formError.emit(errors);
        this.cd.detectChanges();
    }

    /**
     * 刷新 Schema，一般需要动态修改 Schema 某个值时可以方便调用
     */
    refreshSchema(newSchema?: SFSchema, newUI?: SFUISchema) {

        if (newSchema) this.schema = newSchema;
        if (newUI) this.ui = newUI;

        if (!this.schema || typeof this.schema.properties === 'undefined') throw new Error(`Invalid Schema`);
        if (this.schema.ui && typeof this.schema.ui === 'string') throw new Error(`Don't support string with root ui property`);

        this.schema.type = 'object';

        this._formData = { ...this.formData };

        if (this.inited) this.terminator.destroy();

        this.coverProperty();
        this.coverButtonProperty();

        if (this._ui.debug) {
            di('schema', this.schema);
        }

        this.rootProperty = this.formPropertyFactory.createProperty(this.schema, this._ui, this.formData);

        this.rootProperty.valueChanges.subscribe(value => {
            this._item = Object.assign({}, this.formData, value);
            this.formChange.emit(this._item);
        });
        this.rootProperty.errorsChanges.subscribe(errors => {
            this._valid = !(errors && errors.length);
            this.formError.emit(errors);
            this.cd.detectChanges();
        });

        this.reset();
    }

    /** 重置表单 */
    reset() {
        this.rootProperty.resetValue(this.formData, false);
        Promise.resolve().then(() => this.cd.detectChanges());
        this.formReset.emit(this.item);
    }

    ngOnDestroy(): void {
        this.terminator.destroy();
    }
}
