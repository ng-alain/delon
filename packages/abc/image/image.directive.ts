import { Platform } from '@angular/cdk/platform';
import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { AlainConfigService, BooleanInput, InputBoolean, InputNumber, NumberInput } from '@delon/util';

@Directive({
  selector: '[_src]',
  exportAs: '_src',
})
export class ImageDirective implements OnChanges, OnInit {
  static ngAcceptInputType_size: NumberInput;
  static ngAcceptInputType_useHttp: BooleanInput;

  @Input('_src') src: string;
  @Input() @InputNumber() size: number;
  @Input() error: string;
  @Input() @InputBoolean() useHttp = false;

  private inited = false;
  private imgEl: HTMLImageElement;

  constructor(el: ElementRef<HTMLImageElement>, configSrv: AlainConfigService, private http: _HttpClient, private platform: Platform) {
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
    const { size, imgEl, useHttp } = this;
    if (useHttp) {
      this.getByHttp();
      return;
    }

    let newSrc = this.src;
    if (newSrc.includes('qlogo.cn')) {
      const arr = newSrc.split('/');
      const imgSize = arr[arr.length - 1];
      arr[arr.length - 1] = imgSize === '0' || +imgSize !== size ? size.toString() : imgSize;
      newSrc = arr.join('/');
    }

    newSrc = newSrc.replace(/^(?:https?:)/i, '');

    imgEl.src = newSrc;
  }

  private getByHttp(): void {
    if (!this.platform.isBrowser) {
      return;
    }

    const { imgEl } = this;
    this.http.get(this.src, null, { responseType: 'blob' }).subscribe(
      (blob: Blob) => {
        const reader = new FileReader();
        reader.onloadend = () => (imgEl.src = reader.result as string);
        reader.onerror = () => this.setError();
        reader.readAsDataURL(blob);
      },
      () => this.setError(),
    );
  }

  private updateError(): void {
    const { imgEl, error } = this;
    // tslint:disable-next-line: only-arrow-functions, typedef
    imgEl.onerror = function () {
      this.onerror = null;
      this.src = error;
    };
  }

  private setError(): void {
    const { imgEl, error } = this;
    imgEl.src = error;
  }
}
