import { DisabledTimeFn, DisabledDateFn } from 'ng-zorro-antd/date-picker/standard-types';
import { SFUISchemaItem, SFDLSSize } from '../../schema/ui';

export interface SFDateWidgetSchema extends SFUISchemaItem {
  /**
   * 渲染模式，默认：`date`
   */
  mode?: 'date' | 'week' | 'month' | 'year' | 'range';

  size?: SFDLSSize;

  placeholder?: string;

  /**
   * 数据格式化
   */
  format?: string;

  /**
   * 显示格式化，（等同 [nzFormat](https://ng.ant.design/components/date-picker/zh#api) 值），默认：`yyyy-MM-dd HH:mm:ss`
   */
  displayFormat?: string;

  /**
   * 日期范围所对应的结束值 `key`
   */
  end?: string;

  /**
   * 是否显示清除按钮，默认：`true`
   */
  allowClear?: boolean;

  /**
   * 选择器 className
   */
  className?: string;

  /**
   * 国际化配置
   */
  locale?: {};

  /**
   * 额外的弹出样式
   */
  popupStyle?: {};

  /**
   * 额外的弹出 className
   */
  dropdownClassName?: string;

  /**
   * 弹出日历和关闭日历的回调
   */
  onOpenChange?: (status: boolean) => void;

  /**
   * 不可选择的日期
   */
  disabledDate?: DisabledDateFn;

  /**
   * 不可选择的时间
   */
  disabledTime?: DisabledTimeFn;

  /**
   * 在面板中添加额外的页脚
   */
  renderExtraFooter?: string;

  /**
   * 增加时间选择功能，`object` 类型为 [TimePickerOptions](https://ng.ant.design/components/time-picker/en#api)
   */
  showTime?: object | boolean;

  /**
   * 是否展示“今天”按钮，默认：`true`
   */
  showToday?: boolean;

  /**
   * 点击确定按钮的回调
   */
  onOk?: (data: Date | Date[]) => void;
}
