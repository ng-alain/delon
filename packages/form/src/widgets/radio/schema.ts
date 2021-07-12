import { Observable } from 'rxjs';

import { NzSizeLDSType } from 'ng-zorro-antd/core/types';

import { SFValue } from '../../interface';
import { SFSchemaEnumType } from '../../schema';
import { SFUISchemaItem } from '../../schema/ui';

export interface SFRadioWidgetSchema extends SFUISchemaItem {
  /**
   * 异步数据源
   */
  asyncData?: () => Observable<SFSchemaEnumType[]>;

  size?: NzSizeLDSType;

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
