import type { SFUISchemaItem } from '@delon/form';
import { NzMarks, NzSliderValue } from 'ng-zorro-antd/slider';

export interface SFSliderWidgetSchema extends SFUISchemaItem {
  /**
   * 当添加该属性时，启动双滑块模式
   */
  range?: boolean;

  /**
   * 步长，取值必须大于 0，并且可被 (max - min) 整除。当 `marks` 不为空对象时，可以设置 `step` 为 `null`，此时 Slider 的可选值仅有 marks 标出来的部分。
   *
   * 未设置时以 `schema.multipleOf` 为准
   */
  step?: number | null;

  /**
   * 刻度标记
   */
  marks?: NzMarks | null;

  /**
   * 是否只能拖拽到刻度上，默认：`false`
   */
  dots?: boolean;

  /**
   * 是否包含。`marks` 不为空对象时有效，值为 `true` 时表示值为包含关系，`false` 表示并列
   */
  included?: boolean;

  /**
   * 竖直显示。添加该属性时，Slider 为垂直方向
   */
  vertical?: boolean;

  /**
   * 反向坐标轴，默认：`false`
   */
  reverse?: boolean;

  /**
   * 值为 `always` 时总是显示，值为 `never` 时在任何情况下都不显示，默认：`default`
   */
  tooltipVisible?: 'default' | 'always' | 'never';

  /**
   * 设置 Tooltip 的默认位置
   */
  tooltipPlacement?: string;

  /**
   * 与 `onmouseup` 触发时机一致，把当前值作为参数传入
   */
  afterChange?: (value: NzSliderValue) => void;

  /**
   * Slider 会把当前值传给 `nzTipFormatter`，并在 Tooltip 中显示 `nzTipFormatter` 的返回值，若为 null，则隐藏 Tooltip
   */
  formatter?: (value: number) => string;
}
