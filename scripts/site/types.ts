export interface DocItem {
  /** 支持语言列表，例如：`zh-CN`,`en-US` */
  langs: string[];
  /** 元数据，`key` 表示语言 */
  meta: Record<string, DocMeta>;
  content: Record<string, string>;
  toc: Record<string, DocToc[]>;
  demos: DocDemoItem[];
}

export interface DocMeta {
  /** 文档类型 */
  t: 'd' | 'c';
  /** 标题 */
  title: string;
  /** 子标题，当中文时有效 */
  subtitle?: string;
  /** 描述 */
  description?: string;
  /** 组别，指向元数据中的 `Type` */
  group?: string;
  /** 是否已经包含国际化 */
  i18n: string;
  /** 顺序 */
  order: number;
  /** 示例栏数 */
  cols: number;
  /** 标签 */
  tag?: string;
  /** 模块导入代码 */
  module?: string;
  /** 是否过期 */
  deprecated?: boolean;
  /** 跳转 URL */
  url?: string;
}

export interface DocToc {
  title: string;
  children?: DocToc[];
}

export interface DocDemoItem {
  componentName: string;
  name: string;
  /** 标题，`key` 表示语言 */
  title: Record<string, string>;
  /** 描述，`key` 表示语言 */
  summary: Record<string, string>;
  /** 示例代码 */
  code: string;
  order: number;
  type: 'demo' | 'example';
}
