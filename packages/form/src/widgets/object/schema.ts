import { TemplateRef } from '@angular/core';
import { SFUISchemaItem } from '../../schema/ui';

export type SFObjectWidgetRenderType = 'card' | 'default';

export interface SFObjectWidgetSchema extends SFUISchemaItem {
  /**
   * 限 `type === 'card'`，是否显示扩展，点击隐藏内容，默认：`true`
   */
  showExpand?: boolean;
  /**
   * 限 `type === 'card'`，展开状态，默认：`true`
   */
  expand?: boolean;
  /**
   * 是否显示标题，默认：`false`
   */
  showTitle?: boolean;
  /**
   * 渲染类型
   * - `card` 使用 `nz-card` 渲染
   * - `default` 使用默认渲染
   */
  type?: SFObjectWidgetRenderType;
  /**
   * 等同 `nzSize` 属性，默认：`small`
   */
  cardSize?: 'default' | 'small';
  /**
   * 等同 `nzBodyStyle` 属性
   */
  cardBodyStyle?: { [key: string]: string };
  /**
   * 等同 `nzBordered` 属性，默认：`true`
   */
  cardBordered?: boolean;
  /**
   * 等同 `nzExtra` 属性
   */
  cardExtra?: string | TemplateRef<void>;
  /**
   * 等同 `nzActions` 属性
   */
  cardActions?: Array<TemplateRef<void>>;
}
