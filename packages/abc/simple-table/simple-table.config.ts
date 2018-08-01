import { Injectable } from '@angular/core';
import { SimpleTableMultiSort } from './interface';

@Injectable()
export class AdSimpleTableConfig {
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
  size?: 'small' | 'middle' | 'default';
  /**
   * 是否显示分页器
   */
  showPagination?: boolean;
  /**
   * 是否显示pagination中改变页数
   */
  showSizeChanger?: boolean;
  /**
   * pagination中每页显示条目数下拉框值
   */
  pageSizeOptions?: number[] = [10, 20, 30, 40, 50];
  /**
   * 是否显示pagination中快速跳转
   */
  showQuickJumper?: boolean;
  /**
   * 是否显示总数据量，默认：`共 {{total}} 条`
   */
  showTotal?: boolean | string = `共 {{total}} 条`;
  /**
   * 数据变更后是否保留在数据变更前的页码
   */
  isPageIndexReset?: boolean;
  /**
   * 分页方向
   */
  pagePlacement?: 'left' | 'center' | 'right';
  /**
   * 切换分页时返回顶部
   */
  toTopInChange?: boolean;
  /**
   * 返回顶部偏移值
   */
  toTopOffset?: number;
  /**
   * 重命名请求参数 `pi`、`ps`，例如：`{ pi: 'Page' }` `pi` 会被替换成 Page
   */
  reqReName?: Object;
  /**
   * 请求参数 `pi` 是否采用 0 基索引
   */
  zeroIndexedOnPage?: boolean;
  /**
   * 重命名返回参数 `total`、`list`，例如：`{ total: 'Total' }` Total 会被当作 `total`
   */
  resReName?: { total?: string | string[]; list?: string | string[] };
  /**
   * 重命名排序值，`columns` 的重命名高于属性
   */
  sortReName?: { ascend?: string; descend?: string };
  /**
   * 是否多排序，当 `sort` 多个相同值时自动合并，建议后端支持时使用
   */
  multiSort?: boolean | SimpleTableMultiSort = false;
  /**
   * 指定模态框目标组件的接收参数名，默认：`record`
   */
  modalParamsName?: string;
  /**
   * 前端分页，当 `data` 为`any[]` 或 `Observable<any[]>` 有效
   */
  frontPagination? = true;
  /**
   * 行单击多少时长之类为双击（单位：毫秒），默认：`200`
   */
  rowClickTime? = 200;
}
