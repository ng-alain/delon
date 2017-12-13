import { TestBed, async, inject } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { MenuService } from '../menu/menu.service';
import { AlainThemeModule, TitleService } from 'core/theme';

describe('Service: Title', () => {
    class TestTitleService {
        setTitle = jasmine.createSpy('reset');
    }

    let title: TestTitleService;
    let srv: TitleService;
    let menu: MenuService;
    const alain = 'Alain';
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                AlainThemeModule
            ],
            providers: [
                TitleService, MenuService,
                { provide: Title, useClass: TestTitleService }
            ]
        });
        title = TestBed.get(Title);
        srv = TestBed.get(TitleService);
        menu = TestBed.get(MenuService);
    });

    it('should set the default empty title', () => {
        srv.suffix = alain;
        srv.setTitle();
        expect(title.setTitle).toHaveBeenCalledWith(alain);
    });

    it('should set new title', () => {
        srv.suffix = alain;
        srv.setTitle('newTitle');
        expect(title.setTitle).toHaveBeenCalledWith('newTitle - ' + alain);
    });

    it('#separator', () => {
        srv.suffix = alain;
        srv.separator = ' / ';
        srv.setTitle('newTitle');
        expect(title.setTitle).toHaveBeenCalledWith('newTitle / ' + alain);
    });

    it('#prefix', () => {
        srv.prefix = alain;
        srv.setTitle('newTitle');
        expect(title.setTitle).toHaveBeenCalledWith(alain + ' - newTitle');
    });

    it('#reverse', () => {
        srv.reverse = true;
        srv.suffix = alain;
        srv.setTitle('newTitle');
        expect(title.setTitle).toHaveBeenCalledWith(alain + ' - newTitle');
    });

    it('#setTitleByUrl', () => {
        menu.add([
            {
                text: 'dashboard', link: '/dashboard',
                children: [
                    { text: 'v1', link: '/dashboard/v1' },
                    { text: 'v2', link: '/dashboard/v2' }
                ]
            }
        ]);
        srv.setTitleByUrl('/dashboard/v1');
        expect(title.setTitle).toHaveBeenCalledWith('v1');
    });

    it('#setTitleByUrl should by empty url', () => {
        srv.setTitleByUrl('');
        expect(title.setTitle).toHaveBeenCalledWith('');
    });
});
