import { Component, DebugElement, TemplateRef, ViewChild, Injector } from '@angular/core';
import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AlainThemeModule, MenuService, SettingsService } from '@delon/theme';

import { AdSidebarNavModule } from './sidebar-nav.module';
import { SidebarNavComponent } from './sidebar-nav.component';
import { deepCopy } from '../utils/utils';
import { Nav } from './interface';
import { of } from 'rxjs/observable/of';

const floatingShowCls = '.nav-floating-show';
const MOCKMENUS = <Nav[]>[
    {
        text: '主导航',
        group: true,
        children: [
            {
                text: '仪表盘',
                children: [
                    { text: 'v1', link: '/v1' },
                    { text: 'v2', link: '#/v2', i18n: 'v2-i18n' },
                    { text: 'v3' }
                ]
            }
        ]
    }
];
describe('abc: sidebar-nav', () => {
    let injector: Injector;
    let fixture: ComponentFixture<TestComponent>;
    let dl: DebugElement;
    let context: TestComponent;
    let router: Router;
    let setSrv: SettingsService;
    let menuSrv: MenuService;
    let page: PageObject;

    beforeEach(() => {
        injector = TestBed.configureTestingModule({
            imports: [ RouterModule.forRoot([]), AlainThemeModule.forRoot(), AdSidebarNavModule.forRoot() ],
            declarations: [ TestComponent ],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' }
            ]
        });
    });

    function createComp(needMockNavigateByUrl = true, callback?: () => void) {
        fixture = TestBed.createComponent(TestComponent);
        dl = fixture.debugElement;
        context = fixture.componentInstance;
        fixture.detectChanges();
        router = injector.get(Router);
        setSrv = injector.get(SettingsService);
        menuSrv = injector.get(MenuService);
        menuSrv.add(deepCopy(MOCKMENUS));
        page = new PageObject();
        if (needMockNavigateByUrl) spyOn(router, 'navigateByUrl');
        if (callback) callback();
    }

    afterEach(() => context.comp.ngOnDestroy());

    function getEl<T>(cls: string, body = false) {
        const el = body ? document.querySelector(cls) : dl.query(By.css(cls)) ? dl.query(By.css(cls)).nativeElement : null;
        return el ? el as T : null;
    }

    function isText(cls: string, value: any) {
        const el = getEl<HTMLElement>(cls);
        if (el) return el.innerText.trim();
        return '';
    }

    it('should be toggle open', () => {
        createComp();
        const data = deepCopy(MOCKMENUS);
        menuSrv.add(data);
        expect(data[0].children[0]._open).toBeUndefined();
        const subTitleEl = getEl<HTMLElement>('.nav-sub-title');
        subTitleEl.click();
        fixture.detectChanges();
        expect(data[0].children[0]._open).toBe(true);
    });

    it('should be reset menu when service is changed', () => {
        createComp();
        isText('.nav-group-title', MOCKMENUS[0].text);
        const newMenu = deepCopy(MOCKMENUS);
        newMenu[0].text = 'new主导航';
        menuSrv.add(newMenu);
        fixture.detectChanges();
        isText('.nav-group-title', newMenu[0].text);
    });

    describe('[collapsed]', () => {
        describe('#default', () => {
            beforeEach(() => {
                createComp();
                setSrv.layout.collapsed = true;
                fixture.detectChanges();
            });
            it(`should be won't show sub-menu when not collapse`, () => {
                setSrv.layout.collapsed = false;
                fixture.detectChanges();
                page.showSubMenu(false);
            });
            it('should be show sub-menu', () => {
                page.showSubMenu();
            });
        });
        describe('should be hide sub-menu in floating container', () => {
            it('muse be hide via click menu link', () => {
                createComp();
                setSrv.layout.collapsed = true;
                fixture.detectChanges();
                page.showSubMenu();
                page.hideSubMenu();
                expect(router.navigateByUrl).toHaveBeenCalled();
            });
            it('muse be hide via click menu link in hash route mode', () => {
                TestBed.overrideProvider(APP_BASE_HREF, { useFactory: () => {
                    return '#';
                }, deps: [] });
                createComp();
                setSrv.layout.collapsed = true;
                fixture.detectChanges();
                page.showSubMenu();
                page.hideSubMenu();
                expect(router.navigateByUrl).toHaveBeenCalled();
            });
            it('muse be hide via mouse leave area', () => {
                createComp();
                setSrv.layout.collapsed = true;
                fixture.detectChanges();
                page.showSubMenu();
                getEl<HTMLElement>(floatingShowCls, true).dispatchEvent(new Event('mouseleave'));
                fixture.detectChanges();
                expect(getEl<HTMLElement>(floatingShowCls, true)).toBeNull();
            });
            it('muse be not hide via click except menu link area', () => {
                createComp();
                setSrv.layout.collapsed = true;
                fixture.detectChanges();
                page.showSubMenu();
                const containerEl = getEl<HTMLElement>(floatingShowCls, true);
                containerEl.querySelectorAll('li')[1].click();
                fixture.detectChanges();
                expect(router.navigateByUrl).not.toHaveBeenCalled();
            });
        });
    });

    describe('[underPad]', () => {
        it('should be auto collapsed when less than pad', fakeAsync(() => {
            // create test component
            TestBed.overrideTemplate(TestComponent, `<sidebar-nav #comp [autoCloseUnderPad]="true"></sidebar-nav>`);
            const defaultCollapsed = false;
            createComp(false, () => {
                spyOnProperty(window, 'innerWidth').and.returnValue(991);
                setSrv.layout.collapsed = defaultCollapsed;
                fixture.detectChanges();
            });
            router.navigateByUrl('/');
            fixture.detectChanges();
            tick(20);
            expect(setSrv.layout.collapsed).toBe(!defaultCollapsed);
        }));
        it(`should be won't collapsed when more than pad`, fakeAsync(() => {
            // create test component
            TestBed.overrideTemplate(TestComponent, `<sidebar-nav #comp [autoCloseUnderPad]="true"></sidebar-nav>`);
            const defaultCollapsed = false;
            createComp(false, () => {
                spyOnProperty(window, 'innerWidth').and.returnValue(993);
                setSrv.layout.collapsed = defaultCollapsed;
                fixture.detectChanges();
            });
            router.navigateByUrl('/');
            fixture.detectChanges();
            tick(20);
            expect(setSrv.layout.collapsed).toBe(defaultCollapsed);
        }));
    });

    class PageObject {
        /** 期望显示子菜单，默认：`true` */
        showSubMenu(resultExpectShow = true) {
            let conEl = getEl<HTMLElement>(floatingShowCls, true);
            expect(conEl).toBeNull();
            const subTitleEl = getEl<HTMLElement>('.nav-sub-title');
            subTitleEl.dispatchEvent(new Event('mouseenter'));
            fixture.detectChanges();
            conEl = getEl<HTMLElement>(floatingShowCls, true);
            if (resultExpectShow) {
                expect(conEl).not.toBeNull();
            } else {
                expect(conEl).toBeNull();
            }
        }
        /** 期望隐藏子菜单，默认：`true` */
        hideSubMenu(resultExpectHide = true) {
            const containerEl = getEl<HTMLElement>(floatingShowCls, true);
            expect(containerEl).not.toBeNull();
            containerEl.querySelector(resultExpectHide ? 'a' : 'li').click();
            fixture.detectChanges();
            const conEl = getEl<HTMLElement>(floatingShowCls, true);
            if (resultExpectHide)
                expect(conEl).toBeNull();
            else
                expect(conEl).not.toBeNull();
        }
    }

});

@Component({
    template: `
    <sidebar-nav #comp [autoCloseUnderPad]="autoCloseUnderPad"></sidebar-nav>
    `
})
class TestComponent {
    @ViewChild('comp') comp: SidebarNavComponent;
    autoCloseUnderPad = false;
}
