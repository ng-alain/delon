import { Component } from '@angular/core';
import { ReuseTabService } from '@delon/abc';

@Component({
    selector: 'app-jwt',
    templateUrl: './jwt.component.html'
})
export class DEMOJWTComponent {
    value = 'jwt';

    constructor(private srv: ReuseTabService) {}

    ngOnInit() {
        this.srv.title = 'jtw';
    }
}
