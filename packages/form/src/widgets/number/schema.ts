import { SFDLSSize, SFUISchemaItem } from '../../schema/ui';

export interface SFNumberWidgetSchema extends SFUISchemaItem {
  size?: SFDLSSize;

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
  formatter?: (value: number) => string | number;

  /**
   * 指定从 nzFormatter 里转换回数字的方式，和 nzFormatter 搭配使用
   */
  parser?: (value: string) => string | number;

  /**
   * 数值精度
   */
  precision?: number;

  /**
   * 指定 `nz-number` 宽度
   */
  widgetWidth?: number;
}
