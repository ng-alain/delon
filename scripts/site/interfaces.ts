export interface SiteConfig {
  /** github 项目地址 */
  github: string;
  /** 默认语言 */
  defaultLang: string;
  /** 语言清单 */
  langs: string[];
  /** 生成目录最大深度 */
  tocMaxDepth: number;
  template: {
    examples: string;
    examples_index: string;
  };
  modules: ModuleConfig[];
}

export interface TemplateConfig {
  /** 元数据模板 */
  meta: string;
  /** 内容模板 */
  content: string;
  /** 模板模板 */
  module: string;
}

export interface ModuleConfig {
  /** 模块名称 */
  name: string;
  github: string;
  /** 生成目标位置 */
  dist: string;
  /** 分类数据 */
  types: { [key: string]: string }[];
  /** 默认路由 */
  defaultRoute: string;
  /** 额外路由元数据 */
  extraRouteMeta?: any[];
  /** 模块名称，例如：`@delon/abc` */
  module: string;
  /** 元数据包含属性 */
  metaIncludeAttributes: string[];
  /** 模板路径 */
  template: TemplateConfig;
  dir: ModuleDirConfig[];
}

export interface ModuleDirConfig {
  /** 源码位置 */
  src: string[];
  /** 忽略项 */
  ignores: string[];
  /** 模板路径 */
  template: TemplateConfig;
  /** 是否包含子目录 */
  hasSubDir: boolean;
}

export interface Langs {
  [key: string]: any;
}

export interface MetaOriginal {
  /** 示例顺序 */
  order: number;
  /** 示例栏数 */
  cols: number;
  /** 标题 */
  title: string | { [key: string]: any };
  /** 分类 */
  type: string;

  [key: string]: any;
}

export interface Meta {
  /** 名称 */
  name: string;
  /** 是否已经包含国际化 */
  i18n: boolean;
  /** 示例顺序 */
  order: number;
  /** 示例栏数 */
  cols: number;
  /** 原始元数据 */
  meta: MetaOriginal;
}

export interface MetaTemplateData {
  data: string;
}

export interface ContentTemplateData {
  componentName: string;
  selector: string;
  /** 数据项 */
  item: string;
  /** 是否有DEMO */
  demo: boolean;
  /** DEMO代码 */
  demos?: string;
  /**  */
  codes?: string;
}

export interface ModuleTemplateData {
  /** 名称 */
  name: string;
  /** 模块名称 */
  moduleName: string;
  /** 所有导入信息 */
  imports: string;
  /** 所有组件名列表 */
  components: string;
  /** 所有路由列表 */
  routes: string;
}

export interface ExampleModules {
  list: any[];
  [key: string]: any;
}
