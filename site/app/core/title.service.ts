import { Injectable, Inject } from '@angular/core';
import { Title, DOCUMENT } from '@angular/platform-browser';
import { I18NService } from '../i18n/service';
import { MetaService } from './meta.service';

/**
 * 设置标题
 */
@Injectable()
export class TitleService {
    constructor(
        private title: Title,
        private meta: MetaService,
        private i18n: I18NService,
        @Inject(DOCUMENT) private doc: Document) { }

    private _prefix = '';
    private _suffix = '';
    private _separator = ' - ';
    private _reverse = false;

    /** 设置分隔符 */
    set separator(value: string) {
        this._separator = value;
    }

    /** 设置前缀 */
    set prefix(value: string) {
        this._prefix = value;
    }

    /** 设置后缀 */
    set suffix(value: string) {
        this._suffix = value;
    }

    /** 设置是否反转 */
    set reverse(value: boolean) {
        this._reverse = value;
    }

    /**
     * 设置标题
     */
    setTitle(title?: string | string[]) {
        if (!title) {
            title = '';
        }
        if (title && !Array.isArray(title)) {
            title = [ title ];
        }

        let newTitles = [];
        if (this._prefix) {
            newTitles.push(this._prefix);
        }
        if (title && title.length > 0) {
            newTitles.push(...(title as string[]));
        }
        if (this._suffix) {
            newTitles.push(this._suffix);
        }
        if (this._reverse) {
            newTitles = newTitles.reverse();
        }
        this.title.setTitle(newTitles.join(this._separator));
    }

    setTitleByUrl(url: string) {
        const item = this.meta.getPathByUrl(url);
        this.setTitle(item ? item.title || item.subtitle : '');
    }
}
