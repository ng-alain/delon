export interface LocaleData {
  [key: string]: string;
}

export interface ExceptionLocaleData extends LocaleData {
  403: string;
  404: string;
  500: string;
  backToHome: string;
}

export interface NoticeIconLocaleData extends LocaleData {
  emptyText: string;
  clearText: string;
}

export interface ReuseTabLocaleData extends LocaleData {
  close: string;
  closeOther: string;
  closeRight: string;
  clear: string;
}

export interface TagSelectLocaleData extends LocaleData {
  expand: string;
  collapse: string;
}

export interface MiniProgressLocaleData extends LocaleData {
  target: string;
}

export interface STLocaleData extends LocaleData {
  total: string;
}

export interface SFLocaleData extends LocaleData {
  submit: string;
  reset: string;
  search: string;
  edit: string;
  addText: string;
  removeText: string;
  checkAllText: string;
}

export interface FullLocaleData {
  abbr: string;
  exception: ExceptionLocaleData;
  noticeIcon: NoticeIconLocaleData;
  reuseTab: ReuseTabLocaleData;
  tagSelect: TagSelectLocaleData;
  miniProgress: MiniProgressLocaleData;
  st: STLocaleData;
  sf: SFLocaleData;
}
