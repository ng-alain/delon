import { Component, HostBinding, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
    selector: 'trend',
    template: `
    <ng-content></ng-content>
    <span *ngIf="flag" class="{{flag}}"><i class="anticon anticon-caret-{{flag}}"></i></span>
    `,
    styleUrls: [ './trend.less' ],
    // tslint:disable-next-line:use-host-property-decorator
    host: {
        '[class.grey]': '!colorful'
    }
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
