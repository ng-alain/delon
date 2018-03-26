export interface ConvertAction {
    type: 'name' | 'attr';
    name: string;
    custom?: (dom: VDom) => void;
    rules: ConvertRule[];
}

export interface ConvertRule {
    /** 操作类型 */
    type: 'name' | 'remove-child' | 'remove-child-template-attr' | 'change-tag-to-text' | 'name-to-attr' | 'attr-to-name' | 'add-template-atrr' | 'extra';
    /** 值对象 */
    value?: string;
    extra_name?: string;
    /** 条件式 */
    condition?: (dom: VDom) => boolean;
    extra_remove_attrs?: string[];
    extra_insert_attrs?: Object;
    extra_replace_attrs?: Object;
    /** {0} 表示属性值点位符 */
    extra_update_attrs?: Object;
}

export interface ConvertResult {
    ok: boolean;
    error?: string;
    result?: string;
}

export interface VDom {
    data?: string;
    /** dom tag */
    type?: string;
    /** tag name */
    name?: string;
    /** tag attributes list */
    attribs?: Object;

    parent?: VDom;

    prev?: VDom;

    next?: VDom;

    children?: VDom[];
}
