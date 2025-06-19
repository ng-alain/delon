import type { Observable } from 'rxjs';

import type { SFSchemaEnumType, SFUISchemaItem } from '@delon/form';
import type { NzSafeAny, NzSizeLDSType } from 'ng-zorro-antd/core/types';
import type { AutoSizeType } from 'ng-zorro-antd/input';
import type { MentionOnSearchTypes } from 'ng-zorro-antd/mention';

export interface SFMentionWidgetSchema extends SFUISchemaItem {
  /**
   * 异步静态数据源
   */
  asyncData?: () => Observable<SFSchemaEnumType[]>;

  size?: NzSizeLDSType;

  /**
   * 在文字框中显示提示讯息
   */
  placeholder?: string;

  /**
   * 实时数据
   */
  loadData?: (option: MentionOnSearchTypes) => Observable<SFSchemaEnumType[]>;

  /**
   * 未找到时的内容，默认：`无匹配结果，轻敲空格完成输入`
   */
  notFoundContent?: string;

  /**
   * 建议框位置，默认：`button`
   */
  placement?: 'button' | 'top';

  /**
   * 触发弹出下拉框的字符，默认：`@`
   */
  prefix?: string | string[];

  /**
   * 建议选项的取值方法，默认：`item => item.label`
   */
  valueWith?: (value: NzSafeAny) => string;

  /**
   * 下拉框选择建议时回调
   */
  select?: (value: NzSafeAny) => void;

  /**
   * 文本框类型，默认：`text`
   */
  inputStyle?: 'text' | 'textarea';

  /**
   * 自适应内容高度，可设置为 `true|false` 或对象：`{ minRows: 2, maxRows: 6 }`
   */
  autosize?: boolean | AutoSizeType;
}
