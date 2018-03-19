import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';

@Component({
    selector: 'login',
    template: `
    <a (click)="to()">to</a>
    `
})
export class LoginComponent {
    constructor(private router: Router, modalSrv: NzModalService) {
        modalSrv.closeAll();
    }

    to() {
        this.router.navigateByUrl('/');
    }
}
