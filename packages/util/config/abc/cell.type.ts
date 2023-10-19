import type { NzImagePreviewOptions } from 'ng-zorro-antd/image';

export interface AlainCellConfig {
  /**
   * Size
   *
   * 大小
   */
  size?: 'large' | 'small';
  /**
   * Default Text
   *
   * 默认文本
   */
  default?: {
    text?: string;
    condition?: unknown;
  };
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
  currency?: {
    /**
     * The starting unit of the value, `yuan` means 元, `cent` means 分, default: `yuan`
     *
     * 值的起始单位，`yuan` 元，`cent` 分，默认：`yuan`
     */
    startingUnit?: 'yuan' | 'cent';
    /**
     * Using `DEFAULT_CURRENCY_CODE` when value is `true
     *
     * 是否使用 `CurrencyPipe` 来替代
     */
    useAngular?: boolean;
    /**
     * 精度，默认：`2`
     */
    precision?: number;
    /**
     * 是否忽略精度 `.0` 或 `.00` 结尾的字符，默认：`true`
     */
    ingoreZeroPrecision?: boolean;

    /**
     * Use anguar `currency` pipe parse when is set, pls refer to [document](https://angular.io/api/common/CurrencyPipe)
     *
     * 若指定则表示使用 Angular 自带的 `currency` 管道来解析，见[文档](https://angular.cn/api/common/CurrencyPipe)
     */
    ngCurrency?: {
      display: 'code' | 'symbol' | 'symbol-narrow';
      currencyCode?: string;
      digitsInfo?: string;
      locale?: string;
    };
  };

  /**
   * Converted into RMB notation
   *
   * 转化成人民币表示法
   */
  cny?: {
    /**
     * The starting unit of the value, `yuan` means 元, `cent` means 分, default: `yuan`
     *
     * 值的起始单位，`yuan` 元，`cent` 分，默认：`yuan`
     */
    startingUnit?: 'yuan' | 'cent';
    /**
     * Whether to return to uppercase notation, default: `true`
     *
     * 是否返回大写表示法，默认：`true`
     */
    inWords?: boolean;
    /**
     * Specify negative sign, default: `negative`
     *
     * 指定负数符号，默认：`负`
     */
    minusSymbol?: string;
  };

  /**
   * 布尔
   */
  boolean?: {
    yes?: string;
    no?: string;
    mode?: 'full' | 'icon' | 'text';
  };

  /**
   * Image config, support large image preview
   *
   * 图像配置，支持大图预览
   */
  img?: {
    /**
     * 大小，默认：`32`
     */
    size?: number;
    /**
     * 是否允许点击查看大图，默认：`true`
     */
    big?: boolean;

    previewOptions?: NzImagePreviewOptions;
  };

  /**
   * HTML 配置
   */
  html?: {
    safe?: 'text' | 'html' | 'safeHtml';
  };
}
