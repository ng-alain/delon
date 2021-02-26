import { DisabledDateFn, DisabledTimeFn, NzDatePickerSizeType, SupportTimeOptions } from 'ng-zorro-antd/date-picker';
import { NzDatePickerI18nInterface } from 'ng-zorro-antd/i18n';
import { SFUISchemaItem } from '../../schema/ui';

export interface SFDateWidgetSchema extends SFUISchemaItem {
  mode?: 'date' | 'week' | 'month' | 'year' | 'range';

  size?: NzDatePickerSizeType;

  placeholder?: string;

  /**
   * **Just only support date-fns**
   *
   * Return the formatted date string in the given format, [Accepted tokens](https://date-fns.org/v2.12.0/docs/format), like this:
   * - `yyyy-MM-dd HH:mm:ss` Date time
   * - `t` Seconds timestamp
   * - `T` Milliseconds timestamp
   */
  format?: string;

  /**
   * To set the date format (equar [nzFormat](https://ng.ant.design/components/date-picker/zh#api))
   *
   * **TIPS** [nzFormat special instructions](https://ng.ant.design/components/date-picker/en#api)
   */
  displayFormat?: string;

  /**
   * The end value corresponding to the date range `key`, a date range [demo](https://ng-alain.com/form/date/en#form-date-range).
   */
  end?: string;

  /**
   * Whether to show clear button, default: `true`
   */
  allowClear?: boolean;

  /**
   * Picker className
   */
  className?: string;

  /**
   * Localization configuration
   */
  locale?: NzDatePickerI18nInterface;

  /**
   * To customize the style of the popup calendar
   */
  popupStyle?: object;

  /**
   * To customize the className of the popup calendar
   */
  dropdownClassName?: string;

  /**
   * Set picker mode of range picker, default: `date`
   */
  rangeMode?: 'date' | 'week' | 'month' | 'year';

  /**
   * A callback emitter, can be executed whether the popup calendar is popped up or closed
   */
  onOpenChange?: (status: boolean) => void;

  /**
   * Specify the date that cannot be selected
   */
  disabledDate?: DisabledDateFn;

  /**
   * To specify the time that cannot be selected, support components: `nz-date-picker`, `nz-range-picker`
   */
  disabledTime?: DisabledTimeFn;

  /**
   * Render extra footer in panel, support components: `nz-date-picker`, `nz-range-picker`, `nz-year-picker`, `nz-month-picker`
   */
  renderExtraFooter?: string;

  /**
   * To provide an additional time selection
   */
  showTime?: SupportTimeOptions | boolean;

  /**
   * Whether to show "Today" button, default: `true`
   */
  showToday?: boolean;

  /**
   * Set the readonly attribute of the input tag (avoids virtual keyboard on touch devices), default: `false`
   */
  inputReadOnly?: boolean;

  /**
   * Callback when click ok button
   */
  onOk?: (data: Date | Date[]) => void;

  /**
   * Date change callback
   */
  change?: (data: Date | Date[] | null) => void;
}
