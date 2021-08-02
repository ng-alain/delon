import { Platform } from '@angular/cdk/platform';
import { Directive, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Observable, Observer, of, Subject, throwError } from 'rxjs';
import { filter, finalize, take, takeUntil } from 'rxjs/operators';

import { ModalOptions, NzModalService } from 'ng-zorro-antd/modal';

import { _HttpClient } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import { BooleanInput, InputBoolean, InputNumber, NumberInput } from '@delon/util/decorator';

/**
 * @deprecated Will be removed in 13.0.0, Pls used [nz-image](https://ng.ant.design/components/image/en) instead, for examples:
 */
@Directive({
  selector: '[_src]',
  exportAs: '_src',
  host: {
    '(click)': 'open($event)',
    '[class.point]': `previewSrc`
  }
})
export class ImageDirective implements OnChanges, OnInit, OnDestroy {
  static ngAcceptInputType_size: NumberInput;
  static ngAcceptInputType_useHttp: BooleanInput;

  @Input('_src') src: string;
  @Input() @InputNumber() size: number;
  @Input() error: string;
  @Input() @InputBoolean() useHttp = false;
  @Input() previewSrc!: string;
  @Input() previewModalOptions!: ModalOptions;

  private inited = false;
  private imgEl: HTMLImageElement;
  private destroy$ = new Subject<void>();

  constructor(
    el: ElementRef<HTMLImageElement>,
    configSrv: AlainConfigService,
    private http: _HttpClient,
    private platform: Platform,
    private modal: NzModalService
  ) {
    configSrv.attach(this, 'image', { size: 64, error: `./assets/img/logo.svg` });
    this.imgEl = el.nativeElement;
  }

  ngOnInit(): void {
    this.update();
    this.updateError();
    this.inited = true;
  }

  ngOnChanges(changes: { [P in keyof this]?: SimpleChange } & SimpleChanges): void {
    const { size, imgEl } = this;
    imgEl.height = size;
    imgEl.width = size;

    if (this.inited) {
      if (changes.error) {
        this.updateError();
      }
      this.update();
    }
  }

  private update(): void {
    this.getSrc(this.src, true)
      .pipe(takeUntil(this.destroy$), take(1))
      .subscribe(
        src => (this.imgEl.src = src),
        () => this.setError()
      );
  }

  private getSrc(data: string, isSize: boolean): Observable<string> {
    const { size, useHttp } = this;
    if (useHttp) {
      return this.getByHttp(data);
    }
    if (isSize && data.includes('qlogo.cn')) {
      const arr = data.split('/');
      const imgSize = arr[arr.length - 1];
      arr[arr.length - 1] = imgSize === '0' || +imgSize !== size ? size.toString() : imgSize;
      data = arr.join('/');
    }

    return of(data.replace(/^(?:https?:)/i, ''));
  }

  private getByHttp(url: string): Observable<string> {
    if (!this.platform.isBrowser) {
      return throwError(`Not supported`);
    }

    return new Observable((observer: Observer<string>) => {
      this.http
        .get(url, null, { responseType: 'blob' })
        .pipe(
          takeUntil(this.destroy$),
          take(1),
          finalize(() => observer.complete())
        )
        .subscribe(
          (blob: Blob) => {
            const reader = new FileReader();
            reader.onloadend = () => observer.next(reader.result as string);
            reader.onerror = () => observer.error(`Can't reader image data by ${url}`);
            reader.readAsDataURL(blob);
          },
          () => observer.error(`Can't access remote url ${url}`)
        );
    });
  }

  private updateError(): void {
    const { imgEl, error } = this;
    imgEl.onerror = function () {
      this.onerror = null;
      this.src = error;
    };
  }

  private setError(): void {
    const { imgEl, error } = this;
    imgEl.src = error;
  }

  open(ev: Event): void {
    if (!this.previewSrc) {
      return;
    }

    ev.stopPropagation();
    ev.preventDefault();

    this.getSrc(this.previewSrc, false)
      .pipe(
        takeUntil(this.destroy$),
        filter(w => !!w),
        take(1)
      )
      .subscribe(src => {
        this.modal.create({
          nzTitle: undefined,
          nzFooter: null,
          nzContent: `<img class="img-fluid" src="${src}" />`,
          ...this.previewModalOptions
        });
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
