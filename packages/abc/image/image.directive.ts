import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
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
  exportAs: 'srcDirective',
})
export class ImageDirective implements OnChanges, OnInit {
  @Input('_src') src: string;
  @Input() @InputNumber() size = 64;
  @Input() error = './assets/img/logo.svg';

  private inited = false;

  constructor(
    cog: ImageConfig,
    private el: ElementRef,
    private render: Renderer2,
  ) {
    Object.assign(this, { ...new ImageConfig(), ...cog});
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
    } else {
      this.update();
    }
  }

  private update() {
    let newSrc = this.src;

    if (newSrc.includes('qlogo.cn')) {
      const arr = newSrc.split('/');
      const size = arr[arr.length - 1];
      arr[arr.length - 1] = size === '0' || +size !== this.size ? this.size.toString() : size;
      newSrc = arr.join('/');
    }

    const isHttp = newSrc.startsWith('http:');
    const isHttps = newSrc.startsWith('https:');
    if (isHttp || isHttps) {
      newSrc = newSrc.substr(isHttp ? 5 : 6);
    }

    this.render.setAttribute(this.el.nativeElement, 'src', newSrc);
  }

  private updateError() {
    this.render.setAttribute(this.el.nativeElement, 'onerror', `this.src='${this.error}'`);
  }
}
