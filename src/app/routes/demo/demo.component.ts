
import { Component } from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
    <nz-card>
    <div>
    <water-wave
        title="补贴资金剩余"
        [percent]="34"
        [height]="161"></water-wave>
        </div>
    </nz-card>
    `
})
export class DemoComponent {
}
