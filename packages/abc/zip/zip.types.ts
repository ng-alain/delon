export interface ZipWriteOptions {
  /** save file name, default: `download.zip` */
  filename?: string;
  options?: any;
  /** The optional function called on each internal update with the metadata. */
  update?: (metadata: any) => void;
  /** triggers when saveas */
  callback?: () => void;
}

export interface ZipSaveOptions {
  /**
   * 指定保存文件名，默认 `download.zip`
   */
  filename?: string;
  /**
   * JSZip `generateAsync` 方法的 `options` 选项
   * @see https://stuk.github.io/jszip/documentation/api_jszip/generate_async.html
   */
  options?: any;
  /**
   * JSZip `generateAsync` 方法的 `onUpdate` 回调
   * @see https://stuk.github.io/jszip/documentation/api_jszip/generate_async.html
   */
  update?: (percent: number, currentFile: string) => void;
  /**
   * 保存前回调方法
   */
  callback?: (blob: Blob) => void;
}
