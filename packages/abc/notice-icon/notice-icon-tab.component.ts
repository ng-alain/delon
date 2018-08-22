import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NoticeItem } from './interface';

@Component({
  selector: 'na-notice-icon-tab',
  template: `
  <div *ngIf="data.list?.length === 0; else listTpl" class="na-notice-icon__notfound">
    <img class="na-notice-icon__notfound-img" *ngIf="data.emptyImage" src="{{data.emptyImage}}" alt="not found" />
    <p>{{data.emptyText || '无通知'}}</p>
  </div>
  <ng-template #listTpl>
    <nz-list [nzDataSource]="data.list" [nzRenderItem]="item">
      <ng-template #item let-item>
        <nz-list-item (click)="onClick(item)" [ngClass]="{'na-notice-icon__item-read': item.read}">
          <nz-list-item-meta
            [nzTitle]="nzTitle"
            [nzDescription]="nzDescription"
            [nzAvatar]="item.avatar">
            <ng-template #nzTitle>
              {{item.title}}
              <div class="na-notice-icon__item-extra" *ngIf="item.extra"><nz-tag [nzColor]="item.color">{{item.extra}}</nz-tag></div>
            </ng-template>
            <ng-template #nzDescription>
              <div *ngIf="item.description" class="na-notice-icon__item-desc">{{item.description}}</div>
              <div *ngIf="item.datetime" class="na-notice-icon__item-time">{{item.datetime}}</div>
            </ng-template>
          </nz-list-item-meta>
        </nz-list-item>
      </ng-template>
    </nz-list>
    <div class="na-notice-icon__clear" (click)="onClear()">{{ data.clearText || '清空' }}</div>
  </ng-template>
  `,
  preserveWhitespaces: false,
})
export class NaNoticeIconTabComponent {
  @Input() data: NoticeItem;
  @Output() select = new EventEmitter<any>();
  @Output() clear = new EventEmitter<string>();

  onClick(item: NoticeItem) {
    this.select.emit({
      title: this.data.title,
      item,
    });
  }

  onClear() {
    this.clear.emit(this.data.title);
  }
}
