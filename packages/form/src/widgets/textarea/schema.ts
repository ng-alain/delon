import { NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { AutoSizeType } from 'ng-zorro-antd/input';

import { SFUISchemaItem } from '../../schema/ui';

export interface SFTextareaWidgetSchema extends SFUISchemaItem {
  size?: NzSizeLDSType;

  /**
   * 在文字框中显示提示讯息
   */
  placeholder?: string;

  /**
   * 自适应内容高度，可设置为 `true|false` 或对象：`{ minRows: 2, maxRows: 6 }`
   */
  autosize?: string | boolean | AutoSizeType;

  /**
   * Whether hide border, Default: `false`
   */
  borderless?: boolean;

  /**
   * `textarea` maximum character count displayed
   */
  maxCharacterCount?: number;

  /**
   * Customized `characterCount` computation function | `(v: string) => number`
   */
  computeCharacterCount?: (v: string) => number;

  /**
   * 内容变更事件
   */
  change?: (val: string) => void;

  /**
   * 焦点事件
   */
  focus?: (e: FocusEvent) => void;

  /**
   * 失焦事件
   */
  blur?: (e: FocusEvent) => void;
}
