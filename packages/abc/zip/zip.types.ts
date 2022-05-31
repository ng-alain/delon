import type jsZipType from 'jszip';

export interface ZipWriteOptions {
  /** save file name, default: `download.zip` */
  filename?: string;
  options?: jsZipType.JSZipGeneratorOptions;
  /** The optional function called on each internal update with the metadata. */
  update?: (percent: number, currentFile: string) => void;
  /** triggers when saveas */
  callback?: () => void;
}

export interface ZipSaveOptions {
  /**
   * 指定保存文件名，默认 `download.zip`
   */
  filename?: string;
  /**
   * JSZip [generateAsync](https://stuk.github.io/jszip/documentation/api_jszip/generate_async.html) 方法的 `options` 选项
   */
  options?: jsZipType.JSZipGeneratorOptions;
  /**
   * JSZip [generateAsync](https://stuk.github.io/jszip/documentation/api_jszip/generate_async.html) 方法的 `onUpdate` 回调
   */
  update?: (percent: number, currentFile: string) => void;
  /**
   * 保存前回调方法
   */
  callback?: (blob: Blob) => void;
}
