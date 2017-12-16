import { Component, Input } from '@angular/core';
import { NzModalSubject } from 'ng-zorro-antd';

@Component({
    selector: `app-demo-modal`,
    template: `
    <div class="modal-header">
        <div class="modal-title">Custom component</div>
    </div>
    <p>参数：{{record | json}}</p>
    <div class="modal-footer">
        <button nz-button [nzType]="'default'" [nzSize]="'large'" (click)="cancel()">
            Cancel
        </button>
        <button nz-button [nzType]="'primary'" [nzSize]="'large'" (click)="ok()">
            OK
        </button>
    </div>
    `
})
export class DemoModalComponent {
    @Input() record: any;

    constructor(private subject: NzModalSubject) {}

    ok() {
        this.subject.next(`new time: ${+new Date}`);
        this.cancel();
    }

    cancel() {
        this.subject.destroy();
    }
}
