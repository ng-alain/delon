import { Component, Input, ViewEncapsulation, ElementRef, Renderer2, OnChanges, SimpleChanges, OnInit, ContentChild, TemplateRef, ContentChildren, QueryList, SimpleChange } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { DescListItemComponent } from './desc-list-item.component';

@Component({
    selector: 'desc-list',
    template: `
    <div *ngIf="_title || _titleTpl" class="title">
        <ng-container *ngIf="_title; else _titleTpl">{{_title}}</ng-container>
    </div>
    <div nz-row [nzGutter]="gutter">
        <div nz-col [nzXs]="_xs" [nzSm]="_sm" [nzMd]="_md" *ngFor="let i of _items">
            <ng-template [ngTemplateOutlet]="i.tpl"></ng-template>
        </div>
    </div>
    `,
    styleUrls: [ './desc-list.less' ]
})
export class DescListComponent implements OnChanges, OnInit {

    // region fields

    _title = '';
    _titleTpl: TemplateRef<any>;
    @Input()
    set title(value: string | TemplateRef<any>) {
        if (value instanceof TemplateRef)
            this._titleTpl = value;
        else
            this._title = value;
    }

    @Input() size: 'small' | 'large';

    /** 列表项间距，单位为 `px` */
    @Input()
    get gutter() { return this._gutter; }
    set gutter(value: any) {
        this._gutter = coerceNumberProperty(value);
    }
    private _gutter = 32;

    @Input() layout: 'horizontal' | 'vertical' = 'horizontal';

    _xs = 24;
    _sm = 12;
    _md = 8;
    /** 指定信息最多分几列展示，最终一行几列由 col 配置结合响应式规则决定 */
    @Input()
    get col() { return this._col; }
    set col(value: any) {
        this._col = coerceNumberProperty(value);
    }
    private _col = 3;

    _classMap: string[] = [];
    setClass() {
        this._classMap.forEach(cls => this.renderer.removeClass(this.el.nativeElement, cls));

        this._classMap = [ 'desc-list', this.layout ];
        if (this.size) this._classMap.push('desc-list-' + this.size);

        this._classMap.forEach(cls => this.renderer.addClass(this.el.nativeElement, cls));
    }

    setResponsive() {
        const responsive = ({
            1: { xs: 24 },
            2: { xs: 24, sm: 12 },
            3: { xs: 24, sm: 12, md: 8 },
            4: { xs: 24, sm: 12, md: 6 },
        })[this.col > 4 ? 4 : this.col];

        this._xs = responsive.xs;
        this._sm = responsive.sm;
        this._md = responsive.md;
    }

    @ContentChildren(DescListItemComponent) _items: QueryList<DescListItemComponent>;

    // endregion

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        this.setClass();
    }

    ngOnChanges(changes: { [P in keyof this]?: SimpleChange } & SimpleChanges): void {
        if (changes.size && !changes.size.firstChange)
            this.setClass();
        if (changes.col)
            this.setResponsive();
    }
}
