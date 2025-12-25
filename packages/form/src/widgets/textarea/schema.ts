import type { NzSizeLDSType } from 'ng-zorro-antd/core/types';

import { SFUISchemaItem } from '../../schema/ui';

export interface SFTextareaWidgetSchema extends SFUISchemaItem {
  size?: NzSizeLDSType;

  /**
   * 在文字框中显示提示讯息
   */
  placeholder?: string;

  /**
   * 自适应内容高度
   */
  autosize?: {
    minRows?: number;
    maxRows?: number;
  };

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
