import { SFRenderSchema } from './schema/ui';

export interface SFButton {
    /** 提交按钮文本，默认：`提交` */
    submit?: string;
    /** 提交按钮类型，默认：`primary` */
    submit_type?: string;
    /** 重置按钮文本，`null `或 `undefined` 表示不需要该按钮，默认：`重置` */
    reset?: string;
    /** 重置按钮类型，默认：`default` */
    reset_type?: string;
    /** 按钮样式，主要用于指定按钮 `grid`、`style` 属性 */
    render?: SFRenderSchema;
}
