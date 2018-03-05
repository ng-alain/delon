/** 额外参数选项 */
export interface NumberToChineseOptions {
    /** 指定负数符号，默认：`负` */
    minusSymbol?: string;
    /** 当传递值无法数值时抛出异常，默认：`false` */
    validThrow?: boolean;
}
