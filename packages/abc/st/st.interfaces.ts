import { HttpHeaders, HttpParams } from '@angular/common/http';
import { ElementRef, TemplateRef } from '@angular/core';
import { ACLCanType } from '@delon/acl';
import { DrawerHelperOptions, ModalHelperOptions, YNMode } from '@delon/theme';
import { CurrencyFormatOptions } from '@delon/util/format';
import { NzDrawerOptions } from 'ng-zorro-antd/drawer';
import { ModalOptions } from 'ng-zorro-antd/modal';
import { PaginationItemRenderContext } from 'ng-zorro-antd/pagination';
import { NzTablePaginationType } from 'ng-zorro-antd/table';
import { Observable } from 'rxjs';
import { STComponent } from './st.component';

export interface STWidthMode {
  /**
   * 宽度类型
   * - `default` 默认行为
   * - `strict` 严格模式，即强制按 `width` 指定的宽度呈现，并根据 `strictBehavior` 类型处理
   */
  type?: 'strict' | 'default';
  /**
   * 严格模式的处理行为
   * - `wrap` 强制换行
   * - `truncate` 截短
   */
  strictBehavior?: 'wrap' | 'truncate';
}

export interface STResetColumnsOption {
  pi?: number;
  ps?: number;
  columns?: STColumn[];
  /**
   * Whether to pre-clear data, Default: `false`
   */
  preClearData?: boolean;
  /**
   * Whether to trigger a data load, Default: `true`
   */
  emitReload?: boolean;
}

export interface STReq {
  /**
   * 分页类型，默认：`page`
   * - `page` 使用 `pi`，`ps` 组合
   * - `skip` 使用 `skip`，`limit` 组合
   */
  type?: 'page' | 'skip';
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
  reName?: STReqReNameType;
  /**
   * 是否将请求所有参数数据都放入 `body` 当中（`url` 地址本身参数除外），仅当 `method: 'POST'` 时有效，默认：`false`
   */
  allInBody?: boolean;
  /**
   * 是否延迟加载数据，即渲染结束后不会主动发起请求，默认：`false`
   */
  lazyLoad?: boolean;
  /**
   * 请求前数据处理
   */
  process?: (requestOptions: STRequestOptions) => STRequestOptions;
}

export interface STRequestOptions {
  body?: any;
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  params?:
    | HttpParams
    | {
        [param: string]: string | string[];
      };
  observe?: 'body' | 'events' | 'response';
  reportProgress?: boolean;
  responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
  withCredentials?: boolean;
}

export interface STLoadOptions {
  /** 是否合并，默认：`false` */
  merge?: boolean;
  /** 是否跳转至顶部，若不指定由 `page.toTop` 来决定 */
  toTop?: boolean;
}

export interface STRes<T extends STData = any> {
  /**
   * 重命名返回参数 `total`、`list`
   * - `{ total: 'Total' }` => Total 会被当作 `total`
   */
  reName?: STResReNameType;
  /**
   * 数据预处理
   */
  process?: (data: T[], rawData?: any) => T[];
}

export interface STPage {
  /**
   * 前端分页，当 `data` 为`any[]` 或 `Observable<any[]>` 有效，默认：`true`
   * - `true` 由 `st` 根据 `data` 长度受控分页，包括：排序、过滤等
   * - `false` 由用户通过 `total` 和 `data` 参数受控分页，并维护 `(change)` 当分页变更时重新加载数据
   */
  front?: boolean;
  /**
   * 后端分页是否采用`0`基索引，只在`data`类型为`string`时有效，默认：`false`
   */
  zeroIndexed?: boolean;
  /**
   * 指定分页显示的位置，默认：`bottom`
   */
  position?: 'top' | 'bottom' | 'both';
  /**
   * 指定分页显示的尺寸，默认：`default`
   */
  type?: NzTablePaginationType;
  /**
   * 指定分页分页方向，默认：`right`
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
   * 是否显示分页器中快速跳转，默认：`false`
   */
  showQuickJumper?: boolean;
  /**
   * 用于自定义页码的结构，用法参照 Pagination 组件
   */
  itemRender?: TemplateRef<PaginationItemRenderContext> | null;
  /**
   * 当添加该属性时，显示为简单分页，默认：`false`
   */
  simple?: boolean;
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
export interface STData {
  /**
   * 选择框或单选框状态值
   */
  checked?: boolean;
  /**
   * 选择框或单选框 `disabled` 值
   */
  disabled?: boolean;
  /**
   * 是否展开状态
   */
  expand?: boolean;
  /**
   * 是否显示展开按钮
   */
  showExpand?: boolean;

  [key: string]: any;
}

/**
 * 列描述
 */
export interface STColumn<T extends STData = any> {
  /**
   * 用于定义数据源主键，例如：`statistical`
   */
  key?: string;
  /**
   * 列标题
   */
  title?: string | STColumnTitle;
  /**
   * 列数据在数据项中对应的 key，支持 `a.b.c` 的嵌套写法，例如：
   * - `id`
   * - `price.market`
   * - `[ 'price', 'market' ]`
   */
  index?: string | string[] | null;
  /**
   * 类型
   * - `no` 行号，计算规则：`index + noIndex`
   * - `checkbox` 多选
   * - `radio` 单选
   * - `link` 链接，务必指定 `click`
   * - `badge` [徽标](https://ng.ant.design/components/badge/zh)，务必指定 `badge` 参数配置徽标对应值
   * - `tag` [标签](https://ng.ant.design/components/tag/zh)，务必指定 `tag` 参数配置标签对应值
   * - `enum` 枚举转换，务必指定 `enum` 参数配置标签对应值
   * - `img` 图片且居中(若 `className` 存在则优先)
   * - `number` 数字且居右(若 `className` 存在则优先)
   * - `currency` 货币且居右(若 `className` 存在则优先)
   * - `date` 日期格式且居中(若 `className` 存在则优先)，使用 `dateFormat` 自定义格式
   * - `yn` 将`boolean`类型徽章化 [document](https://ng-alain.com/docs/data-render#yn)
   * - `widget` 使用自定义小部件动态创建
   */
  type?: '' | 'checkbox' | 'link' | 'badge' | 'tag' | 'enum' | 'radio' | 'img' | 'currency' | 'number' | 'date' | 'yn' | 'no' | 'widget';
  /**
   * 链接回调，若返回一个字符串表示导航URL会自动触发 `router.navigateByUrl`
   */
  click?: (record: T, instance?: STComponent) => any;
  /**
   * 按钮组
   */
  buttons?: STColumnButton<T>[];
  /**
   * 自定义渲染ID
   * @example
   * <ng-template st-row="custom" let-item let-index="index" let-column="column">
   *  {{ c.title }}
   * </ng-template>
   */
  render?: string | TemplateRef<void> | TemplateRef<{ $implicit: T; index: number }>;
  /**
   * 标题自定义渲染ID
   * @example
   * <ng-template st-row="custom" type="title" let-c>
   *  {{ item | json }}
   * </ng-template>
   */
  renderTitle?: string | TemplateRef<void> | TemplateRef<{ $implicit: STColumn; index: number }>;
  /**
   * 列宽（数字型表示 `px` 值），例如：`100`、`10%`、`100px`
   *
   * **注意：** 若固定列必须是数字
   */
  width?: string | number;
  /**
   * 排序配置项，远程数据配置**优先**规则：
   * - `true` 表示允许排序，且若数据源为本地时自动生成 `compare: (a, b) => a[index] - b[index]` 方法
   * - `string` 表示远程数据排序相对应 `key` 值
   */
  sort?: true | string | STColumnSort<T>;
  /**
   * 过滤配置项
   */
  filter?: STColumnFilter<T>;
  /**
   * 格式化列值
   */
  format?: (item: T, col: STColumn, index: number) => string;
  /**
   * Whether trust html, default: `true`, Support [global config](https://ng-alain.com/docs/global-config)
   *
   * 是否信任HTML，默认：`true`，支持[全局配置](https://ng-alain.com/docs/global-config/zh)
   */
  safeHtml?: boolean;
  /**
   * 自定义全/反选选择项
   */
  selections?: STColumnSelection<T>[];
  /**
   * 列 `class` 属性值（注：无须 `.` 点）多个用空格隔开，例如：
   * - `text-center` 居中
   * - `text-right` 居右
   * - `text-success` 成功色
   * - `text-error` 异常色
   */
  className?: string | string[] | Set<string> | { [klass: string]: any };
  /**
   * 合并列
   */
  colSpan?: number;
  /**
   * 数字格式，`type=number` 有效
   */
  numberDigits?: string;
  /**
   * 日期格式，`type=date` 有效，（默认：`yyyy-MM-dd HH:mm`）
   */
  dateFormat?: string;
  /**
   * Currency format option, `type=currency` is valid, pls refer of [CurrencyService.commas](https://ng-alain.com/util/format/#commas).
   *
   * 货币格式选项，`type=currency` 有效。
   */
  currency?: STcolumnCurrency;
  /**
   * 当 `type=yn` 有效
   */
  yn?: STColumnYn;
  /**
   * 是否允许导出，默认 `true`
   */
  exported?: boolean;
  /**
   * 权限，等同 [ACLCanType](https://ng-alain.com/acl/getting-started/#ACLCanType) 参数值
   */
  acl?: ACLCanType;
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
  badge?: STColumnBadge | null;
  /**
   * 标签配置项
   */
  tag?: STColumnTag | null;
  /**
   * 行号索引，默认：`1`
   * - 计算规则为：`index + noIndex`
   * - 支持自定义方法
   */
  noIndex?: number | ((item: T, col: STColumn, idx: number) => number);
  /**
   * 条件表达式
   * - 仅赋值 `columns` 时执行一次
   * - 可调用 `resetColumns()` 再一次触发
   */
  iif?: (item: STColumn<T>) => boolean;

  /**
   * 统计列数据
   * - 若使用自定义统计函数可无须指定 `index`
   * - 可以根据 `key` 来定义生成后需要的键名，如果未指定 `key` 则使用 `index` 来表示键名
   * - 当无法找到有效键名时，使用下标（从 `0` 开始）来代替
   */
  statistical?: STStatisticalType | STStatistical<T>;

  widget?: STWidgetColumn<T>;

  enum?: { [key: string]: string; [key: number]: string };

  /**
   * 分组表头
   */
  children?: STColumn<T>[];

  rowSpan?: number;

  /**
   * 调整表头配置
   * - 注意：**不要忘记**在 `src/styles` 下增加 `nz-resizable` Less 样式文件：`@import '~ng-zorro-antd/resizable/style/entry.less';`
   * - **不支持多表头**
   */
  resizable?: STResizable | boolean;

  // [key: string]: any;
}

export interface STWidgetColumn<T extends STData = any> {
  type: string;

  params?: (options: { record: T; column: STColumn }) => {};
}

export interface STColumnTitle {
  [key: string]: any;

  /**
   * Text of header, can be choose one of `text` or `i18n`
   */
  text?: string;

  /**
   * I18n key of header, can be choose one of `text` or `i18n`
   */
  i18n?: string;

  /**
   * Optional information of header
   */
  optional?: string;

  /**
   * Optional help of header
   */
  optionalHelp?: string;
}

export type STStatisticalType = 'count' | 'distinctCount' | 'sum' | 'average' | 'max' | 'min';

export type STStatisticalFn<T extends STData = any> = (values: number[], col: STColumn, list: T[], rawData?: any) => STStatisticalResult;

export interface STStatistical<T extends STData = any> {
  type: STStatisticalType | STStatisticalFn<T>;
  /**
   * 保留小数位数，默认：`2`
   */
  digits?: number;
  /**
   * 是否需要货币格式化，默认以下情况为 `true`
   * - `type` 为 `STStatisticalFn`、 `sum`、`average`、`max`、`min`
   */
  currency?: boolean;
}

export interface STStatisticalResults {
  [key: string]: STStatisticalResult;
  [index: number]: STStatisticalResult;
}

export interface STStatisticalResult {
  value: number;
  text?: string;
}

export interface STColumnSort<T extends STData = any> {
  /**
   * 排序的默认受控属性
   */
  default?: 'ascend' | 'descend' | null;
  /**
   * 本地数据的排序函数，使用一个函数(参考 [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 的 compareFunction)
   * - `null` 忽略本地排序，但保持排序功能
   * - 若数据源为本地时自动生成 `(a, b) => a[index] - b[index]` 方法
   */
  compare?: ((a: T, b: T) => number) | null;
  /**
   * 远程数据的排序时后端相对应的KEY，默认使用 `index` 属性
   * - 若 `multiSort: false` 时：`key: 'name' => ?name=1&pi=1`
   * - 若 `multiSort: true` 允许多个排序 key 存在，或使用 `STMultiSort` 指定多列排序key合并规则
   */
  key?: string | null;
  /**
   * 远程数据的排序时后端相对应的VALUE
   * - `{ ascend: '0', descend: '1' }` 结果 `?name=1&pi=1`
   * - `{ ascend: 'asc', descend: 'desc' }` 结果 `?name=desc&pi=1`
   */
  reName?: { ascend?: string; descend?: string };
}

export interface STSortMap<T extends STData = any> extends STColumnSort<T> {
  [key: string]: any;

  /** 是否启用排序 */
  enabled?: boolean;
}

export interface STColumnFilter<T extends STData = any> {
  /**
   * 搜索方式
   * - `defualt` 默认形式
   * - `keyword` 文本框形式
   */
  type?: 'default' | 'keyword';
  /**
   * 表头的筛选菜单项，至少一项才会生效
   * - 当 `type='keyword'` 时可为空
   */
  menus?: STColumnFilterMenu[];
  /**
   * 本地数据的筛选函数
   */
  fn?: ((filter: STColumnFilterMenu, record: T) => boolean) | null;
  /**
   * 标识数据是否已过滤，筛选图标会高亮
   */
  default?: boolean;
  /**
   * 自定义 filter 图标
   * - 当 `type='default'` 默认 `filter`
   * - 当 `type='keyword'` 默认 `search`
   */
  icon?: string | STIcon;
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
  key?: string | null;
  /**
   * 远程数据的过滤时后端相对应的VALUE
   * - 默认当 `multiple: true` 时以英文逗号拼接的字符串
   * @return 返回为 Object 对象
   */
  reName?: (list: STColumnFilterMenu[], col: STColumn) => {};
}

export interface STColumnFilterMenu {
  /**
   * 文本
   * - 当 `type: 'keyword'` 时表示 `placeholder`
   */
  text?: string;
  /**
   * 值
   */
  value?: any;
  /**
   * 是否选中
   */
  checked?: boolean;
  /**
   * 权限，等同 [ACLCanType](https://ng-alain.com/acl/getting-started/#ACLCanType) 参数值
   */
  acl?: ACLCanType;

  [key: string]: any;
}

export interface STColumnSelection<T extends STData = any> {
  /**
   * 选择项显示的文字
   */
  text: string;
  /**
   * 选择项点击回调，允许对参数 `data.checked` 进行操作
   */
  select: (data: T[]) => void;
  /** 权限，等同 `can()` 参数值 */
  acl?: ACLCanType;
}

export interface STcolumnCurrency {
  /**
   * See [CurrencyService.commas](https://ng-alain.com/util/format/en#format)
   */
  format?: CurrencyFormatOptions;
}

/** 当 `type=yn` 有效 */
export interface STColumnYn {
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
  /**
   * 徽章显示风格
   * - `full` 图标和文本
   * - `icon` 图标
   * - `text` 文本
   */
  mode?: YNMode;
}

export interface STIcon {
  /** 图标类型 */
  type: string;
  /** 图标主题风格，默认：`outline` */
  theme?: 'outline' | 'twotone' | 'fill';
  /** 是否有旋转动画，默认：`false` */
  spin?: boolean;
  /** 仅适用双色图标，设置双色图标的主要颜色，仅对当前 icon 生效 */
  twoToneColor?: string;
  /** 指定来自 IconFont 的图标类型 */
  iconfont?: string;
}

/**
 * 按钮配置
 */
export interface STColumnButton<T extends STData = any> {
  /**
   * 文本
   */
  text?: string | ((record: T, btn: STColumnButton<T>) => string);
  /**
   * 文本 i18n
   */
  i18n?: string;
  /**
   * 图标
   */
  icon?: string | STIcon;
  /**
   * 按钮类型
   * - `none` 无任何互动
   * - `del` 删除，默认开启 `pop: true`
   * - `modal` 对话框，需要指定 `component` 才会生效
   * - `static` 静态对话框，需要指定 `component` 才会生效
   * - `drawer` 抽屉，需要指定 `component` 才会生效
   * - `link` 链接，当 `click` 返回字符串时自动调用 `navigateByUrl` 导航
   * - `divider` 分割线
   */
  type?: 'none' | 'del' | 'modal' | 'static' | 'drawer' | 'link' | 'divider';
  /**
   * 点击回调
   * - Function
   *  - `type=modal` 只会在当有传回值时才会触发回调
   * - reload：重新刷新当前页
   * - load：重新加载数据，并重置页码为：`1`
   *
   * @todo Bad parameter design
   */
  click?: 'reload' | 'load' | ((record: T, modal?: any, instance?: STComponent) => any);
  /**
   * 气泡确认框参数，若 `string` 类型表示标题
   */
  pop?: boolean | string | STColumnButtonPop;
  /**
   * 对话框参数
   */
  modal?: STColumnButtonModal;
  /**
   * 抽屉参数
   */
  drawer?: STColumnButtonDrawer;
  /**
   * 下拉菜单，当存在时以 `dropdown` 形式渲染
   * - 只支持一级
   */
  children?: STColumnButton<T>[];
  /**
   * 权限，等同 [ACLCanType](https://ng-alain.com/acl/getting-started/#ACLCanType) 参数值
   */
  acl?: ACLCanType;
  /**
   * Conditional expression
   *
   * @todo Bad parameter design
   */
  iif?: (item: T, btn: STColumnButton<T>, column: STColumn) => boolean;
  /**
   * Conditional expression rendering behavior, can be set to `hide` (default) or `disabled`
   */
  iifBehavior?: IifBehaviorType;

  tooltip?: string;

  /**
   * 按钮 `class` 属性值（注：无须 `.` 点）多个用空格隔开，例如：
   * - `text-success` 成功色
   * - `text-error` 错误色
   */
  className?: string | string[] | Set<string> | { [klass: string]: any };

  [key: string]: any;
}

export type IifBehaviorType = 'hide' | 'disabled';

export interface STColumnButtonModal<T extends STData = any> extends ModalHelperOptions {
  /**
   * 对话框组件对象
   */
  component?: any;
  /**
   * 对话框参数
   */
  params?: (record: T) => {};
  /**
   * 对话框目标组件的接收参数名，默认：`record`
   */
  paramsName?: string;
}

export interface STColumnButtonModalConfig {
  /**
   * 指定模态框目标组件的接收参数名，默认：`record`
   */
  paramsName?: string;
  /** 大小；例如：lg、600，默认：`lg` */
  size?: 'sm' | 'md' | 'lg' | 'xl' | '' | number;
  /** 对话框 [ModalOptions](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/modal/modal-types.ts) 参数 */
  modalOptions?: ModalOptions;
  /** 是否精准（默认：`true`），若返回值非空值（`null`或`undefined`）视为成功，否则视为错误 */
  exact?: boolean;
}

export interface STColumnButtonDrawer<T extends STData = any> extends DrawerHelperOptions {
  /**
   * 标题
   */
  title?: string;
  /**
   * 抽屉组件对象
   */
  component?: any;
  /**
   * 抽屉参数
   */
  params?: (record: T) => {};
  /**
   * 抽屉目标组件的接收参数名，默认：`record`
   */
  paramsName?: string;
}

export interface STColumnButtonDrawerConfig {
  /**
   * 抽屉目标组件的接收参数名，默认：`record`
   */
  paramsName?: string;
  /**
   * 大小；例如：lg、600，默认：`md`
   *
   * | 类型 | 默认大小 |
   * | --- | ------ |
   * | `sm` | `300` |
   * | `md` | `600` |
   * | `lg` | `900` |
   * | `xl` | `1200` |
   *
   * > 以上值，可通过覆盖相应的LESS参数自行调整
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  /**
   * 是否包含底部工具条，默认：`true`
   */
  footer?: boolean;
  /**
   * 底部工具条高度，默认：`55`
   */
  footerHeight?: number;
  /** 抽屉 [NzDrawerOptions](https://ng.ant.design/components/drawer/zh#nzdraweroptions) 参数 */
  drawerOptions?: NzDrawerOptions;
}

export interface STColumnButtonPop<T extends STData = any> {
  /**
   * Title of the popover, default: `确认删除吗？`
   */
  title?: string;

  /**
   * Popover trigger mode, default: `click`
   */
  trigger?: 'click' | 'focus' | 'hover';

  /**
   * The position of the popover relative to the target, default: `top`
   */
  placement?:
    | 'top'
    | 'left'
    | 'right'
    | 'bottom'
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight'
    | 'leftTop'
    | 'leftBottom'
    | 'rightTop'
    | 'rightBottom';

  /**
   * Class name of the popover card
   */
  overlayClassName?: string;

  /**
   * Style of the popover card
   */
  overlayStyle?: {};

  /**
   * Text of the Cancel button
   */
  cancelText?: string;

  /**
   * Text of the Confirm button
   */
  okText?: string;

  /**
   * Button `type` of the Confirm button
   */
  okType?: 'primary' | 'ghost' | 'dashed' | 'danger' | 'default';

  /**
   * Customize icon of confirmation
   */
  icon?: string;

  /**
   * Whether to directly emit `onConfirm` without showing Popconfirm, default: `() => false`
   */
  condition?: (item: T) => boolean;
}

export interface STReqReNameType {
  pi?: string;
  ps?: string;
  skip?: string;
  limit?: string;
}

export interface STResReNameType {
  total?: string | string[];
  list?: string | string[];
}

export interface STExportOptions<T extends STData = any> {
  /**
   * Specify the currently exported data, default the current table data
   */
  data?: T[];
  /**
   * Specify the currently exported column configuration, default the current table data
   */
  columens?: STColumn[];
  /** 工作溥名 */
  sheetname?: string;
  /** 文件名 */
  filename?: string;
  /** triggers when saveas */
  callback?: (wb: any) => void;
}

/**
 * 单排序规则
 * - 若不指定，则返回：`columnName=ascend|descend`
 * - 若指定，则返回：`sort=columnName.(ascend|descend)`
 */
export interface STSingleSort {
  /** 请求参数名，默认：`sort` */
  key?: string;
  /** 列名与状态间分隔符，默认：`.` */
  nameSeparator?: string;
}

/**
 * 多排序相同排序 key 时合并规则
 */
export interface STMultiSort {
  /** 请求参数名，默认：`sort` */
  key?: string;
  /** 不同属性间分隔符，默认：`-` */
  separator?: string;
  /** 列名与状态间分隔符，默认：`.` */
  nameSeparator?: string;
  /**
   * 是否以数组的形式传递参数，默认：`false`
   * - `true` 表示使用 `url?sort=name.asc&sort=age.desc` 形式
   * - `false` 表示使用 `url?sort=name.asc-age.desc` 形式
   */
  arrayParam?: boolean;
  /**
   * 是否保持空值的键名，默认：`true`
   * - `true` 表示不管是否有排序都会发送 `key` 键名
   * - `false` 表示无排序动作时不会发送 `key` 键名
   */
  keepEmptyKey?: boolean;
  /**
   * ## 仅限全局配置项有效
   *
   * 是否全局多排序模式，默认：`true`
   * - `true` 表示所有 `st` 默认为多排序
   * - `false` 表示需要为每个 `st` 添加 `multiSort` 才会视为多排序模式
   */
  global?: boolean;
}

export type STMultiSortResultType = { [key: string]: string | string[] };

/**
 * 徽标信息
 */
export interface STColumnBadge {
  [key: number]: STColumnBadgeValue;
  [key: string]: STColumnBadgeValue;
}

export interface STColumnBadgeValue {
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
export interface STColumnTag {
  [key: number]: STColumnTagValue;
  [key: string]: STColumnTagValue;
}

export interface STColumnTagValue {
  /**
   * 文本
   */
  text?: string;
  /**
   * 颜色值，支持预设和色值
   * - 预设：geekblue,blue,purple,success,red,volcano,orange,gold,lime,green,cyan
   * - 色值：#f50,#ff0
   */
  color?: 'geekblue' | 'blue' | 'purple' | 'success' | 'red' | 'volcano' | 'orange' | 'gold' | 'lime' | 'green' | 'cyan' | string;
}

export type STChangeType = 'loaded' | 'pi' | 'ps' | 'checkbox' | 'radio' | 'sort' | 'filter' | 'click' | 'dblClick' | 'expand' | 'resize';

/**
 * 回调数据
 */
export interface STChange<T extends STData = any> {
  /**
   * 回调类型
   */
  type: STChangeType;
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
   * `loaded` 参数
   */
  loaded?: T[];
  /**
   * `checkbox` 参数
   */
  checkbox?: T[];
  /**
   * `radio` 参数
   */
  radio?: T;
  /**
   * 排序参数
   */
  sort?: STChangeSort;
  /**
   * 过滤参数
   */
  filter?: STColumn;
  /**
   * 行点击参数
   */
  click?: STChangeRowClick<T>;
  /**
   * 行双击参数
   */
  dblClick?: STChangeRowClick<T>;
  /**
   * `expand` 参数
   */
  expand?: T;
  /**
   * `resize` 参数
   */
  resize?: STColumn;
}

/** 行单击参数 */
export interface STChangeSort {
  value?: 'ascend' | 'descend';
  map?: { [key: string]: string };
  column?: STColumn;
}

/** 行单击参数 */
export interface STChangeRowClick<T extends STData = any> {
  e?: Event;
  item?: T;
  index?: number;
}

export interface STError {
  type?: 'req';
  error?: any;
}

export type STRowClassName<T extends STData = any> = (record: T, index: number) => string;

export interface STColumnGroupType {
  column: STColumn;
  colStart: number;
  colEnd?: number;
  colSpan?: number;
  rowSpan?: number;
  hasSubColumns?: boolean;
}

export interface STResizable {
  /**
   * Disable resize, Default: `true`
   */
  disabled?: boolean;
  /**
   * Specifies resize boundaries, Default: `window`
   */
  bounds?: 'window' | 'parent' | ElementRef<HTMLElement>;
  /**
   * Maximum width of resizable elemen, Default: `60`
   */
  maxWidth?: number;
  /**
   * Minimum width of resizable element, Default: `360`
   */
  minWidth?: number;
  /**
   * Enable preview when resizing, Default: `true`
   */
  preview?: boolean;
}

export type STContextmenuFn<T extends STData = any> = (
  options: STContextmenuOptions<T>,
) => Observable<STContextmenuItem[]> | STContextmenuItem[];

export interface STContextmenuOptions<T extends STData = any> {
  event: MouseEvent;
  /**
   * Contextmenu position
   */
  type: 'head' | 'body';
  column: STColumn;
  data: T | null;
  /**
   * Row index, when `type === 'body'` valid
   *
   * 所在行下标，当 `type === 'body'` 时有效
   */
  rowIndex: number | null;
  /**
   * Column index
   *
   * 所在列下标
   */
  colIndex: number;
}

export interface STContextmenuItem {
  key?: string;
  /**
   * Text of the context menu item
   */
  text: string;
  fn?: (item: STContextmenuItem) => void;
  /**
   * Only supports one level
   *
   * 只支持一级
   */
  children?: STContextmenuItem[];

  [key: string]: any;
}

export interface STCustomRequestOptions {
  method: string;
  url: string;
  options: STRequestOptions;
}
