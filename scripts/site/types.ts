export interface ModuleDoc {
  name: string;
  github: string;
  defaultRoute: string;
  /** 组别 */
  groups: Array<Record<string, string>>;
  docs: ModuleDocItem[];
}

export interface ModuleDocItem {
  id: string;
  name: string;
  /** 支持语言列表，例如：`zh-CN`,`en-US` */
  langs: string[];
  /** `key` 表示语言 */
  content: Record<string, ModuleDocContent>;
  demos: ModuleDocDemoItem[];
}

export interface ModuleDocContent {
  meta: ModuleDocMeta;
  text: string;
  toc: ModuleDocToc[];
}

export interface ModuleDocMeta {
  /** 标题 */
  title: string;
  /** 子标题，当中文时有效 */
  subtitle?: string;
  /** 描述 */
  description?: string;
  /** 组别，指向元数据中的 `Type` */
  group?: string;
  /** 是否已经包含国际化 */
  i18n?: string;
  /** 顺序 */
  order: number;
  /** 示例栏数 */
  cols?: number;
  /** 标签 */
  tag?: string;
  /** 模块导入代码 */
  module?: string;
  /** 是否过期 */
  deprecated?: boolean;
  /** 跳转 URL */
  url?: string;
}

export interface ModuleDocToc {
  title: string;
  children?: ModuleDocToc[];
}

export interface ModuleDocDemoItem {
  id: string;
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

export interface ModuleResMeta {
  name: string;
  github: string;
  groups: Array<Record<string, string>>;
  list: ModuleResMetaItem[];
}

export interface ModuleResMetaItem {
  groupIndex: number;
  name: string;
  order: number;
  redirect?: string;
  meta: Record<string, Partial<ModuleDocMeta>>;
}

export interface ModuleResDoc {
  name: string;
  /** 支持语言列表，例如：`zh-CN`,`en-US` */
  langs: string[];
  /** `key` 表示语言 */
  content: Record<string, ModuleDocContent>;
}
