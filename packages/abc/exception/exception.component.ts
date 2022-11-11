import { Direction, Directionality } from '@angular/cdk/bidi';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';
import { Subject, takeUntil } from 'rxjs';

import { DelonLocaleService, LocaleData } from '@delon/theme';
import { isEmpty } from '@delon/util/browser';
import { AlainConfigService } from '@delon/util/config';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

export type ExceptionType = 403 | 404 | 500;

@Component({
  selector: 'exception',
  exportAs: 'exception',
  templateUrl: './exception.component.html',
  host: {
    '[class.exception]': 'true',
    '[class.exception-rtl]': `dir === 'rtl'`
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ExceptionComponent implements OnInit, OnDestroy {
  static ngAcceptInputType_type: ExceptionType | string;

  private destroy$ = new Subject<void>();
  @ViewChild('conTpl', { static: true }) private conTpl!: ElementRef;

  _type!: ExceptionType;
  locale: LocaleData = {};
  hasCon = false;
  dir: Direction = 'ltr';

  _img: SafeUrl = '';
  _title: SafeHtml = '';
  _desc: SafeHtml = '';
  private typeDict!: { [key: number | string]: { img: string; title: string; desc?: string } };

  @Input()
  set type(value: ExceptionType) {
    const item = this.typeDict[value];
    if (!item) return;

    this.fixImg(item.img);
    this._type = value;
    this._title = item.title;
    this._desc = '';
  }

  private fixImg(src: string): void {
    this._img = this.dom.bypassSecurityTrustStyle(`url('${src}')`);
  }

  @Input()
  set img(value: string) {
    this.fixImg(value);
  }

  @Input()
  set title(value: string) {
    this._title = this.dom.bypassSecurityTrustHtml(value);
  }

  @Input()
  set desc(value: string) {
    this._desc = this.dom.bypassSecurityTrustHtml(value);
  }

  @Input() backRouterLink: string | NzSafeAny[] = '/';

  checkContent(): void {
    this.hasCon = !isEmpty(this.conTpl.nativeElement);
    this.cdr.detectChanges();
  }

  constructor(
    private i18n: DelonLocaleService,
    private dom: DomSanitizer,
    configSrv: AlainConfigService,
    @Optional() private directionality: Directionality,
    private cdr: ChangeDetectorRef
  ) {
    configSrv.attach(this, 'exception', {
      typeDict: {
        403: {
          img: 'https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg',
          title: '403'
        },
        404: {
          img: 'https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg',
          title: '404'
        },
        500: {
          img: 'https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg',
          title: '500'
        }
      }
    });
  }

  ngOnInit(): void {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction: Direction) => {
      this.dir = direction;
    });
    this.i18n.change.pipe(takeUntil(this.destroy$)).subscribe(() => (this.locale = this.i18n.getData('exception')));
    this.checkContent();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
