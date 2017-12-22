import { Component } from '@angular/core';
import { ReuseTabService } from '@delon/abc';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
    value = 'dashboard';

    constructor(private srv: ReuseTabService) {}

    ngOnInit() {
        this.srv.title = 'db';
    }
}
