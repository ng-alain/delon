import type { MetaList } from '../interfaces';

export type SiteTheme = 'default' | 'dark' | 'compact';

export interface MetaItem {
  cols: number;
  urls: Record<string, string>;
  demo: boolean;
  content: Record<string, MetaItemContent>;
}

export interface MetaItemContent {
  content: string;
  api?: string;
  module?: string;
  meta: {
    order: number;
    title: string;
    type: string;
    tag?: string;
    i18n?: string;
    module?: string;
  };
  toc: Array<{
    id: string;
    title: string;
    h: number;
    children?: Array<{
      id: string;
      title: string;
      h: number;
    }>;
  }>;
}

export interface DemoDataItem {
  id: string;
  meta: {
    title: Record<string, string>;
    order: number;
  };
  summary: Record<string, string>;
  code: string;
  lang: string;
  componentName: string;
  point: number;
  name: string;
  urls: string;
  type: 'demo' | 'example';
}

export interface MetaCfg {
  cols: number;
  github: string;
  i18n: boolean;
  list: MetaList[];
  module: string;
  module_name: string;
  name: string;
  order: number;
  title: string;
  subtitle?: string;
  chinese?: string;
  type: string;
}
