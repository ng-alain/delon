import { HttpClient, HttpResponse } from '@angular/common/http';
import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Optional,
  Output,
} from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { saveAs } from 'file-saver';

@Directive({ selector: '[down-file]' })
export class DownFileDirective {
  /** URL请求参数 */
  @Input('http-data') httpData: {};
  /** 请求类型 */
  @Input('http-method') httpMethod: string = 'get';
  /** 下载地址 */
  @Input('http-url') httpUrl: string;
  /** 指定文件名，若为空从服务端返回的 `header` 中获取 `filename`、`x-filename` */
  @Input('file-name') fileName: string;
  /** 成功回调 */
  @Output() readonly success = new EventEmitter<HttpResponse<Blob>>();
  /** 错误回调 */
  @Output() readonly error = new EventEmitter<{}>();

  private getDisposition(data: string) {
    // tslint:disable-next-line:no-any
    const arr: any[] = (data || '')
      .split(';')
      .filter(i => i.includes('='))
      .map(v => {
        const strArr = v.split('=');
        const utfId = `UTF-8''`;
        let value = strArr[1];
        if (value.startsWith(utfId)) value = value.substr(utfId.length);
        return { [strArr[0].trim()]: value };
      });
    return arr.reduce((o, item) => item, {});
  }

  constructor(private el: ElementRef, private http: HttpClient, @Optional() private _http: _HttpClient) { }

  @HostListener('click')
  _click() {
    this.el.nativeElement.disabled = true;
    // tslint:disable-next-line:no-any
    ((this._http || this.http) as any)
      .request(this.httpMethod, this.httpUrl, {
        params: this.httpData || {},
        responseType: 'blob',
        observe: 'response',
      })
      .subscribe(
        (res: HttpResponse<Blob>) => {
          if (res.status !== 200 || res.body.size <= 0) {
            this.error.emit(res);
            return;
          }
          const disposition = this.getDisposition(
            res.headers.get('content-disposition'),
          );
          const fileName =
            this.fileName ||
            disposition[`filename*`] ||
            disposition[`filename`] ||
            res.headers.get('filename') ||
            res.headers.get('x-filename');
          saveAs(res.body, decodeURI(fileName));
          this.success.emit(res);
          this.el.nativeElement.disabled = false;
        },
        err => {
          this.error.emit(err);
          this.el.nativeElement.disabled = false;
        },
      );
  }
}
