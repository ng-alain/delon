import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { InputNumber } from '@delon/util';

import { QRConfig } from './qr.config';
import { QRService } from './qr.service';

@Component({
  selector: 'qr',
  template: `
    <img class="qr__img" src="{{ dataURL }}" />
  `,
  host: {
    '[class.qr]': 'true',
    '[style.height.px]': 'size',
    '[style.width.px]': 'size',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  @Output() readonly change = new EventEmitter<string>();

  // #endregion

  constructor(cog: QRConfig, private srv: QRService, private cdr: ChangeDetectorRef) {
    Object.assign(this, { ...new QRConfig(), ...cog });
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
