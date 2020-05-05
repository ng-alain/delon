import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { AlainConfigService, AlainQRConfig, InputNumber, LazyService } from '@delon/util';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { QR_DEFULAT_CONFIG } from './qr.config';
import { QROptions } from './qr.types';

@Component({
  selector: 'qr',
  exportAs: 'qr',
  template: ` <img style="max-width: 100%; max-height: 100%;" [src]="dataURL" /> `,
  host: {
    '[style.display]': `'inline-block'`,
    '[style.height.px]': 'size',
    '[style.width.px]': 'size',
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class QRComponent implements OnChanges, AfterViewInit, OnDestroy {
  private lazy$: Subscription;
  private qr: any;
  private cog: AlainQRConfig;
  private option: QROptions;
  private inited = false;
  dataURL: string;

  // #region fields

  @Input() background: string;
  @Input() backgroundAlpha: number;
  @Input() foreground: string;
  @Input() foregroundAlpha: number;
  @Input() level: 'L' | 'M' | 'Q' | 'H';
  @Input() mime: string;
  @Input() @InputNumber() padding: number;
  @Input() @InputNumber() size: number;
  @Input() value: string;
  // tslint:disable-next-line:no-output-native
  @Output() readonly change = new EventEmitter<string>();
  @Input() @InputNumber() delay = 100;

  // #endregion

  constructor(private cdr: ChangeDetectorRef, configSrv: AlainConfigService, private lazySrv: LazyService) {
    this.cog = configSrv.merge<AlainQRConfig, 'qr'>('qr', QR_DEFULAT_CONFIG);
    Object.assign(this, this.cog);
  }

  private init(): void {
    if (!this.inited) {
      return;
    }

    if (this.qr == null) {
      this.qr = new (window as any).QRious();
    }
    this.qr.set(this.option);
    this.dataURL = this.qr.toDataURL();
    this.change.emit(this.dataURL);
    this.cdr.detectChanges();
  }

  private initDelay(): void {
    this.inited = true;
    setTimeout(() => this.init(), this.delay);
  }

  ngAfterViewInit(): void {
    if ((window as any).QRious) {
      this.initDelay();
      return;
    }
    const url = this.cog.lib!;
    this.lazy$ = this.lazySrv.change
      .pipe(filter(ls => ls.length === 1 && ls[0].path === url && ls[0].status === 'ok'))
      .subscribe(() => this.initDelay());
    this.lazySrv.load(url);
  }

  ngOnChanges(): void {
    const option: QROptions = {
      background: this.background,
      backgroundAlpha: this.backgroundAlpha,
      foreground: this.foreground,
      foregroundAlpha: this.foregroundAlpha,
      level: this.level,
      mime: this.mime,
      padding: this.padding,
      size: this.size,
      value: this.toUtf8ByteArray(this.value),
    };
    this.option = option;
    this.init();
  }

  private toUtf8ByteArray(str: string): string {
    if (str == null) return '';
    str = encodeURI(str);
    const result: number[] = [];
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) !== '%') {
        result.push(str.charCodeAt(i));
      } else {
        result.push(parseInt(str.substr(i + 1, 2), 16));
        i += 2;
      }
    }
    return result.map(v => String.fromCharCode(v)).join('');
  }

  ngOnDestroy(): void {
    this.lazy$.unsubscribe();
  }
}
