// tslint:disable: class-name
import { TemplateRef } from '@angular/core';
import { STColumn, STSortMap } from './st.interfaces';

export interface _STColumn extends STColumn {
  children?: _STColumn[];

  indexKey?: string;
  /**
   * 是否需要截短行为
   * - `type: 'img'` 强制非必要
   */
  _isTruncate?: boolean;
  /**
   * 校验需要未自定义 `className` 时应检查 `_isTruncate` 是否需要截短行为
   */
  _className?: string | string[] | Set<string> | { [klass: string]: any } | null;
  _sort: STSortMap;
  _left?: string;
  _right?: string;
  __point?: number;
  __renderTitle?: TemplateRef<void>;
  __render?: TemplateRef<void>;
}

export interface _STHeader {
  /**
   * 是否有子列
   */
  hasSubColumns: boolean;
  colSpan: number;
  rowSpan: number;
  column: _STColumn;
}
