import { Component, Input, ElementRef, OnChanges, SimpleChanges, Renderer2, SimpleChange } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
    selector: 'standard-form-row',
    template: `
    <div *ngIf="title" class="label"><span>{{title}}</span></div>
    <div class="control"><ng-content></ng-content></div>
    `,
    styleUrls: [ './standard-form-row.less' ]
})
export class StandardFormRowComponent implements OnChanges {

    @Input() title: string;

    /** 是否整行 */
    @Input()
    get block() { return this._block; }
    set block(value: any) {
        this._block = coerceBooleanProperty(value);
    }
    private _block: boolean;

    /** 是否最后一行 */
    @Input()
    get last() { return this._last; }
    set last(value: any) {
        this._last = coerceBooleanProperty(value);
    }
    private _last: boolean;

    /** 是否网格布局 */
    @Input()
    get grid() { return this._grid; }
    set grid(value: any) {
        this._grid = coerceBooleanProperty(value);
    }
    private _grid: boolean;

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    _classMap: string[] = [];
    setClass() {
        this._classMap.forEach(cls => this.renderer.removeClass(this.el.nativeElement, cls));

        this._classMap = [ `standard-form-row` ];
        if (this.block) this._classMap.push('block');
        if (this.grid) this._classMap.push('grid');
        if (this.last) this._classMap.push('last');

        this._classMap.forEach(v => this.renderer.addClass(this.el.nativeElement, v));
    }

    ngOnChanges(changes: { [P in keyof this]?: SimpleChange } & SimpleChanges): void {
        this.setClass();
    }
}
