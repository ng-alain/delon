import { CommonModule } from '@angular/common';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Component, DebugElement, Injectable, Type, ViewChild } from '@angular/core';
import { ComponentFixture, discardPeriodicTasks, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { dispatchDropDown } from '@delon/testing';
import { ALAIN_I18N_TOKEN, DatePipe, DelonLocaleModule, DelonLocaleService, DrawerHelper, en_US, ModalHelper } from '@delon/theme';
import { AlainConfig, ALAIN_CONFIG, deepCopy, deepGet } from '@delon/util';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPaginationComponent } from 'ng-zorro-antd/pagination';
import { Observable, of, Subject } from 'rxjs';
import { AlainI18NService, AlainI18NServiceFake } from '../../../theme/src/services/i18n/i18n';
import { STDataSource } from '../st-data-source';
import { STExport } from '../st-export';
import { STComponent } from '../st.component';
import {
  STChange,
  STChangeType,
  STColumn,
  STColumnBadge,
  STColumnFilter,
  STColumnTag,
  STColumnTitle,
  STMultiSort,
  STPage,
  STReq,
  STRes,
  STResReNameType,
  STWidthMode,
} from '../st.interfaces';
import { STModule } from '../st.module';
import { STWidgetRegistry } from './../st-widget';

const MOCKDATE = new Date();
const MOCKIMG = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg==`;
const r = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

function genData(count: number) {
  return Array(count)
    .fill({})
    .map((_item: any, idx: number) => {
      return {
        id: idx + 1,
        name: `name ${idx + 1}`,
        age: Math.ceil(Math.random() * 10) + 20,
        yn: idx % 2 === 0,
        date: MOCKDATE,
        img: MOCKIMG,
        num: 11111111111.4556,
        status: Math.floor(Math.random() * 5) + 1,
        tag: r(1, 5),
        prices: {
          fix: `fix${idx + 1}`,
          total: Math.ceil(Math.random() * 10) + 200,
        },
      };
    });
}

const PS = 3;
const DEFAULTCOUNT = PS + 1;
const USERS: any[] = genData(DEFAULTCOUNT);

const i18nResult = 'zh';
@Injectable()
class MockI18NServiceFake extends AlainI18NServiceFake {
  fanyi(_key: string) {
    return i18nResult;
  }
}

class MockNzI18nService {
  getDateLocale() {
    return null;
  }
}

describe('abc: table', () => {
  let fixture: ComponentFixture<TestComponent>;
  let context: TestComponent;
  let dl: DebugElement;
  let page: PageObject;
  let comp: STComponent;
  let i18nSrv: AlainI18NService;
  let registerWidget: STWidgetRegistry;

  function genModule(other: { template?: string; i18n?: boolean; minColumn?: boolean; providers?: any[]; createComp?: boolean }) {
    other = {
      template: '',
      i18n: false,
      minColumn: false,
      providers: [],
      createComp: true,
      ...other,
    };
    const imports = [
      NoopAnimationsModule,
      CommonModule,
      FormsModule,
      HttpClientTestingModule,
      RouterTestingModule.withRoutes([]),
      NzModalModule,
      NzDrawerModule,
      STModule,
      DelonLocaleModule,
    ];
    const providers = [
      {
        provide: ALAIN_I18N_TOKEN,
        useClass: MockI18NServiceFake,
      },
    ];
    if (other.providers!.length > 0) {
      providers.push(...other.providers!);
    }
    TestBed.configureTestingModule({
      imports,
      declarations: [TestComponent, TestExpandComponent, TestWidgetComponent],
      providers,
    });
    if (other.template) TestBed.overrideTemplate(TestComponent, other.template);
    registerWidget = TestBed.inject(STWidgetRegistry);
    registerWidget.register('test', TestWidgetComponent);
    // ALAIN_I18N_TOKEN 默认为 root 会导致永远都会存在
    i18nSrv = TestBed.inject(ALAIN_I18N_TOKEN);
    if (other.createComp) {
      createComp(other.minColumn, TestComponent);
    }
  }

  function createComp<T extends TestComponent>(minColumn = false, type: Type<T>) {
    fixture = TestBed.createComponent(type);
    dl = fixture.debugElement;
    context = dl.componentInstance;
    context.data = deepCopy(USERS);
    if (minColumn) {
      context.columns = [{ title: '', index: 'id' }];
    }
    page = new PageObject();
  }

  afterEach(() => comp.ngOnDestroy());

  describe('', () => {
    beforeEach(() => {
      genModule({ createComp: false });
      createComp(true, TestComponent);
    });
    describe('#columns', () => {
      describe('[title]', () => {
        it('with STColumnTitle type', fakeAsync(() => {
          page
            .updateColumn([{ title: { text: 'a' }, index: 'id' }])
            .expectHead('a', 'id')
            .asyncEnd();
        }));
        it('should be render optional', fakeAsync(() => {
          page
            .updateColumn([{ title: { text: 'a', optional: 'b', optionalHelp: 'help' }, index: 'id' }])
            .expectHead('b', 'id', '.st__head-optional');
          expect(page.getHead('id').querySelector('.st__head-tip') != null).toBe(true);
          page.asyncEnd();
        }));
      });
      describe('[type]', () => {
        describe(`with checkbox`, () => {
          it(`should be render checkbox`, fakeAsync(() => {
            page
              .updateColumn([{ title: '', index: 'id', type: 'checkbox' }])
              .expectElCount('.st__checkall', 1, 'muse be a check all')
              .expectElCount('.st__body .ant-checkbox-wrapper', PS, `muse be ${PS} check in body`)
              .asyncEnd();
          }));
          it('should auto column width', fakeAsync(() => {
            page.updateColumn([{ title: 'id', index: 'id', type: 'checkbox' }]).expectColumn('id', 'width', '50px');
          }));
          it('should be check all current page', fakeAsync(() => {
            page.updateColumn([{ title: '', index: 'id', type: 'checkbox' }]).click('.st__checkall');
            expect(comp._data.filter(w => w.checked).length).toBe(PS);
            page.click('.st__checkall');
            expect(comp._data.filter(w => w.checked).length).toBe(0);
            page.asyncEnd();
          }));
          it('should be checked in row', fakeAsync(() => {
            page
              .updateColumn([{ title: '', index: 'id', type: 'checkbox' }])
              .expectData(1, 'checked', undefined)
              .click('.st__body .ant-checkbox-wrapper')
              .expectData(1, 'checked', true)
              .click('.st__body .ant-checkbox-wrapper')
              .expectData(1, 'checked', false)
              .asyncEnd();
          }));
          it('should selected id value less than 2 rows', fakeAsync(() => {
            const selections = [
              {
                text: '<div class="j-s1"></div>',
                select: (ls: any[]) => ls.forEach(i => (i.checked = i.id < 2)),
              },
            ];
            page
              .updateColumn([{ title: '', index: 'id', type: 'checkbox', selections }])
              .expectData(1, 'checked', undefined)
              .expectData(2, 'checked', undefined);
            // mock click
            comp._rowSelection(comp._columns[0].selections![0]);
            page.expectData(1, 'checked', true).expectData(2, 'checked', false);
            page.asyncEnd();
          }));
          it('should be unchecked via clearCheck', fakeAsync(() => {
            page
              .updateColumn([{ title: '', index: 'id', type: 'checkbox' }])
              .expectData(1, 'checked', undefined)
              .click('.st__body .ant-checkbox-wrapper')
              .expectData(1, 'checked', true);
            comp.clearCheck();
            page.expectData(1, 'checked', false).asyncEnd();
          }));
        });
        describe('with radio', () => {
          it(`should be render checkbox`, fakeAsync(() => {
            page
              .updateColumn([{ title: 'RADIOname', index: 'id', type: 'radio' }])
              .expectHead('RADIOname', 'id')
              .expectElCount('.st__body .ant-radio-wrapper', PS, `muse be ${PS} radio in body`)
              .asyncEnd();
          }));
          it('should auto column width', fakeAsync(() => {
            page.updateColumn([{ title: 'id', index: 'id', type: 'radio' }]).expectColumn('id', 'width', '50px');
          }));
          it('should be checked in row', fakeAsync(() => {
            page
              .updateColumn([{ title: '', index: 'id', type: 'radio' }])
              .expectData(1, 'checked', undefined)
              .click('.st__body .ant-radio-wrapper')
              .expectData(1, 'checked', true)
              .click('.st__body tr[data-index="1"] .ant-radio-wrapper')
              .expectData(1, 'checked', false)
              .asyncEnd();
          }));
          it('should be unchecked via clearRadio', fakeAsync(() => {
            page
              .updateColumn([{ title: '', index: 'id', type: 'radio' }])
              .expectData(1, 'checked', undefined)
              .click('.st__body .ant-radio-wrapper')
              .expectData(1, 'checked', true);
            comp.clearRadio();
            page.expectData(1, 'checked', false).asyncEnd();
          }));
        });
        describe('with link', () => {
          it(`should be render anchor link`, fakeAsync(() => {
            const columns = [
              {
                title: '',
                index: 'id',
                type: 'link',
                click: jasmine.createSpy(),
              },
            ];
            page
              .updateColumn(columns as any)
              .expectCell('1', 1, 1, 'a')
              .clickCell('a');
            expect(columns[0].click).toHaveBeenCalled();
            page.asyncEnd();
          }));
          it(`should be text when not specify click`, fakeAsync(() => {
            page.updateColumn([{ title: '', index: 'id', type: 'link' }]).expectCell(null, 1, 1, 'a');
            page.asyncEnd();
          }));
          it('should be navigate url when click is string value', fakeAsync(() => {
            const router = TestBed.inject<Router>(Router);
            spyOn(router, 'navigateByUrl');
            context.data = [{ link: '/a' }];
            page
              .updateColumn([
                {
                  title: '',
                  index: 'link',
                  type: 'link',
                  click: (item: any) => item.link,
                },
              ])
              .clickCell('a');
            expect(router.navigateByUrl).toHaveBeenCalled();
            page.asyncEnd();
          }));
        });
        describe('with img', () => {
          it(`should be render img`, fakeAsync(() => {
            const columns = [{ title: '', index: 'img', type: 'img' }];
            page
              .updateColumn(columns as any)
              .expectCell('', 1, 1, 'img')
              .asyncEnd();
          }));
          it('should not render img when is empty data', fakeAsync(() => {
            const columns = [{ title: '', index: 'img', type: 'img' }];
            context.data = [{ img: MOCKIMG }, { img: '' }];
            page
              .updateColumn(columns as any)
              .expectCell('', 1, 1, 'img')
              .expectCell(null, 2, 1, 'img')
              .asyncEnd();
          }));
        });
        describe('with currency', () => {
          it(`should be render currency`, fakeAsync(() => {
            page
              .updateColumn([{ title: '', index: 'id', type: 'currency' }])
              .expectCell('￥1.00')
              .asyncEnd();
          }));
          it(`should be text right`, fakeAsync(() => {
            page.updateColumn([{ title: '', index: 'id', type: 'currency' }]);
            expect(page.getCell().classList).toContain('text-right');
            page.asyncEnd();
          }));
        });
        describe('with number', () => {
          it(`should be render number`, fakeAsync(() => {
            page
              .updateColumn([{ title: '', index: 'num', type: 'number' }])
              .expectCell('11,111,111,111.456')
              .asyncEnd();
          }));
          it(`should be custom render number digits`, fakeAsync(() => {
            page
              .updateColumn([
                {
                  title: '',
                  index: 'id',
                  type: 'number',
                  numberDigits: '3.1-5',
                },
              ])
              .expectCell('001.0')
              .asyncEnd();
          }));
          it(`should be text right`, fakeAsync(() => {
            page.updateColumn([{ title: '', index: 'num', type: 'number' }]);
            expect(page.getCell().classList).toContain('text-right');
            page.asyncEnd();
          }));
        });
        describe('with date', () => {
          it(`should be render date`, fakeAsync(() => {
            page
              .updateColumn([{ title: '', index: 'date', type: 'date' }])
              .expectCell(new DatePipe(new MockNzI18nService() as any).transform(MOCKDATE, 'yyyy-MM-dd HH:mm'))
              .asyncEnd();
          }));
          it(`should be custom render date format`, fakeAsync(() => {
            page
              .updateColumn([
                {
                  title: '',
                  index: 'date',
                  type: 'date',
                  dateFormat: 'yyyy-MM',
                },
              ])
              .expectCell(new DatePipe(new MockNzI18nService() as any).transform(MOCKDATE, 'yyyy-MM'))
              .asyncEnd();
          }));
          it(`should be text center`, fakeAsync(() => {
            page.updateColumn([{ title: '', index: 'date', type: 'date' }]);
            expect(page.getCell().classList).toContain('text-center');
            page.asyncEnd();
          }));
        });
        describe('with yn', () => {
          it(`should be render yn`, fakeAsync(() => {
            page
              .updateColumn([{ title: '', index: 'yn', type: 'yn' }])
              .expectCell('是', 1, 1, '', true)
              .expectCell('否', 2, 1, '', true)
              .asyncEnd();
          }));
          it(`should be custom render yn`, fakeAsync(() => {
            page
              .updateColumn([{ title: '', index: 'yn', type: 'yn', yn: { yes: 'Y', no: 'N' } }])
              .expectCell('Y', 1, 1, '', true)
              .expectCell('N', 2, 1, '', true)
              .asyncEnd();
          }));
          it(`should be custom truth value`, fakeAsync(() => {
            page
              .updateColumn([
                {
                  title: '',
                  index: 'id',
                  type: 'yn',
                  yn: {
                    truth: 1,
                    yes: 'Y',
                    no: 'N',
                  },
                },
              ])
              .expectCell('Y', 1, 1, '', true)
              .expectCell('N', 2, 1, '', true)
              .expectCell('N', 3, 1, '', true)
              .asyncEnd();
          }));
        });
        describe('with widget', () => {
          it(`should be working`, fakeAsync(() => {
            expect(Object.keys(registerWidget.widgets)).toContain('test');
            page.updateColumn([{ type: 'widget', widget: { type: 'test' } }], 1, 1).expectCell('1', 1, 1, '.widget-record-value');
          }));
          it(`should be specify parameters`, fakeAsync(() => {
            page
              .updateColumn([{ type: 'widget', widget: { type: 'test', params: () => ({ id: 10 }) } }], 1, 1)
              .expectCell('10', 1, 1, '.widget-id-value');
          }));
        });
      });
      describe('with badge', () => {
        const BADGE: STColumnBadge = {
          1: { text: '成功', color: 'success' },
          2: { text: '错误', color: 'error' },
          3: { text: '进行中', color: 'processing' },
          4: { text: '默认', color: 'default' },
          5: { text: '警告', color: 'warning' },
        };
        it(`should be render badge`, fakeAsync(() => {
          page
            .updateColumn([{ title: '', index: 'status', type: 'badge', badge: BADGE }])
            .expectElCount('.ant-badge', PS)
            .asyncEnd();
        }));
        it(`should be render text when badge is undefined or null`, fakeAsync(() => {
          page
            .updateColumn([{ title: '', index: 'status', type: 'badge', badge: null }])
            .expectElCount('.ant-badge', 0)
            .asyncEnd();
        }));
      });
      describe('with tag', () => {
        const TAG: STColumnTag = {
          1: { text: '成功', color: 'green' },
          2: { text: '错误', color: 'red' },
          3: { text: '进行中', color: 'blue' },
          4: { text: '默认', color: '' },
          5: { text: '警告', color: 'orange' },
        };
        it(`should be render tag`, fakeAsync(() => {
          page
            .updateColumn([{ title: 'tag', index: 'tag', type: 'tag', tag: TAG }])
            .expectElCount('.ant-tag', PS)
            .asyncEnd();
        }));
        it(`should be render text when tag is undefined or null`, fakeAsync(() => {
          page
            .updateColumn([{ title: '', index: 'status', type: 'tag', tag: null }])
            .expectElCount('.ant-tag', 0)
            .asyncEnd();
        }));
      });
      describe('[other]', () => {
        it('should custom render via format', fakeAsync(() => {
          page
            .updateColumn([
              {
                title: '',
                index: 'id',
                format: a => `<div class="j-format">${a.id}</div>`,
              },
            ])
            .expectCell('1', 1, 1, '.j-format')
            .asyncEnd();
        }));
        it('should default render via default', fakeAsync(() => {
          page
            .updateColumn([
              {
                title: '',
                index: 'id1',
                default: '-',
              },
            ])
            .expectCell('-')
            .asyncEnd();
        }));
        it('should be custom class in cell', fakeAsync(() => {
          page.updateColumn([{ title: '', index: 'id', className: 'asdf' }]);
          expect(page.getCell().classList).toContain('asdf');
          page.asyncEnd();
        }));
      });
      describe('[buttons]', () => {
        it(`should be pop confirm when type=del`, fakeAsync(() => {
          const columns: STColumn[] = [
            {
              title: '',
              buttons: [
                { text: 'del', type: 'del' },
                {
                  type: 'del',
                  click: jasmine.createSpy(),
                  popTitle: 'confirm?',
                },
              ],
            },
          ];
          page.updateColumn(columns).expectCell('del', 1, 1, '[nz-popconfirm]');
          // mock trigger
          comp._btnClick(comp._data[0], comp._columns[0].buttons![0]);
          expect(columns[0].buttons![1].click).not.toHaveBeenCalled();
          comp._btnClick(comp._data[0], comp._columns[0].buttons![1]);
          expect(columns[0].buttons![1].click).toHaveBeenCalled();
          page.asyncEnd();
        }));
        it('should custom render text via format', fakeAsync(() => {
          const columns: STColumn[] = [
            {
              title: '',
              buttons: [
                {
                  text: a => `<div class="j-btn-format">${a.id}</div>`,
                },
              ],
            },
          ];
          page.updateColumn(columns).expectElCount('.j-btn-format', PS).asyncEnd();
        }));
        it('should custom render text via text function', fakeAsync(() => {
          const columns: STColumn[] = [
            {
              title: '',
              buttons: [
                {
                  text: a => `<div class="j-btn-format">${a.id}</div>`,
                },
              ],
            },
          ];
          page.updateColumn(columns).expectElCount('.j-btn-format', PS).asyncEnd();
        }));
        it('#614', fakeAsync(() => {
          const columns: STColumn[] = [
            {
              title: '',
              buttons: [
                { text: 'del', type: 'del' },
                {
                  text: 'del',
                  type: 'del',
                  click: jasmine.createSpy(),
                  popTitle: 'confirm?',
                },
              ],
            },
          ];
          page.updateColumn(columns);
          // mock trigger
          comp._btnClick(comp._data[0], comp._columns[0].buttons![0]);
          expect(true).toBe(true);
          page.asyncEnd();
        }));
        describe('[condition]', () => {
          it('should be hide menu in first row', fakeAsync(() => {
            const columns: STColumn[] = [
              {
                title: '',
                buttons: [{ text: 'a', iif: (item: any) => item.id !== 1 }],
              },
            ];
            page.updateColumn(columns).expectCell(null!, 1, 1, 'a').expectCell('a', 2, 1, 'a').asyncEnd();
          }));
        });
        describe('[events]', () => {
          it('#reload', fakeAsync(() => {
            const columns: STColumn[] = [
              {
                title: '',
                buttons: [{ text: 'a', click: 'reload' }],
              },
            ];
            spyOn(comp, 'reload');
            page.updateColumn(columns);
            expect(comp.reload).not.toHaveBeenCalled();
            page.clickCell('a');
            expect(comp.reload).toHaveBeenCalled();
            page.asyncEnd();
          }));
          it('#load', fakeAsync(() => {
            const columns: STColumn[] = [
              {
                title: '',
                buttons: [{ text: 'a', click: 'load' }],
              },
            ];
            spyOn(comp, 'load');
            page.updateColumn(columns);
            expect(comp.load).not.toHaveBeenCalled();
            page.clickCell('a');
            expect(comp.load).toHaveBeenCalled();
            page.asyncEnd();
          }));
          describe('#modal', () => {
            it('is normal mode', fakeAsync(() => {
              const columns: STColumn[] = [
                {
                  title: '',
                  buttons: [
                    {
                      text: 'a',
                      type: 'modal',
                      click: jasmine.createSpy(),
                      modal: {
                        component: {},
                        params: () => ({ aa: 1 }),
                      },
                    },
                  ],
                },
              ];
              const modalHelp = TestBed.inject<ModalHelper>(ModalHelper);
              const mock$ = new Subject();
              spyOn(modalHelp, 'create').and.callFake(() => mock$);
              page.updateColumn(columns);
              expect(modalHelp.create).not.toHaveBeenCalled();
              page.clickCell('a');
              expect(modalHelp.create).toHaveBeenCalled();
              expect(columns[0].buttons![0].click).not.toHaveBeenCalled();
              mock$.next({});
              expect(columns[0].buttons![0].click).toHaveBeenCalled();
              mock$.unsubscribe();
              page.asyncEnd();
            }));
            it('is static mode', fakeAsync(() => {
              const columns: STColumn[] = [
                {
                  title: '',
                  buttons: [
                    {
                      text: 'a',
                      type: 'static',
                      click: jasmine.createSpy(),
                      modal: {
                        component: {},
                        params: () => ({ aa: 1 }),
                      },
                    },
                  ],
                },
              ];
              const modalHelp = TestBed.inject<ModalHelper>(ModalHelper);
              const mock$ = new Subject();
              spyOn(modalHelp, 'createStatic').and.callFake(() => mock$);
              page.updateColumn(columns);
              expect(modalHelp.createStatic).not.toHaveBeenCalled();
              page.clickCell('a');
              expect(modalHelp.createStatic).toHaveBeenCalled();
              expect(columns[0].buttons![0].click).not.toHaveBeenCalled();
              mock$.next({});
              expect(columns[0].buttons![0].click).toHaveBeenCalled();
              mock$.unsubscribe();
              page.asyncEnd();
            }));
          });
          describe('#drawer', () => {
            it('is normal mode', fakeAsync(() => {
              const columns: STColumn[] = [
                {
                  title: '',
                  buttons: [
                    {
                      text: 'a',
                      type: 'drawer',
                      click: jasmine.createSpy(),
                      drawer: {
                        component: {},
                        params: () => ({ aa: 1 }),
                      },
                    },
                  ],
                },
              ];
              const drawerHelp = TestBed.inject<DrawerHelper>(DrawerHelper);
              const mock$ = new Subject();
              spyOn(drawerHelp, 'create').and.callFake(() => mock$);
              page.updateColumn(columns);
              expect(drawerHelp.create).not.toHaveBeenCalled();
              page.clickCell('a');
              expect(drawerHelp.create).toHaveBeenCalled();
              expect(columns[0].buttons![0].click).not.toHaveBeenCalled();
              mock$.next({});
              expect(columns[0].buttons![0].click).toHaveBeenCalled();
              mock$.unsubscribe();
              page.asyncEnd();
            }));
          });
          describe('#link', () => {
            it('should be trigger click', fakeAsync(() => {
              const columns: STColumn[] = [
                {
                  title: '',
                  buttons: [{ text: 'a', type: 'link', click: () => null }],
                },
              ];
              const router = TestBed.inject<Router>(Router);
              spyOn(router, 'navigateByUrl');
              page.updateColumn(columns);
              expect(router.navigateByUrl).not.toHaveBeenCalled();
              page.clickCell('a');
              expect(router.navigateByUrl).not.toHaveBeenCalled();
              page.asyncEnd();
            }));
            it('should be navigate when return a string value', fakeAsync(() => {
              const columns: STColumn[] = [
                {
                  title: '',
                  buttons: [{ text: 'a', type: 'link', click: () => '/a' }],
                },
              ];
              const router = TestBed.inject<Router>(Router);
              spyOn(router, 'navigateByUrl');
              page.updateColumn(columns);
              expect(router.navigateByUrl).not.toHaveBeenCalled();
              page.clickCell('a');
              expect(router.navigateByUrl).toHaveBeenCalled();
              page.asyncEnd();
            }));
            it('should be include route state when return a string value', fakeAsync(() => {
              const columns: STColumn[] = [
                {
                  title: '',
                  buttons: [{ text: 'a', type: 'link', click: () => '/a' }],
                },
              ];
              const router = TestBed.inject<Router>(Router);
              const spy = spyOn(router, 'navigateByUrl');
              page.updateColumn(columns).clickCell('a');
              const arg = spy.calls.mostRecent().args[1] as any;
              expect(arg.state.pi).toBe(1);
              page.asyncEnd();
            }));
          });
        });
      });
      describe('[fixed]', () => {
        it('should be fixed left column', fakeAsync(() => {
          page.updateColumn([
            { title: '1', index: 'id', fixed: 'left', width: '100px' },
            { title: '2', index: 'id', fixed: 'left', width: '100px' },
            { title: '3', index: 'id', fixed: 'left', width: '100px' },
          ]);
          expect(page.getCell(1, 1).style.left).toBe('0px');
          expect(page.getCell(1, 2).style.left).toBe('100px');
          expect(page.getCell(1, 3).style.left).toBe('200px');
          page.asyncEnd();
        }));
        it('should be fixed right column', fakeAsync(() => {
          page.updateColumn([
            { title: '1', index: 'id', fixed: 'right', width: '100px' },
            { title: '2', index: 'id', fixed: 'right', width: '100px' },
            { title: '3', index: 'id', fixed: 'right', width: '100px' },
          ]);
          expect(page.getCell(1, 1).style.right).toBe('200px');
          expect(page.getCell(1, 2).style.right).toBe('100px');
          expect(page.getCell(1, 3).style.right).toBe('0px');
          page.asyncEnd();
        }));
      });
      describe('[Mulit Headers]', () => {
        it('should be working', fakeAsync(() => {
          page.updateColumn([
            {
              title: 'user',
              children: [
                { title: 'name', index: 'name' },
                { title: 'age', index: 'age', colSpan: 1, rowSpan: 2 },
              ],
            },
          ]);
          page.expectElCount('.ant-table-thead .ant-table-row', 2).expectElCount('.ant-table-thead .ant-table-cell', 3).asyncEnd();
        }));
      });
    });
    describe('[data source]', () => {
      let httpBed: HttpTestingController;
      beforeEach(() => {
        httpBed = TestBed.inject(HttpTestingController as Type<HttpTestingController>);
      });
      it('support null data', fakeAsync(() => {
        page.updateData(null);
        expect(comp._data.length).toBe(0);
        page.updateData(genData(10));
        expect(comp._data.length).toBe(PS);
        page.asyncEnd();
      }));
      it('should only restore data', () => {
        // tslint:disable-next-line:no-string-literal
        const dataSource: STDataSource = comp['dataSource'];
        spyOn(dataSource, 'process').and.callFake(() => of({} as any));
        fixture.detectChanges();
        expect(comp.ps).toBe(PS);
      });
      it('should be automatically cancel paging when the returned body value is an array type', done => {
        context.pi = 1;
        context.ps = 2;
        context.data = '/mock';
        fixture.detectChanges();
        httpBed.expectOne(() => true).flush([{}, {}, {}]);
        fixture.whenStable().then(() => {
          expect(comp.pi).toBe(1);
          expect(comp.ps).toBe(3);
          expect(comp._isPagination).toBe(false);
          done();
        });
      });
      describe('Http Request', () => {
        it('when error request', done => {
          context.data = '/mock';
          fixture.detectChanges();
          httpBed.expectOne(() => true).error(new ErrorEvent('cancel'));
          fixture.whenStable().then(() => {
            expect(comp._data.length).toBe(0);
            done();
          });
        });
        it('when http status: 0', done => {
          context.data = '/mock';
          fixture.detectChanges();
          httpBed.expectOne(() => true).flush(null, { status: 0, statusText: '' });
          fixture.whenStable().then(() => {
            expect(comp._data.length).toBe(0);
            done();
          });
        });
        it('when http status: 404', done => {
          context.data = '/mock';
          fixture.detectChanges();
          httpBed.expectOne(() => true).flush(null, { status: 404, statusText: 'Not found' });
          fixture.whenStable().then(() => {
            expect(comp._data.length).toBe(0);
            done();
          });
        });
        it('when http status: 403', done => {
          context.data = '/mock';
          fixture.detectChanges();
          httpBed.expectOne(() => true).flush(null, { status: 403, statusText: 'Forbidden' });
          fixture.whenStable().then(() => {
            expect(comp._data.length).toBe(0);
            done();
          });
        });
        it('should be ingore catch error when component is destroyed', done => {
          expect(context.error).not.toHaveBeenCalled();
          context.data = '/mock';
          fixture.detectChanges();
          comp.ngOnDestroy();
          fixture.whenStable().then(() => {
            expect(context.error).not.toHaveBeenCalled();
            done();
          });
        });
        it('should be ingored incomplete request when has new request', done => {
          context.data = '/mock1';
          fixture.detectChanges();
          context.data = '/mock2';
          fixture.detectChanges();
          // Can't call have beed unsubscribe request in flush method, so muse be using `try {} catch {}`
          try {
            httpBed.expectOne(req => req.url === '/mock2').flush([{}]);
            httpBed.expectOne(req => req.url === '/mock1').flush([{}, {}]);
            expect(true).toBe(false);
          } catch {}

          fixture.whenStable().then(() => {
            expect(comp._data.length).toBe(1);
            done();
          });
        });
      });
    });
    describe('#req', () => {
      it('should fix all paraments when only part parament', () => {
        context.req = { reName: { pi: 'PI' } };
        fixture.detectChanges();
        expect(comp.req.reName).not.toBeNull();
        expect(comp.req.reName!.pi).toBe('PI');
        expect(comp.req.reName!.ps).toBe('ps');
      });
      it('should be ingore request when lazyLoad is true', () => {
        const anyComp = comp as any;
        spyOn(anyComp, 'loadPageData');
        context.req = { lazyLoad: true };
        fixture.detectChanges();
        expect(anyComp.loadPageData).not.toHaveBeenCalled();
      });
    });
    describe('#res', () => {
      it('should fix all paraments when only part parament', () => {
        context.res = { reName: { total: 'a.b' } };
        fixture.detectChanges();
        const reName = comp.res.reName as STResReNameType;
        expect(reName).not.toBeNull();
        expect(reName.total![0]).toBe('a');
        expect(reName.total![1]).toBe('b');
        expect(reName.list!.length).toBe(1);
        expect(reName.list![0]).toBe('list');
      });
      it('support a.b', () => {
        context.res = { reName: { total: 'a.b', list: 'c.d' } };
        fixture.detectChanges();
        const reName = comp.res.reName as STResReNameType;
        expect(reName).not.toBeNull();
        expect(Array.isArray(reName.total)).toBe(true);
        expect(Array.isArray(reName.list)).toBe(true);
        expect(reName.total![0]).toBe('a');
        expect(reName.total![1]).toBe('b');
        expect(reName.list![0]).toBe('c');
        expect(reName.list![1]).toBe('d');
      });
    });
    describe('#page', () => {
      it('should fix all paraments when only part parament', () => {
        context.page = { total: `TO:{{total}}` };
        fixture.detectChanges();
        expect(comp.page.placement).toBe(`right`);
        expect(comp.page.total).toBe(`TO:{{total}}`);
      });
      it('should be ingore pi event trigger when change size in last page', fakeAsync(() => {
        context.page = { showSize: true, pageSizes: [10, 20] };
        page.cd().go(2);
        let load = 0;
        spyOn(context.comp as any, 'loadData').and.callFake(() => {
          ++load;
          return Promise.resolve({});
        });
        const pc = dl.query(By.directive(NzPaginationComponent)).injector.get<NzPaginationComponent>(NzPaginationComponent);
        expect(load).toBe(0);
        pc.onPageSizeChange(10);
        fixture.detectChanges();
        expect(load).toBe(1);
        page.asyncEnd();
      }));
    });
    describe('#showTotal', () => {
      it('with true', fakeAsync(() => {
        context.page.total = true;
        page.cd();
        fixture.detectChanges();
        page.expectElContent('.ant-pagination-total-text', `共 ${DEFAULTCOUNT} 条`).asyncEnd();
      }));
      it('with false', fakeAsync(() => {
        context.page.total = false;
        page.cd().expectElContent('.ant-pagination-total-text', '').asyncEnd();
      }));
      it('should be custom template', fakeAsync(() => {
        context.pi = 1;
        context.ps = 3;
        context.page.total = `{{total}}/{{range[0]}}/{{range[1]}}`;
        page.cd().expectElContent('.ant-pagination-total-text', `${DEFAULTCOUNT}/${comp.pi}/${comp.ps}`).asyncEnd();
      }));
    });
    describe('#showPagination', () => {
      describe('with undefined', () => {
        beforeEach(() => {
          context.ps = 2;
          context.page.show = undefined;
        });
        it('should auto hide when total less than ps', fakeAsync(() => {
          context.data = deepCopy(USERS).slice(0, 1);
          page.cd().expectElCount('nz-pagination', 0).asyncEnd();
        }));
        it('should auto show when ps less than total', fakeAsync(() => {
          context.data = deepCopy(USERS).slice(0, 3);
          page.cd().expectElCount('nz-pagination', 1).asyncEnd();
        }));
      });
      it('should always show when with true', fakeAsync(() => {
        context.page.show = true;
        page.cd().expectElCount('nz-pagination', 1).asyncEnd();
      }));
    });
    describe('#pagePlacement', () => {
      ['left', 'center'].forEach(pos => {
        it(`with ${pos}`, fakeAsync(() => {
          context.page.placement = pos as any;
          page.cd().expectElCount(`.st__p-${pos}`, 1).asyncEnd();
        }));
      });
    });
    describe('#responsive', () => {
      it('with true', fakeAsync(() => {
        context.responsive = true;
        page.cd().expectElCount(`.ant-table-rep`, 1).asyncEnd();
      }));
      it('with false', fakeAsync(() => {
        context.responsive = false;
        page.cd().expectElCount(`.ant-table-rep`, 0).expectElCount(`.ant-table-rep__title`, 0).asyncEnd();
      }));
    });
    describe('#responsiveHideHeaderFooter', () => {
      it('should working', fakeAsync(() => {
        context.responsiveHideHeaderFooter = true;
        page.cd().expectElCount(`.ant-table-rep__hide-header-footer`, 1).asyncEnd();
      }));
    });
    describe('#toTop', () => {
      beforeEach(() => {
        context.page.toTopOffset = 10;
      });
      it('with true', fakeAsync(() => {
        context.page.toTop = true;
        page.cd();
        const el = page.getEl('st');
        spyOn(el, 'scrollIntoView');
        page.cd().go(2);
        expect(el.scrollIntoView).toHaveBeenCalled();
        page.asyncEnd();
      }));
      it('with false', fakeAsync(() => {
        context.page.toTop = false;
        page.cd();
        const el = page.getEl('st');
        spyOn(el, 'scrollIntoView');
        page.cd().go(2);
        expect(el.scrollIntoView).not.toHaveBeenCalled();
        page.asyncEnd();
      }));
      it('should scroll to .ant-table-body when used scroll', fakeAsync(() => {
        context.scroll = { x: '1300px' };
        context.page.toTop = true;
        page.cd();
        const el = page.getEl('st');
        spyOn(el, 'scrollIntoView');
        page.go(2);
        expect(el.scrollIntoView).not.toHaveBeenCalled();
        page.asyncEnd();
      }));
      it('should be enforce to the top via load', fakeAsync(() => {
        context.page.toTop = false;
        page.cd();
        const el = page.getEl('st');
        spyOn(el, 'scrollIntoView');
        comp.reload({}, { toTop: true });
        page.cd();
        expect(el.scrollIntoView).toHaveBeenCalled();
        page.asyncEnd();
      }));
      it('should be cancelled to the top via load', fakeAsync(() => {
        context.page.toTop = true;
        page.cd();
        const el = page.getEl('st');
        spyOn(el, 'scrollIntoView');
        comp.reload({}, { toTop: false });
        page.cd();
        expect(el.scrollIntoView).not.toHaveBeenCalled();
        page.asyncEnd();
      }));
    });
    describe('#expand', () => {
      beforeEach(() => createComp(true, TestExpandComponent));
      it('should be switch expand via expand icon', fakeAsync(() => {
        page.cd();
        const el = page.getCell(1, 1).querySelector('.ant-table-row-expand-icon') as HTMLElement;
        page.expectData(1, 'expand', undefined);
        el.click();
        page.expectData(1, 'expand', true).asyncEnd();
      }));
      describe('should be expanded when click row if expandRowByClick', () => {
        it('with true', fakeAsync(() => {
          context.expandRowByClick = true;
          page.cd();
          const el = page.getCell(1, 2);
          page.expectData(1, 'expand', undefined);
          el.click();
          page.expectData(1, 'expand', true).expectChangeType('expand').asyncEnd();
        }));
        it('with false', fakeAsync(() => {
          context.expandRowByClick = false;
          page.cd();
          const el = page.getCell(1, 2);
          page.expectData(1, 'expand', undefined);
          el.click();
          page.expectData(1, 'expand', undefined).asyncEnd();
        }));
        it('should be click icon when with true', fakeAsync(() => {
          context.expandRowByClick = true;
          page
            .cd()
            .expectData(1, 'expand', undefined)
            .clickCell('.ant-table-row-expand-icon')
            .expectData(1, 'expand', true)
            .expectChangeType('expand')
            .asyncEnd();
        }));
      });
      describe('expandRowByClick', () => {
        it('should be close other expaned', fakeAsync(() => {
          context.expandAccordion = true;
          context.expandRowByClick = true;
          page.cd().clickCell(1, 2).clickCell(2, 2).expectData(1, 'expand', false).expectData(2, 'expand', true).asyncEnd();
        }));
        it('should be keeping expaned', fakeAsync(() => {
          context.expandAccordion = false;
          context.expandRowByClick = true;
          page.cd().clickCell(1, 2).clickCell(2, 2).expectData(1, 'expand', true).expectData(2, 'expand', true).asyncEnd();
        }));
        it('should be stop propagation in button event', fakeAsync(() => {
          context.expandRowByClick = true;
          context.columns = [
            {
              title: '',
              buttons: [
                {
                  text: 'btn',
                },
              ],
            },
          ];
          page.cd().clickEl('.st__btn-text').expectData(1, 'expand', undefined).asyncEnd();
        }));
      });
      describe('should be set showExpand in row data', () => {
        it(`muse be hide expand icon`, fakeAsync(() => {
          context.expandRowByClick = false;
          context.data = deepCopy(USERS).slice(0, 1) as NzSafeAny[];
          context.data[0].showExpand = false;
          page.cd().expectElCount('.ant-table-row-expand-icon', 0).clickCell(1, 2).expectChangeType('expand', false).asyncEnd();
        }));
      });
    });
    describe('[filter]', () => {
      describe('in local-data', () => {
        let filter: STColumnFilter;
        let firstCol: STColumn;
        beforeEach(() => {
          context.columns = [
            {
              title: '',
              index: 'i',
              filter: {
                multiple: true,
                menus: [
                  { text: 'f1', value: 'fv1' },
                  { text: 'f2', value: 'fv2' },
                ],
                confirmText: 'ok',
                clearText: 'reset',
                icon: 'aa',
                fn: () => true,
              },
            },
          ];
        });
        it('muse provide the fn function', fakeAsync(() => {
          spyOn(console, 'warn');
          context.columns[0].filter!.fn = null;
          page.cd();
          firstCol = comp._columns[0];
          filter = firstCol.filter as STColumnFilter;
          comp._filterRadio(firstCol, filter.menus![0], true);
          comp._filterRadio(firstCol, filter.menus![1], true);
          comp._filterConfirm(firstCol);
          page.cd();
          expect(console.warn).toHaveBeenCalled();
          page.asyncEnd();
        }));
        describe('when is single', () => {
          beforeEach(() => {
            context.columns[0].filter!.multiple = false;
            fixture.detectChanges();
            firstCol = comp._columns[0];
            filter = firstCol.filter as STColumnFilter;
            comp._filterRadio(firstCol, filter.menus![0], true);
            comp._filterRadio(firstCol, filter.menus![1], true);
            comp._filterConfirm(firstCol);
          });
          it('should be filter', () => {
            const res = filter.menus!.filter(w => w.checked);
            expect(res.length).toBe(1);
          });
          it('should be clean', () => {
            comp.clearFilter();
            const res = filter.menus!.filter(w => w.checked);
            expect(res.length).toBe(0);
          });
        });
        describe('when is multiple', () => {
          beforeEach(() => {
            context.columns[0].filter!.multiple = true;
            fixture.detectChanges();
            firstCol = comp._columns[0];
            filter = firstCol.filter as STColumnFilter;
            filter.menus![0].checked = true;
            filter.menus![1].checked = true;
            comp._filterConfirm(firstCol);
          });
          it('should be filter', () => {
            const res = filter.menus!.filter(w => w.checked);
            expect(res.length).toBe(2);
          });
          it('should be clean', () => {
            comp._filterClear(firstCol);
            const res = filter.menus!.filter(w => w.checked);
            expect(res.length).toBe(0);
          });
        });
        describe('when type is keyword', () => {
          beforeEach(() => {
            context.columns[0].filter!.type = 'keyword';
            context.columns[0].filter!.default = true;
            context.columns[0].filter!.menus![0].value = 'a';
            fixture.detectChanges();
            firstCol = comp._columns[0];
            filter = firstCol.filter!;
          });
          it('should be filter', () => {
            expect(context.change).not.toHaveBeenCalled();
            comp._filterConfirm(firstCol);
            expect(context.change).toHaveBeenCalled();
          });
          it('should be clean', () => {
            const m = filter.menus![0];
            expect(m.value).toBe('a');
            context.comp.clearFilter();
            expect(m.value).toBe(undefined);
          });
        });
      });
    });
    describe('[sort]', () => {
      describe('in local-data', () => {
        beforeEach(() => {
          context.columns = [
            {
              title: '',
              index: 'i',
              sort: { default: 'ascend', compare: () => 1 },
            },
            {
              title: '',
              index: 'i',
              sort: { default: 'descend', compare: () => 1 },
            },
          ];
        });
        describe('when single-sort', () => {
          beforeEach(() => (context.multiSort = false));
          it('muse provide the compare function', fakeAsync(() => {
            spyOn(console, 'warn');
            page.updateColumn([{ title: '', index: 'i', sort: true }]);
            comp.sort(comp._columns[0], 0, 'descend');
            page.cd();
            expect(console.warn).toHaveBeenCalled();
            page.asyncEnd();
          }));
          it('should be sorting', fakeAsync(() => {
            page.cd();
            comp.sort(comp._columns[0], 0, 'descend');
            const sortList = comp._columns.filter(item => item._sort && item._sort.enabled && item._sort.default).map(item => item._sort!);
            expect(sortList.length).toBe(1);
            expect(sortList[0].default).toBe('descend');
            page.asyncEnd();
          }));
        });
        describe('when multi-sort', () => {
          beforeEach(() => (context.multiSort = true));
          it('should be sorting', fakeAsync(() => {
            page.cd();
            comp.sort(comp._columns[0], 0, 'descend');
            comp.sort(comp._columns[1], 0, 'ascend');
            const sortList = comp._columns.filter(item => item._sort && item._sort.enabled && item._sort.default).map(item => item._sort!);
            expect(sortList.length).toBe(2);
            expect(sortList[0].default).toBe('descend');
            expect(sortList[1].default).toBe('ascend');
            page.asyncEnd();
          }));
        });
      });
    });
    describe('[row events]', () => {
      beforeEach(fakeAsync(() => {
        context.rowClickTime = 10;
        page.cd();
      }));
      it(`should be row click`, fakeAsync(() => {
        page.clickCell();
        expect(page._changeData.type).toBe('click');
      }));
      it(`should be row double click`, fakeAsync(() => {
        const cell = page.getCell() as HTMLElement;
        cell.click();
        cell.click();
        fixture.detectChanges();
        tick(100);
        expect(page._changeData.type).toBe('dblClick');
      }));
      it('should be ingore input', fakeAsync(() => {
        const el = page.getCell() as HTMLElement;
        // mock input nodeName
        spyOnProperty(el, 'nodeName', 'get').and.returnValue('INPUT');
        el.click();
        page.cd().expectChangeType('click', false);
      }));
    });
    describe('[public method]', () => {
      describe('#load', () => {
        it('nothing specified', () => {
          expect(context.change).not.toHaveBeenCalled();
          fixture.detectChanges();
          comp.load();
          expect(context.change).toHaveBeenCalled();
        });
        it(`can specify page number`, () => {
          expect(context.change).not.toHaveBeenCalled();
          fixture.detectChanges();
          comp.load(2);
          expect(context.change).toHaveBeenCalled();
          expect(comp.pi).toBe(2);
        });
        it(`can specify extra params`, () => {
          expect(context.change).not.toHaveBeenCalled();
          fixture.detectChanges();
          comp.load(1, { a: 1 });
          expect(context.change).toHaveBeenCalled();
          expect(comp.req.params.a).toBe(1);
        });
        it('shoule be keeping extra params when do not passed', () => {
          comp.load(1, { a: 1 });
          expect(comp.req.params.a).toBe(1);
          comp.load(1);
          expect(comp.req.params.a).toBe(1);
        });
        it('shoule be merge extra params', () => {
          comp.load(1, { a: 1 });
          comp.load(1, { b: 2 }, { merge: true });
          expect(comp.req.params.a).toBe(1);
          expect(comp.req.params.b).toBe(2);
        });
        it(`can't contaminate raw data`, () => {
          const params: any = { a: 1 };
          context.req = { params };
          fixture.detectChanges();
          comp.load(1, { b: 2 }, { merge: true });
          expect(comp.req.params.a).toBe(1);
          expect(comp.req.params.b).toBe(2);
          expect(params.b).toBeUndefined();
        });
      });
      describe('#reload', () => {
        it('keeping current page index', () => {
          fixture.detectChanges();
          comp.load(2);
          expect(comp.pi).toBe(2);
          comp.reload();
          expect(comp.pi).toBe(2);
        });
        it('without extra params', () => {
          expect(context.change).not.toHaveBeenCalled();
          const orgExtraParams = comp.req.params;
          fixture.detectChanges();
          comp.reload();
          expect(context.change).toHaveBeenCalled();
          expect(comp.req.params).toBe(orgExtraParams);
        });
        it(`with extra params`, () => {
          expect(context.change).not.toHaveBeenCalled();
          fixture.detectChanges();
          comp.reload({ a: 1 });
          expect(context.change).toHaveBeenCalled();
          expect(comp.req.params.a).toBe(1);
        });
        it('merge extra params', () => {
          comp.reload({ a: 1 });
          comp.reload({ b: 2 }, { merge: true });
          expect(comp.req.params.a).toBe(1);
          expect(comp.req.params.b).toBe(2);
        });
      });
      describe('#reset', () => {
        it('always the first page', () => {
          fixture.detectChanges();
          comp.load(2);
          expect(comp.pi).toBe(2);
          comp.reset();
          expect(comp.pi).toBe(1);
        });
        it('without extra params', () => {
          expect(context.change).not.toHaveBeenCalled();
          const orgExtraParams = comp.req.params;
          fixture.detectChanges();
          comp.reset();
          expect(context.change).toHaveBeenCalled();
          expect(comp.req.params).toBe(orgExtraParams);
          expect(comp.pi).toBe(1);
        });
        it(`with extra params`, () => {
          expect(context.change).not.toHaveBeenCalled();
          fixture.detectChanges();
          comp.reset({ a: 1 });
          expect(context.change).toHaveBeenCalled();
          expect(comp.req.params.a).toBe(1);
          expect(comp.pi).toBe(1);
        });
        it('merge extra params', () => {
          comp.reset({ a: 1 });
          comp.reset({ b: 2 }, { merge: true });
          expect(comp.req.params.a).toBe(1);
          expect(comp.req.params.b).toBe(2);
        });
        it('should be clean check, radio, filter, sort', fakeAsync(() => {
          spyOn(comp, 'clearCheck').and.returnValue(comp);
          spyOn(comp, 'clearRadio').and.returnValue(comp);
          spyOn(comp, 'clearFilter').and.returnValue(comp);
          spyOn(comp, 'clearSort').and.returnValue(comp);
          comp.reset();
          page.cd();
          expect(comp.clearCheck).toHaveBeenCalled();
          expect(comp.clearRadio).toHaveBeenCalled();
          expect(comp.clearFilter).toHaveBeenCalled();
          expect(comp.clearSort).toHaveBeenCalled();
        }));
      });
      describe('#removeRow', () => {
        it('shoule be working', fakeAsync(() => {
          page.cd().expectCurrentPageTotal(PS);
          comp.removeRow(comp._data[0]);
          page.expectCurrentPageTotal(PS - 1);
          comp.removeRow(1);
          page.expectCurrentPageTotal(PS - 2);
        }));
        it('shoule be recalculate no value', fakeAsync(() => {
          page.updateColumn([{ title: '', type: 'no' }]).expectCurrentPageTotal(PS);
          comp._data.forEach((v, idx) => expect(v._values[0].text).toBe(idx + 1));
          comp.removeRow(comp._data[0]);
          comp._data.forEach((v, idx) => expect(v._values[0].text).toBe(idx + 1));
        }));
        it('shoule be ingored invalid data', fakeAsync(() => {
          page.cd().expectCurrentPageTotal(PS);
          comp.removeRow([null]);
          page.expectCurrentPageTotal(PS);
        }));
      });
      describe('#setRow', () => {
        it('should be working', fakeAsync(() => {
          page.cd();
          page.expectData(1, 'name', `name 1`);
          spyOn(comp, 'resetColumns');
          comp.setRow(0, { name: 'new name' });
          expect(comp.resetColumns).not.toHaveBeenCalled();
          page.expectData(1, 'name', `new name`);
          comp.setRow(0, { name: 'a' }, { refreshSchema: true });
          expect(comp.resetColumns).toHaveBeenCalled();
          page.asyncEnd();
        }));
      });
      describe('#clean', () => {
        beforeEach(fakeAsync(() => {
          spyOn(comp, 'clearCheck').and.returnValue(comp);
          spyOn(comp, 'clearRadio').and.returnValue(comp);
          spyOn(comp, 'clearFilter').and.returnValue(comp);
          spyOn(comp, 'clearSort').and.returnValue(comp);
          page.cd();
        }));
        it('#clear', () => {
          expect(comp._data.length).toBe(PS);
          comp.clear();
          expect(comp._data.length).toBe(0);
        });
        it('#clear, excludes clean status', () => {
          expect(comp._data.length).toBe(PS);
          expect(comp.clearCheck).not.toHaveBeenCalled();
          comp.clear(false);
          expect(comp._data.length).toBe(0);
          expect(comp.clearCheck).not.toHaveBeenCalled();
        });
        it('#clearStatus', () => {
          expect(comp.clearCheck).not.toHaveBeenCalled();
          comp.clearStatus();
          expect(comp.clearCheck).toHaveBeenCalled();
        });
      });
      describe('#resetColumns', () => {
        it('should working', fakeAsync(() => {
          let res = true;
          const cls = '.st__body tr[data-index="0"] td';
          page.updateColumn([{ title: '', index: 'name', iif: () => res }]).expectElCount(cls, 1);
          res = false;
          comp.resetColumns();
          page.cd().expectElCount(cls, 0).asyncEnd();
        }));
        it('should be specify new columns', fakeAsync(() => {
          page.updateColumn([{ title: '1', index: 'name' }]).expectHead('1', 'name');
          comp.resetColumns({ columns: [{ title: '2', index: 'name' }] });
          page.cd().expectHead('2', 'name').asyncEnd();
        }));
        it('should be specify new pi', fakeAsync(() => {
          page.updateColumn([{ title: '1', index: 'name' }]);
          expect(comp.pi).toBe(1);
          comp.resetColumns({ pi: 2 });
          page.cd();
          expect(comp.pi).toBe(2);
          page.asyncEnd();
        }));
        it('should be specify new ps', fakeAsync(() => {
          page.updateColumn([{ title: '1', index: 'name' }]);
          expect(comp.ps).toBe(PS);
          comp.resetColumns({ ps: 2 });
          page.cd();
          expect(comp.ps).toBe(2);
          page.asyncEnd();
        }));
        it('should be ingore data reload', fakeAsync(() => {
          page.updateColumn([{ title: '1', index: 'name' }]);
          expect(comp.ps).toBe(PS);
          const compAny = comp as any;
          spyOn(compAny, 'loadPageData');
          comp.resetColumns({ emitReload: false });
          page.cd();
          expect(compAny.loadPageData).not.toHaveBeenCalled();
          page.asyncEnd();
        }));
      });
      it('#filteredData', fakeAsync(() => {
        page.cd();
        expect((comp.data as any[]).length).toBe(DEFAULTCOUNT);
        expect(comp._data.length).toBe(PS);
        comp.filteredData.then(list => {
          expect(list.length).toBe(DEFAULTCOUNT);
        });
        page.asyncEnd();
      }));
      it('#count', fakeAsync(() => {
        page.cd();
        expect(comp.count).toBe(PS);
        page.asyncEnd();
      }));
      it('#list', fakeAsync(() => {
        page.cd();
        expect(comp.list.length).toBe(PS);
        page.asyncEnd();
      }));
      // it('#cdkVirtualScrollViewport', done => {
      //   context.virtualScroll = true;
      //   context.data = genData(10);
      //   fixture.detectChanges();
      //   fixture.whenStable().then(() => {
      //     fixture.detectChanges();
      //     expect(context.comp.cdkVirtualScrollViewport != null).toBe(true);
      //     done();
      //   });
      // });
    });
    describe('#export', () => {
      let exportSrv: STExport;
      beforeEach(() => {
        // tslint:disable-next-line:no-string-literal
        exportSrv = comp['exportSrv'] = {
          export: jasmine.createSpy('export'),
        } as any;
      });
      describe('without specified data', () => {
        it('when data is array data', () => {
          context.data = genData(1);
          fixture.detectChanges();
          expect(exportSrv.export).not.toHaveBeenCalled();
          comp.export();
          expect(exportSrv.export).toHaveBeenCalled();
        });
        it('when data is true', fakeAsync(() => {
          context.data = genData(1);
          page.cd();
          spyOnProperty(comp, 'filteredData', 'get').and.returnValue(Promise.resolve([]));
          expect(exportSrv.export).not.toHaveBeenCalled();
          comp.export(true);
          page.cd();
          expect(exportSrv.export).toHaveBeenCalled();
          page.asyncEnd();
        }));
        it('when data is observable data', () => {
          context.data = of(genData(1));
          fixture.detectChanges();
          expect(exportSrv.export).not.toHaveBeenCalled();
          comp.export();
          expect(exportSrv.export).toHaveBeenCalled();
        });
      });
      describe('with specified data', () => {
        it('should be specified array data', () => {
          expect(exportSrv.export).not.toHaveBeenCalled();
          comp.export([], {});
          expect(exportSrv.export).toHaveBeenCalled();
        });
      });
    });
    describe('#multiSort', () => {
      it('with true', () => {
        context.multiSort = true;
        fixture.detectChanges();
        expect(typeof comp.multiSort).toBe('object');
      });
      it('with false', () => {
        context.multiSort = false;
        fixture.detectChanges();
        expect(comp.multiSort).toBeUndefined();
      });
      it('with object', () => {
        context.multiSort = { key: 'aa' };
        fixture.detectChanges();
        const ms: STMultiSort = comp.multiSort;
        expect(typeof ms).toBe('object');
        expect(ms.key).toBe('aa');
      });
    });
    describe('#widthMode', () => {
      describe('with type is strict', () => {
        it('shoule be add text-truncate class when className is empty and behavior is truncate', fakeAsync(() => {
          context.widthMode = { type: 'strict', strictBehavior: 'truncate' };
          page
            .cd()
            .updateColumn([{ title: '', index: 'id', width: 50 }])
            .expectElCount(`.st__width-strict`, 1)
            .expectElCount(`td.text-truncate`, context.comp._data.length)
            .asyncEnd();
        }));
        it('should be ingore add text-truncate class when className is non-empty', fakeAsync(() => {
          context.widthMode = { type: 'strict', strictBehavior: 'truncate' };
          page
            .cd()
            .updateColumn([{ title: '', index: 'id', width: 50, className: 'aaaa' }])
            .expectElCount(`.st__width-strict`, 1)
            .expectElCount(`.text-truncate`, 0)
            .expectElCount(`td.aaaa`, context.comp._data.length)
            .asyncEnd();
        }));
        it('should be ingore add text-truncate class when type is img', fakeAsync(() => {
          context.widthMode = { type: 'strict', strictBehavior: 'truncate' };
          page
            .cd()
            .updateColumn([{ index: 'img', type: 'img', width: 50 }])
            .expectElCount(`.st__width-strict`, 1)
            .expectElCount(`td.text-truncate`, 0)
            .asyncEnd();
        }));
      });
    });
    describe('#loading', () => {
      it('should be control loading property', fakeAsync(() => {
        context.loading = true;
        page.cd().expectElCount(`.ant-spin-spinning`, 1);
        context.loading = false;
        page.cd();
        page.expectElCount(`.ant-spin-spinning`, 0).asyncEnd();
      }));
    });
    describe('#button', () => {
      describe('#iifBehavior', () => {
        it('with hide', fakeAsync(() => {
          page
            .updateColumn([
              {
                title: '',
                buttons: [{ text: 'a', click: () => 'load', iif: () => false, iifBehavior: 'hide' }],
              },
            ])
            .expectElCount('.st__body tr td a', 0)
            .asyncEnd();
        }));
        it('with disabled', fakeAsync(() => {
          page
            .updateColumn([
              {
                title: '',
                buttons: [{ text: 'a', click: () => 'load', iif: () => false, iifBehavior: 'disabled' }],
              },
            ])
            .expectElCount('.st__btn-disabled', PS)
            .asyncEnd();
        }));
      });
      it('#tooltip', fakeAsync(() => {
        page
          .updateColumn([
            {
              title: '',
              buttons: [{ text: 'a', click: () => 'load', tooltip: 't' }],
            },
          ])
          .expectElCount('.st__body [nz-tooltip]', PS)
          .asyncEnd();
      }));
    });
  });

  describe('#multiSort', () => {
    it('should default is mulit sorting by config', () => {
      genModule({
        minColumn: true,
        providers: [
          {
            provide: ALAIN_CONFIG,
            useValue: { st: { multiSort: { global: true } } } as AlainConfig,
          },
        ],
      });
      expect(comp.multiSort).not.toBeUndefined();
    });
    it('should default non-mulit sorting by config', () => {
      genModule({
        minColumn: true,
        providers: [
          {
            provide: ALAIN_CONFIG,
            useValue: { st: { multiSort: { global: false } } } as AlainConfig,
          },
        ],
      });
      expect(comp.multiSort).toBeUndefined();
    });
  });
  describe('[custom render template]', () => {
    it('with column title', fakeAsync(() => {
      genModule({
        template: `<st #st [data]="data" [columns]="columns">
            <ng-template st-row="id" type="title"><div class="id-title">ID</div></ng-template>
          </st>`,
      });
      page.updateColumn([{ title: '', index: 'id', renderTitle: 'id' }]);
      expect(page.getHead('id').querySelector('.id-title')!.textContent).toBe('ID');
      page.asyncEnd();
    }));
    it('should be custom row', fakeAsync(() => {
      genModule({
        template: `<st #st [data]="data" [columns]="columns">
            <ng-template st-row="id" let-item><div class="j-id">id{{item.id}}</div></ng-template>
          </st>`,
      });
      page.updateColumn([{ title: '', index: 'id', render: 'id' }]);
      expect(page.getCell().querySelector('.j-id')!.textContent).toBe('id1');
      page.asyncEnd();
    }));
    it('allow invalid id', fakeAsync(() => {
      genModule({
        template: `<st #st [data]="data" [columns]="columns">
            <ng-template st-row="invalid-id" let-item><div class="j-id">id{{item.id}}</div></ng-template>
          </st>`,
      });
      page.updateColumn([{ title: '', index: 'id', render: 'id' }]);
      expect(page.getCell().querySelector('.j-id')).toBeNull();
      page.asyncEnd();
    }));
  });
  describe('[i18n]', () => {
    let curLang = 'en';
    beforeEach(() => {
      genModule({ i18n: true });
      spyOn(i18nSrv, 'fanyi').and.callFake(() => curLang);
    });
    it('should working', fakeAsync(() => {
      page.updateColumn([{ title: { i18n: curLang }, index: 'id' }]);
      const el = page.getEl('.ant-pagination-total-text');
      expect(el.textContent!.trim()).toContain(`共`);
      TestBed.inject<DelonLocaleService>(DelonLocaleService).setLocale(en_US);
      page.cd();
      expect(el.textContent!.trim()).toContain(`of`);
      page.asyncEnd();
    }));
    it('should be re-render columns when i18n changed', fakeAsync(() => {
      curLang = 'en';
      page.updateColumn([{ title: { i18n: curLang }, index: 'id' }]);
      page.expectHead(curLang, 'id');
      curLang = 'zh';
      i18nSrv.use(curLang);
      expect(i18nSrv.fanyi).toHaveBeenCalled();
    }));
  });
  class PageObject {
    _changeData: STChange;
    changeSpy: jasmine.Spy;
    constructor() {
      spyOn(context, 'error');
      this.changeSpy = spyOn(context, 'change').and.callFake(((e: NzSafeAny) => (this._changeData = e)) as NzSafeAny);
      comp = context.comp;
    }
    get(cls: string): DebugElement {
      return dl.query(By.css(cls));
    }
    getEl(cls: string): HTMLElement {
      const el = dl.query(By.css(cls));
      expect(el).not.toBeNull();
      return el.nativeElement as HTMLElement;
    }
    clickEl(cls: string): this {
      const el = this.getEl(cls);
      el.click();
      return this.cd();
    }
    click(cls: string): this {
      const el = this.getEl(cls);
      expect(el).not.toBeNull();
      el.click();
      fixture.detectChanges();
      return this;
    }
    /**
     * 获取单元格，下标从 `1` 开始
     */
    getCell(row: number = 1, column: number = 1) {
      const cell = (dl.nativeElement as HTMLElement).querySelector(
        `.st__body tr[data-index="${row - 1}"] td:nth-child(${column})`,
      ) as HTMLElement;
      return cell;
    }
    /**
     * 单击单元格，下标从 `1` 开始
     */
    clickCell(rowOrCls: number | string = 1, column: number = 1, cls?: string) {
      if (typeof rowOrCls === 'string') {
        cls = rowOrCls.toString();
        rowOrCls = 1;
      }
      let el = this.getCell(rowOrCls, column);
      if (cls) {
        el = el.querySelector(cls) as HTMLElement;
      }
      el.click();
      return this.cd();
    }
    /**
     * 断言单元格内容，下标从 `1` 开始
     * @param value 当 `null` 时，表示无单元格
     * @param cls 对单元格进一步筛选
     * @param isContain 是否包含条件
     */
    expectCell(value: string | null, row: number = 1, column: number = 1, cls?: string, isContain?: boolean): this {
      let cell = this.getCell(row, column);
      if (cls) {
        cell = cell.querySelector(cls) as HTMLElement;
      }
      if (value == null) {
        expect(cell).toBeNull();
      } else {
        if (isContain === true) {
          expect(cell.innerHTML).toContain(value);
        } else {
          expect(cell.innerText.trim()).toBe(value);
        }
      }
      return this;
    }
    /** 获取标头 */
    getHead(name: string) {
      const el = (dl.nativeElement as HTMLElement).querySelector(`.ant-table-thead th[data-col="${name}"]`) as HTMLElement;
      return el;
    }
    clickHead(name: string, cls: string): this {
      const el = this.getHead(name).querySelector(cls) as HTMLElement;
      expect(el).not.toBeNull();
      el.click();
      fixture.detectChanges();
      return this;
    }
    expectHead(value: string, name: string, cls?: string): this {
      let cell = this.getHead(name);
      if (cls) cell = cell.querySelector(cls) as HTMLElement;
      if (value == null) {
        expect(cell).toBeNull();
      } else {
        expect(cell.innerText.trim()).toBe(value);
      }
      return this;
    }
    /** 断言组件内 `_columns` 值 */
    expectColumn(title: string, path: string, valule: any): this {
      const ret = deepGet(
        comp._columns.find(w => (w.title as STColumnTitle).text === title),
        path,
      );
      expect(ret).toBe(valule);
      return this;
    }
    /** 断言组件内 `_data` 值，下标从 `1` 开始 */
    expectData(row: number, path: string, valule: any): this {
      const ret = deepGet(comp._data[row - 1], path);
      expect(ret).toBe(valule);
      return this;
    }
    /** 切换分页 */
    go(pi: number = 2) {
      this.getEl(`.ant-pagination [title="${pi}"]`).click();
      return this.cd();
    }
    cd(time = 1000): this {
      fixture.detectChanges();
      tick(time);
      fixture.detectChanges();
      return this;
    }
    updateData(data: NzSafeAny): this {
      context.data = data;
      return this.cd();
    }
    updateColumn(columns: STColumn[], pi = 1, ps = PS): this {
      context.columns = columns;
      context.pi = pi;
      context.ps = ps;
      return this.cd();
    }
    expectCompData(path: string, value: any): this {
      expect(deepGet(comp, path)).toBe(value);
      return this;
    }
    expectDataTotal(value: number): this {
      expect(deepGet(comp, 'total')).toBe(value);
      return this;
    }
    expectTotalPage(value: number): this {
      const a = dl.query(By.css('nz-pagination')).componentInstance as NzPaginationComponent;
      expect(a.getLastIndex(a.nzTotal, a.nzPageSize)).toBe(value);
      return this;
    }
    expectCurrentPageTotal(value: number): this {
      expect(comp._data.length).toBe(value);
      return this;
    }
    expectCompDataPi(value: number): this {
      expect(deepGet(comp, 'pi')).toBe(value);
      return this;
    }
    expectElCount(cls: string, count: number, expectationFailOutput?: string): this {
      const els = document.querySelectorAll(cls);
      expect(els.length).toBe(count, expectationFailOutput);
      return this;
    }
    expectElContent(cls: string, content: string, expectationFailOutput?: string): this {
      const el = document.querySelector(cls);
      if (content == null) {
        expect(el).toBeNull(expectationFailOutput);
      } else {
        expect(el!.textContent!.trim()).toBe(content, expectationFailOutput);
      }
      return this;
    }
    expectChangeType(type: STChangeType, called = true) {
      const callAll = this.changeSpy.calls.all();
      const args = callAll[callAll.length - 1].args[0];
      if (called) {
        expect(args.type).toBe(type);
      } else {
        expect(args.type).not.toBe(type);
      }
      return this;
    }
    openDropDownInHead(nams: string): this {
      dispatchDropDown(dl.query(By.css(`.ant-table-thead th[data-col="${nams}"]`)), 'click');
      fixture.detectChanges();
      return this;
    }
    openDropDownInRow(row: number = 1) {
      dispatchDropDown(dl.query(By.css(`.st__body tr[data-index="${row - 1}"]`)), 'mouseleave');
      fixture.detectChanges();
      return this;
    }
    asyncEnd() {
      flush();
      discardPeriodicTasks();
      return this;
    }
  }
});

@Component({
  template: `
    <st
      #st
      [data]="data"
      [req]="req"
      [res]="res"
      [columns]="columns"
      [ps]="ps"
      [pi]="pi"
      [total]="total"
      [page]="page"
      [responsive]="responsive"
      [responsiveHideHeaderFooter]="responsiveHideHeaderFooter"
      [widthMode]="widthMode"
      [loading]="loading"
      [loadingDelay]="loadingDelay"
      [virtualScroll]="virtualScroll"
      [bordered]="bordered"
      [size]="size"
      [scroll]="scroll"
      [multiSort]="multiSort"
      [noResult]="noResult"
      [widthConfig]="widthConfig"
      [rowClickTime]="rowClickTime"
      (change)="change($event)"
      (error)="error()"
    >
    </st>
  `,
})
class TestComponent {
  @ViewChild('st', { static: true })
  comp: STComponent;
  data: string | any[] | Observable<any[]> | null = deepCopy(USERS);
  res: STRes = {};
  req: STReq = {};
  columns: STColumn[];
  ps = PS;
  pi: number;
  total: number;
  page: STPage = {};
  loading: boolean | null = null;
  loadingDelay: number;
  bordered: boolean;
  size: 'small' | 'middle' | 'default';
  scroll: { y?: string; x?: string };
  multiSort: boolean | STMultiSort;
  noResult = 'noResult';
  widthConfig: string[];
  rowClickTime = 200;
  responsive = false;
  responsiveHideHeaderFooter = false;
  expandRowByClick = false;
  expandAccordion = false;
  widthMode: STWidthMode = {};
  virtualScroll = false;

  error() {}
  change() {}
}

@Component({
  template: `
    <st
      #st
      [data]="data"
      [columns]="columns"
      [expand]="expand"
      [expandRowByClick]="expandRowByClick"
      [expandAccordion]="expandAccordion"
      (change)="change($event)"
    >
      <ng-template #expand let-item let-index="index" let-column="column">
        {{ item.id }}
      </ng-template>
    </st>
  `,
})
class TestExpandComponent extends TestComponent {}

@Component({
  template: ` <div class="widget-id-value">{{ id }}</div>
    <div class="widget-record-value">{{ record?.id }}</div>`,
})
class TestWidgetComponent {
  id: number;
  record: any;
}
