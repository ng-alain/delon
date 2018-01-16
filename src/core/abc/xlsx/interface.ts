import { InjectionToken } from '@angular/core';

export const DA_XLSX_CONFIG = new InjectionToken<XlsxConfig>('DA_XLSX_CONFIG');

export interface XlsxConfig {
    /**
     * Xlsx library path
     * @default //cdn.bootcss.com/xlsx/0.11.17/xlsx.full.min.js
     */
    url?: string;
    /**
     * Defines which Xlsx optional modules should get loaded, e.g:
     * `[ '//cdn.bootcss.com/xlsx/0.11.14/cpexcel.js' ]`
     */
    modules?: string[];
}

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
