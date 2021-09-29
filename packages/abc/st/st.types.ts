/* eslint-disable @typescript-eslint/no-explicit-any */
import { TemplateRef } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

import { STColumn, STColumnButton, STColumnSafeType, STData, STSortMap } from './st.interfaces';

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
  _width?: number;
  _left?: string | boolean;
  _right?: string | boolean;
  __point?: number;
  __renderTitle?: TemplateRef<any>;
  __render?: TemplateRef<any>;
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

export interface _STColumnButton<T extends STData = any> extends STColumnButton<T> {
  _text?: string;
  children?: Array<_STColumnButton<T>>;
}

export interface _STDataValue {
  text: string;
  _text: SafeHtml;
  org?: any;
  color?: string;
  safeType: STColumnSafeType;
  buttons?: _STColumnButton[];
}
