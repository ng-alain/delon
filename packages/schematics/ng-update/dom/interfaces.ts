export interface VDom {
  data?: string;
  /** dom tag */
  type?: string;
  /** tag name */
  name?: string;
  /** tag attributes list */
  attribs?: {};

  parent?: VDom;

  prev?: VDom;

  next?: VDom;

  children?: VDom[];
}

export interface ConvertAction {
  type: 'tag' | 'attr';
  name: string;
  custom?: (dom: VDom) => void;
  rules?: ConvertRule[];
}

export type ConvertRuleType =
  | 'name'
  | 'attr-name'
  | 'remove-child'
  | 'remove-wrap-element-by-class'
  | 'remove-child-template-attr'
  | 'change-tag-to-text'
  | 'name-to-attr'
  | 'attr-to-name'
  | 'add-template-atrr'
  | 'add-content-to-template'
  | 'add-prefix-name-template'
  | 'class-name'
  | 'extra';

export interface ConvertRule {
  /** 操作类型 */
  type: ConvertRuleType;
  /** 值 */
  value?: string;
  /** 新值 */
  newValue?: string;
  extra_name?: string;
  /** 条件式 */
  condition?: (dom: VDom) => boolean;
  extra_remove_attrs?: string[];
  extra_insert_attrs?: {};
  extra_replace_attrs?: {};
  /** {0} 表示属性值点位符 */
  extra_update_attrs?: {};
}
