import { Directive, ElementRef, Input, HostListener, EventEmitter, Output } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { saveAs } from 'file-saver';

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

    constructor(private el: ElementRef, private http: HttpClient) {
    }

    @HostListener('click') _click() {
        this.el.nativeElement.disabled = true;
        this.http.request(this.httpMethod, this.httpUrl, {
            params: this.httpData || {},
            responseType: 'blob',
            observe: 'response'
        }).subscribe((res: HttpResponse<Blob>) => {
            if (res.body.size <= 0) {
                this.error.emit(res);
                return;
            }
            const fileName = this.fileName || res.headers.get('filename') || res.headers.get('x-filename');
            saveAs(res.body, decodeURI(fileName));
            this.success.emit(res);
            this.el.nativeElement.disabled = false;
        }, (err) => {
            this.error.emit(err);
            this.el.nativeElement.disabled = false;
        });
    }
}
