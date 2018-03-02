import { Component } from '@angular/core';
import { ModalHelper } from '@delon/theme';
import { DemoModalComponent } from './modal.component';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
    constructor(private modalHelper: ModalHelper) {}
    open() {
        this.modalHelper.open(DemoModalComponent).subscribe((res: any) => {
            console.log('modal subscribe', res);
        });
    }
}
