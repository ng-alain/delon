import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../settings/settings.service';

export type ThemeType = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J';

@Injectable()
export class ThemesService {

    styleTag: any;
    defaultTheme: ThemeType = 'A';

    constructor(private settings: SettingsService, @Inject(DOCUMENT) private doc: any) {
        this.setTheme(settings.layout.theme);
    }

    setTheme(name: ThemeType) {
        if (name === this.defaultTheme) {
            return;
        }
        const bodyEl = this.doc.querySelector('body');
        const removeArr = [];
        for (let i = 0; i < bodyEl.classList.length; i++) {
            if (bodyEl.classList[i].startsWith('theme-')) {
                removeArr.push(bodyEl.classList[i]);
            }
        }
        bodyEl.classList.remove(...removeArr);
        bodyEl.classList.add(`theme-${name.toLowerCase()}`);
        this.defaultTheme = name;
        this.settings.setLayout('theme', name);
    }

    getDefaultTheme() {
        return this.defaultTheme;
    }

}
