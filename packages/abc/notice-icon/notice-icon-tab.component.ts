import { NgTemplateOutlet } from '@angular/common';
import { Component, input, output, ViewEncapsulation } from '@angular/core';

import { LocaleData } from '@delon/theme';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import { NzListComponent, NzListItemComponent, NzListItemMetaComponent } from 'ng-zorro-antd/list';
import { NzTagComponent } from 'ng-zorro-antd/tag';

import { NoticeIconSelect, NoticeItem } from './notice-icon.types';

@Component({
  selector: 'notice-icon-tab',
  exportAs: 'noticeIconTab',
  template: `
    @let d = item();
    @let list = d.list;
    @if (list && list.length > 0) {
      <ng-template [ngTemplateOutlet]="listTpl" />
    } @else {
      <div class="notice-icon__notfound">
        @if (d.emptyImage) {
          <img class="notice-icon__notfound-img" [attr.src]="d.emptyImage" alt="not found" />
        }
        <p>
          <ng-container *nzStringTemplateOutlet="d.emptyText">
            {{ d.emptyText ?? locale().emptyText }}
          </ng-container>
        </p>
      </div>
    }
    <ng-template #listTpl>
      <nz-list [nzDataSource]="list" [nzRenderItem]="item">
        <ng-template #item let-item>
          <nz-list-item (click)="onClick(item, $event)" [class.notice-icon__item-read]="item.read">
            <nz-list-item-meta [nzTitle]="nzTitle" [nzDescription]="nzDescription" [nzAvatar]="item.avatar">
              <ng-template #nzTitle>
                <ng-container *nzStringTemplateOutlet="item.title; context: { $implicit: item }">
                  {{ item.title }}
                </ng-container>
                @if (item.extra) {
                  <div class="notice-icon__item-extra">
                    <nz-tag [nzColor]="item.color">{{ item.extra }}</nz-tag>
                  </div>
                }
              </ng-template>
              <ng-template #nzDescription>
                @if (item.description) {
                  <div class="notice-icon__item-desc">
                    <ng-container *nzStringTemplateOutlet="item.description; context: { $implicit: item }">
                      {{ item.description }}
                    </ng-container>
                  </div>
                }
                @if (item.datetime) {
                  <div class="notice-icon__item-time">{{ item.datetime }}</div>
                }
              </ng-template>
            </nz-list-item-meta>
          </nz-list-item>
        </ng-template>
      </nz-list>
      <div class="notice-icon__clear" (click)="onClear()">{{ d.clearText ?? locale().clearText }}</div>
    </ng-template>
  `,
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgTemplateOutlet,
    NzStringTemplateOutletDirective,
    NzListComponent,
    NzListItemComponent,
    NzListItemMetaComponent,
    NzTagComponent
  ]
})
export class NoticeIconTabComponent {
  readonly locale = input.required<LocaleData>();
  readonly item = input.required<NoticeItem>();
  readonly select = output<NoticeIconSelect>();
  readonly clear = output<string>();

  protected onClick(item: NoticeItem, event: Event): void {
    this.select.emit({ title: this.item().title, item, event });
  }

  protected onClear(): void {
    this.clear.emit(this.item().title);
  }
}
