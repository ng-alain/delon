import { HttpResponse } from '@angular/common/http';
import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { saveAs } from 'file-saver';

import { _HttpClient } from '@delon/theme';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

@Directive({
  selector: '[down-file]',
  exportAs: 'downFile',
  host: {
    '(click)': '_click($event)'
  }
})
export class DownFileDirective {
  private isFileSaverSupported = true;
  @Input('http-data') httpData: NzSafeAny;
  @Input('http-body') httpBody: NzSafeAny;
  @Input('http-method') httpMethod: string = 'get';
  @Input('http-url') httpUrl: string;
  @Input('file-name') fileName: string | ((rep: HttpResponse<Blob>) => string);
  @Input() pre: (ev: MouseEvent) => Promise<boolean>;
  @Output() readonly success = new EventEmitter<HttpResponse<Blob>>();
  @Output() readonly error = new EventEmitter<NzSafeAny>();

  private getDisposition(data: string | null): NzSafeAny {
    const arr: Array<Record<string, string>> = (data || '')
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

  async _click(ev: MouseEvent): Promise<void> {
    if (!this.isFileSaverSupported || (typeof this.pre === 'function' && !(await this.pre(ev)))) {
      ev.stopPropagation();
      ev.preventDefault();
      return;
    }
    this.setDisabled(true);
    this._http
      .request(this.httpMethod, this.httpUrl, {
        params: this.httpData || {},
        responseType: 'blob',
        observe: 'response',
        body: this.httpBody
      })
      .pipe(finalize(() => this.setDisabled(false)))
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
            fileName ||
            disposition[`filename*`] ||
            disposition[`filename`] ||
            res.headers.get('filename') ||
            res.headers.get('x-filename');
          saveAs(res.body!, decodeURI(fileName as string));
          this.success.emit(res);
        },
        err => this.error.emit(err)
      );
  }
}
