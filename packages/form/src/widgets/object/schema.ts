import { TemplateRef } from '@angular/core';

import { SFUISchemaItem } from '../../schema/ui';

export type SFObjectWidgetRenderType = 'card' | 'default';

export interface SFObjectWidgetSchema extends SFUISchemaItem {
  /**
   * 是否显示扩展，点击隐藏内容，默认：`true`
   * - 限 `type === 'card'`
   */
  showExpand?: boolean;
  /**
   * 展开状态，默认：`true`
   * - 限 `type === 'card'`
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
   * 等同 `nzBorderless` 属性，是否移除边框，默认：`false`
   */
  cardBorderless?: boolean;
  /**
   * 等同 `nzExtra` 属性
   */
  cardExtra?: string | TemplateRef<void>;
  /**
   * 等同 `nzActions` 属性
   */
  cardActions?: Array<TemplateRef<void>>;
}
