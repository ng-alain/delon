import type { NzSafeAny } from 'ng-zorro-antd/core/types';

export interface Meta {
  name?: string;
  github?: string;
  types?: Array<{ 'zh-CN': string; 'en-US': string; [key: string]: NzSafeAny }>;
  list?: MetaList[];
  module?: string;
}

export interface MetaList {
  [key: string]: NzSafeAny;

  name?: string;

  i18n?: boolean;

  cols?: number;

  order?: number;

  meta?: { [key: string]: MetaItem };
}

export interface MetaItem {
  [key: string]: NzSafeAny;
  title?: string | { [key: string]: string };
  type?: string;
  order?: number;
}

export interface MetaSearchGroup {
  title?: string;
  type?: string;
  children?: MetaSearchGroupItem[];
}

export interface MetaSearchGroupItem {
  title?: string;
  name?: string;
  url?: string;
}
