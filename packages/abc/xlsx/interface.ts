export interface XlsxExportOptions {
  /**
   * worksheets in the workbook, e.g:
   * - `{ Sheet1: { A1: { t:"n", v:10000 } } }`
   * - `[['1'], [1]]`
   */
  sheets: { [sheet: string]: any } | XlsxExportSheet[];
  /** save file name, default: `export.xlsx` */
  filename?: string;
  opts?: any;
  /** triggers when saveas */
  callback?: (wb: any) => void;
}

export interface XlsxExportSheet {
  /** arrays to a worksheet */
  data: any[][];
  /** sheet name */
  name?: string;
}
