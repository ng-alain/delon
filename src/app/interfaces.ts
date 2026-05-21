import type { NzSafeAny } from 'ng-zorro-antd/core/types';

export interface Meta {
  name: string;
  github?: string;
  types: Array<Record<string, string>>;
  list: MetaList[];
  module?: string;
}

export interface MetaList {
  [key: string]: NzSafeAny;

  name?: string;

  i18n?: boolean;

  cols?: number;

  order?: number;

  meta?: Record<string, MetaItem>;
}

export interface MetaItem {
  [key: string]: NzSafeAny;
  title?: string | Record<string, string>;
  type?: string;
  order?: number;
}

export interface MenuGroup {
  index: number;
  title?: string;
  subtitle?: string;
  list: MenuGroupItem[];
}

export interface MenuGroupItem {
  url: string;
  title: string;
  subtitle: Record<string, string>;
  order: number;
  lib: boolean;
  deprecated?: boolean;
  tag?: string;
}
