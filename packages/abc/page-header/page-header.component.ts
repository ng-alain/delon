import { Component, Input, TemplateRef, ContentChild, OnInit, OnChanges, Inject, Optional, SimpleChange, SimpleChanges, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { MenuService, ALAIN_I18N_TOKEN, AlainI18NService } from '@delon/theme';

import { AdPageHeaderConfig } from './page-header.config';
import { isEmpty } from '../utils/check';

@Component({
    selector: 'page-header',
    template: `
    <ng-container *ngIf="!breadcrumb; else breadcrumb">
        <nz-breadcrumb *ngIf="paths && paths.length > 0">
            <nz-breadcrumb-item *ngFor="let i of paths">
                <ng-container *ngIf="i.link"><a [routerLink]="i.link">{{i.title}}</a></ng-container>
                <ng-container *ngIf="!i.link">{{i.title}}</ng-container>
            </nz-breadcrumb-item>
        </nz-breadcrumb>
    </ng-container>
    <div class="detail">
        <div *ngIf="logo" class="logo"><ng-template [ngTemplateOutlet]="logo"></ng-template></div>
        <div class="main">
            <div class="row">
                <h1 *ngIf="title" class="title">{{title}}</h1>
                <div *ngIf="action" class="action"><ng-template [ngTemplateOutlet]="action"></ng-template></div>
            </div>
            <div class="row">
                <div class="desc" (cdkObserveContent)="checkContent()" #conTpl><ng-content></ng-content><ng-template [ngTemplateOutlet]="content"></ng-template></div>
                <div *ngIf="extra" class="extra"><ng-template [ngTemplateOutlet]="extra"></ng-template></div>
            </div>
        </div>
    </div>
    <ng-template [ngTemplateOutlet]="tab"></ng-template>
    `,
    host: {
        '[class.content__title]': 'true',
        '[class.ad-page-header]': 'true'
    },
    preserveWhitespaces: false
})
export class PageHeaderComponent implements OnInit, OnChanges, AfterViewInit {

    @ViewChild('conTpl') conTpl: ElementRef;

    // region fields

    @Input() title: string;

    @Input() home: string;

    @Input() home_link: string;

    @Input() home_i18n: string;

    /**
     * 自动生成导航，以当前路由从主菜单中定位
     */
    @Input()
    get autoBreadcrumb() { return this._autoBreadcrumb; }
    set autoBreadcrumb(value: any) {
        this._autoBreadcrumb = coerceBooleanProperty(value);
    }
    private _autoBreadcrumb = true;

    paths: any[] = [];

    @ContentChild('breadcrumb') breadcrumb: TemplateRef<any>;

    @ContentChild('logo') logo: TemplateRef<any>;

    @ContentChild('action') action: TemplateRef<any>;

    @ContentChild('content') content: TemplateRef<any>;

    @ContentChild('extra') extra: TemplateRef<any>;

    @ContentChild('tab') tab: TemplateRef<any>;

    // endregion

    constructor(
        cog: AdPageHeaderConfig,
        private renderer: Renderer2,
        private route: Router,
        @Optional() private menuSrv: MenuService,
        @Optional() @Inject(ALAIN_I18N_TOKEN) private i18nSrv: AlainI18NService
    ) {
        Object.assign(this, cog);
    }

    genBreadcrumb() {
        if (this.breadcrumb || !this.autoBreadcrumb || !this.menuSrv) return;
        const menus = this.menuSrv.getPathByUrl(this.route.url);
        if (menus.length <= 0) return ;
        const paths: any[] = [];
        menus.forEach(item => {
            if (typeof item.hideInBreadcrumb !== 'undefined' && item.hideInBreadcrumb) return;
            let title = item.text;
            if (item.i18n && this.i18nSrv) title = this.i18nSrv.fanyi(item.i18n);
            paths.push({ title, link: item.link && [ item.link ] });
        });
        // add home
        if (this.home) {
            paths.splice(0, 0, {
                title: (this.home_i18n && this.i18nSrv && this.i18nSrv.fanyi(this.home_i18n)) || this.home,
                link: [ this.home_link ]
            });
        }
        this.paths = paths;
    }

    checkContent() {
        if (isEmpty(this.conTpl.nativeElement)) {
            this.renderer.setAttribute(this.conTpl.nativeElement, 'hidden', '');
        } else {
            this.renderer.removeAttribute(this.conTpl.nativeElement, 'hidden');
        }
    }

    ngOnInit() {
        this.genBreadcrumb();
    }

    ngAfterViewInit(): void {
        this.checkContent();
    }

    ngOnChanges(changes: { [P in keyof this]?: SimpleChange } & SimpleChanges): void {
        if (changes.autoBreadcrumb && !changes.autoBreadcrumb.firstChange)
            this.genBreadcrumb();
    }
}
