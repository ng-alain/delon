import { Component, Input, ElementRef, TemplateRef, ContentChild, OnInit, AfterViewInit, Inject, Renderer2, Optional } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { MenuService, ALAIN_I18N_TOKEN, AlainI18NService } from '@delon/theme';
import { ProHeaderConfig } from './pro-header.config';

@Component({
    selector: 'pro-header',
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
                <div *ngIf="content" class="desc"><ng-template [ngTemplateOutlet]="content"></ng-template></div>
                <div *ngIf="extra" class="extra"><ng-template [ngTemplateOutlet]="extra"></ng-template></div>
            </div>
        </div>
    </div>
    <ng-content></ng-content>
    <ng-template [ngTemplateOutlet]="tab"></ng-template>
    `,
    styleUrls: [ './pro-header.less' ]
})
export class ProHeaderComponent implements OnInit {

    // region fields

    @Input() title: string;

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
        private cog: ProHeaderConfig,
        private route: Router,
        @Optional() private menuSrv: MenuService,
        @Optional() @Inject(ALAIN_I18N_TOKEN) private i18nSrv: AlainI18NService,
        private el: ElementRef, private renderer: Renderer2) {}

    private genBreadcrumb() {
        if (this.breadcrumb || !this.autoBreadcrumb || !this.menuSrv) return;
        const menus = this.menuSrv.getPathByUrl(this.route.url);
        if (menus.length <= 0) return ;
        const paths: any[] = [];
        menus.forEach(item => {
            if (typeof item.hideInBreadcrumb !== 'undefined' && item.hideInBreadcrumb) return;
            let title;
            if (item.translate && this.i18nSrv) title = this.i18nSrv.fanyi(item.translate);
            paths.push({ title: title || item.text, link: item.link && [ item.link ] });
        });
        // add home
        if (this.cog.home) {
            paths.splice(0, 0, {
                title: (this.cog.home_i18n && this.i18nSrv && this.i18nSrv.fanyi(this.cog.home_i18n)) || this.cog.home,
                link: [ this.cog.home_link ]
            });
        }
        this.paths = paths;
    }

    ngOnInit() {
        (this.el.nativeElement as HTMLElement).classList.add('content__title', 'pro-header');
        this.genBreadcrumb();
    }
}
