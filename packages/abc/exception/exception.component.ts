import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { DelonLocaleService, LocaleData } from '@delon/theme';
import { isEmpty } from '@delon/util';

export type ExceptionType = 403 | 404 | 500;

@Component({
  selector: 'exception',
  templateUrl: './exception.component.html',
  host: { '[class.exception]': 'true' },
})
export class ExceptionComponent implements OnInit, OnDestroy {
  private i18n$: Subscription;
  @ViewChild('conTpl')
  private conTpl: ElementRef;

  _type: ExceptionType;
  locale: LocaleData = {};
  hasCon = false;

  _img = '';
  _title = '';
  _desc = '';

  @Input()
  set type(value: ExceptionType) {
    const item = {
      403: {
        img: 'https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg',
        title: '403',
      },
      404: {
        img: 'https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg',
        title: '404',
      },
      500: {
        img: 'https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg',
        title: '500',
      },
    }[value];

    if (!item) return;

    this._type = value;
    this._img = item.img;
    this._title = item.title;
  }

  @Input()
  set img(value: string) {
    this._img = value;
  }

  @Input()
  set title(value: string) {
    this._title = value;
  }

  @Input()
  set desc(value: string) {
    this._desc = value;
  }

  checkContent() {
    this.hasCon = !isEmpty(this.conTpl.nativeElement);
  }

  constructor(private i18n: DelonLocaleService) {}

  ngOnInit() {
    this.i18n$ = this.i18n.change.subscribe(() => (this.locale = this.i18n.getData('exception')));
    this.checkContent();
  }

  ngOnDestroy() {
    this.i18n$.unsubscribe();
  }
}
