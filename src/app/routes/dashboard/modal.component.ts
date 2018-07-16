import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'demo-modal',
    template: `
    <p>modal</p>
    <button (click)="change()">change</button>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br>
    `
})
export class DemoModalComponent {
    constructor(private router: Router) {}

    change() {
        this.router.navigate([ '/login' ]);
    }
}
