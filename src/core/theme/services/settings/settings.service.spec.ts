import { TestBed, async, inject } from '@angular/core/testing';
import { SettingsService, App, User } from '../settings/settings.service';

describe('Service: Settings', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [SettingsService]
        });
    });

    it('should create an instance', inject([SettingsService], (service: SettingsService) => {
        expect(service).toBeTruthy();
    }));

    describe('#setLayout', () => {

        it('should be setting lang', inject([SettingsService], (service: SettingsService) => {
            service.setLayout('lang', 'zh-cn');
            expect(service.layout.lang).toBe('zh-cn');
        }));

        it('should be setting no exists key lang1', inject([SettingsService], (service: SettingsService) => {
            expect(service.setLayout('lang1', 'zh-cn')).toBeFalsy();
        }));

    });

    it('should be setting app', inject([SettingsService], (service: SettingsService) => {
        const app = <App>{
            name: `ng-alain`,
            description: 'description',
            year: 2017
        };
        service.setApp(app);
        expect(service.app.name).toBe(app.name);
        expect(service.app.description).toBe(app.description);
        expect(service.app.year).toBe(app.year);
    }));

    it('should be setting user', inject([SettingsService], (service: SettingsService) => {
        const user = <User>{
            name: `ng-alain`,
            avatar: 'description',
            email: 'cipchk@qq.com'
        };
        service.setApp(user);
        expect(service.app.name).toBe(user.name);
        expect(service.app.avatar).toBe(user.avatar);
        expect(service.app.email).toBe(user.email);
    }));
});
