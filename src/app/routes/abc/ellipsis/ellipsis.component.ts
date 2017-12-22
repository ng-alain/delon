import { Component } from '@angular/core';
import { ReuseTabService } from '@delon/abc';

@Component({
    selector: 'app-demo-ellipsis',
    template: `
    <ellipsis lines="3" style="width: 200px">
        <p>There were injuries alleged in three <a href="#cover">cases in 2015</a>, and a fourth incident in September, according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.</p>
    </ellipsis>
    `
})
export class DemoEllipsisComponent {

    constructor(private srv: ReuseTabService) {}

    ngOnInit() {
        this.srv.title = 'ellipsis';
    }
}
