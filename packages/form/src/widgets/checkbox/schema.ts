import { Observable } from 'rxjs';

import { SFSchemaEnum, SFSchemaEnumType } from '../../schema';
import { SFUISchemaItem } from '../../schema/ui';

export interface SFCheckboxWidgetSchema extends SFUISchemaItem {
  /**
   * 异步静态数据源
   */
  asyncData?: () => Observable<SFSchemaEnumType[]>;

  /**
   * 指定每个选框单元格数量，参考[布局](https://ng.ant.design/components/checkbox/zh#components-checkbox-demo-layout)
   */
  span?: number;

  /**
   * radio的样式，默认：`default`
   */
  styleType?: 'default' | 'button';

  /**
   * 是否需要全选
   */
  checkAll?: boolean;

  /**
   * 全选按钮文本
   */
  checkAllText?: string;

  /**
   * 值变更事件，参数：单个多选框为 `boolean`，否则为 `SFSchemaEnum[]`
   */
  change?: (res: boolean | SFSchemaEnum[]) => void;
}
