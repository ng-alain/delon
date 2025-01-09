import { NzSizeLDSType } from 'ng-zorro-antd/core/types';

import { SFUISchemaItem } from '../../schema/ui';

export interface SFNumberWidgetSchema extends SFUISchemaItem {
  size?: NzSizeLDSType;

  /**
   * 前缀，简化 `nzFormatter`、`nzParser` 的使用
   */
  prefix?: string;

  /**
   * 单位，简化 `nzFormatter`、`nzParser` 的使用
   */
  unit?: string;

  /**
   * 指定输入框展示值的格式
   */
  formatter?: (value: number) => string;

  /**
   * 指定从 nzFormatter 里转换回数字的方式，和 nzFormatter 搭配使用
   */
  parser?: (value: string) => number;

  /**
   * 数值精度
   */
  precision?: number | null;

  /**
   * 指定 `nz-number` 宽度
   */
  widgetWidth?: number | string;

  /**
   * Hide step icon
   *
   * 隐藏步数操作区
   */
  hideStep?: boolean;

  /**
   * 变更事件
   */
  change?: (val?: number) => void;
}
