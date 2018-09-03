export class NaSVConfig {
  /** 大小，默认：`large` */
  size = 'large';
  /** 间距，默认：`32` */
  gutter = 32;
  /** 布局，默认：`horizontal` */
  layout = 'horizontal';
  /** 列数，默认：`3` */
  col = 3;
  /** 是否显示默认值，当内容为空值时显示 `-`，默认：`true` */
  default = true;
  /** `label` 固定宽度，若 `null` 或 `undefined` 表示非固定，默认：`null` */
  labelWidth = null;
}
