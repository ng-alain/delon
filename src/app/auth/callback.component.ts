import { Component, OnInit } from '@angular/core';
import { SocialService } from '@delon/auth';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-auth-callback',
    template: `假装已经收到 {{type}} 认证后信息，{{s <= 0 ? '自动跳转中……' : s + '秒'}}`,
    providers: [ SocialService ]
})
export class CallbackComponent implements OnInit {

    s: number = 2;
    type: string;

    constructor(private socialService: SocialService, private route: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.type = params['type'];
            this.start();
        });
    }

    private start() {
        --this.s;
        if (this.s > 0) {
            setTimeout(() => this.start(), 1000);
        } else {
            this.socialService.callback({
                token: '123456789',
                name: 'cipchk',
                id: 10000,
                time: +new Date
            });
        }
    }

}
