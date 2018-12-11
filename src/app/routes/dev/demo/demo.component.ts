import { Component } from '@angular/core';
import { DemoDrawerComponent } from '@shared/components/dialog/drawer.component';
import { NzDrawerService, NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-demo',
  template: `
  <button (click)="modal()">modal</button>
  <button (click)="drawer()">drawer</button>
  `,
})
export class DemoComponent {
  constructor(private m: NzModalService, private d: NzDrawerService) { }

  modal() {
    this.m.info({ nzContent: 'test' });
  }

  drawer() {
    this.d.create({ nzTitle: 'a', nzContent: DemoDrawerComponent });
  }
}
