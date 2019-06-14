import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { InputNumber } from '@delon/util';

import { ImageConfig } from './image.config';

/**
 * img标签
 * + 支持微信、qq头像规则缩略图规则
 * + 支持移除http&https协议http
 * + 支持增加onerror事件
 */
@Directive({
  selector: '[_src]',
  exportAs: '_src',
})
export class ImageDirective implements OnChanges, OnInit {
  @Input('_src') src: string;
  @Input() @InputNumber() size = 64;
  @Input() error = './assets/img/logo.svg';

  private inited = false;
  private imgEl: HTMLImageElement;

  constructor(cog: ImageConfig, el: ElementRef<HTMLImageElement>) {
    Object.assign(this, { ...new ImageConfig(), ...cog });
    this.imgEl = el.nativeElement;
  }

  ngOnInit(): void {
    this.update();
    this.updateError();
    this.inited = true;
  }

  ngOnChanges(changes: { [P in keyof this]?: SimpleChange } & SimpleChanges): void {
    if (!this.inited) return;
    if (changes.error) {
      this.updateError();
    }
    this.update();
  }

  private update() {
    let newSrc = this.src;
    const { size, imgEl } = this;

    if (newSrc.includes('qlogo.cn')) {
      const arr = newSrc.split('/');
      const imgSize = arr[arr.length - 1];
      arr[arr.length - 1] = imgSize === '0' || +imgSize !== size ? size.toString() : imgSize;
      newSrc = arr.join('/');
    }

    newSrc = newSrc.replace(/^(?:https?:)/i, '');

    imgEl.src = newSrc;
    imgEl.height = size;
    imgEl.width = size;
  }

  private updateError() {
    const { imgEl, error } = this;
    // tslint:disable-next-line: only-arrow-functions
    imgEl.onerror = function() {
      this.onerror = null;
      this.src = error;
    };
  }
}
