import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    template: `
    <a (click)="to()">to</a>
    `
})
export class LoginComponent {
    constructor(private router: Router) {}

    to() {
        this.router.navigateByUrl('/');
    }
}
