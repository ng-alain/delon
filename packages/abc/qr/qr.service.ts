import { Injectable } from '@angular/core';
import { QRConfig } from './qr.config';

// tslint:disable-next-line:no-any
declare var QRious: any;

@Injectable({ providedIn: 'root' })
export class QRService {
  /** 当前qr实例 */
  // tslint:disable-next-line:no-any
  readonly qr: any;
  /** 背景 */
  background: string;
  /** 背景透明级别，范围：`0-1` 之间 */
  backgroundAlpha = 1;
  /** 前景 */
  foreground: string;
  /** 前景透明级别，范围：`0-1` 之间 */
  foregroundAlpha: number;
  /** 误差校正级别 */
  level: string;
  /** 二维码输出图片MIME类型 */
  mime: string;
  /** 内边距（单位：px） */
  padding: number;
  /** 大小（单位：px） */
  size: number;
  /** 值 */
  value: string;

  constructor(cog: QRConfig) {
    Object.assign(this, cog);
    this.qr = new QRious();
  }

  /**
   * 生成二维码，并返回Base64编码
   *
   * @param [value] 重新指定值
   */
  refresh(value?: string | {}): string {
    this.qr.set(typeof value === 'object' ? value : {
      background: this.background,
      backgroundAlpha: this.backgroundAlpha,
      foreground: this.foreground,
      foregroundAlpha: this.foregroundAlpha,
      level: this.level,
      padding: this.padding,
      size: this.size,
      value: value || this.value,
    });
    return this.dataURL;
  }

  /**
   * 返回当前二维码Base64编码
   */
  get dataURL(): string {
    return this.qr.toDataURL();
  }
}
