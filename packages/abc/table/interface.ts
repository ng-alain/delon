import { NaTableComponent } from './table.component';
import { ModalHelperOptions } from '@delon/theme';
import { ModalOptionsForService } from 'ng-zorro-antd';

export interface NaTableReq {
  /**
   * 额外请求参数，默认自动附加 `pi`、`ps` 至URL
   * - `{ status: 'new' }` => `url?pi=1&ps=10&status=new`
   */
  params?: any;
  /** 请求方法，默认：`GET` */
  method?: string;
  /** 请求体 `body` */
  body?: any;
  /** 请求体 `Header` */
  headers?: any;
  /**
   * 重命名参数 `pi`、`ps`，默认：`{ pi: 'pi', ps: 'ps' }`
   * - `{ pi: 'Page' }` => `pi` 会被替换成 Page
   */
  reName?: NaTableReqReNameType;
  /**
   * 是否将请求所有参数数据都放入 `body` 当中（`url` 地址本身参数除外），仅当 `method: 'POST'` 时有效，默认：`false`
   */
  allInBody?: boolean;
}

export interface NaTableLoadOptions {
  /** 是否合并，默认：`false` */
  merge?: boolean;
}

export interface NaTableRes {
  /**
   * 重命名返回参数 `total`、`list`
   * - `{ total: 'Total' }` => Total 会被当作 `total`
   */
  reName?: NaTableResReNameType;
  /**
   * 数据预处理
   */
  process?: (data: NaTableData[]) => NaTableData[];
}

export interface NaTablePage {
  /**
   * 前端分页，当 `data` 为`any[]` 或 `Observable<any[]>` 有效，默认：`true`
   * - `true` 由 `na-table` 根据 `data` 长度受控分页，包括：排序、过滤等
   * - `false` 由用户通过 `total` 和 `data` 参数受控分页，并维护 `(change)` 当分页变更时重新加载数据
   */
  front?: boolean;
  /**
   * 后端分页是否采用`1`基索引，只在`data`类型为`string`时有效，默认：`false`
   */
  zeroIndexed?: boolean;
  /**
   * 分页方向，默认：`right`
   */
  placement?: 'left' | 'center' | 'right';
  /**
   * 是否显示分页器，默认：`true`
   */
  show?: boolean;
  /**
   * 是否显示分页器中改变页数，默认：`false`
   */
  showSize?: boolean;
  /**
   * 分页器中每页显示条目数下拉框值，默认：`[10, 20, 30, 40, 50]`
   */
  pageSizes?: number[];
  /**
   * 是否显示pagination中快速跳转，默认：`false`
   */
  showQuickJumper?: boolean;
  /**
   * 是否显示总数据量
   * - `boolean` 类型显示与否，默认模板：`共 {{total}} 条`
   * - `string` 自定义模板，模板变量：
   *  - `{{total}}` 表示数据总量
   *  - `{{range[0]}}` 表示当前页开始数量值
   *  - `{{range[1]}}` 表示当前页结束数量值
   */
  total?: string | boolean;
  /**
   * 数据变更后是否保留在数据变更前的页码，默认：`true`
   * @deprecated
   */
  indexReset?: boolean;
  /**
   * 切换分页时返回顶部，默认：`true`
   */
  toTop?: boolean;
  /**
   * 返回顶部偏移值，默认：`100`
   */
  toTopOffset?: number;
}

/**
 * 数据源
 */
export interface NaTableData {
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
export interface NaTableColumn {
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
   * 链接回调，若返回一个字符串表示导航URL会自动触发 `router.navigateByUrl`
   */
  click?: (record: any, instance?: NaTableComponent) => any;
  /**
   * 按钮组
   */
  buttons?: NaTableColumnButton[];
  /**
   * 自定义渲染ID
   * @example
   * <ng-template st-row="custom" let-item let-index="index" let-column="column">
   *  {{ c.title }}
   * </ng-template>
   */
  render?: string;
  /**
   * 标题自定义渲染ID
   * @example
   * <ng-template st-row="custom" type="title" let-c>
   *  {{ item | json }}
   * </ng-template>
   */
  renderTitle?: string;
  /**
   * 列宽（数字型表示 `px` 值），例如：`100`、`10%`、`100px`
   *
   * **注意：** 固定列不支持百分比
   */
  width?: string | number;
  /**
   * 排序配置项，远程数据配置**优先**规则：
   * - `true` 表示允许排序
   * - `string` 表示远程数据排序相对应 `key` 值
   */
  sort?: true | string | NaTableColumnSort;
  /**
   * 过滤配置项
   */
  filter?: NaTableColumnFilter;
  /**
   * 格式化列值
   */
  format?: Function;
  /**
   * 自定义全/反选选择项
   */
  selections?: NaTableColumnSelection[];
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
   * 当 `type=yn` 有效
   */
  yn?: NaTableColumnYn;
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
  badge?: NaTableColumnBadge;
  /**
   * 标签配置项
   */
  tag?: NaTableColumnTag;

  [key: string]: any;
}

export interface NaTableColumnSort {
  /**
   * 排序的默认受控属性
   */
  default?: 'ascend' | 'descend';
  /**
   * 本地数据的排序函数，使用一个函数(参考 [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 的 compareFunction)
   */
  compare?: (a: any, b: any) => number;
  /**
   * 远程数据的排序时后端相对应的KEY，默认使用 `index` 属性
   * - 若 `multiSort: false` 时：`key: 'name' => ?name=1&pi=1`
   * - 若 `multiSort: true` 允许多个排序 key 存在，或使用 `NaTableMultiSort` 指定多列排序key合并规则
   */
  key?: string;
  /**
   * 远程数据的排序时后端相对应的VALUE
   * - `{ ascend: '0', descend: '1' }` 结果 `?name=1&pi=1`
   * - `{ ascend: 'asc', descend: 'desc' }` 结果 `?name=desc&pi=1`
   */
  reName?: { ascend?: string; descend?: string };
}

export interface NaTableColumnFilter {
  /**
   * 表头的筛选菜单项，至少一项才会生效
   */
  menus: NaTableColumnFilterMenu[];
  /**
   * 本地数据的筛选函数
   */
  fn?: (filter: NaTableColumnFilterMenu, record: any) => boolean;
  /**
   * 标识数据是否已过滤，筛选图标会高亮
   */
  default?: boolean;
  /**
   * 自定义 filter 图标，默认 `anticon anticon-filter`
   */
  icon?: string;
  /**
   * 确认按钮文本，默认 `确认`
   */
  confirmText?: string;
  /**
   * 清除按钮文本，默认 `重置`
   */
  clearText?: string;
  /**
   * 是否多选，默认 `true`
   */
  multiple?: boolean;
  /**
   * 远程数据的过滤时后端相对应的KEY，默认使用 `index` 属性
   * `key: 'name'` 结果 `?name=1&pi=1`
   */
  key?: string;
  /**
   * 远程数据的过滤时后端相对应的VALUE
   * - 默认当 `multiple: true` 时以英文逗号拼接的字符串
   * @return 返回为 Object 对象
   */
  reName?: (list: NaTableColumnFilterMenu[], col: NaTableColumn) => Object;
}

export interface NaTableColumnFilterMenu {
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

export interface NaTableColumnSelection {
  /**
   * 选择项显示的文字
   */
  text: string;
  /**
   * 选择项点击回调，允许对参数 `data.checked` 进行操作
   */
  select: (data: NaTableData[]) => void;
  /** 权限，等同 `can()` 参数值 */
  acl?: any;
}

/** 当 `type=yn` 有效 */
export interface NaTableColumnYn {
  /**
   * 真值条件，（默认：`true`）
   */
  truth?: any;
  /**
   * 徽章 `true` 时文本，（默认：`是`）
   */
  yes?: string;
  /**
   * 徽章 `false` 时文本，（默认：`否`）
   */
  no?: string;
}

/**
 * 按钮配置
 */
export interface NaTableColumnButton {
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
  format?: (record: any, btn: NaTableColumnButton) => string;
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
    | ((record: any, modal?: any, instance?: NaTableComponent) => any);
  /**
   * 是否需要气泡确认框
   */
  pop?: boolean;
  /**
   * 气泡确认框内容，默认 `确认删除吗？`
   */
  popTitle?: string;
  /**
   * 对话框参数
   */
  modal?: NaTableColumnButtonModal;
  /**
   * 下拉菜单，当存在时以 `dropdown` 形式渲染
   * - 只支持一级
   */
  children?: NaTableColumnButton[];
  /**
   * 权限，等同 `can()` 参数值
   */
  acl?: any;
  /**
   * 条件表达式，较高调用频率，请勿过多复杂计算免得产生性能问题
   */
  iif?: (
    item: any,
    btn: NaTableColumnButton,
    column: NaTableColumn,
  ) => boolean;

  [key: string]: any;
}

export interface NaTableColumnButtonModal extends ModalHelperOptions {
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
  paramsName?: string;
}

export interface NaTableColumnButtonModalConfig {
  /**
   * 指定模态框目标组件的接收参数名，默认：`record`
   */
  paramsName?: string;
  /** 大小；例如：lg、600，默认：`lg` */
  size?: 'sm' | 'md' | 'lg' | 'xl' | '' | number;
  /** 对话框 [ModalOptionsForService](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/modal/nz-modal.type.ts) 参数 */
  modalOptions?: ModalOptionsForService;
  /** 是否精准（默认：`true`），若返回值非空值（`null`或`undefined`）视为成功，否则视为错误 */
  exact?: boolean;
}

export interface NaTableReqReNameType {
  pi?: string;
  ps?: string;
}

export interface NaTableResReNameType {
  total?: string | string[];
  list?: string | string[];
}

export interface NaTableExportOptions {
  _d?: any[];
  _c?: NaTableColumn[];
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
export interface NaTableMultiSort {
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
export interface NaTableColumnBadge {
  [key: number]: NaTableColumnBadgeValue;
  [key: string]: NaTableColumnBadgeValue;
}

export interface NaTableColumnBadgeValue {
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
export interface NaTableColumnTag {
  [key: number]: NaTableColumnTagValue;
  [key: string]: NaTableColumnTagValue;
}

export interface NaTableColumnTagValue {
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

export type NaTableChangeType = 'pi' | 'ps' | 'checkbox' | 'radio' | 'sort' | 'filter' | 'click' | 'dblClick';

/**
 * 回调数据
 */
export interface NaTableChange {
  /**
   * 回调类型
   */
  type: NaTableChangeType;
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
  /**
   * `checkbox` 参数
   */
  checkbox?: NaTableData[];
  /**
   * `radio` 参数
   */
  radio?: NaTableData;
  /**
   * 排序参数
   */
  sort?: NaTableChangeSort;
  /**
   * 过滤参数
   */
  filter?: NaTableColumn;
  /**
   * 行点击或双击参数
   */
  click?: NaTableChangeRowClick;
}

/** 行单击参数 */
export interface NaTableChangeSort {
  value?: 'ascend' | 'descend';
  map?: { [key: string]: string };
  column?: NaTableColumn;
}

/** 行单击参数 */
export interface NaTableChangeRowClick {
  e?: Event;
  item?: NaTableData;
  index?: number;
}

export interface NaTableError {
  type?: 'req';
  error?: any;
}
