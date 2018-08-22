import { Injectable } from '@angular/core';
import {
  NaTableMultiSort,
  NaTableReq,
  NaTableRes,
  NaTablePage,
  NaTableColumnButtonModalConfig,
} from './interface';

@Injectable()
export class NaTableConfig {
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
  /** 请求体配置 */
  req?: NaTableReq = {
    method: 'GET',
    allInBody: false,
    reName: { pi: 'pi', ps: 'ps' },
  };
  /** 返回体配置 */
  res?: NaTableRes = {
    reName: { list: ['list'], total: ['total'] },
  };
  /** 返回体配置 */
  page?: NaTablePage = {
    front: true,
    zeroIndexed: false,
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
   * 是否多排序，当 `sort` 多个相同值时自动合并，建议后端支持时使用
   */
  multiSort?: boolean | NaTableMultiSort = false;
  /**
   * 按钮模态框配置
   */
  modal?: NaTableColumnButtonModalConfig = {
    paramsName: 'record',
    size: 'lg',
    exact: true,
  };
  /**
   * 气泡确认框内容
   */
  popTitle? = '确认删除吗？';
  /**
   * 行单击多少时长之类为双击（单位：毫秒），默认：`200`
   */
  rowClickTime? = 200;
  /**
   * 过滤按钮确认文本，默认：`确认`
   */
  filterConfirmText? = '确认';
  /**
   * 过滤按钮重置文本，默认：`重置`
   */
  filterClearText? = '重置';
}
