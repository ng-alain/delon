import { Observable } from 'rxjs';
import { SFSchemaEnumType } from '../../schema';
import { SFUISchemaItem } from '../../schema/ui';

export interface SFTagWidgetSchema extends SFUISchemaItem {
  /**
   * 异步数据源
   */
  asyncData?: () => Observable<SFSchemaEnumType[]>;

  /**
   * 设定标签工作的模式，默认：`checkable`
   */
  mode?: 'closeable' | 'default' | 'checkable';

  /**
   * 关闭时的回调，在 `nzMode="closable"` 时可用
   */
  onClose?: (e: MouseEvent) => void;

  /**
   * 设置标签的选中状态的回调
   */
  checkedChange?: (status: boolean) => void;
}
