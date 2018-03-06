import { TestBed, async, inject } from '@angular/core/testing';

import { ThemesService } from './themes.service';
import { SettingsService } from '../settings/settings.service';

describe('Service: Themes', () => {
    let themes: ThemesService;
    let set: SettingsService;
    beforeEach(() => {
        const i = TestBed.configureTestingModule({
            imports: [],
            providers: [ThemesService, SettingsService]
        });
        themes = i.get(ThemesService);
        set = i.get(SettingsService);
    });

    it('should create an instance', () => {
        expect(themes).toBeTruthy();
    });

    it('should be change theme', () => {
        themes.setTheme('A');
        themes.setTheme('B');
        expect(themes.getDefaultTheme()).toBe('B');
    });

    it('should be change theme when body has class list', () => {
        themes.setTheme('A');
        document.querySelector('body').className = 'asdf';
        themes.setTheme('B');
        expect(themes.getDefaultTheme()).toBe('B');
    });

    it('#getDefaultTheme', () => {
        expect(themes.getDefaultTheme()).toBe(themes.defaultTheme);
    });
});
