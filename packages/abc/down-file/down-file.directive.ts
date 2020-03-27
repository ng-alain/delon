import { HttpResponse } from '@angular/common/http';
import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { saveAs } from 'file-saver';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Directive({
  selector: '[down-file]',
  exportAs: 'downFile',
  host: {
    '(click)': '_click()',
  },
})
export class DownFileDirective {
  private isFileSaverSupported = true;
  /** URL请求参数 */
  @Input('http-data') httpData: {};
  /** URL请求参数 */
  @Input('http-body') httpBody: {};
  /** 请求类型 */
  @Input('http-method') httpMethod: string = 'get';
  /** 下载地址 */
  @Input('http-url') httpUrl: string;
  /** 指定文件名，若为空从服务端返回的 `header` 中获取 `filename`、`x-filename` */
  @Input('file-name') fileName: string | ((rep: HttpResponse<Blob>) => string);
  /** 成功回调 */
  // tslint:disable-next-line:no-output-native
  @Output() readonly success = new EventEmitter<HttpResponse<Blob>>();
  /** 错误回调 */
  // tslint:disable-next-line:no-output-native
  @Output() readonly error = new EventEmitter<any>();

  private getDisposition(data: string | null): NzSafeAny {
    const arr: Array<{}> = (data || '')
      .split(';')
      .filter(i => i.includes('='))
      .map(v => {
        const strArr = v.split('=');
        const utfId = `UTF-8''`;
        let value = strArr[1];
        if (value.startsWith(utfId)) value = value.substr(utfId.length);
        return { [strArr[0].trim()]: value };
      });
    return arr.reduce((_o, item) => item, {});
  }

  constructor(private el: ElementRef<HTMLButtonElement>, private _http: _HttpClient) {
    let isFileSaverSupported = false;
    try {
      isFileSaverSupported = !!new Blob();
    } catch {}
    this.isFileSaverSupported = isFileSaverSupported;
    if (!isFileSaverSupported) {
      el.nativeElement.classList.add(`down-file__not-support`);
    }
  }

  private setDisabled(status: boolean): void {
    const el = this.el.nativeElement;
    el.disabled = status;
    el.classList[status ? 'add' : 'remove'](`down-file__disabled`);
  }

  _click() {
    if (!this.isFileSaverSupported) {
      return;
    }
    this.setDisabled(true);
    this._http
      .request(this.httpMethod, this.httpUrl, {
        params: this.httpData || {},
        responseType: 'blob',
        observe: 'response',
        body: this.httpBody,
      })
      .subscribe(
        (res: HttpResponse<Blob>) => {
          if (res.status !== 200 || res.body!.size <= 0) {
            this.error.emit(res);
            return;
          }
          const disposition = this.getDisposition(res.headers.get('content-disposition'));
          let fileName = this.fileName;
          if (typeof fileName === 'function') fileName = fileName(res);
          fileName =
            fileName || disposition[`filename*`] || disposition[`filename`] || res.headers.get('filename') || res.headers.get('x-filename');
          saveAs(res.body!, decodeURI(fileName as string));
          this.success.emit(res);
        },
        err => this.error.emit(err),
        () => this.setDisabled(false),
      );
  }
}
