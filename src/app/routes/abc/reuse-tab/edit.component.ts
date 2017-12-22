import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ReuseTabService } from '@delon/abc';

@Component({
    selector: 'reuse-tab-edit',
    template: `id: {{id}}`
})
export class DemoReuseTabEditComponent implements OnInit {
    id: any;

    constructor(private route: ActivatedRoute, private srv: ReuseTabService) {}

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.id = params.id;
            this.srv.title = `编辑 ${this.id}`;
        });
    }
}
