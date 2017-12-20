import { Component, Input } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
    selector: 'mini-progress',
    template: `
    <nz-tooltip [nzTitle]="'目标值: ' + target + '%'">
        <div nz-tooltip class="target" [ngStyle]="{'left.%': target}">
            <span [ngStyle]="{'background-color': color}"></span>
            <span [ngStyle]="{'background-color': color}"></span>
        </div>
    </nz-tooltip>
    <div class="progress-wrap">
        <div class="progress" [ngStyle]="{'background-color': color, 'width.%': percent, 'height.px':strokeWidth}"></div>
    </div>
    `,
    styleUrls: [ './mini-progress.less' ]
})
export class MiniProgressComponent {

    // region: fields

    @Input() color = '#1890FF';

    @Input()
    get target() { return this._target; }
    set target(value: any) {
        const a = coerceNumberProperty(value);
        this._target = Math.min(Math.max(coerceNumberProperty(value), 0), 100);
    }
    private _target: number;

    @Input()
    get strokeWidth() { return this._strokeWidth; }
    set strokeWidth(value: any) {
        this._strokeWidth = coerceNumberProperty(value);
    }
    private _strokeWidth: number;

    @Input()
    get percent() { return this._percent; }
    set percent(value: any) {
        this._percent = Math.min(Math.max(coerceNumberProperty(value), 0), 100);
    }
    private _percent: number;

    // endregion
}
