import { SimpleTableComponent } from './simple-table.component';
import { ElementRef, TemplateRef } from '@angular/core';

export type CompareFn = ((a: any, b: any) => number);

/**
 * 数据源
 */
export interface SimpleTableData {
    /**
     * 选择框或单选框状态值
     */
    checked?: boolean;
    /**
     * 选择框或单选框 `disabled` 值
     */
    disabled?: boolean;

    [key: string]: any;
}

/**
 * 列描述
 */
export interface SimpleTableColumn {
    /**
     * 类型
     * - `checkbox` 多选
     * - `radio` 单选
     * - `link` 链接，可触发 `click`
     * - `img` 图片且居中(若 `className` 存在则优先)
     * - `number` 数字且居右(若 `className` 存在则优先)
     * - `currency` 货币且居右(若 `className` 存在则优先)
     * - `date` 日期格式且居中(若 `className` 存在则优先)
     * - `yn` 将`boolean`类型徽章化 [document](http://ng-alain.com/docs/data-render#yn)
     */
    type?: 'checkbox' | 'link' | 'radio' | 'img' | 'currency' | 'number' | 'date' | 'yn';
    /**
     * 列标题
     */
    title: string;
    /**
     * 列标题 i18n
     */
    i18n?: string;
    /**
     * 列数据在数据项中对应的 key，支持 `a.b.c` 的嵌套写法
     */
    index?: string | string[];
    /**
     * 链接回调
     */
    click?: (record: any, instance?: SimpleTableComponent) => void;
    /**
     * 按钮组
     */
    buttons?: SimpleTableButton[];
    /**
     * 自定义渲染ID
     * @example
     * ```html
     * <ng-template st-row="custom" let-item let-index="index" let-column="column">
     *  {{ c.title }}
     * </ng-template>
     * ```
     */
    render?: string;
    /**
     * 标题自定义渲染ID
     * @example
     * ```html
     * <ng-template st-row="custom" type="title" let-c>
     *  {{ item | json }}
     * </ng-template>
     * ```
     */
    renderTitle?: string;
    /**
     * 列宽，例如：`10%`、`100px`
     */
    width?: string;
    /**
     * 排序的默认受控属性
     * - 只支持同时对一列进行排序，除非指定 `multiSort`，建议后端支持时使用
     * - 保证只有一列的 `sort` 值，否则自动获取所有列的第一个值
     */
    sort?: 'ascend' | 'descend';
    /**
     * 排序函数，本地排序使用一个函数(参考 [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 的 compareFunction)
     * - 只有当属性存在时排序才会真的生效
     * - 如果是AJAX直接返回 true
     */
    sorter?: Function;
    /**
     * 排序的后端相对应的KEY，默认使用 `index` 属性
     * sortKey: 'name' => ?name=1&pi=1
     */
    sortKey?: string;
    /**
     * 排序的后端相对应的VALUE
     * { ascend: '0', descend: '1' } => ?name=1&pi=1
     * { ascend: 'asc', descend: 'desc' } => ?name=desc&pi=1
     */
    sortReName?: { ascend?: string, descend?: string };
    /**
     * 表头的筛选菜单项，至少一项以上才会生效
     */
    filters?: SimpleTableFilter[];
    /**
     * 本地模式下，确定筛选的运行函数
     * - 只有当属性存在时筛选才会真的生效
     * - 如果是AJAX直接返回 true
     */
    filter?: Function;
    /**
     * 标识数据是否经过过滤，筛选图标会高亮
     */
    filtered?: boolean;
    /**
     * 自定义 filter 图标，默认 `anticon anticon-filter`
     */
    filterIcon?: string;
    /**
     * filter 确认按钮文本，默认 `确认`
     */
    filterConfirmText?: string;
    /**
     * filter 清除按钮文本，默认 `重置`
     */
    filterClearText?: string;
    /**
     * 是否多选，默认 `true`
     */
    filterMultiple?: boolean;
    /**
     * 过滤的后端相对应的KEY，默认使用 `index` 属性
     * filterKey: 'name' => ?name=1&pi=1
     */
    filterKey?: string;
    /**
     * 过滤的后端相对应的VALUE
     * - 默认当 `filterMultiple` 时以英文逗号拼接的字符串
     * - 参数为 `filters` 原样数组
     * - 返回为 Object 对象
     */
    filterReName?: (list: SimpleTableFilter[], col: SimpleTableColumn) => Object;
    /**
     * 格式化列值
     */
    format?: Function;
    /**
     * 自定义全/反选选择项
     */
    selections?: SimpleTableSelection[];
    /**
     * 列 `class` 属性值（注：无须 `.` 点），例如：
     * - `text-center` 居中
     * - `text-right` 居右
     * - `text-success` 成功色
     * - `text-danger` 异常色
     */
    className?: string;
    /**
     * 合并列
     */
    colSpan?: number;
    /**
     * 数字格式，`type=number` 有效
     */
    numberDigits?: string;
    /**
     * 日期格式，`type=date` 有效，（默认：YYYY-MM-DD HH:mm）
     */
    dateFormat?: string;
    /**
     * 真值条件，`type=yn` 有效，（默认：`true`）
     */
    ynTruth?: any;
    /**
     * 徽章 `true` 时文本，`type=yn` 有效，（默认：是）
     */
    ynYes?: string;
    /**
     * 徽章 `false` 时文本，`type=yn` 有效，（默认：否）
     */
    ynNo?: string;
    /**
     * 是否允许导出，默认 `true`
     */
    exported?: boolean;
    /** 权限，等同 `can()` 参数值 */
    acl?: any;
    /** 当不存在数据时以默认值替代 */
    default?: string;
    /**
     * 固定前后列，当指定时务必指定 `width` 否则视为无效，有若干 **注意：** 项：
     *
     * - 若列头与内容不对齐或出现列重复，请指定列的宽度 `width`
     * - 建议指定 `scroll.x` 为大于表格宽度的固定值或百分比。注意，且非固定列宽度之和不要超过 `scroll.x`
     */
    fixed?: 'left' | 'right';

    [key: string]: any;
}

/**
 * 选择功能配置
 */
export interface SimpleTableSelection {
    /**
     * 选择项显示的文字
     */
    text: string;
    /**
     * 选择项点击回调
     */
    select: Function;
    /** 权限，等同 `can()` 参数值 */
    acl?: any;
}

/**
 * 过滤项配置
 */
export interface SimpleTableFilter {
    /**
     * 文本
     */
    text: string;
    /**
     * 值
     */
    value?: any;
    /**
     * 是否选中
     */
    checked?: boolean;
    /** 权限，等同 `can()` 参数值 */
    acl?: any;

    [key: string]: any;
}

/**
 * 按钮配置
 */
export interface SimpleTableButton {
    /**
     * 文本
     */
    text: string;
    /**
     * 文本 i18n
     */
    i18n?: string;
    /**
     * 格式化文本，较高调用频率，请勿过多复杂计算免得产生性能问题
     */
    format?: (record: any, btn: SimpleTableButton) => string;
    /**
     * 按钮类型
     * - `none` 无任何互动
     * - `del` 删除，默认开启 `pop: true`
     * - `modal` 对话框，需要指定 `component` 才会生效
     * - `static` 静态对话框，需要指定 `component` 才会生效
     */
    type?: 'none' | 'del' | 'modal' | 'static';
    /**
     * 点击回调
     * - Function
     *  - `type=modal` 只会在当有传回值时才会触发回调
     * - reload：重新加载表格数据
     */
    click?: 'reload' | ((record: any, modal?: any, instance?: SimpleTableComponent) => void);
    /**
     * 是否需要气泡确认框
     */
    pop?: boolean;
    /**
     * 气泡确认框内容，默认 `确认删除吗？`
     */
    popTitle?: string;
    /**
     * 对话框组件对象，务必在 `entryComponents` 注册
     */
    component?: any;
    /**
     * 对话框参数
     */
    params?: (record: any) => Object;
    /**
     * 指定模态框目标组件的接收参数名，默认：`record`
     */
    paramName?: string;
    /**
     * 对话框大小，默认：`lg`
     */
    size?: 'sm' | 'lg' | '' | number;
    /**
     * 对话框额外参数，见 [ModalHelper](http://ng-alain.com/docs/service#ModalHelper)
     */
    modalOptions?: any;
    /**
     * 下拉菜单，当存在时以 `dropdown` 形式渲染
     * - 只支持一级
     */
    children?: SimpleTableButton[];
    /**
     * 权限，等同 `can()` 参数值
     */
    acl?: any;
    /**
     * 条件表达式，较高调用频率，请勿过多复杂计算免得产生性能问题
     */
    if?: (item: any, btn: SimpleTableButton, column: SimpleTableColumn) => boolean;

    [key: string]: any;
}

/**
 * 回调数据
 */
export interface SimpleTableChange {
    /**
     * 回调类型
     */
    type: 'pi' | 'ps';
    /**
     * 当前页码
     */
    pi: number;
    /**
     * 每页数量
     */
    ps: number;
    /**
     * 数据总量
     */
    total: number;
}

export interface ReqReNameType {
    pi?: string;
    ps?: string;
}

export interface ResReNameType {
    total?: string | string[];
    list?: string | string[];
}

export interface STExportOptions {
    _d: any[];
    _c: SimpleTableColumn[];
    /** 工作溥名 */
    sheetname?: string;
    /** 文件名 */
    filename?: string;
    /** triggers when saveas */
    callback?: (wb: any) => void;
}
