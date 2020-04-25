import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { AlainConfigService, AlainQRConfig } from '@delon/config';
import { InputNumber } from '@delon/util';
import { QR_DEFULAT_CONFIG } from './qr.config';
import { QRService } from './qr.service';

@Component({
  selector: 'qr',
  exportAs: 'qr',
  template: ` <img class="qr__img" src="{{ dataURL }}" /> `,
  host: {
    '[class.qr]': 'true',
    '[style.height.px]': 'size',
    '[style.width.px]': 'size',
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class QRComponent implements OnChanges {
  dataURL: string;

  // #region fields

  @Input() background: string;
  @Input() backgroundAlpha: number;
  @Input() foreground: string;
  @Input() foregroundAlpha: number;
  @Input() level: string;
  @Input() mime: string;
  @Input() @InputNumber() padding: number;
  @Input() @InputNumber() size: number;
  @Input() value: string;
  // tslint:disable-next-line:no-output-native
  @Output() readonly change = new EventEmitter<string>();

  // #endregion

  constructor(private srv: QRService, private cdr: ChangeDetectorRef, configSrv: AlainConfigService) {
    configSrv.attach<AlainQRConfig, 'qr'>(this, 'qr', QR_DEFULAT_CONFIG);
  }

  ngOnChanges(): void {
    this.dataURL = this.srv.refresh({
      background: this.background,
      backgroundAlpha: this.backgroundAlpha,
      foreground: this.foreground,
      foregroundAlpha: this.foregroundAlpha,
      level: this.level,
      mime: this.mime,
      padding: this.padding,
      size: this.size,
      value: this.value,
    });
    this.cdr.detectChanges();
    this.change.emit(this.dataURL);
  }
}
