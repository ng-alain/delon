import { HttpResponse } from '@angular/common/http';
import { Directive, ElementRef, inject, input, output } from '@angular/core';
import { finalize } from 'rxjs';

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
  private readonly el: HTMLButtonElement = inject(ElementRef).nativeElement;
  private readonly _http = inject(_HttpClient);
  readonly httpData = input<NzSafeAny>(undefined, { alias: 'http-data' });
  readonly httpBody = input<NzSafeAny>(undefined, { alias: 'http-body' });
  readonly httpMethod = input<string>('get', { alias: 'http-method' });
  readonly httpUrl = input.required<string>({ alias: 'http-url' });
  readonly fileName = input<string | ((rep: HttpResponse<Blob>) => string)>(undefined, { alias: 'file-name' });
  readonly pre = input<(ev: MouseEvent) => Promise<boolean>>();

  readonly success = output<HttpResponse<Blob>>();
  readonly error = output<NzSafeAny>();

  private getDisposition(data: string | null): NzSafeAny {
    const arr: Array<Record<string, string>> = (data ?? '')
      .split(';')
      .filter(i => i.includes('='))
      .map(v => {
        const strArr = v.split('=');
        const utfId = `UTF-8''`;
        let value = strArr[1];
        if (value.startsWith(utfId)) value = value.substring(utfId.length);
        return { [strArr[0].trim()]: value };
      });
    return arr.reduce((_o, item) => item, {});
  }
  private isFileSaverSupported = false;

  constructor() {
    try {
      this.isFileSaverSupported = !!new Blob();
    } catch {}
    if (!this.isFileSaverSupported) {
      this.el.classList.add(`down-file__not-support`);
    }
  }

  private setDisabled(status: boolean): void {
    const el = this.el;
    el.disabled = status;
    el.classList[status ? 'add' : 'remove'](`down-file__disabled`);
  }

  protected async _click(ev: MouseEvent): Promise<void> {
    const pre = this.pre();
    if (!this.isFileSaverSupported || (typeof pre === 'function' && !(await pre(ev)))) {
      ev.stopPropagation();
      ev.preventDefault();
      return;
    }
    this.setDisabled(true);
    this._http
      .request(this.httpMethod(), this.httpUrl(), {
        params: this.httpData() ?? {},
        responseType: 'blob',
        observe: 'response',
        body: this.httpBody()
      })
      .pipe(finalize(() => this.setDisabled(false)))
      .subscribe({
        next: (res: HttpResponse<Blob>) => {
          if (res.status !== 200 || res.body!.size <= 0) {
            this.error.emit(res);
            return;
          }
          const disposition = this.getDisposition(res.headers.get('content-disposition'));
          let fileName = this.fileName();
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
        error: err => this.error.emit(err)
      });
  }
}
