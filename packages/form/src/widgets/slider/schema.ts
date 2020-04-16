import { NzMarks, NzSliderValue } from 'ng-zorro-antd/slider';
import { SFUISchemaItem } from '../../schema/ui';

export interface SFSliderWidgetSchema extends SFUISchemaItem {
  /**
   * 当添加该属性时，启动双滑块模式
   */
  range?: boolean;

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
   * 与 `onmouseup` 触发时机一致，把当前值作为参数传入
   */
  afterChange?: (value: NzSliderValue) => void;

  /**
   * Slider 会把当前值传给 `nzTipFormatter`，并在 Tooltip 中显示 `nzTipFormatter` 的返回值，若为 null，则隐藏 Tooltip
   */
  formatter?: (value: number) => string;
}
