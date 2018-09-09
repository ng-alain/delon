import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  ChangeDetectorRef,
  HostBinding,
  Output,
  EventEmitter,
} from '@angular/core';
import { InputNumber } from '@delon/util';

import { QRService } from './qr.service';
import { QRConfig } from './qr.config';

@Component({
  selector: 'qr',
  template: `
  <img class="qr__img" src="{{dataURL}}">
  `,
  preserveWhitespaces: false,
  host: { '[class.qr]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QRComponent implements OnChanges {
  dataURL: string;
  // region: fields

  /** 背景 */
  @Input()
  background: string;
  /** 背景透明级别，范围：`0-1` 之间 */
  @Input()
  backgroundAlpha: number;
  /** 前景 */
  @Input()
  foreground: string;
  /** 前景透明级别，范围：`0-1` 之间 */
  @Input()
  foregroundAlpha: number;
  /** 误差校正级别 */
  @Input()
  level: string;
  /** 二维码输出图片MIME类型 */
  @Input()
  mime: string;
  /** 内边距（单位：px） */
  @Input()
  @InputNumber()
  padding: number;
  /** 大小（单位：px） */
  @HostBinding('style.height.px')
  @HostBinding('style.width.px')
  @Input()
  @InputNumber()
  size: number;
  /** 值 */
  @Input()
  value: string;
  /** 变更时回调 */
  @Output()
  change = new EventEmitter<string>();

  // endregion

  constructor(
    cog: QRConfig,
    private srv: QRService,
    private cd: ChangeDetectorRef,
  ) {
    Object.assign(this, cog);
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
    this.cd.detectChanges();
    this.change.emit(this.dataURL);
  }
}
