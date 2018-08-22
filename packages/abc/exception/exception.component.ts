import { Component, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'na-exception',
  template: `
  <div class="na-exception__img-block">
    <div class="na-exception__img" [ngStyle]="{'background-image': 'url(' + _img + ')'}"></div>
  </div>
  <div class="na-exception__cont">
    <h1 class="na-exception__cont-title" [innerHTML]="_title"></h1>
    <div class="na-exception__cont-desc" [innerHTML]="_desc"></div>
    <ng-template #defaultActions>
      <button nz-button [routerLink]="['/']" [nzType]="'primary'">返回首页</button>
      <ng-content></ng-content>
    </ng-template>
    <div class="na-exception__cont-actions" *ngIf="actions; else defaultActions">
      <ng-template [ngTemplateOutlet]="actions"></ng-template>
      <ng-content></ng-content>
    </div>
  </div>
  `,
  host: { '[class.na-exception]': 'true' },
  preserveWhitespaces: false,
})
export class NaExceptionComponent {
  _img = '';
  _title = '';
  _desc = '';

  @Input()
  set type(value: 403 | 404 | 500) {
    const item = {
      403: {
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg',
        title: '403',
        desc: '抱歉，你无权访问该页面',
      },
      404: {
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg',
        title: '404',
        desc: '抱歉，你访问的页面不存在',
      },
      500: {
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg',
        title: '500',
        desc: '抱歉，服务器出错了',
      },
    }[value];

    if (!item) return;

    this._img = item.img;
    this._title = item.title;
    this._desc = item.desc;
  }

  @Input()
  set img(value) {
    this._img = value;
  }
  @Input()
  set title(value) {
    this._title = value;
  }
  @Input()
  set desc(value) {
    this._desc = value;
  }

  @ContentChild('actions') actions: TemplateRef<any>;
}
