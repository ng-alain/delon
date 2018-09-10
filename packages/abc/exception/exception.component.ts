import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { isEmpty } from '@delon/util';
import { DelonI18nService } from '@delon/theme';

@Component({
  selector: 'exception',
  template: `
  <div class="exception__img-block">
    <div class="exception__img" [ngStyle]="{'background-image': 'url(' + _img + ')'}"></div>
  </div>
  <div class="exception__cont">
    <h1 class="exception__cont-title" [innerHTML]="_title"></h1>
    <div class="exception__cont-desc" [innerHTML]="_desc || locale[_type]"></div>
    <div class="exception__cont-actions">
      <div (cdkObserveContent)="checkContent()" #conTpl><ng-content></ng-content></div>
      <button *ngIf="!hasCon" nz-button [routerLink]="['/']" [nzType]="'primary'">{{locale.backToHome}}</button>
    </div>
  </div>
  `,
  host: { '[class.exception]': 'true' },
  preserveWhitespaces: false,
})
export class ExceptionComponent implements OnInit, OnDestroy {
  private i18n$: Subscription;
  @ViewChild('conTpl')
  private conTpl: ElementRef;

  _type: number;
  locale: any = {};
  hasCon = false;

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
      },
      404: {
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg',
        title: '404',
      },
      500: {
        img:
          'https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg',
        title: '500',
      },
    }[value];

    if (!item) return;

    this._type = value;
    this._img = item.img;
    this._title = item.title;
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

  checkContent() {
    this.hasCon = !isEmpty(this.conTpl.nativeElement);
  }

  constructor(private i18n: DelonI18nService) {}

  ngOnInit() {
    this.i18n$ = this.i18n.change.subscribe(
      () => (this.locale = this.i18n.getData('exception')),
    );
    this.checkContent();
  }

  ngOnDestroy() {
    this.i18n$.unsubscribe();
  }
}
