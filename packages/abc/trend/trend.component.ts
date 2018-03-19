import { Component, HostBinding, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
    selector: 'trend',
    template: `
    <ng-content></ng-content>
    <span *ngIf="flag" class="{{flag}}"><i class="anticon anticon-caret-{{flag}}"></i></span>
    `,
    // tslint:disable-next-line:use-host-property-decorator
    host: {
        '[class.ad-trend]': 'true',
        '[class.grey]': '!colorful'
    },
    preserveWhitespaces: false
})
export class TrendComponent {

    /** 上升下降标识 */
    @Input() flag: 'up' | 'down';

    /** 是否彩色标记 */
    @Input()
    get colorful() { return this._colorful; }
    set colorful(value: any) {
        this._colorful = coerceBooleanProperty(value);
    }
    private _colorful = true;

}
