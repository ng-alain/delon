import { CommonModule } from '@angular/common';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Component, DebugElement, Injector, Type, ViewChild } from '@angular/core';
import {
  discardPeriodicTasks,
  fakeAsync,
  tick,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, Observable, Subject } from 'rxjs';

import { en_US, ALAIN_I18N_TOKEN,
  DatePipe,
  DelonLocaleModule,
  DelonLocaleService,
  ModalHelper,
} from '@delon/theme';
import { deepCopy, deepGet } from '@delon/util';
import { NgZorroAntdModule, NzPaginationComponent } from 'ng-zorro-antd';

import { configureTestSuite, dispatchDropDown } from '@delon/testing';
import {
  AlainI18NService,
  AlainI18NServiceFake,
} from '../../../theme/src/services/i18n/i18n';
import { STDataSource } from '../table-data-source';
import { STExport } from '../table-export';
import { STComponent } from '../table.component';
import { STConfig } from '../table.config';
import {
  STChange,
  STColumn,
  STColumnBadge,
  STColumnFilter,
  STColumnTag,
  STMultiSort,
  STPage,
  STReq,
  STRes,
} from '../table.interfaces';
import { STModule } from '../table.module';

const MOCKDATE = new Date();
const MOCKIMG = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg==`;
const r = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

function genData(count: number) {
  return Array(count)
    .fill({})
    .map((item: any, idx: number) => {
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
class MockI18NServiceFake extends AlainI18NServiceFake {
  fanyi(key: string) {
    return i18nResult;
  }
}

describe('abc: table', () => {
  let injector: Injector;
  let fixture: ComponentFixture<TestComponent>;
  let context: TestComponent;
  let dl: DebugElement;
  let page: PageObject;
  let comp: STComponent;
  let i18nSrv: AlainI18NService;

  function genModule(other: {
    template?: string;
    i18n?: boolean;
    minColumn?: boolean;
    providers?: any[];
    createComp?: boolean;
  }) {
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
      NgZorroAntdModule,
      STModule,
      DelonLocaleModule,
    ];
    const providers = [{
      provide: ALAIN_I18N_TOKEN,
      useClass: MockI18NServiceFake,
    }];
    if (other.providers.length > 0) {
      providers.push(...other.providers);
    }
    injector = TestBed.configureTestingModule({
      imports,
      declarations: [TestComponent, TestExpandComponent],
      providers,
    });
    if (other.template) TestBed.overrideTemplate(TestComponent, other.template);
    // ALAIN_I18N_TOKEN 默认为 root 会导致永远都会存在
    i18nSrv = injector.get(ALAIN_I18N_TOKEN);
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
    configureTestSuite(() => genModule({ createComp: false }));
    beforeEach(() => createComp(true, TestComponent));
    describe('#columns', () => {
      describe('[type]', () => {
        describe(`with checkbox`, () => {
          it(`should be render checkbox`, (done: () => void) => {
            page
              .newColumn([{ title: '', index: 'id', type: 'checkbox' }])
              .then(() => {
                page
                  .expectElCount('.st__checkall', 1, 'muse be a check all')
                  .expectElCount(
                    '.st__body .ant-checkbox-wrapper',
                    PS,
                    `muse be ${PS} check in body`,
                  );
                done();
              });
          });
          it('should auto column width', (done: () => void) => {
            page
              .newColumn([{ title: 'id', index: 'id', type: 'checkbox' }])
              .then(() => {
                page.expectColumn('id', 'width', '50px');
                done();
              });
          });
          it('should be check all current page', (done: () => void) => {
            page
              .newColumn([{ title: '', index: 'id', type: 'checkbox' }])
              .then(() => {
                page.click('.st__checkall');
                expect(comp._data.filter(w => w.checked).length).toBe(PS);
                page.click('.st__checkall');
                expect(comp._data.filter(w => w.checked).length).toBe(0);
                done();
              });
          });
          it('should be checked in row', (done: () => void) => {
            page
              .newColumn([{ title: '', index: 'id', type: 'checkbox' }])
              .then(() => {
                page
                  .expectData(1, 'checked', undefined)
                  .click('.st__body .ant-checkbox-wrapper')
                  .expectData(1, 'checked', true)
                  .click('.st__body .ant-checkbox-wrapper')
                  .expectData(1, 'checked', false);
                done();
              });
          });
          it('should selected id value less than 2 rows', (done: () => void) => {
            const selections = [
              {
                text: '<div class="j-s1"></div>',
                select: (ls: any[]) => ls.forEach(i => (i.checked = i.id < 2)),
              },
            ];
            page
              .newColumn([
                { title: '', index: 'id', type: 'checkbox', selections },
              ])
              .then(() => {
                page
                  .expectData(1, 'checked', undefined)
                  .expectData(2, 'checked', undefined);
                // mock click
                comp._rowSelection(comp._columns[0].selections[0]);
                page
                  .expectData(1, 'checked', true)
                  .expectData(2, 'checked', false);
                done();
              });
          });
          it('should be unchecked via clearCheck', (done: () => void) => {
            page
              .newColumn([{ title: '', index: 'id', type: 'checkbox' }])
              .then(() => {
                page
                  .expectData(1, 'checked', undefined)
                  .click('.st__body .ant-checkbox-wrapper')
                  .expectData(1, 'checked', true);
                comp.clearCheck();
                page.expectData(1, 'checked', false);
                done();
              });
          });
        });
        describe('with radio', () => {
          it(`should be render checkbox`, (done: () => void) => {
            page
              .newColumn([{ title: 'RADIOname', index: 'id', type: 'radio' }])
              .then(() => {
                page
                  .expectHead('RADIOname', 'id')
                  .expectElCount(
                    '.st__body .ant-radio-wrapper',
                    PS,
                    `muse be ${PS} radio in body`,
                  );
                done();
              });
          });
          it('should auto column width', (done: () => void) => {
            page
              .newColumn([{ title: 'id', index: 'id', type: 'radio' }])
              .then(() => {
                page.expectColumn('id', 'width', '50px');
                done();
              });
          });
          it('should be checked in row', (done: () => void) => {
            page
              .newColumn([{ title: '', index: 'id', type: 'radio' }])
              .then(() => {
                page
                  .expectData(1, 'checked', undefined)
                  .click('.st__body .ant-radio-wrapper')
                  .expectData(1, 'checked', true)
                  .click('.st__body tr[data-index="1"] .ant-radio-wrapper')
                  .expectData(1, 'checked', false);
                done();
              });
          });
          it('should be unchecked via clearRadio', (done: () => void) => {
            page
              .newColumn([{ title: '', index: 'id', type: 'radio' }])
              .then(() => {
                page
                  .expectData(1, 'checked', undefined)
                  .click('.st__body .ant-radio-wrapper')
                  .expectData(1, 'checked', true);
                comp.clearRadio();
                page.expectData(1, 'checked', false);
                done();
              });
          });
        });
        describe('with link', () => {
          it(`should be render anchor link`, (done: () => void) => {
            const columns = [
              {
                title: '',
                index: 'id',
                type: 'link',
                click: jasmine.createSpy(),
              },
            ];
            page.newColumn(columns as any).then(() => {
              page.expectCell('1', 1, 1, 'a').clickCell('a');
              expect(columns[0].click).toHaveBeenCalled();
              done();
            });
          });
          it(`should be text when not specify click`, (done: () => void) => {
            page
              .newColumn([{ title: '', index: 'id', type: 'link' }])
              .then(() => {
                page.expectCell(null, 1, 1, 'a');
                done();
              });
          });
          it('should be navigate url when click is string value', (done: () => void) => {
            const router = injector.get(Router);
            spyOn(router, 'navigateByUrl');
            context.data = [{ link: '/a' }];
            page
              .newColumn([
                {
                  title: '',
                  index: 'link',
                  type: 'link',
                  click: (item: any) => item.link,
                },
              ])
              .then(() => {
                page.clickCell('a', 1, 1);
                expect(router.navigateByUrl).toHaveBeenCalled();
                done();
              });
          });
        });
        describe('with img', () => {
          it(`should be render img`, (done: () => void) => {
            const columns = [{ title: '', index: 'img', type: 'img' }];
            page.newColumn(columns as any).then(() => {
              page.expectCell('', 1, 1, 'img');
              done();
            });
          });
          it('should not render img when is empty data', (done: () => void) => {
            const columns = [{ title: '', index: 'img', type: 'img' }];
            context.data = [{ img: MOCKIMG }, { img: '' }];
            page.newColumn(columns as any).then(() => {
              page.expectCell('', 1, 1, 'img').expectCell(null, 2, 1, 'img');
              done();
            });
          });
        });
        describe('with currency', () => {
          it(`should be render currency`, (done: () => void) => {
            page
              .newColumn([{ title: '', index: 'id', type: 'currency' }])
              .then(() => {
                page.expectCell('￥1.00');
                done();
              });
          });
          it(`should be text right`, (done: () => void) => {
            page
              .newColumn([{ title: '', index: 'id', type: 'currency' }])
              .then(() => {
                expect(page.getCell().classList).toContain('text-right');
                done();
              });
          });
        });
        describe('with number', () => {
          it(`should be render number`, (done: () => void) => {
            page
              .newColumn([{ title: '', index: 'num', type: 'number' }])
              .then(() => {
                page.expectCell('11,111,111,111.456');
                done();
              });
          });
          it(`should be custom render number digits`, (done: () => void) => {
            page
              .newColumn([
                {
                  title: '',
                  index: 'id',
                  type: 'number',
                  numberDigits: '3.1-5',
                },
              ])
              .then(() => {
                page.expectCell('001.0');
                done();
              });
          });
          it(`should be text right`, (done: () => void) => {
            page
              .newColumn([{ title: '', index: 'num', type: 'number' }])
              .then(() => {
                expect(page.getCell().classList).toContain('text-right');
                done();
              });
          });
        });
        describe('with date', () => {
          it(`should be render date`, (done: () => void) => {
            page
              .newColumn([{ title: '', index: 'date', type: 'date' }])
              .then(() => {
                page.expectCell(
                  new DatePipe().transform(MOCKDATE, 'YYYY-MM-DD HH:mm'),
                );
                done();
              });
          });
          it(`should be custom render date format`, (done: () => void) => {
            page
              .newColumn([
                {
                  title: '',
                  index: 'date',
                  type: 'date',
                  dateFormat: 'YYYY-MM',
                },
              ])
              .then(() => {
                page.expectCell(new DatePipe().transform(MOCKDATE, 'YYYY-MM'));
                done();
              });
          });
          it(`should be text center`, (done: () => void) => {
            page
              .newColumn([{ title: '', index: 'date', type: 'date' }])
              .then(() => {
                expect(page.getCell().classList).toContain('text-center');
                done();
              });
          });
        });
        describe('with yn', () => {
          it(`should be render yn`, (done: () => void) => {
            page
              .newColumn([{ title: '', index: 'yn', type: 'yn' }])
              .then(() => {
                page
                  .expectCell('是', 1, 1, '', true)
                  .expectCell('否', 2, 1, '', true);
                done();
              });
          });
          it(`should be custom render yn`, (done: () => void) => {
            page
              .newColumn([
                { title: '', index: 'yn', type: 'yn', ynYes: 'Y', ynNo: 'N' },
              ])
              .then(() => {
                page
                  .expectCell('Y', 1, 1, '', true)
                  .expectCell('N', 2, 1, '', true);
                done();
              });
          });
          it(`should be custom truth value`, (done: () => void) => {
            page
              .newColumn([
                {
                  title: '',
                  index: 'id',
                  type: 'yn',
                  ynTruth: 1,
                  ynYes: 'Y',
                  ynNo: 'N',
                },
              ])
              .then(() => {
                page
                  .expectCell('Y', 1, 1, '', true)
                  .expectCell('N', 2, 1, '', true)
                  .expectCell('N', 3, 1, '', true);
                done();
              });
          });
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
        it(`should be render badge`, (done: () => void) => {
          page
            .newColumn([
              { title: '', index: 'status', type: 'badge', badge: BADGE },
            ])
            .then(() => {
              page.expectElCount('.ant-badge', PS);
              done();
            });
        });
        it(`should be render text when badge is undefined or null`, (done: () => void) => {
          page
            .newColumn([
              { title: '', index: 'status', type: 'badge', badge: null },
            ])
            .then(() => {
              page.expectElCount('.ant-badge', 0);
              done();
            });
        });
      });
      describe('with tag', () => {
        const TAG: STColumnTag = {
          1: { text: '成功', color: 'green' },
          2: { text: '错误', color: 'red' },
          3: { text: '进行中', color: 'blue' },
          4: { text: '默认', color: '' },
          5: { text: '警告', color: 'orange' },
        };
        it(`should be render tag`, (done: () => void) => {
          page
            .newColumn([{ title: 'tag', index: 'tag', type: 'tag', tag: TAG }])
            .then(() => {
              page.expectElCount('.ant-tag', PS);
              done();
            });
        });
        it(`should be render text when tag is undefined or null`, (done: () => void) => {
          page
            .newColumn([{ title: '', index: 'status', type: 'tag', tag: null }])
            .then(() => {
              page.expectElCount('.ant-tag', 0);
              done();
            });
        });
      });
      describe('[other]', () => {
        it('should custom render via format', (done: () => void) => {
          page
            .newColumn([
              {
                title: '',
                index: 'id',
                format: a => `<div class="j-format">${a.id}</div>`,
              },
            ])
            .then(() => {
              page.expectCell('1', 1, 1, '.j-format');
              done();
            });
        });
        it('should default render via default', (done: () => void) => {
          page
            .newColumn([
              {
                title: '',
                index: 'id1',
                default: '-',
              },
            ])
            .then(() => {
              page.expectCell('-');
              done();
            });
        });
        it('should be custom class in cell', (done: () => void) => {
          page
            .newColumn([{ title: '', index: 'id', className: 'asdf' }])
            .then(() => {
              expect(page.getCell().classList).toContain('asdf');
              done();
            });
        });
      });
      describe('[buttons]', () => {
        it(`should be pop confirm when type=del`, (done: () => void) => {
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
          page.newColumn(columns).then(() => {
            page.expectCell('del', 1, 1, 'nz-popconfirm');
            // mock trigger
            comp._btnClick(
              new MouseEvent('click'),
              comp._data[0],
              comp._columns[0].buttons[0],
            );
            expect(columns[0].buttons[1].click).not.toHaveBeenCalled();
            comp._btnClick(
              new MouseEvent('click'),
              comp._data[0],
              comp._columns[0].buttons[1],
            );
            expect(columns[0].buttons[1].click).toHaveBeenCalled();
            done();
          });
        });
        it('should custom render text via format', (done: () => void) => {
          const columns: STColumn[] = [
            {
              title: '',
              buttons: [
                {
                  text: 'del',
                  format: a => `<div class="j-btn-format">${a.id}</div>`,
                },
              ],
            },
          ];
          page.newColumn(columns).then(() => {
            page.expectElCount('.j-btn-format', PS);
            done();
          });
        });
        it('#614', (done: () => void) => {
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
          page.newColumn(columns).then(() => {
            // mock trigger
            comp._btnClick(null, comp._data[0], comp._columns[0].buttons[0]);
            expect(true).toBe(true);
            done();
          });
        });
        describe('[condition]', () => {
          it('should be hide menu in first row', (done: () => void) => {
            const columns: STColumn[] = [
              {
                title: '',
                buttons: [{ text: 'a', iif: (item: any) => item.id !== 1 }],
              },
            ];
            page.newColumn(columns).then(() => {
              page.expectCell(null, 1, 1, 'a').expectCell('a', 2, 1, 'a');
              done();
            });
          });
        });
        describe('[events]', () => {
          it('#reload', (done: () => void) => {
            const columns: STColumn[] = [
              {
                title: '',
                buttons: [{ text: 'a', click: 'reload' }],
              },
            ];
            spyOn(comp, 'reload');
            page.newColumn(columns).then(() => {
              expect(comp.reload).not.toHaveBeenCalled();
              page.clickCell('a');
              expect(comp.reload).toHaveBeenCalled();
              done();
            });
          });
          it('#load', (done: () => void) => {
            const columns: STColumn[] = [
              {
                title: '',
                buttons: [{ text: 'a', click: 'load' }],
              },
            ];
            spyOn(comp, 'load');
            page.newColumn(columns).then(() => {
              expect(comp.load).not.toHaveBeenCalled();
              page.clickCell('a');
              expect(comp.load).toHaveBeenCalled();
              done();
            });
          });
          describe('#modal', () => {
            it('is normal mode', (done: () => void) => {
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
                        params: (record: any) => ({ aa: 1 }),
                      },
                    },
                  ],
                },
              ];
              const modalHelp = injector.get(ModalHelper);
              const mock$ = new Subject();
              spyOn(modalHelp, 'create').and.callFake(() => mock$);
              page.newColumn(columns).then(() => {
                expect(modalHelp.create).not.toHaveBeenCalled();
                page.clickCell('a');
                expect(modalHelp.create).toHaveBeenCalled();
                expect(columns[0].buttons[0].click).not.toHaveBeenCalled();
                mock$.next({});
                expect(columns[0].buttons[0].click).toHaveBeenCalled();
                mock$.unsubscribe();
                done();
              });
            });
            it('is static mode', (done: () => void) => {
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
                        params: (record: any) => ({ aa: 1 }),
                      },
                    },
                  ],
                },
              ];
              const modalHelp = injector.get(ModalHelper);
              const mock$ = new Subject();
              spyOn(modalHelp, 'createStatic').and.callFake(() => mock$);
              page.newColumn(columns).then(() => {
                expect(modalHelp.createStatic).not.toHaveBeenCalled();
                page.clickCell('a');
                expect(modalHelp.createStatic).toHaveBeenCalled();
                expect(columns[0].buttons[0].click).not.toHaveBeenCalled();
                mock$.next({});
                expect(columns[0].buttons[0].click).toHaveBeenCalled();
                mock$.unsubscribe();
                done();
              });
            });
          });
          describe('#link', () => {
            it('should be trigger click', (done: () => void) => {
              const columns: STColumn[] = [
                {
                  title: '',
                  buttons: [{ text: 'a', type: 'link', click: () => null }],
                },
              ];
              const router = injector.get(Router);
              spyOn(router, 'navigateByUrl');
              page.newColumn(columns).then(() => {
                expect(router.navigateByUrl).not.toHaveBeenCalled();
                page.clickCell('a');
                expect(router.navigateByUrl).not.toHaveBeenCalled();
                done();
              });
            });
            it('should be navigate when return a string value', (done: () => void) => {
              const columns: STColumn[] = [
                {
                  title: '',
                  buttons: [
                    { text: 'a', type: 'link', click: (item: any) => '/a' },
                  ],
                },
              ];
              const router = injector.get(Router);
              spyOn(router, 'navigateByUrl');
              page.newColumn(columns).then(() => {
                expect(router.navigateByUrl).not.toHaveBeenCalled();
                page.clickCell('a');
                expect(router.navigateByUrl).toHaveBeenCalled();
                done();
              });
            });
            it('should be include route state when return a string value', (done: () => void) => {
              const columns: STColumn[] = [
                {
                  title: '',
                  buttons: [
                    { text: 'a', type: 'link', click: (item: any) => '/a' },
                  ],
                },
              ];
              const router = injector.get(Router);
              const spy = spyOn(router, 'navigateByUrl');
              page.newColumn(columns).then(() => {
                page.clickCell('a');
                expect(spy.calls.mostRecent().args[1].state.pi).toBe(1);
                done();
              });
            });
          });
        });
      });
      describe('[fixed]', () => {
        it('should be fixed left column', (done: () => void) => {
          page
            .newColumn([
              { title: '1', index: 'id', fixed: 'left', width: '100px' },
              { title: '2', index: 'id', fixed: 'left', width: '100px' },
              { title: '3', index: 'id', fixed: 'left', width: '100px' },
            ])
            .then(() => {
              expect(page.getCell(1, 1).style.left).toBe('0px');
              expect(page.getCell(1, 2).style.left).toBe('100px');
              expect(page.getCell(1, 3).style.left).toBe('200px');
              done();
            });
        });
        it('should be fixed right column', (done: () => void) => {
          page
            .newColumn([
              { title: '1', index: 'id', fixed: 'right', width: '100px' },
              { title: '2', index: 'id', fixed: 'right', width: '100px' },
              { title: '3', index: 'id', fixed: 'right', width: '100px' },
            ])
            .then(() => {
              expect(page.getCell(1, 1).style.right).toBe('200px');
              expect(page.getCell(1, 2).style.right).toBe('100px');
              expect(page.getCell(1, 3).style.right).toBe('0px');
              done();
            });
        });
      });
    });
    describe('[data source]', () => {
      let httpBed: HttpTestingController;
      beforeEach(() => {
        httpBed = injector.get(HttpTestingController);
      });
      it('support null data', (done: () => void) => {
        context.data = null;
        fixture.detectChanges();
        fixture
          .whenStable()
          .then(() => {
            expect(comp._data.length).toBe(0);
            context.data = genData(10);
            fixture.detectChanges();
            return fixture.whenStable();
          })
          .then(() => {
            expect(comp._data.length).toBe(PS);
            done();
          });
      });
      it('should only restore data', () => {
        // tslint:disable-next-line:no-string-literal
        const dataSource: STDataSource = comp['dataSource'];
        spyOn(dataSource, 'process').and.callFake(() => Promise.resolve({}));
        fixture.detectChanges();
        expect(comp.ps).toBe(PS);
      });
      it('should be automatically cancel paging when the returned body value is an array type', (done) => {
        context.pi = 1;
        context.ps = 2;
        context.data = '/mock';
        fixture.detectChanges();
        httpBed.expectOne(req => true).flush([ {}, {}, {} ]);
        fixture.whenStable().then(() => {
          expect(comp.pi).toBe(1);
          expect(comp.ps).toBe(3);
          expect(comp._isPagination).toBe(false);
          done();
        });
      });
    });
    describe('#req', () => {
      it('should fix all paraments when only part parament', () => {
        context.req = { reName: { pi: 'PI' } };
        fixture.detectChanges();
        expect(comp.req.reName).not.toBeNull();
        expect(comp.req.reName.pi).toBe('PI');
        expect(comp.req.reName.ps).toBe('ps');
      });
    });
    describe('#res', () => {
      it('should fix all paraments when only part parament', () => {
        context.res = { reName: { total: 'a.b' } };
        fixture.detectChanges();
        expect(comp.res.reName).not.toBeNull();
        expect(comp.res.reName.total[0]).toBe('a');
        expect(comp.res.reName.total[1]).toBe('b');
        expect(comp.res.reName.list.length).toBe(1);
        expect(comp.res.reName.list[0]).toBe('list');
      });
      it('support a.b', () => {
        context.res = { reName: { total: 'a.b', list: 'c.d' } };
        fixture.detectChanges();
        expect(comp.res.reName).not.toBeNull();
        expect(Array.isArray(comp.res.reName.total)).toBe(true);
        expect(Array.isArray(comp.res.reName.list)).toBe(true);
        expect(comp.res.reName.total[0]).toBe('a');
        expect(comp.res.reName.total[1]).toBe('b');
        expect(comp.res.reName.list[0]).toBe('c');
        expect(comp.res.reName.list[1]).toBe('d');
      });
    });
    describe('#page', () => {
      it('should fix all paraments when only part parament', () => {
        context.page = { total: `TO:{{total}}` };
        fixture.detectChanges();
        expect(comp.page.placement).toBe(`right`);
        expect(comp.page.total).toBe(`TO:{{total}}`);
      });
    });
    describe('#showTotal', () => {
      it('with true', (done: () => void) => {
        context.page.total = true;
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          page.expectElContent(
            '.ant-pagination-total-text',
            `共 ${DEFAULTCOUNT} 条`,
          );
          done();
        });
      });
      it('with false', (done: () => void) => {
        context.page.total = false;
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          page.expectElContent('.ant-pagination-total-text', '');
          done();
        });
      });
      it('should be custom template', (done: () => void) => {
        context.pi = 1;
        context.ps = 3;
        context.page.total = `{{total}}/{{range[0]}}/{{range[1]}}`;
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          page.expectElContent(
            '.ant-pagination-total-text',
            `${DEFAULTCOUNT}/${comp.pi}/${comp.ps}`,
          );
          done();
        });
      });
    });
    describe('#showPagination', () => {
      describe('with undefined', () => {
        beforeEach(() => {
          context.ps = 2;
          context.page.show = undefined;
        });
        it('should auto hide when total less than ps', (done: () => void) => {
          context.data = deepCopy(USERS).slice(0, 1);
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            page.expectElCount('nz-pagination', 0);
            done();
          });
        });
        it('should auto show when ps less than total', (done: () => void) => {
          context.data = deepCopy(USERS).slice(0, 3);
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            page.expectElCount('nz-pagination', 1);
            done();
          });
        });
      });
      it('should always show when with true', (done: () => void) => {
        context.page.show = true;
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          page.expectElCount('nz-pagination', 1);
          done();
        });
      });
    });
    describe('#pagePlacement', () => {
      ['left', 'center', 'right'].forEach(pos => {
        it(`with ${pos}`, (done: () => void) => {
          context.page.placement = pos as any;
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            page.expectElCount(`.st__p-${pos}`, 1);
            done();
          });
        });
      });
    });
    describe('#responsiveHideHeaderFooter', () => {
      it('should working', done => {
        context.responsiveHideHeaderFooter = true;
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          page.expectElCount(`.ant-table-rep__hide-header-footer`, 1);
          done();
        });
      });
    });
    describe('#toTop', () => {
      beforeEach(() => {
        context.page.toTopOffset = 10;
      });
      it('with true', (done: () => void) => {
        context.page.toTop = true;
        fixture.detectChanges();
        const el = page.getEl('st');
        spyOn(el, 'scrollIntoView');
        fixture
          .whenStable()
          .then(() => page.go(2))
          .then(() => {
            expect(el.scrollIntoView).toHaveBeenCalled();
            done();
          });
      });
      it('with false', (done: () => void) => {
        context.page.toTop = false;
        fixture.detectChanges();
        const el = page.getEl('st');
        spyOn(el, 'scrollIntoView');
        fixture
          .whenStable()
          .then(() => page.go(2))
          .then(() => {
            expect(el.scrollIntoView).not.toHaveBeenCalled();
            done();
          });
      });
      it('should scroll to .ant-table-body when used scroll', (done: () => void) => {
        context.scroll = { x: '1300px' };
        context.page.toTop = true;
        fixture.detectChanges();
        const el = page.getEl('st');
        spyOn(el, 'scrollIntoView');
        fixture
          .whenStable()
          .then(() => page.go(2))
          .then(() => {
            page.go(2);
            expect(el.scrollIntoView).not.toHaveBeenCalled();
            done();
          });
      });
    });
    describe('#expand', () => {
      beforeEach(() => {
        createComp(true, TestExpandComponent);
      });
      describe('should be expanded when click row if expandRowByClick', () => {
        it('with true', (done) => {
          context.expandRowByClick = true;
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            const el = page.getCell(1, 2);
            page.expectData(1, 'expand', undefined);
            el.click();
            page.expectData(1, 'expand', true);
            done();
          });
        });
        it('with false', (done) => {
          context.expandRowByClick = false;
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            const el = page.getCell(1, 2);
            page.expectData(1, 'expand', undefined);
            el.click();
            page.expectData(1, 'expand', undefined);
            done();
          });
        });
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
        it('muse provide the fn function', (done: () => void) => {
          spyOn(console, 'warn');
          context.columns[0].filter.fn = null;
          fixture.detectChanges();
          firstCol = comp._columns[0];
          filter = firstCol.filter;
          comp._filterRadio(firstCol, filter.menus[0], true);
          comp._filterRadio(firstCol, filter.menus[1], true);
          comp._filterConfirm(firstCol);
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(console.warn).toHaveBeenCalled();
            done();
          });
        });
        describe('when is single', () => {
          beforeEach(() => {
            context.columns[0].filter.multiple = false;
            fixture.detectChanges();
            firstCol = comp._columns[0];
            filter = firstCol.filter;
            comp._filterRadio(firstCol, filter.menus[0], true);
            comp._filterRadio(firstCol, filter.menus[1], true);
            comp._filterConfirm(firstCol);
          });
          it('should be filter', () => {
            const res = filter.menus.filter(w => w.checked);
            expect(res.length).toBe(1);
          });
          it('should be clean', () => {
            comp.clearFilter();
            const res = filter.menus.filter(w => w.checked);
            expect(res.length).toBe(0);
          });
        });
        describe('when is multiple', () => {
          beforeEach(() => {
            context.columns[0].filter.multiple = true;
            fixture.detectChanges();
            firstCol = comp._columns[0];
            filter = firstCol.filter;
            filter.menus[0].checked = true;
            filter.menus[1].checked = true;
            comp._filterConfirm(firstCol);
          });
          it('should be filter', () => {
            const res = filter.menus.filter(w => w.checked);
            expect(res.length).toBe(2);
          });
          it('should be clean', () => {
            comp._filterClear(firstCol);
            const res = filter.menus.filter(w => w.checked);
            expect(res.length).toBe(0);
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
          it('muse provide the compare function', (done: () => void) => {
            spyOn(console, 'warn');
            context.columns = [{ title: '', index: 'i', sort: true }];
            fixture.detectChanges();
            comp.sort(comp._columns[0], 0, 'descend');
            fixture.detectChanges();
            fixture.whenStable().then(() => {
              expect(console.warn).toHaveBeenCalled();
              done();
            });
          });
          it('should be sorting', () => {
            fixture.detectChanges();
            comp.sort(comp._columns[0], 0, 'descend');
            const sortList = comp._columns
              .filter(
                item => item._sort && item._sort.enabled && item._sort.default,
              )
              .map(item => item._sort);
            expect(sortList.length).toBe(1);
            expect(sortList[0].default).toBe('descend');
          });
        });
        describe('when multi-sort', () => {
          beforeEach(() => (context.multiSort = true));
          it('should be sorting', () => {
            fixture.detectChanges();
            comp.sort(comp._columns[0], 0, 'descend');
            comp.sort(comp._columns[1], 0, 'ascend');
            const sortList = comp._columns
              .filter(
                item => item._sort && item._sort.enabled && item._sort.default,
              )
              .map(item => item._sort);
            expect(sortList.length).toBe(2);
            expect(sortList[0].default).toBe('descend');
            expect(sortList[1].default).toBe('ascend');
          });
        });
      });
    });
    describe('[row events]', () => {
      beforeEach(fakeAsync(() => {
        context.rowClickTime = 10;
        fixture.detectChanges();
        tick();
      }));
      it(`should be row click`, fakeAsync(() => {
        (page.getCell() as HTMLElement).click();
        fixture.detectChanges();
        tick(100);
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
        expect(context.change).not.toHaveBeenCalled();
        const el = page.getCell() as HTMLElement;
        // mock input nodeName
        spyOnProperty(el, 'nodeName', 'get').and.returnValue('INPUT');
        el.click();
        fixture.detectChanges();
        tick(100);
        expect(context.change).not.toHaveBeenCalled();
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
        it('can\'t contaminate raw data', () => {
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
          expect(comp.clearCheck).toHaveBeenCalled();
          expect(comp.clearRadio).toHaveBeenCalled();
          expect(comp.clearFilter).toHaveBeenCalled();
          expect(comp.clearSort).toHaveBeenCalled();
        }));
      });
      describe('#removeRow', () => {
        it('shoule be working', done => {
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            page.expectCurrentPageTotal(PS);
            comp.removeRow(comp._data[0]);
            page.expectCurrentPageTotal(PS - 1);
            done();
          });
        });
        it('shoule be recalculate no value', done => {
          page.newColumn([ { title: '', type: 'no' } ]).then(() => {
            page.expectCurrentPageTotal(PS);
            comp._data.forEach((v, idx) => expect(v._values[0]).toBe(idx + 1));
            comp.removeRow(comp._data[0]);
            comp._data.forEach((v, idx) => expect(v._values[0]).toBe(idx + 1));
            done();
          });
        });
        it('shoule be ingored invalid data', done => {
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            page.expectCurrentPageTotal(PS);
            comp.removeRow([null]);
            page.expectCurrentPageTotal(PS);
            done();
          });
        });
      });
      describe('#clean', () => {
        beforeEach(() => {
          spyOn(comp, 'clearCheck').and.returnValue(comp);
          spyOn(comp, 'clearRadio').and.returnValue(comp);
          spyOn(comp, 'clearFilter').and.returnValue(comp);
          spyOn(comp, 'clearSort').and.returnValue(comp);
          fixture.detectChanges();
        });
        it('#clear', (done) => {
          fixture.whenStable().then(() => {
            expect(comp._data.length).toBe(PS);
            comp.clear();
            expect(comp._data.length).toBe(0);
            done();
          });
        });
        it('#clear, excludes clean status', (done) => {
          fixture.whenStable().then(() => {
            expect(comp._data.length).toBe(PS);
            expect(comp.clearCheck).not.toHaveBeenCalled();
            comp.clear(false);
            expect(comp._data.length).toBe(0);
            expect(comp.clearCheck).not.toHaveBeenCalled();
            done();
          });
        });
        it('#clearStatus', () => {
          expect(comp.clearCheck).not.toHaveBeenCalled();
          comp.clearStatus();
          expect(comp.clearCheck).toHaveBeenCalled();
        });
      });
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
        const ms: STMultiSort = comp.multiSort;
        expect(typeof ms).toBe('object');
      });
      it('with false', () => {
        context.multiSort = false;
        fixture.detectChanges();
        const ms: STMultiSort = comp.multiSort;
        expect(ms).toBeNull();
      });
      it('with object', () => {
        context.multiSort = { key: 'aa' };
        fixture.detectChanges();
        const ms: STMultiSort = comp.multiSort;
        expect(typeof ms).toBe('object');
        expect(ms.key).toBe('aa');
      });
    });
  });

  describe('**slow**', () => {
    describe('#multiSort', () => {
      it('should default is mulit sorting by config', () => {
        genModule({
          minColumn: true, providers: [{
            provide: STConfig,
            useValue: Object.assign(new STConfig(), { multiSort: { global: true } } as STConfig),
          }],
        });
        const ms: STMultiSort = comp.multiSort;
        expect(ms).not.toBeUndefined();
      });
      it('should default non-mulit sorting by config', () => {
        genModule({
          minColumn: true, providers: [{
            provide: STConfig,
            useValue: Object.assign(new STConfig(), { multiSort: { global: false } } as STConfig),
          }],
        });
        const ms: STMultiSort = comp.multiSort;
        expect(ms).toBeUndefined();
      });
    });
    describe('[custom render template]', () => {
      it('with column title', (done: () => void) => {
        genModule({
          template: `<st #st [data]="data" [columns]="columns">
            <ng-template st-row="id" type="title"><div class="id-title">ID</div></ng-template>
          </st>`,
        });
        page
          .newColumn([{ title: '', index: 'id', renderTitle: 'id' }])
          .then(() => {
            expect(
              page.getHead('id').querySelector('.id-title').textContent,
            ).toBe('ID');
            done();
          });
      });
      it('should be custom row', (done: () => void) => {
        genModule({
          template: `<st #st [data]="data" [columns]="columns">
            <ng-template st-row="id" let-item><div class="j-id">id{{item.id}}</div></ng-template>
          </st>`,
        });
        page.newColumn([{ title: '', index: 'id', render: 'id' }]).then(() => {
          expect(page.getCell().querySelector('.j-id').textContent).toBe('id1');
          done();
        });
      });
      it('allow invalid id', (done: () => void) => {
        genModule({
          template: `<st #st [data]="data" [columns]="columns">
            <ng-template st-row="invalid-id" let-item><div class="j-id">id{{item.id}}</div></ng-template>
          </st>`,
        });
        page.newColumn([{ title: '', index: 'id', render: 'id' }]).then(() => {
          expect(page.getCell().querySelector('.j-id')).toBeNull();
          done();
        });
      });
    });
    describe('[i18n]', () => {
      let curLang = 'en';
      beforeEach(() => {
        genModule({ i18n: true });
        spyOn(i18nSrv, 'fanyi').and.callFake(() => curLang);
      });
      it('should working', (done: () => void) => {
        page.newColumn([{ title: '', i18n: curLang, index: 'id' }]).then(() => {
          const el = page.getEl('.ant-pagination-total-text');
          expect(el.textContent.trim()).toContain(`共`);
          injector.get(DelonLocaleService).setLocale(en_US);
          fixture.detectChanges();
          expect(el.textContent.trim()).toContain(`of`);
          done();
        });
      });
      it('should be re-render columns when i18n changed', (done: () => void) => {
        curLang = 'en';
        page.newColumn([{ title: '', i18n: curLang, index: 'id' }]).then(() => {
          page.expectHead(curLang, 'id');
          curLang = 'zh';
          i18nSrv.use(curLang);
          fixture.detectChanges();
          page.expectHead(curLang, 'id');
          done();
        });
      });
    });
  });

  class PageObject {
    _changeData: STChange;
    constructor() {
      spyOn(context, 'error');
      spyOn(context, 'change').and.callFake(e => this._changeData = e);
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
    click(cls: string): this {
      const el = this.getEl(cls);
      expect(el).not.toBeNull();
      el.click();
      fixture.detectChanges();
      return this;
    }
    clickCell(cls: string, row: number = 1, column: number = 1): this {
      const el = this.getCell(row, column).querySelector(cls) as HTMLElement;
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
     * 断言单元格内容，下标从 `1` 开始
     * @param value 当 `null` 时，表示无单元格
     * @param cls 对单元格进一步筛选
     * @param isContain 是否包含条件
     */
    expectCell(
      value: string,
      row: number = 1,
      column: number = 1,
      cls?: string,
      isContain?: boolean,
    ): this {
      let cell = this.getCell(row, column);
      if (cls) {
        cell = cell.querySelector(cls);
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
      const el = (dl.nativeElement as HTMLElement).querySelector(
        `.ant-table-thead th[data-col="${name}"]`,
      ) as HTMLElement;
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
      if (cls) cell = cell.querySelector(cls);
      if (value == null) {
        expect(cell).toBeNull();
      } else {
        expect(cell.innerText.trim()).toBe(value);
      }
      return this;
    }
    /** 断言组件内 `_columns` 值 */
    expectColumn(title: string, path: string, valule: any): this {
      const ret = deepGet(comp._columns.find(w => w.title === title), path);
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
      fixture.detectChanges();
      return fixture.whenStable();
    }
    newColumn(columns: STColumn[], pi = 1, ps = PS) {
      context.columns = columns;
      context.pi = pi;
      context.ps = ps;
      fixture.detectChanges();
      return fixture.whenStable();
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
      const a = dl.query(By.css('nz-pagination'));
      expect((a.componentInstance as NzPaginationComponent).lastIndex).toBe(
        value,
      );
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
    expectElCount(
      cls: string,
      count: number,
      expectationFailOutput?: string,
    ): this {
      const els = document.querySelectorAll(cls);
      expect(els.length).toBe(count, expectationFailOutput);
      return this;
    }
    expectElContent(
      cls: string,
      content: string,
      expectationFailOutput?: string,
    ): this {
      const el = document.querySelector(cls);
      if (content == null) {
        expect(el).toBeNull(expectationFailOutput);
      } else {
        expect(el.textContent.trim()).toBe(content, expectationFailOutput);
      }
      return this;
    }
    openDropDownInHead(nams: string): this {
      dispatchDropDown(
        dl.query(By.css(`.ant-table-thead th[data-col="${nams}"]`)),
        'click',
      );
      fixture.detectChanges();
      return this;
    }
    openDropDownInRow(row: number = 1) {
      dispatchDropDown(
        dl.query(By.css(`.st__body tr[data-index="${row - 1}"]`)),
        'mouseleave',
      );
      fixture.detectChanges();
      return this;
    }
    asyncEnd() {
      discardPeriodicTasks();
      return this;
    }
  }
});

@Component({
  template: `
    <st #st
        [data]="data"
        [req]="req"
        [res]="res"
        [columns]="columns"
        [ps]="ps" [pi]="pi" [total]="total"
        [page]="page"
        [responsiveHideHeaderFooter]="responsiveHideHeaderFooter"

        [loading]="loading" [loadingDelay]="loadingDelay"
        [bordered]="bordered" [size]="size"
        [scroll]="scroll"
        [multiSort]="multiSort"

        [noResult]="noResult"
        [widthConfig]="widthConfig"
        [rowClickTime]="rowClickTime"

        (change)="change($event)"
        (error)="error()"
    >
    </st>`,
})
class TestComponent {
  @ViewChild('st')
  comp: STComponent;
  data: string | any[] | Observable<any[]> = deepCopy(USERS);
  res: STRes = {};
  req: STReq = {};
  columns: STColumn[];
  ps = PS;
  pi: number;
  total: number;
  page: STPage = {};
  loading: boolean;
  loadingDelay: number;
  bordered: boolean;
  size: 'small' | 'middle' | 'default';
  scroll: { y?: string; x?: string };
  multiSort: boolean | STMultiSort;
  noResult = 'noResult';
  widthConfig: string[];
  rowClickTime = 200;
  responsiveHideHeaderFooter = false;
  expandRowByClick = false;

  error() { }
  change() { }
}

@Component({
  template: `
    <st #st
        [data]="data"
        [columns]="columns"
        [expand]="expand"
        [expandRowByClick]="expandRowByClick">
    <ng-template #expand let-item let-index="index" let-column="column">
      {{ item.id }}
    </ng-template>
    </st>`,
})
class TestExpandComponent extends TestComponent {
}
