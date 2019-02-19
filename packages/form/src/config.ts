import { Injectable } from '@angular/core';
import { ERRORSDEFAULT } from './errors';
import { SFButton } from './interface';
import { SFUISchemaItem } from './schema/ui';

@Injectable({ providedIn: 'root' })
export class DelonFormConfig {
  /**
   * 是否忽略某些数据类型校验 `ERRORSDEFAULT`，默认：`[ 'type', 'enum' ]`
   *
   * - `type` 限定 Schema 中 `type` 类型
   * - `enum` 限定应当是预设定的枚举值之一
   */
  ingoreKeywords?: string[] = ['type', 'enum'];
  /**
   * [ajv](http://epoberezkin.github.io/ajv/#options) 参数
   */
  ajv?: any;
  /**
   * 是否实时校验，默认：`true`
   * - `true` 每一次都校验
   * - `false` 提交时校验
   */
  liveValidate?: boolean = true;
  /**
   * 指定表单 `autocomplete` 值，默认：`on`
   */
  autocomplete?: 'on' | 'off' = null;
  /**
   * 是否立即呈现错误视觉，默认：`false`
   */
  firstVisual?: boolean = false;
  /**
   * 是否只展示错误视觉不显示错误文本，默认：`false`
   */
  onlyVisual?: boolean = false;
  /**
   * 自定义通用错误信息
   */
  errors?: { [key: string]: string } = ERRORSDEFAULT;
  /**
   * 默认全局布局
   */
  ui?: SFUISchemaItem;
  /**
   * 元素组件大小，用于 `nzSize` 值
   */
  size?: 'default' | 'large' | 'small';
  /**
   * 按钮风格
   */
  button?: SFButton = {
    submit_type: 'primary',
    reset_type: 'default',
  };
  /**
   * date小部件：`type="string"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`YYYY-MM-DD HH:mm:ss`
   */
  uiDateStringFormat?: string = 'YYYY-MM-DD HH:mm:ss';
  /**
   * date小部件：`type="number"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`x` 13位Unix Timestamp
   */
  uiDateNumberFormat?: string = 'x';
  /**
   * time小部件：`type="string"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`HH:mm:ss`
   */
  uiTimeStringFormat?: string = 'HH:mm:ss';
  /**
   * time小部件：`type="number"` 且不指定 `schema.format` 和 `ui.format` 时日期格式，默认：`x` 13位Unix Timestamp，日期统一使用 `1970-01-01`
   */
  uiTimeNumberFormat?: string = 'x';
  /**
   * 指定 `format: 'email'` 的默认Email后缀
   */
  uiEmailSuffixes?: string[] = ['qq.com', '163.com', 'gmail.com', '126.com', 'aliyun.com'];
}
