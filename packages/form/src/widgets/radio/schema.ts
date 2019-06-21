import { Observable } from 'rxjs';
import { SFSchemaEnumType } from '../../schema';
import { SFUISchemaItem, SFDLSSize } from '../../schema/ui';
import { SFValue } from '../../interface';

export interface SFRadioWidgetSchema extends SFUISchemaItem {
  /**
   * 异步数据源
   */
  asyncData?: () => Observable<SFSchemaEnumType[]>;

  size?: SFDLSSize;

  /**
   * radio 的样式，默认：`default`
   */
  styleType?: 'default' | 'button';

  /**
   * RadioButton 的风格样式，目前有描边和填色两种风格，默认：`outline`
   */
  buttonStyle?: 'outline' | 'solid';

  /**
   * 值变更事件
   */
  change?: (res: SFValue) => void;
}
