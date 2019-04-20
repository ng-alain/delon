import { Injectable } from '@angular/core';
import { QRConfig } from './qr.config';

declare var QRious: any;

@Injectable({ providedIn: 'root' })
export class QRService {
  /** 当前qr实例 */
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
    const option: any =
      typeof value === 'object'
        ? value
        : {
            background: this.background,
            backgroundAlpha: this.backgroundAlpha,
            foreground: this.foreground,
            foregroundAlpha: this.foregroundAlpha,
            level: this.level,
            padding: this.padding,
            size: this.size,
            value: value || this.value,
          };
    option.value = this.toUtf8ByteArray(option.value);
    this.qr.set(option);
    return this.dataURL;
  }

  private toUtf8ByteArray(str: string): string {
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

  /**
   * 返回当前二维码Base64编码
   */
  get dataURL(): string {
    return this.qr.toDataURL();
  }
}
