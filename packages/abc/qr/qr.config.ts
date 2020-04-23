import { Injectable } from '@angular/core';
import { AlainQRConfig } from '@delon/theme';
import { deprecation10Cog } from '@delon/util';

export const QR_DEFULAT_CONFIG: AlainQRConfig = {
  background: 'white',
  backgroundAlpha: 1,
  foreground: 'black',
  foregroundAlpha: 1,
  level: 'L',
  mime: 'image/png',
  padding: 10,
  size: 220,
};

/**
 * @deprecated `QRConfig` is going to be removed in 10.0.0. Please refer to https://ng-alain.com/docs/global-config
 */
@Injectable({ providedIn: 'root' })
export class QRConfig {
  constructor() {
    deprecation10Cog(`QRConfig`);
  }
  /** 背景，默认：`white` */
  background = 'white';
  /** 背景透明级别，范围：`0-1` 之间，默认：`1.0` */
  backgroundAlpha = 1;
  /** 前景，默认：`black` */
  foreground = 'black';
  /** 前景透明级别，范围：`0-1` 之间，默认：`1.0` */
  foregroundAlpha = 1;
  /** 误差校正级别，默认：`L` */
  level: 'L' | 'M' | 'Q' | 'H' = 'L';
  /** 二维码输出图片MIME类型，默认：`image/png` */
  mime = 'image/png';
  /** 内边距（单位：px），默认：`10` */
  padding = 10;
  /** 大小（单位：px），默认：`220` */
  size = 220;
}
