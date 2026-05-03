export interface AlainXlsxConfig {
  /**
   * Xlsx library path, default: `https://cdn.jsdelivr.net/npm/xlsx/dist/xlsx.full.min.js`
   */
  url?: string;
  /**
   * Defines which Xlsx optional modules should get loaded, e.g:
   *
   * `[ 'https://cdn.jsdelivr.net/npm/xlsx/dist/cpexcel.js' ]`
   */
  modules?: string[];
}
