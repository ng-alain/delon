export interface AlainQRConfig {
  /** 背景，默认：`white` */
  background?: string;
  /** 背景透明级别，范围：`0-1` 之间，默认：`1` */
  backgroundAlpha?: number;
  /** 前景，默认：`black` */
  foreground?: string;
  /** 前景透明级别，范围：`0-1` 之间，默认：`1` */
  foregroundAlpha?: number;
  /** 误差校正级别，默认：`L` */
  level?: 'L' | 'M' | 'Q' | 'H';
  /** 二维码输出图片MIME类型，默认：`image/png` */
  mime?: string;
  /** 内边距（单位：px），默认：`10` */
  padding?: number;
  /** 大小（单位：px），默认：`220` */
  size?: number;
}
