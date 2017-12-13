import { TestBed, async, inject } from '@angular/core/testing';
import { ThemesService } from './themes.service';
import { SettingsService } from '../settings/settings.service';

describe('Service: Themes', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [ThemesService, SettingsService]
        });
    });

    it('should create an instance', inject([ThemesService, SettingsService], (themes: ThemesService, settings: SettingsService) => {
        expect(themes).toBeTruthy();
    }));

    it('#setTheme', inject([ThemesService, SettingsService], (themes: ThemesService, settings: SettingsService) => {
        themes.setTheme('A');
        themes.setTheme('B');
        expect(themes.getDefaultTheme()).toBe('B');
    }));

    it('#getDefaultTheme', inject([ThemesService, SettingsService], (themes: ThemesService, settings: SettingsService) => {
        expect(themes.getDefaultTheme()).toBe(themes.defaultTheme);
    }));
});
