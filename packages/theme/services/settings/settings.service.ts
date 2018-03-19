import { Injectable } from '@angular/core';
import { App, Layout, User } from './interface';

const KEY = 'layout';

@Injectable()
export class SettingsService {
    app: App = {
        year: (new Date()).getFullYear()
    };

    user: User = {};

    private _layout: Layout = null;

    private get(key: string) {
        return JSON.parse(localStorage.getItem(key) || 'null') || null;
    }

    private set(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    get layout(): Layout {
        if (!this._layout) {
            this._layout = Object.assign(<Layout>{
                fixed: true,
                collapsed: false,
                boxed: false,
                theme: 'A',
                lang: null
            }, this.get(KEY));
            this.set(KEY, this._layout);
        }
        return this._layout;
    }

    setLayout(name: string, value: any): boolean {
        if (typeof this.layout[name] !== 'undefined') {
            this.layout[name] = value;
            this.set(KEY, this._layout);
            return true;
        }
        return false;
    }

    setApp(val: App) {
        this.app = Object.assign(this.app, val);
    }

    setUser(val: User) {
        this.user = Object.assign(this.user, val);
    }

}
