import { Component, ViewEncapsulation, TemplateRef, Input, ContentChild } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
    selector: 'chart-card',
    template: `
    <nz-card [nzBodyStyle]="{padding: '20px 24px 8px 24px'}" [nzBordered]="bordered">
        <nz-spin [nzSpinning]="loading">
            <div class="chart-card">
                <div class="chart-top">
                    <div class="avatar"><ng-container *ngIf="_avatar; else _avatarTpl">{{ _avatar }}</ng-container></div>
                    <div class="meta-wrap">
                        <div class="meta">
                            <span class="title" *ngIf="_title; else _titleTpl">{{ _title }}</span>
                            <span class="action" *ngIf="_action || _actionTpl">
                                <ng-container *ngIf="_action; else _actionTpl">{{ _action }}</ng-container>
                            </span>
                        </div>
                        <p *ngIf="total" class="total" [innerHTML]="total"></p>
                    </div>
                </div>
                <div class="desc" [ngStyle]="{'height':_height}">
                    <div [ngClass]="{'fixed': !!_orgHeight }">
                        <ng-content></ng-content>
                    </div>
                </div>
                <div class="footer" *ngIf="_footer || _footerTpl">
                    <ng-container *ngIf="_footer; else _footerTpl">{{ _footer }}</ng-container>
                </div>
            </div>
        </nz-spin>
    </nz-card>
    `,
    styleUrls: [ './card.less' ]
})
export class ChartCardComponent {

    // region fields

    /** 是否显示边框 */
    @Input()
    get bordered() { return this._bordered; }
    set bordered(value: any) {
        this._bordered = coerceBooleanProperty(value);
    }
    private _bordered = false;

    _avatar = '';
    _avatarTpl: TemplateRef<any>;
    @Input()
    set avatar(value: string | TemplateRef<any>) {
        if (value instanceof TemplateRef)
            this._avatarTpl = value;
        else
            this._avatar = value;
    }

    _title = '';
    _titleTpl: TemplateRef<any>;
    @Input()
    set title(value: string | TemplateRef<any>) {
        if (value instanceof TemplateRef)
            this._titleTpl = value;
        else
            this._title = value;
    }

    _action = '';
    _actionTpl: TemplateRef<any>;
    @Input()
    set action(value: string | TemplateRef<any>) {
        if (value instanceof TemplateRef)
            this._actionTpl = value;
        else
            this._action = value;
    }

    @Input() total = '';

    _height = 'auto';
    _orgHeight: any;
    @Input()
    set contentHeight(value: number | string) {
        this._orgHeight = value;
        this._height = typeof value === 'number' ? this._height = `${value}px` : value;
    }

    _footer = '';
    _footerTpl: TemplateRef<any>;
    @Input()
    set footer(value: string | TemplateRef<any>) {
        if (value instanceof TemplateRef)
            this._footerTpl = value;
        else
            this._footer = value;
    }

    /** 是否显示Loading */
    @Input()
    get loading() { return this._loading; }
    set loading(value: any) {
        this._loading = coerceBooleanProperty(value);
    }
    private _loading = false;

    // endregion

}
