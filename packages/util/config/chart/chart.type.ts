import { NzSafeAny } from 'ng-zorro-antd/core/types';

export interface AlainChartConfig {
  /**
   * [G2](https://g2.antv.vision/zh/docs/manual/getting-started) library path
   * default: `[
   *  "https://gw.alipayobjects.com/os/lib/antv/g2/4.1.14/dist/g2.min.js",
   *  "https://gw.alipayobjects.com/os/lib/antv/data-set/0.11.8/dist/data-set.js",
   * ]`
   */
  libs?: string[];

  theme?: string | { [key: string]: NzSafeAny };

  /**
   * [ECharts](https://echarts.apache.org/) library path
   * default: `[
   *  "https://cdnjs.cloudflare.com/ajax/libs/echarts/5.1.0/echarts.min.js",
   *  "https://cdnjs.cloudflare.com/ajax/libs/echarts/5.1.0/i18n/langZH.min.js",
   *  "https://cdnjs.cloudflare.com/ajax/libs/echarts/5.1.0/theme/dark.min.js"
   * ]`
   */
  echartsLib?: string;

  /**
   * [ECharts](https://echarts.apache.org/zh/download-extension.html) library path, like i18n, theme etc
   */
  echartsExtensions?: string[];

  /**
   * Theme configuration item, you can load the default theme file with `echartsExtensions`
   *
   * 主题配置项，可以配合 `echartsExtensions` 加载默认的主题文件
   */
  echartsTheme?: string | Record<string, unknown> | null;
}
