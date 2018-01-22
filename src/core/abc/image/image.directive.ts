import { Directive, Input, OnChanges, ElementRef, Renderer2, SimpleChanges, OnInit, SimpleChange } from '@angular/core';
import { deepCopy } from '../utils/utils';
import { ImageConfig } from './image.config';

/**
 * img标签
 * + 支持微信、qq头像规则缩略图规则
 * + 支持移除http&https协议http
 * + 支持增加onerror事件
 */
@Directive({ selector: '[_src]' })
export class ImageDirective implements OnChanges, OnInit {

    @Input('_src') src: string;

    @Input() size = 64;

    @Input() error = './assets/img/logo.svg';

    private inited = false;

    constructor(private el: ElementRef, private render: Renderer2, DEF: ImageConfig) {
        Object.assign(this, deepCopy(DEF));
    }

    ngOnInit(): void {
        this.update();
        this.updateError();
        this.inited = true;
    }

    ngOnChanges(changes: { [P in keyof this]?: SimpleChange } & SimpleChanges): void {
        if (this.inited) {
            if (changes.error)
                this.updateError();
            else
                this.update();
        }
    }

    private update() {
        let newSrc = this.src;

        // region: fix weixin & qq avatar size
        if (newSrc.includes('qlogo.cn')) {
            const arr = newSrc.split('/'),
                  size = arr[arr.length - 1];
            arr[arr.length - 1] = (size === '0' || +size !== this.size) ? this.size.toString() : size;
            newSrc = arr.join('/');
        }
        // endregion

        // region: remove https & http
        const isHttp = newSrc.startsWith('http:'),
              isHttps = newSrc.startsWith('https:');
        if (isHttp || isHttps)
            newSrc = newSrc.substr(isHttp ? 5 : 6);

        // endregion

        this.render.setAttribute(this.el.nativeElement, 'src', newSrc);
    }

    private updateError() {
        this.render.setAttribute(this.el.nativeElement, 'onerror', `this.src='${this.error}';`);
    }
}
