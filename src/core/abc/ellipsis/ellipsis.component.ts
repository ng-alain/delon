import { Component, Input, HostBinding, ViewEncapsulation } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
    selector: 'ellipsis',
    template: `<ng-content></ng-content>`,
    styleUrls: [ './ellipsis.less' ]
})
export class EllipsisComponent {

    /** 在按照行数截取下最大的行数，超过则截取省略 */
    @Input()
    @HostBinding('style.-webkit-line-clamp')
    get lines() { return this._lines; }
    set lines(value: any) {
        this._lines = coerceNumberProperty(value);
    }
    private _lines = 3;
}
