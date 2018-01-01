import { Injectable } from '@angular/core';

@Injectable()
export class ImageConfig {
    /**
     * 默认大小，默认值：`64`，单位：px
     */
    size?: number = 64;

    /**
     * 错误图片
     */
    error?: string = './assets/img/logo.svg';
}
