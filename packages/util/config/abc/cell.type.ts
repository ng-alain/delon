import type { YNOptions } from '@delon/theme';
import type { CurrencyFormatOptions } from '@delon/util/format';

export interface AlainCellConfig {
  /**
   * 日期
   */
  date?: {
    /**
     * 格式化字符，默认：`yyyy-MM-dd HH:mm:ss`
     */
    format?: string;
  };

  /**
   * 货币
   */
  currency?: CurrencyFormatOptions;

  /**
   * 布尔
   */
  boolean?: YNOptions;

  /**
   * 图像
   */
  img?: {
    /**
     * 大小，默认：`32`
     */
    size?: number;
  };

  /**
   * HTML 配置
   */
  html?: {
    safe?: 'text' | 'html' | 'safeHtml';
  };
}
