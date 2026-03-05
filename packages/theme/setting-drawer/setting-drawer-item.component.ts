import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { NzInputNumberComponent } from 'ng-zorro-antd/input-number';
import { NzSwitchComponent } from 'ng-zorro-antd/switch';

@Component({
  selector: 'setting-drawer-item',
  template: `
    <span>
      {{ i.label }}
      <span class="pl-sm text-grey">{{ i.tip }}</span>
    </span>
    @switch (i.type) {
      @case ('color') {
        <input
          nz-input
          type="color"
          style="width: 88px"
          [(ngModel)]="i.value"
          [ngModelOptions]="{ standalone: true }"
        />
      }
      @case ('input') {
        <input nz-input style="width: 88px" [(ngModel)]="i.value" [ngModelOptions]="{ standalone: true }" />
      }
      @case ('px') {
        <nz-input-number [(ngModel)]="pxVal" (ngModelChange)="pxChange($event)" [nzFormatter]="format" />
      }
      @case ('switch') {
        <nz-switch nzSize="small" [(ngModel)]="i.value" [ngModelOptions]="{ standalone: true }" />
      }
      @default {
        <ng-template nzDrawerContent />
      }
    }
  `,
  host: { class: 'setting-drawer__body-item' },
  imports: [FormsModule, NzInputDirective, NzInputNumberComponent, NzSwitchComponent, NzDrawerModule]
})
export class SettingDrawerItemComponent {
  i: NzSafeAny = {};

  @Input()
  set data(val: NzSafeAny) {
    this.i = val;
    if (val.type === 'px') {
      this.pxVal = +val.value.replace('px', '');
    }
  }

  pxVal = 0;

  pxChange(val: number): void {
    this.i.value = `${val}px`;
  }

  format = (value: number): string => `${value} px`;
}
