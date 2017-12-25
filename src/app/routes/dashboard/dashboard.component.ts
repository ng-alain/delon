import { Component, OnInit } from '@angular/core';
import { ReuseTabService } from '@delon/abc';
import { MenuService } from '@delon/theme';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    value = 'dashboard';

    constructor(private srv: ReuseTabService, private menuSrv: MenuService) {}

    ngOnInit() {
        this.srv.title = 'db';
        setTimeout(() => {
            this.menuSrv.add([
                { text: 'asdf' }
            ]);
        }, 1000 * 2);
    }
}
