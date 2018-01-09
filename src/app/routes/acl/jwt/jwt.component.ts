import { Component } from '@angular/core';
import { ReuseTabService } from '@delon/abc';
import { Router } from '@angular/router';

@Component({
    selector: 'app-jwt',
    templateUrl: './jwt.component.html'
})
export class DEMOJWTComponent {
    value = 'jwt';

    constructor(private srv: ReuseTabService, private router: Router) {}

    ngOnInit() {
        this.srv.title = 'jtw';
    }

    clear() {
        this.srv.clear();
    }

    remove() {
        this.srv.remove(this.router.url);
    }
}
