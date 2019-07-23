import { Injectable } from '@angular/core';
import {
  STColumnButtonDrawerConfig,
  STColumnButtonModalConfig,
  STIcon,
  STMultiSort,
  STPage,
  STReq,
  STRes,
  STRowClassName,
  STSingleSort,
  STWidthMode,
  IifBehaviorType,
} from './table.interfaces';

@Injectable({ providedIn: 'root' })
export class STConfig {
  /**
   * 起始页码，默认为：`1`
   */
  pi?: number;
  /**
   * 每页数量，当设置为 `0` 表示不分页，默认：`10`
   */
  ps?: number;
  /**
   * 是否显示边框
   */
  bordered?: boolean;
  /**
   * table大小
   */
  size?: 'small' | 'middle' | 'default' = 'default';
  /**
   * 是否开启响应式，默认：`true`
   */
  responsive?: boolean = true;
  /**
   * 是否在小屏幕下才显示顶部与底部，默认：`false`
   */
  responsiveHideHeaderFooter?: boolean = false;
  /** 请求体配置 */
  req?: STReq = {
    type: 'page',
    method: 'GET',
    allInBody: false,
    lazyLoad: false,
    reName: { pi: 'pi', ps: 'ps', skip: 'skip', limit: 'limit' },
  };
  /** 返回体配置 */
  res?: STRes = {
    reName: { list: ['list'], total: ['total'] },
  };
  /** 返回体配置 */
  page?: STPage = {
    front: true,
    zeroIndexed: false,
    position: 'bottom',
    placement: 'right',
    show: true,
    showSize: false,
    pageSizes: [10, 20, 30, 40, 50],
    showQuickJumper: false,
    total: true,
    indexReset: true,
    toTop: true,
    toTopOffset: 100,
  };
  /**
   * 重命名排序值，`columns` 的重命名高于属性
   */
  sortReName?: { ascend?: string; descend?: string };
  /**
   * 单排序规则
   * - 若不指定，则返回：`columnName=ascend|descend`
   * - 若指定，则返回：`sort=columnName.(ascend|descend)`
   */
  singleSort?: STSingleSort | null = null;
  /**
   * 是否多排序，当 `sort` 多个相同值时自动合并，建议后端支持时使用
   */
  multiSort?: STMultiSort | null = null;
  /**
   * 按钮模态框配置
   */
  modal?: STColumnButtonModalConfig = {
    paramsName: 'record',
    size: 'lg',
    exact: true,
  };
  /**
   * 按钮抽屉配置
   */
  drawer?: STColumnButtonDrawerConfig = {
    paramsName: 'record',
    size: 'md',
    footer: true,
    footerHeight: 55,
  };
  /**
   * 气泡确认框内容
   */
  popTitle?: string = '确认删除吗？';
  /**
   * 行单击多少时长之类为双击（单位：毫秒），默认：`200`
   */
  rowClickTime?: number = 200;
  /**
   * 过滤按钮确认文本
   */
  filterConfirmText?: string;
  /**
   * 过滤按钮重置文本
   */
  filterClearText?: string;
  /**
   * 按钮图标
   */
  btnIcon?: STIcon = {
    type: '',
    theme: 'outline',
    spin: false,
  };
  /**
   * 行号索引，默认：`1`
   * - 计算规则为：`index + noIndex`
   */
  noIndex?: number = 1;
  /**
   * 表格行的类名
   */
  rowClassName?: STRowClassName;
  /**
   * 通过点击行来展开子行
   */
  expandRowByClick?: boolean = false;
  /**
   * 手风琴模式
   */
  expandAccordion?: boolean = false;
  /**
   * 指定 `width` 模式
   */
  widthMode?: STWidthMode = {
    type: 'default',
    strictBehavior: 'truncate',
  };
  virtualItemSize? = 54;
  virtualMaxBufferPx? = 200;
  virtualMinBufferPx? = 100;

  /**
   * Conditional expression rendering behavior, can be set to `hide` (default) or `disabled`
   */
  iifBehavior?: IifBehaviorType = 'hide';
}
