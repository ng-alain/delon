import { AutoSizeType } from 'ng-zorro-antd/input';
import { SFDLSSize, SFUISchemaItem } from '../../schema/ui';

export interface SFTextareaWidgetSchema extends SFUISchemaItem {
  size?: SFDLSSize;

  /**
   * 在文字框中显示提示讯息
   */
  placeholder?: string;

  /**
   * 自适应内容高度，可设置为 `true|false` 或对象：`{ minRows: 2, maxRows: 6 }`
   */
  autosize?: boolean | AutoSizeType;

  /**
   * Whether hide border, Default: `false`
   */
  borderless?: boolean;

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
