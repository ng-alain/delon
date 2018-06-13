import {
  Directive,
  ElementRef,
  Input,
  HostListener,
  EventEmitter,
  Output,
  Optional,
} from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { _HttpClient } from '@delon/theme';

/**
 * 文件下载
 *
 * ```html
 * <button nz-button down-file http-url="assets/demo{{i}}" file-name="demo中文">{{i}}</button>
 * ```
 */
@Directive({ selector: '[down-file]' })
export class DownFileDirective {
  /** URL请求参数 */
  @Input('http-data') httpData: any;
  /** 请求类型 */
  @Input('http-method') httpMethod: string = 'get';
  /** 下载地址 */
  @Input('http-url') httpUrl: string;
  /** 指定文件名，若为空从服务端返回的 `header` 中获取 `filename`、`x-filename` */
  @Input('file-name') fileName: string;
  /** 成功回调 */
  @Output() success: EventEmitter<any> = new EventEmitter<any>();
  /** 错误回调 */
  @Output() error: EventEmitter<any> = new EventEmitter<any>();

  private getDisposition(data: string) {
    const arr: any = (data || '')
      .split(';')
      .filter(i => i.includes('='))
      .map(v => {
        const strArr = v.split('=');
        const utfId = `UTF-8''`;
        let value = strArr[1];
        if (value.startsWith(utfId)) value = value.substr(utfId.length);
        return { [strArr[0].trim()]: value };
      });
    return arr.reduce((o, item: any) => item, {});
  }

  constructor(
    private el: ElementRef,
    private http: HttpClient,
    @Optional() private _http: _HttpClient,
  ) {
  }

  @HostListener('click')
  _click() {
    this.el.nativeElement.disabled = true;
    ((this._http || this.http) as any).request(this.httpMethod, this.httpUrl, {
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
          const disposition: any = this.getDisposition(
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
