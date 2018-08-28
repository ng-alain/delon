import { SimpleTableComponent } from './simple-table.component';
import { ModalHelperOptions } from '@delon/theme';

export type CompareFn = ((a: any, b: any) => number);

export interface SimpleTableLoadOptions {
  /** 是否合并，默认：`false` */
  merge?: boolean;
}

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
   * - `link` 链接，务必指定 `click`
   * - `badge` [徽标](https://ng.ant.design/components/badge/zh)，务必指定 `badge` 参数配置徽标对应值
   * - `tag` [标签](https://ng.ant.design/components/tag/zh)，务必指定 `tag` 参数配置标签对应值
   * - `img` 图片且居中(若 `className` 存在则优先)
   * - `number` 数字且居右(若 `className` 存在则优先)
   * - `currency` 货币且居右(若 `className` 存在则优先)
   * - `date` 日期格式且居中(若 `className` 存在则优先)，使用 `dateFormat` 自定义格式
   * - `yn` 将`boolean`类型徽章化 [document](http://ng-alain.com/docs/data-render#yn)
   */
  type?:
    | 'checkbox'
    | 'link'
    | 'badge'
    | 'tag'
    | 'radio'
    | 'img'
    | 'currency'
    | 'number'
    | 'date'
    | 'yn';
  /**
   * 列标题
   */
  title: string;
  /**
   * 列标题 i18n
   */
  i18n?: string;
  /**
   * 列数据在数据项中对应的 key，支持 `a.b.c` 的嵌套写法，例如：
   * - `id`
   * - `price.market`
   * - `[ 'price', 'market' ]`
   */
  index?: string | string[];
  /**
   * 链接回调，若返回一个字符串表示导航URL会自动触发 `router.navigateByUrl`
   */
  click?: (record: any, instance?: SimpleTableComponent) => any;
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
   * 列宽（数字型表示 `px` 值），例如：`100`、`10%`、`100px`
   *
   * **注意：** 固定列不支持百分比
   */
  width?: string | number;
  /**
   * 排序的默认受控属性
   * - 只支持同时对一列进行排序，除非指定 `multiSort`，建议后端支持时使用
   * - 保证只有一列的 `sort` 值，否则自动获取所有列的第一个值
   */
  sort?: 'ascend' | 'descend';
  /**
   * 排序函数，本地排序使用一个函数(参考 [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 的 compareFunction)
   * - 只有当属性存在时排序才会生效
   * - 如果是AJAX直接返回 true
   */
  sorter?: Function;
  /**
   * 排序的后端相对应的KEY，默认使用 `index` 属性
   * - 若 `multiSort: false` 时：`sortKey: 'name' => ?name=1&pi=1`
   * - 若 `multiSort: true` 允许多个排序 key 存在，或使用 `SimpleTableMultiSort` 进行多key合并
   */
  sortKey?: string;
  /**
   * 排序的后端相对应的VALUE
   * { ascend: '0', descend: '1' } => ?name=1&pi=1
   * { ascend: 'asc', descend: 'desc' } => ?name=desc&pi=1
   */
  sortReName?: { ascend?: string; descend?: string };
  /**
   * 表头的筛选菜单项，至少一项以上才会生效
   */
  filters?: SimpleTableFilter[];
  /**
   * 本地模式下，确定筛选的运行函数
   * - 只有当属性存在时筛选才会真的生效
   * - 如果是AJAX直接返回 true
   */
  filter?: (filter: SimpleTableFilter, record: any) => boolean;
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
   * 日期格式，`type=date` 有效，（默认：`YYYY-MM-DD HH:mm`）
   */
  dateFormat?: string;
  /**
   * 真值条件，`type=yn` 有效，（默认：`true`）
   */
  ynTruth?: any;
  /**
   * 徽章 `true` 时文本，`type=yn` 有效，（默认：`是`）
   */
  ynYes?: string;
  /**
   * 徽章 `false` 时文本，`type=yn` 有效，（默认：`否`）
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
  /**
   * 徽标配置项
   */
  badge?: SimpleTableBadge;
  /**
   * 标签配置项
   */
  tag?: SimpleTableTag;

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
   * 选择项点击回调，允许对参数 `data.checked` 进行操作
   */
  select: (data: SimpleTableData[]) => void;
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
   * - `link` 链接，当 `click` 返回字符串时自动调用 `navigateByUrl` 导航
   */
  type?: 'none' | 'del' | 'modal' | 'static' | 'link';
  /**
   * 点击回调
   * - Function
   *  - `type=modal` 只会在当有传回值时才会触发回调
   * - reload：重新刷新当前页
   * - load：重新加载数据，并重置页码为：`1`
   */
  click?:
    | 'reload'
    | 'load'
    | ((record: any, modal?: any, instance?: SimpleTableComponent) => any);
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
   * 对话框额外参数
   */
  modal?: ModalHelperOptions;
  /**
   * 对话框大小，默认：`lg`
   *
   * @deprecated 使用 `options.size` 替代
   */
  size?: 'sm' | 'lg' | '' | number;
  /**
   * 对话框额外参数，见 [ModalHelper](http://ng-alain.com/docs/service#ModalHelper)
   *
   * @deprecated 使用 `options.modalOptions` 替代
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
  iif?: (
    item: any,
    btn: SimpleTableButton,
    column: SimpleTableColumn,
  ) => boolean;

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
  _d?: any[];
  _c?: SimpleTableColumn[];
  /** 工作溥名 */
  sheetname?: string;
  /** 文件名 */
  filename?: string;
  /** triggers when saveas */
  callback?: (wb: any) => void;
}

/**
 * 多排序相同排序 key 时合并规则
 */
export interface SimpleTableMultiSort {
  /** 请求参数名，默认：`sort` */
  key?: string;
  /** 不同属性间分隔符，默认：`-` */
  separator?: string;
  /** 列名与状态间分隔符，默认：`.` */
  name_separator?: string;
}

/**
 * 徽标信息
 */
export interface SimpleTableBadge {
  [key: number]: SimpleTableBadgeValue;
  [key: string]: SimpleTableBadgeValue;
}

export interface SimpleTableBadgeValue {
  /**
   * 文本
   */
  text?: string;
  /**
   * 徽标颜色值
   */
  color?: 'success' | 'processing' | 'default' | 'error' | 'warning';
}

/**
 * 标签信息
 */
export interface SimpleTableTag {
  [key: number]: SimpleTableTagValue;
  [key: string]: SimpleTableTagValue;
}

export interface SimpleTableTagValue {
  /**
   * 文本
   */
  text?: string;
  /**
   * 颜色值，支持预设和色值
   * - 预设：geekblue,blue,purple,success,red,volcano,orange,gold,lime,green,cyan
   * - 色值：#f50,#ff0
   */
  color?:
    | 'geekblue'
    | 'blue'
    | 'purple'
    | 'success'
    | 'red'
    | 'volcano'
    | 'orange'
    | 'gold'
    | 'lime'
    | 'green'
    | 'cyan'
    | string;
}

/** 行单击参数 */
export interface SimpleTableRowClick {
  e?: Event;
  item?: SimpleTableData;
  index?: number;
}
