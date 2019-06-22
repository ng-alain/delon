export interface LocaleData {
  [key: string]: any;
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
  filterConfirm: string;
  filterReset: string;
}

export interface SFLocaleData extends LocaleData {
  submit: string;
  reset: string;
  search: string;
  edit: string;
  addText: string;
  removeText: string;
  checkAllText: string;
  error: SFErrorLocaleData;
}

export interface SFErrorLocaleData extends LocaleData {
  'false schema': string;
  $ref: string;
  additionalItems: string;
  additionalProperties: string;
  anyOf: string;
  dependencies: string;
  enum: string;
  format: string;
  type: string;
  required: string;
  maxLength: string;
  minLength: string;
  minimum: string;
  formatMinimum: string;
  maximum: string;
  formatMaximum: string;
  maxItems: string;
  minItems: string;
  maxProperties: string;
  minProperties: string;
  multipleOf: string;
  not: string;
  oneOf: string;
  pattern: string;
  uniqueItems: string;
  custom: string;
  propertyNames: string;
  patternRequired: string;
  switch: string;
  const: string;
  contains: string;
  formatExclusiveMaximum: string;
  formatExclusiveMinimum: string;
  if: string;
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
