import { SFUISchemaItem, SFDLSSize } from '../../schema/ui';

export interface SFTimeWidgetSchema extends SFUISchemaItem {
  size?: SFDLSSize;

  placeholder?: string;

  /**
   * 数据格式化
   */
  format?: string;

  /**
   * 显示格式化，（等同 [nzFormat](https://ng.ant.design/components/time-picker/zh#api) 值），默认：`HH:mm:ss`
   */
  displayFormat?: string;

  /**
   * 是否UTC新纪元（表示从 `1970` 开始计毫秒数），当 `type='number'` 时有效，默认：`false`
   */
  utcEpoch?: boolean;

  /**
   * 是否显示清除按钮，默认：`true`
   */
  allowEmpty?: boolean;

  /**
   * 清除按钮的提示文案，默认：`清除`
   */
  clearText?: string;

  /**
   * 设置面板打开时默认选中的值，默认：`new Date()`
   */
  defaultOpenValue?: Date;

  /**
   * 禁止选择部分小时选项
   */
  disabledHours?: () => number[];

  /**
   * 禁止选择部分分钟选项
   */
  disabledMinutes?: (hour: number) => number[];

  /**
   * 禁止选择部分秒选项
   */
  disabledSeconds?: (hour: number, minute: number) => number[];

  /**
   * 隐藏禁止选择的选项，默认：`false`
   */
  hideDisabledOptions?: boolean;

  /**
   * 小时选项间隔，默认：`1`
   */
  hourStep?: number;

  /**
   * 分钟选项间隔，默认：`1`
   */
  minuteStep?: number;

  /**
   * 秒选项间隔，默认：`1`
   */
  secondStep?: number;

  /**
   * 弹出层类名
   */
  popupClassName?: string;
}
