export interface SiteConfig {
  /** github 项目地址 */
  github: string;
  /** 默认语言 */
  defaultLang: string;
  /** 语言清单 */
  langs: string[];
  /** 生成目录最大深度 */
  tocMaxDepth: number;
  dist: string;
  template: {
    examples: string;
    examples_index: string;
  };
  modules: ModuleConfig[];
}

export interface TemplateConfig {
  /** 元数据模板 */
  meta?: string;
  /** 内容模板 */
  content?: string;
  /** 模板模板 */
  module?: string;
}

export interface ModuleConfig {
  /** 模块名称 */
  name: string;
  github: string;
  /** 生成目标位置 */
  dist: string;
  /** 分类数据 */
  types: Array<Record<string, string>>;
  /** 默认路由 */
  defaultRoute: string;
  /** 额外路由元数据 */
  extraRouteMeta?: any[];
  /** 模块名称，例如：`@delon/abc` */
  module: string;
  /** 元数据包含属性 */
  metaIncludeAttributes: string[];
  /** 模板路径 */
  template?: TemplateConfig;
  /** 是否按 standalone 生成 */
  standalone?: boolean;
  dir: ModuleDirConfig[];
}

export interface ModuleDirConfig {
  /** 源码位置 */
  src: string[];
  /** 忽略项 */
  ignores: string[];
  /** 模板路径 */
  template?: TemplateConfig;
  /** 是否包含子目录 */
  hasSubDir: boolean;
  reName?: string;
}

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
  api?: string;
  toc: ModuleDocToc[];
}

export interface ModuleDocMeta {
  /** 标题 */
  title: string;
  /** 子标题，当中文时有效 */
  subtitle?: string;
  /** 描述 */
  description?: string;
  rawDescription?: string;
  /** 组别，指向元数据中的 `Type` */
  group?: string;
  type?: string;
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
  redirect?: string;
  lib?: boolean;
  path?: string;
  url?: string;
  __content?: string;
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
  path: string;
  browser?: boolean;
  bg?: string;
  type: 'demo' | 'example';
}

export interface ModuleDocToc {
  id: string;
  title: string;
  children?: ModuleDocToc[];
}

export interface ModuleMenu {
  name: string;
  github: string;
  menu: { zh: ModuleMenuGroup[]; en: ModuleMenuGroup[] };
}

export type ModuleMenuGroupItem = Pick<
  ModuleDocMeta,
  'title' | 'subtitle' | 'tag' | 'deprecated' | 'redirect' | 'lib' | 'url'
>;

export interface ModuleMenuGroup {
  name: string;
  items: ModuleMenuGroupItem[];
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
