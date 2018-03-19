import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Title, DOCUMENT } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { MenuService } from '../menu/menu.service';
import { Menu } from '../menu/interface';
import { AlainI18NService, AlainI18NServiceFake } from '../i18n/i18n';
import { TitleService } from './title.service';
import { AlainThemeModule } from '../../theme.module';
import { ALAIN_I18N_TOKEN } from '../i18n/i18n';

describe('Service: Title', () => {
    let getPathByUrlData: any;
    class TestTitleService {
        setTitle = jasmine.createSpy('reset');
    }

    class TestMenuService {
        getPathByUrl(url: string): Menu[] {
            return getPathByUrlData;
        }
    }

    class TestDocument {
        querySelector() {
            return {
                firstChild: {
                    textContent: 'a'
                }
            };
        }
    }

    let title: TestTitleService;
    let srv: TitleService;
    let menu: MenuService;
    let i18n: AlainI18NService;
    const alain = 'Alain';
    const notPageName = 'Not Page Name';

    function genModule(providers: any[] = []) {
        TestBed.configureTestingModule({
            imports: [
                AlainThemeModule, RouterTestingModule
            ],
            providers: [
                TitleService,
                MenuService,
                { provide: Title, useClass: TestTitleService },
                { provide: ALAIN_I18N_TOKEN, useClass: AlainI18NServiceFake }
            ].concat(providers)
        });
        title = TestBed.get(Title);
        srv = TestBed.get(TitleService);
        menu = TestBed.get(MenuService);
        i18n = TestBed.get(ALAIN_I18N_TOKEN);
    }

    describe('[default]', () => {
        beforeEach(() => genModule());

        it('should set the default empty title', () => {
            srv.suffix = alain;
            srv.setTitle();
            expect(title.setTitle).toHaveBeenCalledWith(notPageName + ' - ' + alain);
        });

        it('should set new title', () => {
            srv.suffix = alain;
            srv.setTitle('newTitle');
            expect(title.setTitle).toHaveBeenCalledWith('newTitle - ' + alain);
        });

        it('should set new title via array', () => {
            srv.suffix = alain;
            srv.setTitle(['newTitle']);
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

        it('#default', () => {
            const def = 'DEFAULT';
            srv.default = def;
            srv.setTitle();
            expect(title.setTitle).toHaveBeenCalledWith(def);
        });
    });

    describe('[login]', () => {
        describe('should be hava title via route data property', () => {
            it('with text', () => {
                genModule([
                    {
                        provide: ActivatedRoute,
                        useValue: {
                            firstChild: {
                                snapshot: {
                                    data: {
                                        title: alain
                                    }
                                }
                            }
                        }
                    }
                ]);
                srv.setTitle();
                expect(title.setTitle).toHaveBeenCalledWith(alain);
            });
            it('without', () => {
                genModule([
                    {
                        provide: ActivatedRoute,
                        useValue: {
                        }
                    }
                ]);
                srv.setTitle();
                expect(title.setTitle).toHaveBeenCalledWith(notPageName);
            });
            it('with i18n', () => {
                const titleI18n = 'a';
                genModule([
                    {
                        provide: ActivatedRoute,
                        useValue: {
                            snapshot: {
                                data: {
                                    titleI18n
                                }
                            }
                        }
                    }
                ]);
                spyOn(i18n, 'fanyi');
                srv.setTitle();
                expect(i18n.fanyi).toHaveBeenCalled();
            });
        });

        describe('should be hava title via menu data property', () => {
            it('with text', () => {
                getPathByUrlData = [
                    { text: 'home' }
                ];
                genModule([
                    { provide: MenuService, useClass: TestMenuService }
                ]);
                srv.setTitle();
                expect(title.setTitle).toHaveBeenCalledWith(getPathByUrlData[0].text);
            });
            it('with i18n', () => {
                getPathByUrlData = [
                    { text: 'home', i18n: 'a' }
                ];
                genModule([
                    { provide: MenuService, useClass: TestMenuService }
                ]);
                srv.setTitle();
                expect(title.setTitle).toHaveBeenCalledWith(getPathByUrlData[0].i18n);
            });
            it('without menu data', () => {
                getPathByUrlData = [
                ];
                genModule([
                    { provide: MenuService, useClass: TestMenuService }
                ]);
                srv.setTitle();
                expect(title.setTitle).toHaveBeenCalledWith(notPageName);
            });
        });

        describe('should be hava title via element', () => {
            it('with element', () => {
                genModule([
                    { provide: DOCUMENT, useClass: TestDocument }
                ]);
                srv.setTitle();
                expect(title.setTitle).toHaveBeenCalledWith('a');
            });
            it('without element', () => {
                genModule([ ]);
                srv.setTitle();
                expect(title.setTitle).toHaveBeenCalledWith(notPageName);
            });
        });
    });
});
