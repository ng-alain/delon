import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalHelper } from '@delon/theme';

@Component({
    selector: 'login',
    template: `
    <a (click)="to()">to</a>
    `
})
export class LoginComponent {
    constructor(private router: Router, private modalHelper: ModalHelper) {
        modalHelper.removeAll();
    }

    to() {
        this.router.navigateByUrl('/');
    }
}
