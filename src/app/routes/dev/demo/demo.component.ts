
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <ellipsis length="100">{{ article }}</ellipsis>
  <h4 class="mt-lg">Show Tooltip</h4>
  <ellipsis length="100" tooltip>{{ article }}</ellipsis>

  <ellipsis lines="1" style="width: 200px">
    <p class="mb0">There were injuries alleged in three <a href="#cover">cases in 2015</a>, and a fourth incident in September, according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.</p>
  </ellipsis>

  <ellipsis lines="3" tooltip style="width: 200px">
    <p class="mb0">There were injuries alleged in three <a href="#cover">cases in 2015</a>, and a fourth incident in September, according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.</p>
  </ellipsis>
  `,
})
export class DemoComponent {
  article = 'There were injuries alleged in three cases in 2015, and a fourth incident in September, according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.';
}
