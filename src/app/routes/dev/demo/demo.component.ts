
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <ellipsis [lines]="lines" tooltip style="width: 200px">
    <div [innerHTML]="html"></div>
  </ellipsis>
  <button nz-button (click)="newText='asdfasdf'">Update</button>
  <button nz-button (click)="lines=3">Update Line</button>
  `,
})
export class DemoComponent {
  newText = '';
  lines = 2;
  article = 'There were injuries alleged in three cases in 2015, and a fourth incident in September, according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.';
  html = `<p>There were injuries alleged in three <a href="#cover">cases in 2015</a>, and a fourth incident in September, according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.</p>`;
}
