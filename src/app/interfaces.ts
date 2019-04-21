export interface Meta {
  name?: string;
  github?: string;
  types?: Array<{ [key: string]: string }>;
  list?: MetaList[];
  module?: string;
}

export interface MetaList {
  [key: string]: any;

  name?: string;

  i18n?: boolean;

  cols?: number;

  order?: number;

  meta?: { [key: string]: MetaItem };
}

export interface MetaItem {
  [key: string]: any;
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
