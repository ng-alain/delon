import { Component, EventEmitter, Output } from '@angular/core';
import { MetaService } from '../../../core/meta.service';

@Component({
  selector: 'main-menu',
  template: `
  <ul nz-menu [nzMode]="'inline'" style="padding-bottom: 64px;">
    <li nz-submenu nzOpen *ngFor="let group of meta.menus">
      <span title>{{group.title}}</span>
      <ul>
        <li nz-menu-item *ngFor="let item of group.list"
          (click)="to(item.url)"
          [routerLink]="item.url"
          [routerLinkActive]="['ant-menu-item-selected']" style="padding-left: 54px;">
          <nz-badge [nzDot]="item.hot">
            {{item.title}}
            <span class="chinese">{{item.subtitle}}</span>
            <nz-tag *ngIf="item.lib" [nzColor]="'blue'" title="Full Library" class="ml-sm">LIB</nz-tag>
          </nz-badge>
        </li>
      </ul>
    </li>
  </ul>`,
})
export class MainMenuComponent {
  @Output() readonly click = new EventEmitter<string>();

  constructor(public meta: MetaService) {}

  to(url: string) {
    this.click.next(url);
  }
}
