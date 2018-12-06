import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <button nz-button (click)="reload()">reload</button>
  <nz-card [nzLoading]="loading" [nzBordered]="false">
    <g2-water-wave *ngIf="percent"
        title="补贴资金剩余"
        [percent]="34"
        [height]="161"></g2-water-wave>
  </nz-card>
  `,
})
export class DemoComponent implements OnInit {
  loading = true;
  percent: any;

  reload() {
    this.percent = 10;
  }

  ngOnInit() {
    setTimeout(() => {
      this.reload();
      this.loading = false;
    }, 1000);
  }
}
