import type { NzSafeAny } from 'ng-zorro-antd/core/types';

export interface XlsxExportOptions {
  /**
   * worksheets in the workbook, e.g:
   * - `{ Sheet1: { A1: { t:"n", v:10000 } } }`
   * - `[['1'], [1]]`
   */
  sheets: { [sheet: string]: NzSafeAny } | XlsxExportSheet[];
  /** save file name, default: `export.xlsx` */
  filename?: string;
  opts?: NzSafeAny;
  /** triggers when saveas */
  callback?: (wb: NzSafeAny) => void;
}

export interface XlsxExportSheet {
  /** arrays to a worksheet */
  data: NzSafeAny[][];
  /** sheet name */
  name?: string;
}

export interface XlsxExportResult {
  filename: string;
  wb: NzSafeAny;
}
