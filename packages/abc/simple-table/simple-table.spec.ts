import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injector, Component, DebugElement, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  TestBed,
  ComponentFixture,
  fakeAsync,
  discardPeriodicTasks,
} from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from '@angular/common/http/testing';
import { NgZorroAntdModule, NzPaginationComponent } from 'ng-zorro-antd';
import {
  ModalHelper,
  AlainThemeModule,
  ALAIN_I18N_TOKEN,
  DatePipe,
} from '@delon/theme';
import { DelonACLModule, ACLService } from '@delon/acl';
import { deepCopy, deepGet } from '@delon/util';
import { of, Observable, Subject } from 'rxjs';

import {
  SimpleTableFilter,
  SimpleTableColumn,
  ResReNameType,
  SimpleTableMultiSort,
  SimpleTableData,
  SimpleTableBadge,
  SimpleTableTag,
} from './interface';
import { AdSimpleTableModule } from './simple-table.module';
import { SimpleTableComponent } from './simple-table.component';
import {
  AlainI18NServiceFake,
  AlainI18NService,
} from '../../theme/src/services/i18n/i18n';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { dispatchDropDown } from '../../testing';
import { SimpleTableExport } from './simple-table-export';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

const MOCKDATE = new Date();
const MOCKIMG = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg==`;

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

let i18nResult = 'zh';
class MockI18NServiceFake extends AlainI18NServiceFake {
  fanyi(key: string) {
    return i18nResult;
  }
}

describe('abc: simple-table', () => {
  let injector: Injector;
  let fixture: ComponentFixture<TestComponent>;
  let context: TestComponent;
  let dl: DebugElement;
  let page: PageObject;
  let comp: SimpleTableComponent;

  function genModule(other: {
    acl?: boolean;
    template?: string;
    i18n?: boolean;
    minColumn?: boolean;
    providers?: any[];
  }) {
    const imports = [
      CommonModule,
      FormsModule,
      HttpClientModule,
      NoopAnimationsModule,
      HttpClientTestingModule,
      RouterTestingModule.withRoutes([]),
      NgZorroAntdModule.forRoot(),
      AlainThemeModule.forRoot(),
      AdSimpleTableModule.forRoot(),
    ];
    if (other.acl) imports.push(DelonACLModule.forRoot());
    const providers = [];
    if (other.providers && other.providers.length) {
      providers.push(...other.providers);
    }
    if (other.i18n) {
      providers.push(<any>{
        provide: ALAIN_I18N_TOKEN,
        useClass: MockI18NServiceFake,
      });
    }
    injector = TestBed.configureTestingModule({
      imports,
      declarations: [TestComponent],
      providers,
    });
    if (other.template) TestBed.overrideTemplate(TestComponent, other.template);
    fixture = TestBed.createComponent(TestComponent);
    dl = fixture.debugElement;
    context = dl.componentInstance;
    context.data = deepCopy(USERS);
    if (other.minColumn) {
      context.columns = [{ title: '', index: 'id' }];
    }
    page = new PageObject();
  }

  afterEach(() => comp.ngOnDestroy());

  describe('[property]', () => {
    describe('#columns', () => {
      beforeEach(() => genModule({}));
      describe('[index]', () => {
        it('support string', () => {
          page.newColumn([{ title: '', index: 'id' }]).expectCell('1');
        });
        it('support array', () => {
          page
            .newColumn([{ title: '', index: ['prices', 'fix'] }])
            .expectCell('fix1');
        });
        it('support a.b', () => {
          page
            .newColumn([{ title: '', index: 'prices.fix' }])
            .expectCell('fix1');
        });
      });
      describe('[type]', () => {
        describe(`with checkbox`, () => {
          it(`should be render checkbox`, () => {
            page
              .newColumn([{ title: '', index: 'id', type: 'checkbox' }])
              .expectElCount('.ad-st-checkall', 1, 'muse be a check all')
              .expectElCount(
                '.ad-st-body .ant-checkbox-wrapper',
                PS,
                `muse be ${PS} check in body`,
              );
          });
          it('should auto column width', () => {
            page
              .newColumn([{ title: 'id', index: 'id', type: 'checkbox' }])
              .expectColumn('id', 'width', '50px')
              .newColumn([
                {
                  title: 'id',
                  index: 'id',
                  type: 'checkbox',
                  selections: [{ text: '', select: () => {} }],
                },
              ])
              .expectColumn('id', 'width', '60px')
              .newColumn([
                { title: 'id', index: 'id', type: 'checkbox', width: '70px' },
              ])
              .expectColumn('id', 'width', '70px');
          });
          it('should be check all current page', () => {
            page
              .newColumn([{ title: '', index: 'id', type: 'checkbox' }])
              .click('.ad-st-checkall');
            expect(comp._data.filter(w => w.checked).length).toBe(PS);
            expect(context.checkboxChange).toHaveBeenCalled();
            page.click('.ad-st-checkall');
            expect(comp._data.filter(w => w.checked).length).toBe(0);
          });
          it('should be checked in row', () => {
            page
              .newColumn([{ title: '', index: 'id', type: 'checkbox' }])
              .expectData(1, 'checked', undefined)
              .click('.ad-st-body .ant-checkbox-wrapper')
              .expectData(1, 'checked', true)
              .click('.ad-st-body .ant-checkbox-wrapper')
              .expectData(1, 'checked', false);
          });
          it('should selected id value less than 2 rows', () => {
            const selections = [
              {
                text: '<div class="j-s1"></div>',
                select: (ls: any[]) => ls.forEach(i => (i.checked = i.id < 2)),
              },
            ];
            page.newColumn([
              { title: '', index: 'id', type: 'checkbox', selections },
            ]);
            page
              .expectData(1, 'checked', undefined)
              .expectData(2, 'checked', undefined);
            // mock click
            comp._rowSelection(comp._columns[0].selections[0]);
            page.expectData(1, 'checked', true).expectData(2, 'checked', false);
          });
          it('should be throw error when mulit checkbox', () => {
            expect(() => {
              page.newColumn([
                { title: '', index: 'id1', type: 'checkbox' },
                { title: '', index: 'id2', type: 'checkbox' },
              ]);
            }).toThrowError(`just only one column checkbox`);
          });
          it('should be unchecked via clearCheck', () => {
            page
              .newColumn([{ title: '', index: 'id', type: 'checkbox' }])
              .expectData(1, 'checked', undefined)
              .click('.ad-st-body .ant-checkbox-wrapper')
              .expectData(1, 'checked', true);
            comp.clearCheck();
            page.expectData(1, 'checked', false);
          });
        });
        describe('with radio', () => {
          it(`should be render checkbox`, () => {
            page
              .newColumn([{ title: 'RADIOname', index: 'id', type: 'radio' }])
              .expectHead('RADIOname', 'id')
              .expectElCount(
                '.ad-st-body .ant-radio-wrapper',
                PS,
                `muse be ${PS} radio in body`,
              );
          });
          it('should auto column width', () => {
            page
              .newColumn([{ title: 'id', index: 'id', type: 'radio' }])
              .expectColumn('id', 'width', '50px')
              .newColumn([
                { title: 'id', index: 'id', type: 'radio', width: '70px' },
              ])
              .expectColumn('id', 'width', '70px');
          });
          it('should be throw error when mulit radio', () => {
            expect(() => {
              page.newColumn([
                { title: '', index: 'id1', type: 'radio' },
                { title: '', index: 'id2', type: 'radio' },
              ]);
            }).toThrowError(`just only one column radio`);
          });
          it('should be checked in row', () => {
            page
              .newColumn([{ title: '', index: 'id', type: 'radio' }])
              .expectData(1, 'checked', undefined)
              .click('.ad-st-body .ant-radio-wrapper')
              .expectData(1, 'checked', true)
              .click('.ad-st-body tr[data-index="1"] .ant-radio-wrapper')
              .expectData(1, 'checked', false);
          });
          it('should be unchecked via clearRadio', () => {
            page
              .newColumn([{ title: '', index: 'id', type: 'radio' }])
              .expectData(1, 'checked', undefined)
              .click('.ad-st-body .ant-radio-wrapper')
              .expectData(1, 'checked', true);
            comp.clearRadio();
            page.expectData(1, 'checked', false);
          });
        });
        describe('with link', () => {
          it(`should be render anchor link`, () => {
            const columns = [
              {
                title: '',
                index: 'id',
                type: 'link',
                click: jasmine.createSpy(),
              },
            ];
            page
              .newColumn(columns as any)
              .expectCell('1', 1, 1, 'a')
              .clickCell('a');
            expect(columns[0].click).toHaveBeenCalled();
          });
          it(`should be text when not specify click`, () => {
            page
              .newColumn([{ title: '', index: 'id', type: 'link' }])
              .expectCell(null, 1, 1, 'a');
          });
          it('should be navigate url when click is string value', () => {
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
              .clickCell('a', 1, 1);
            expect(router.navigateByUrl).toHaveBeenCalled();
          });
        });
        describe('with img', () => {
          it(`should be render img`, () => {
            const columns = [{ title: '', index: 'img', type: 'img' }];
            page.newColumn(columns as any).expectCell('', 1, 1, 'img');
          });
          it('should not render img when is empty data', () => {
            const columns = [{ title: '', index: 'img', type: 'img' }];
            context.data = [{ img: MOCKIMG }, { img: '' }];
            page
              .newColumn(columns as any)
              .expectCell('', 1, 1, 'img')
              .expectCell(null, 2, 1, 'img');
          });
        });
        describe('with currency', () => {
          it(`should be render currency`, () => {
            page
              .newColumn([{ title: '', index: 'id', type: 'currency' }])
              .expectCell('￥1.00');
          });
          it(`should be text right`, () => {
            page.newColumn([{ title: '', index: 'id', type: 'currency' }]);
            page.getCell().classList.contains('text-right');
          });
        });
        describe('with number', () => {
          it(`should be render number`, () => {
            page
              .newColumn([{ title: '', index: 'num', type: 'number' }])
              .expectCell('11,111,111,111.456');
          });
          it(`should be custom render number digits`, () => {
            page
              .newColumn([
                {
                  title: '',
                  index: 'id',
                  type: 'number',
                  numberDigits: '3.1-5',
                },
              ])
              .expectCell('001.0');
          });
          it(`should be text right`, () => {
            page.newColumn([{ title: '', index: 'num', type: 'number' }]);
            page.getCell().classList.contains('text-right');
          });
        });
        describe('with date', () => {
          it(`should be render date`, () => {
            page
              .newColumn([{ title: '', index: 'date', type: 'date' }])
              .expectCell(
                new DatePipe().transform(MOCKDATE, 'YYYY-MM-DD HH:mm'),
              );
          });
          it(`should be custom render date format`, () => {
            page
              .newColumn([
                {
                  title: '',
                  index: 'date',
                  type: 'date',
                  dateFormat: 'YYYY-MM',
                },
              ])
              .expectCell(new DatePipe().transform(MOCKDATE, 'YYYY-MM'));
          });
          it(`should be text center`, () => {
            page.newColumn([{ title: '', index: 'date', type: 'date' }]);
            page.getCell().classList.contains('text-right');
          });
        });
        describe('with yn', () => {
          it(`should be render yn`, () => {
            page
              .newColumn([{ title: '', index: 'yn', type: 'yn' }])
              .expectCell('是', 1, 1)
              .expectCell('否', 2, 1);
          });
          it(`should be custom render yn`, () => {
            page
              .newColumn([
                { title: '', index: 'yn', type: 'yn', ynYes: 'Y', ynNo: 'N' },
              ])
              .expectCell('Y', 1, 1)
              .expectCell('N', 2, 1);
          });
          it(`should be custom truth value`, () => {
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
              .expectCell('Y', 1, 1)
              .expectCell('N', 2, 1)
              .expectCell('N', 3, 1);
          });
        });
      });
      describe('with badge', () => {
        const STATUS: SimpleTableBadge = {
          1: { text: 'Success', color: 'success' },
          2: { text: 'Error', color: 'error' },
          3: { text: 'Processing', color: 'processing' },
          4: { text: 'Default', color: 'default' },
          5: { text: 'Warning', color: 'warning' },
        };
        it(`should be render badge`, () => {
          page
            .newColumn([
              { title: '', index: 'status', type: 'badge', badge: STATUS },
            ])
            .expectElCount('.ant-badge', PS);
        });
        it(`should be render text when badge is undefined`, () => {
          page
            .newColumn([{ title: '', index: 'status', type: 'badge' }])
            .expectElCount('.ant-badge', 0);
        });
      });
      describe('with tag', () => {
        const STATUS: SimpleTableTag = {
          1: { text: 'Success', color: 'success' },
          2: { text: 'Error', color: 'error' },
          3: { text: 'Processing', color: 'processing' },
          4: { text: 'Default', color: 'default' },
          5: { text: 'Warning', color: 'warning' },
        };
        it(`should be render tag`, () => {
          page
            .newColumn([
              { title: '', index: 'status', type: 'tag', tag: STATUS },
            ])
            .expectElCount('.ant-tag', PS);
        });
        it(`should be render text when tag is undefined`, () => {
          page
            .newColumn([{ title: '', index: 'status', type: 'tag' }])
            .expectElCount('.ant-tag', 0);
        });
      });
      describe('[other]', () => {
        it('should throw error when is null', () => {
          expect(() => {
            page.newColumn([]);
          }).toThrowError(`the columns property muse be define!`);
        });
        it('should custom render via format', () => {
          page
            .newColumn([
              {
                title: '',
                index: 'id',
                format: a => `<div class="j-format">${a.id}</div>`,
              },
            ])
            .expectCell('1', 1, 1, '.j-format');
        });
        it('should default render via default', () => {
          page
            .newColumn([
              {
                title: '',
                index: 'id1',
                default: '-',
              },
            ])
            .expectCell('-');
        });
        it('should be custom class in cell', () => {
          page
            .newColumn([{ title: '', index: 'id', className: 'asdf' }])
            .getCell()
            .classList.contains('asdf');
        });
      });
      describe('[buttons]', () => {
        it(`should be pop confirm when type=del`, () => {
          const columns: SimpleTableColumn[] = [
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
          page.newColumn(columns).expectCell('del', 1, 1, 'nz-popconfirm');
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
        });
        it(
          'should be a dropdown menu buttons',
          fakeAsync(() => {
            const columns: SimpleTableColumn[] = [
              {
                title: '',
                buttons: [
                  {
                    text: 'l1',
                    children: [{ text: 'l2' }, { text: 'l3' }],
                  },
                ],
              },
            ];
            page
              .newColumn(columns)
              .openDropDownInRow()
              .expectElCount('.ant-dropdown-menu-item', 2)
              .asyncEnd();
          }),
        );
        it('should custom render text via format', () => {
          const columns: SimpleTableColumn[] = [
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
          page.newColumn(columns).expectElCount('.j-btn-format', PS);
        });
        describe('[condition]', () => {
          it('should be hide menu in first row', () => {
            const columns: SimpleTableColumn[] = [
              {
                title: '',
                buttons: [{ text: 'a', iif: (item: any) => item.id !== 1 }],
              },
            ];
            page
              .newColumn(columns)
              .expectCell(null, 1, 1, 'a')
              .expectCell('a', 2, 1, 'a');
          });
        });
        describe('[events]', () => {
          it('#reload', () => {
            const columns: SimpleTableColumn[] = [
              {
                title: '',
                buttons: [{ text: 'a', click: 'reload' }],
              },
            ];
            spyOn(comp, 'reload');
            page.newColumn(columns);
            expect(comp.reload).not.toHaveBeenCalled();
            page.clickCell('a');
            expect(comp.reload).toHaveBeenCalled();
          });
          it('#load', () => {
            const columns: SimpleTableColumn[] = [
              {
                title: '',
                buttons: [{ text: 'a', click: 'load' }],
              },
            ];
            spyOn(comp, 'load');
            page.newColumn(columns);
            expect(comp.load).not.toHaveBeenCalled();
            page.clickCell('a');
            expect(comp.load).toHaveBeenCalled();
          });
          describe('#modal', () => {
            it('#modal', () => {
              const columns: SimpleTableColumn[] = [
                {
                  title: '',
                  buttons: [
                    { text: 'a', type: 'modal', click: jasmine.createSpy() },
                  ],
                },
              ];
              const modalHelp = injector.get(ModalHelper);
              const mock$ = new Subject();
              spyOn(modalHelp, 'create').and.callFake(() => mock$);
              page.newColumn(columns);
              expect(modalHelp.create).not.toHaveBeenCalled();
              page.clickCell('a');
              expect(modalHelp.create).toHaveBeenCalled();
              expect(columns[0].buttons[0].click).not.toHaveBeenCalled();
              mock$.next({});
              expect(columns[0].buttons[0].click).toHaveBeenCalled();
              mock$.unsubscribe();
            });
            it('#static', () => {
              const columns: SimpleTableColumn[] = [
                {
                  title: '',
                  buttons: [
                    {
                      text: 'a',
                      type: 'static',
                      click: jasmine.createSpy(),
                      params: (record: any) => ({ aa: 1 }),
                    },
                  ],
                },
              ];
              const modalHelp = injector.get(ModalHelper);
              const mock$ = new Subject();
              spyOn(modalHelp, 'createStatic').and.callFake(() => mock$);
              page.newColumn(columns);
              expect(modalHelp.createStatic).not.toHaveBeenCalled();
              page.clickCell('a');
              expect(modalHelp.createStatic).toHaveBeenCalled();
              expect(columns[0].buttons[0].click).not.toHaveBeenCalled();
              mock$.next({});
              expect(columns[0].buttons[0].click).toHaveBeenCalled();
              mock$.unsubscribe();
            });
            it('[deprecated] #size', () => {
              const columns: SimpleTableColumn[] = [
                {
                  title: '',
                  buttons: [
                    {
                      text: 'a',
                      type: 'modal',
                      click: jasmine.createSpy(),
                      size: 'sm',
                    },
                  ],
                },
              ];
              const modalHelp = injector.get(ModalHelper);
              const mock$ = new Subject();
              spyOn(modalHelp, 'create').and.callFake(() => mock$);
              page.newColumn(columns);
              expect(modalHelp.create).not.toHaveBeenCalled();
              page.clickCell('a');
              expect(modalHelp.create).toHaveBeenCalled();
              expect(columns[0].buttons[0].click).not.toHaveBeenCalled();
              mock$.next({});
              expect(columns[0].buttons[0].click).toHaveBeenCalled();
              mock$.unsubscribe();
            });
            it('[deprecated] #modalOptions', () => {
              const columns: SimpleTableColumn[] = [
                {
                  title: '',
                  buttons: [
                    {
                      text: 'a',
                      type: 'modal',
                      click: jasmine.createSpy(),
                      modalOptions: {},
                    },
                  ],
                },
              ];
              const modalHelp = injector.get(ModalHelper);
              const mock$ = new Subject();
              spyOn(modalHelp, 'create').and.callFake(() => mock$);
              page.newColumn(columns);
              expect(modalHelp.create).not.toHaveBeenCalled();
              page.clickCell('a');
              expect(modalHelp.create).toHaveBeenCalled();
              expect(columns[0].buttons[0].click).not.toHaveBeenCalled();
              mock$.next({});
              expect(columns[0].buttons[0].click).toHaveBeenCalled();
              mock$.unsubscribe();
            });
          });
          describe('#link', () => {
            it('should be trigger click', () => {
              const columns: SimpleTableColumn[] = [
                {
                  title: '',
                  buttons: [{ text: 'a', type: 'link', click: () => null }],
                },
              ];
              const router = injector.get(Router);
              spyOn(router, 'navigateByUrl');
              page.newColumn(columns);
              expect(router.navigateByUrl).not.toHaveBeenCalled();
              page.clickCell('a');
              expect(router.navigateByUrl).not.toHaveBeenCalled();
            });
            it('should be navigate when return a string value', () => {
              const columns: SimpleTableColumn[] = [
                {
                  title: '',
                  buttons: [
                    { text: 'a', type: 'link', click: (item: any) => '/a' },
                  ],
                },
              ];
              const router = injector.get(Router);
              spyOn(router, 'navigateByUrl');
              page.newColumn(columns);
              expect(router.navigateByUrl).not.toHaveBeenCalled();
              page.clickCell('a');
              expect(router.navigateByUrl).toHaveBeenCalled();
            });
          });
        });
      });
      describe('[fixed]', () => {
        it('should be fixed left column', () => {
          page.newColumn([
            { title: '1', index: 'id', fixed: 'left', width: '100px' },
            { title: '2', index: 'id', fixed: 'left', width: '100px' },
            { title: '3', index: 'id', fixed: 'left', width: '100px' },
          ]);
          expect(page.getCell(1, 1).style.left).toBe('0px');
          expect(page.getCell(1, 2).style.left).toBe('100px');
          expect(page.getCell(1, 3).style.left).toBe('200px');
        });
        it('should be fixed right column', () => {
          page.newColumn([
            { title: '1', index: 'id', fixed: 'right', width: '100px' },
            { title: '2', index: 'id', fixed: 'right', width: '100px' },
            { title: '3', index: 'id', fixed: 'right', width: '100px' },
          ]);
          expect(page.getCell(1, 1).style.right).toBe('200px');
          expect(page.getCell(1, 2).style.right).toBe('100px');
          expect(page.getCell(1, 3).style.right).toBe('0px');
        });
      });
    });

    describe('#showTotal', () => {
      beforeEach(() => genModule({ minColumn: true }));
      it('with true', () => {
        context.showTotal = true;
        fixture.detectChanges();
        page.expectElContent(
          '.ant-pagination-total-text',
          `共 ${DEFAULTCOUNT} 条`,
        );
      });
      it('with false', () => {
        context.showTotal = false;
        fixture.detectChanges();
        page.expectElContent('.ant-pagination-total-text', '');
      });
      it('should be custom template', () => {
        context.pi = 1;
        context.ps = 3;
        context.showTotal = `{{total}}/{{range[0]}}/{{range[1]}}`;
        fixture.detectChanges();
        page.expectElContent(
          '.ant-pagination-total-text',
          `${DEFAULTCOUNT}/${comp.pi}/${comp.ps}`,
        );
      });
    });

    describe('#showPagination', () => {
      beforeEach(() => genModule({ minColumn: true }));
      describe('with undefined', () => {
        beforeEach(() => {
          context.ps = 2;
          context.showPagination = undefined;
        });
        it('should auto hide when total less than ps', () => {
          context.data = deepCopy(USERS).slice(0, 1);
          fixture.detectChanges();
          page.expectElCount('nz-pagination', 0);
        });
        it('should auto show when ps less than total', () => {
          context.data = deepCopy(USERS).slice(0, 3);
          fixture.detectChanges();
          page.expectElCount('nz-pagination', 1);
        });
      });
      it('should always show when with true', () => {
        context.showPagination = true;
        fixture.detectChanges();
        page.expectElCount('nz-pagination', 1);
      });
    });

    describe('#pagePlacement', () => {
      beforeEach(() => genModule({ minColumn: true }));
      ['left', 'center', 'right'].forEach(pos => {
        it(`with ${pos}`, () => {
          context.pagePlacement = pos as any;
          fixture.detectChanges();
          page.expectElCount(`.ad-st__p${pos}`, 1);
        });
      });
    });

    describe('#toTopInChange', () => {
      beforeEach(() => {
        genModule({ minColumn: true });
        context.toTopOffset = 10;
      });
      it('with true', () => {
        context.toTopInChange = true;
        fixture.detectChanges();
        const el = page.getEl('simple-table');
        spyOn(el, 'scrollIntoView');
        expect(el.scrollIntoView).not.toHaveBeenCalled();
        page.go(2);
        expect(el.scrollIntoView).toHaveBeenCalled();
      });
      it('with false', () => {
        context.toTopInChange = false;
        fixture.detectChanges();
        const el = page.getEl('simple-table');
        spyOn(el, 'scrollIntoView');
        expect(el.scrollIntoView).not.toHaveBeenCalled();
        page.go(2);
        expect(el.scrollIntoView).not.toHaveBeenCalled();
      });
      it('should scroll to .ant-table-body when used scroll', () => {
        context.scroll = { x: '1300px' };
        context.toTopInChange = true;
        fixture.detectChanges();
        const el = page.getEl('simple-table');
        spyOn(el, 'scrollIntoView');
        expect(el.scrollIntoView).not.toHaveBeenCalled();
        page.go(2);
        expect(el.scrollIntoView).not.toHaveBeenCalled();
      });
    });

    describe('#pagePlacement', () => {
      beforeEach(() => genModule({ minColumn: true }));
      ['left', 'center', 'right'].forEach(pos => {
        it(`with ${pos}`, () => {
          context.pagePlacement = pos as any;
          fixture.detectChanges();
          page.expectElCount(`.ad-st__p${pos}`, 1);
        });
      });
      it('should be changed', () => {
        context.pagePlacement = 'left';
        fixture.detectChanges();
        page.expectElCount(`.ad-st__pleft`, 1);
        context.pagePlacement = 'right';
        fixture.detectChanges();
        page.expectElCount(`.ad-st__pright`, 1);
      });
    });

    describe('[custom render template]', () => {
      it('with column title', () => {
        genModule({
          template: `<simple-table #st [data]="data" [columns]="columns">
            <ng-template [st-row]="id" type="title"><div class="id-title">ID</div></ng-template>
          </simple-table>`,
        });
        page.newColumn([{ title: '', index: 'id' }]);
        expect(page.getHead('id').querySelector('.id-title').textContent).toBe(
          'ID',
        );
      });
      it('should be custom row', () => {
        genModule({
          template: `<simple-table #st [data]="data" [columns]="columns">
            <ng-template [st-row]="id" let-item><div class="j-id">id{{item.id}}</div></ng-template>
          </simple-table>`,
        });
        page.newColumn([{ title: '', index: 'id' }]);
        expect(page.getCell().querySelector('.j-id').textContent).toBe('id1');
      });
      it('allow invalid id', () => {
        genModule({
          template: `<simple-table #st [data]="data" [columns]="columns">
            <ng-template [st-row]="invalid-id" let-item><div class="j-id">id{{item.id}}</div></ng-template>
          </simple-table>`,
        });
        page.newColumn([{ title: '', index: 'id' }]);
        expect(page.getCell().querySelector('.j-id')).toBeNull();
      });
    });
  });

  describe('[data]', () => {
    beforeEach(() => genModule({ minColumn: true }));
    describe('with url', () => {
      let http: HttpClient;
      let httpMock: HttpTestingController;
      const URL = `/test`;
      const URLTOTAL = 4;
      const URLDATA = { list: genData(PS), total: URLTOTAL };
      beforeEach(() => {
        http = injector.get(HttpClient);
        httpMock = injector.get(HttpTestingController);
        context.data = URL;
      });
      describe('[basic login]', () => {
        it('should be get data from request', () => {
          fixture.detectChanges();
          httpMock.expectOne(w => true).flush(URLDATA);
          page.expectDataTotal(URLTOTAL);
        });
        it('should be custom extra paramenters', () => {
          context.extraParams = { a: '1' };
          fixture.detectChanges();
          const h = httpMock.expectOne(w => true) as TestRequest;
          expect(h.request.params.get('a')).toBe('1');
        });
        it('should be rename a request', () => {
          context.reqReName = { pi: 'pageindex', ps: 'pagesize' };
          fixture.detectChanges();
          const h = httpMock.expectOne(w => true) as TestRequest;
          expect(h.request.params.has('pi')).toBe(false);
          expect(h.request.params.has('pageindex')).toBe(true);
        });
        it('should be change paramenter pi to pi-1', () => {
          context.zeroIndexedOnPage = true;
          context.pi = 1;
          fixture.detectChanges();
          const h = httpMock.expectOne(w => true) as TestRequest;
          expect(context.comp.zeroIndexedOnPage).toBe(true);
          expect(h.request.params.get('pi').toString()).toBe(
            (context.pi - 1).toString(),
          );
        });
        it('should be empty array when invalid list', () => {
          fixture.detectChanges();
          httpMock.expectOne(w => true).flush({ list: 'aa' });
          page.expectDataTotal(0);
        });
        it('should be resend request when changed page', () => {
          fixture.detectChanges();
          httpMock.expectOne(w => true).flush(URLDATA);
          fixture.detectChanges();
          page.expectDataTotal(URLTOTAL);
          page.go(2);
          httpMock
            .expectOne(w => true)
            .flush({ list: genData(1), total: URLTOTAL });
          fixture.detectChanges();
          page.expectCurrentPageTotal(1);
        });
        it('#reqError', () => {
          fixture.detectChanges();
          expect(context.reqError).not.toHaveBeenCalled();
          httpMock
            .expectOne(w => true)
            .flush(null, { status: 503, statusText: '' });
          expect(context.reqError).toHaveBeenCalled();
        });
        it('#preDataChange', () => {
          context.preDataChange = jasmine.createSpy().and.returnValue([]);
          fixture.detectChanges();
          expect(context.preDataChange).not.toHaveBeenCalled();
          httpMock.expectOne(w => true).flush(URLDATA);
          expect(context.preDataChange).toHaveBeenCalled();
        });
      });
      describe('#resReName', () => {
        beforeEach(() => spyOn(console, 'warn'));
        it('should be rename', () => {
          context.resReName = { total: ['TOTAL'], list: ['LIST'] };
          fixture.detectChanges();
          httpMock.expectOne(w => true).flush({
            TOTAL: 1,
            LIST: [],
          });
          expect(console.warn).not.toHaveBeenCalled();
          page.expectDataTotal(1);
        });
        it('should be rename via deep path', () => {
          context.resReName = { total: 'res.total', list: 'res.list' };
          fixture.detectChanges();
          httpMock.expectOne(w => true).flush({
            res: {
              total: 1,
              list: [],
            },
          });
          expect(console.warn).not.toHaveBeenCalled();
          page.expectDataTotal(1);
        });
        it('should be null arguments', () => {
          context.resReName = { total: null, list: null };
          fixture.detectChanges();
          httpMock.expectOne(w => true).flush(URLDATA);
          expect(console.warn).not.toHaveBeenCalled();
        });
      });
      describe('#sort', () => {
        describe('#multiSort', () => {
          beforeEach(() =>
            (context.columns = [
              { title: '', index: 'index' },
              {
                title: '',
                index: 'index',
                sortKey: 's1',
                sort: 'ascend',
                sorter: () => true,
              },
              {
                title: '',
                index: 'index',
                sortKey: 's2',
                sort: 'descend',
                sorter: () => true,
              },
            ]));
          it('should be multiSort', () => {
            context.multiSort = true;
            fixture.detectChanges();
            const h = httpMock.expectOne(w => true) as TestRequest;
            expect(h.request.urlWithParams).toContain('s1=ascend&s2=descend');
          });
          describe('when using SimpleTableMultiSort', () => {
            it('should combine values', () => {
              context.multiSort = <SimpleTableMultiSort>{};
              fixture.detectChanges();
              const h = httpMock.expectOne(w => true) as TestRequest;
              expect(h.request.urlWithParams).toContain(
                'sort=s1.ascend-s2.descend',
              );
            });
          });
        });
        describe('#sortReName', () => {
          beforeEach(() =>
            (context.columns = [
              { title: '', index: 's1', sort: 'ascend', sorter: () => true },
            ]));
          it('should used re-name value', () => {
            context.sortReName = { ascend: 'asc', descend: 'desc' };
            fixture.detectChanges();
            const h = httpMock.expectOne(w => true) as TestRequest;
            expect(h.request.urlWithParams).toContain('s1=asc');
          });
        });
      });
      describe('#filter', () => {
        const columns = [
          {
            title: '',
            index: 'id',
            filters: [
              { text: 'f1', value: 'fv1' },
              { text: 'f2', value: 'fv2' },
            ],
            filter: () => true,
            filterMultiple: true,
            filterConfirmText: 'ok',
            filterClearText: 'reset',
            filterIcon: 'anticon anticon-aa',
          },
        ];
        describe('#filterMultiple', () => {
          beforeEach(
            fakeAsync(() => {
              page.newColumn(columns).openDropDownInHead('id');
              expect(context.filterChange).not.toHaveBeenCalled();
              // choose first
              page.click(
                '.ant-table-filter-dropdown .ant-dropdown-menu-item:nth-child(1) label',
              );
              httpMock.expectOne(w => true).flush({});
              // choose second
              page.click(
                '.ant-table-filter-dropdown .ant-dropdown-menu-item:nth-child(2) label',
              );
              // mock click confirm
              comp._filterConfirm(comp._columns[0]);
              fixture.detectChanges();
              const h = httpMock.expectOne(w => true) as TestRequest;
              expect(h.request.urlWithParams).toContain(`id=fv1,fv2`);
              page.asyncEnd();
            }),
          );
          it(
            'should be send filter values in request querystring',
            fakeAsync(() => {
              page.asyncEnd();
            }),
          );
          it(
            'should be clear filter',
            fakeAsync(() => {
              // mock click confirm
              comp._filterClear(comp._columns[0]);
              fixture.detectChanges();
              const h = httpMock.expectOne(w => true) as TestRequest;
              expect(h.request.urlWithParams).not.toContain(`id=fv1,fv2`);
              page.asyncEnd();
            }),
          );
        });
        it(
          'should used re-name keys',
          fakeAsync(() => {
            const c = deepCopy(columns) as SimpleTableColumn[];
            c[0].filterReName = (
              list: SimpleTableFilter[],
              col: SimpleTableColumn,
            ) => ({ a: 1 });
            page.newColumn(c).openDropDownInHead('id');
            // choose first
            page.click(
              '.ant-table-filter-dropdown .ant-dropdown-menu-item:nth-child(1) label',
            );
            httpMock.expectOne(w => true).flush({});
            // mock click confirm
            comp._filterConfirm(comp._columns[0]);
            fixture.detectChanges();
            const h = httpMock.expectOne(w => true) as TestRequest;
            expect(h.request.urlWithParams).toContain(`a=1`);
            page.asyncEnd();
          }),
        );
        it(
          'should only filter one item when filterMultiple with false',
          fakeAsync(() => {
            const c = deepCopy(columns) as SimpleTableColumn[];
            c[0].filterMultiple = false;
            page.newColumn(c).openDropDownInHead('id');
            // choose first
            page.click(
              '.ant-table-filter-dropdown .ant-dropdown-menu-item:nth-child(1) label',
            );
            httpMock.expectOne(w => true).flush({});
            expect(comp._columns[0].filters.filter(w => w.checked).length).toBe(
              1,
            );
            // choose second
            page.click(
              '.ant-table-filter-dropdown .ant-dropdown-menu-item:nth-child(2) label',
            );
            expect(comp._columns[0].filters.filter(w => w.checked).length).toBe(
              1,
            );
            page.asyncEnd();
          }),
        );
      });
    });
    describe('with array', () => {
      describe('[basic login]', () => {
        it('should disabled call when is ajax data', () => {
          context.data = '/';
          fixture.detectChanges();
          injector
            .get(HttpTestingController)
            .expectOne(w => true)
            .flush({ list: [] });
          fixture.detectChanges();
          page.expectCurrentPageTotal(0);
          comp._genData(true);
          page.expectCurrentPageTotal(0);
        });
      });
      describe('with any[]', () => {
        it(`should be render`, () => {
          fixture.detectChanges();
          page.expectCurrentPageTotal(PS);
        });
      });
      describe('with observable<any[]>', () => {
        it('should be render', () => {
          const total = 4;
          const obs$ = of(genData(total));
          context.data = obs$;
          fixture.detectChanges();
          expect(context.change).not.toHaveBeenCalled();
          page
            .expectCurrentPageTotal(PS)
            .go(2)
            .expectCurrentPageTotal(total - PS);
          expect(context.change).toHaveBeenCalled();
        });
        it('should first unsubscribe when changed', () => {
          context.data = of(genData(1));
          fixture.detectChanges();
          page.expectCurrentPageTotal(1);
          context.data = of(genData(3));
          fixture.detectChanges();
          page.expectCurrentPageTotal(3);
        });
      });
      describe('#frontPagination', () => {
        // `true` 由 `simple-table` 根据 `data` 长度受控分页，包括：排序、过滤等
        describe('with true', () => {
          beforeEach(() => (context.frontPagination = true));
          it('should be control paged by data', () => {
            context.pi = 1;
            context.ps = 3;
            context.data = genData(10);
            fixture.detectChanges();
            page
              .expectCurrentPageTotal(3) // 当前页多少条
              .expectDataTotal(10) // 总数据量
              .expectTotalPage(4); // 总页数
          });
          it(`should limit the maximum page total`, () => {
            const ps = 5;
            const total = 11;
            const maxPageIndex = Math.ceil(total / ps);
            context.data = genData(total);
            context.ps = ps;
            context.pi = maxPageIndex + 1;
            context.frontPagination = true;
            fixture.detectChanges();
            page.expectCompDataPi(maxPageIndex);
          });
        });
        // `false` 由用户通过 `total` 和 `data` 参数受控分页，并维护 `(change)` 当分页变更时重新加载数据
        describe('with false', () => {
          const pi = 1;
          const ps = 5;
          const total = 11;
          const maxPageIndex = Math.ceil(total / ps);
          beforeEach(() => {
            context.frontPagination = false;
            context.pi = pi;
            context.ps = ps;
            context.total = total;
          });
          it('should be full control', () => {
            context.data = genData(ps);
            context.change = () => {
              context.data = genData(ps);
              fixture.detectChanges();
            };
            fixture.detectChanges();
            page
              .expectCurrentPageTotal(ps) // 当前页多少条
              .expectTotalPage(maxPageIndex) // 总页数
              .go(maxPageIndex) // 跳转最后一页
              .expectCurrentPageTotal(ps); // 剩余多少条，始终由 `change` 返回决定
          });
          it('should be fixed total number, ignoring the data length', () => {
            context.data = genData(1);
            fixture.detectChanges();
            page
              .expectCurrentPageTotal(1) // 当前页多少条
              .expectTotalPage(maxPageIndex) // 总页数
              .go(maxPageIndex); // 跳转最后一页

            const newDataLen = 2;
            context.data = genData(newDataLen);
            fixture.detectChanges();
            page
              .expectCurrentPageTotal(newDataLen) // 当前页多少条
              .expectTotalPage(maxPageIndex); // 总页数
          });
          it('should be used data length when not total specified', () => {
            const curTotal = 6;
            context.data = genData(curTotal);
            context.total = 0;
            fixture.detectChanges();
            page
              .expectCurrentPageTotal(curTotal) // 当前页应为数据总量
              .expectTotalPage(2); // 总页数
          });
        });
      });
      describe('#sort', () => {
        it('should be ascend id property', () => {
          page
            .newColumn([
              {
                title: '',
                index: 'id',
                sort: 'ascend',
                sorter: (a, b) => a.id - b.id,
              },
            ])
            .expectData(1, 'id', 1);
        });
        it('should be descend id property', () => {
          page
            .newColumn([
              {
                title: '',
                index: 'id',
                sort: 'descend',
                sorter: (a, b) => a.id - b.id,
              },
            ])
            .expectData(1, 'id', DEFAULTCOUNT);
        });
        it(`sorter property muse be a function`, () => {
          page
            .newColumn(<any[]>[
              { title: '', index: 'id', sort: 'descend', sorter: 'null' },
            ])
            .expectData(1, 'id', 1);
        });
        it('should be alwasy sorting value is zero', () => {
          page
            .newColumn([{ title: 'id', index: 'id', sorter: (a, b) => 0 }])
            .clickHead('id', '.ant-table-column-sorter-down')
            .expectData(1, 'id', 1)
            .clickHead('id', '.ant-table-column-sorter-up')
            .expectData(1, 'id', 1);
        });
        it('should be sorting via table head', () => {
          page
            .newColumn([
              { title: 'id', index: 'id', sorter: (a, b) => a.id - b.id },
              { title: 'age', index: 'age', sorter: (a, b) => a.id - b.id },
            ])
            .clickHead('id', '.ant-table-column-sorter-down')
            .expectData(1, 'id', DEFAULTCOUNT)
            .clickHead('id', '.ant-table-column-sorter-up')
            .expectData(1, 'id', 1);
          expect(context.sortChange).toHaveBeenCalled();
        });
        it('should be multi sort', () => {
          context.multiSort = true;
          page.newColumn([
            { title: 'id', index: 'id', sorter: (a, b) => a.id - b.id },
            { title: 'age', index: 'age', sorter: (a, b) => a.id - b.id },
          ]);
          page.clickHead('id', '.ant-table-column-sorter-down');
          expect(
            Object.values(comp._sortMap).filter(item => item.v !== undefined)
              .length,
          ).toBe(1);
          page.clickHead('age', '.ant-table-column-sorter-up');
          expect(
            Object.values(comp._sortMap).filter(item => item.v !== undefined)
              .length,
          ).toBe(2);
        });
      });
      describe('#filter', () => {
        const columns: SimpleTableColumn[] = [
          {
            title: '',
            index: 'id',
            filters: [
              { text: 'name 1', value: 'name 1' },
              { text: 'name 2', value: 'name 2' },
            ],
            filter: (filter: SimpleTableFilter, record: any) =>
              record.name.indexOf(filter.value) === 0,
          },
        ];
        it(
          'should only render name 1 data',
          fakeAsync(() => {
            page.newColumn(columns).openDropDownInHead('id');
            // choose first
            page.click(
              '.ant-table-filter-dropdown .ant-dropdown-menu-item:nth-child(1) label',
            );
            page.expectCurrentPageTotal(PS);
            // mock click confirm
            comp._filterConfirm(comp._columns[0]);
            fixture.detectChanges();
            page.expectCurrentPageTotal(1);
            page.asyncEnd();
          }),
        );
      });
    });
    describe('[logic]', () => {
      it('shoule be empty data when invalid data', () => {
        context.data = null;
        fixture.detectChanges();
        page.expectDataTotal(0);
      });
    });
  });

  describe('[public method]', () => {
    describe('#load', () => {
      beforeEach(() => genModule({ minColumn: true }));
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
        expect(comp.extraParams.a).toBe(1);
      });
      it(`can't load page when uninitialized`, () => {
        expect(context.change).not.toHaveBeenCalled();
        comp.load();
        expect(context.change).not.toHaveBeenCalled();
      });
      it('shoule be keeping extra params when do not passed', () => {
        comp.load(1, { a: 1 });
        expect(comp.extraParams.a).toBe(1);
        comp.load(1);
        expect(comp.extraParams.a).toBe(1);
      });
      it('shoule be merge extra params', () => {
        comp.load(1, { a: 1 });
        comp.load(1, { b: 2 }, { merge: true });
        expect(comp.extraParams.a).toBe(1);
        expect(comp.extraParams.b).toBe(2);
      });
    });
    describe('#reload', () => {
      beforeEach(() => genModule({ minColumn: true }));
      it('keeping current page index', () => {
        fixture.detectChanges();
        comp.load(2);
        expect(comp.pi).toBe(2);
        comp.reload();
        expect(comp.pi).toBe(2);
      });
      it('without extra params', () => {
        expect(context.change).not.toHaveBeenCalled();
        const orgExtraParams = comp.extraParams;
        fixture.detectChanges();
        comp.reload();
        expect(context.change).toHaveBeenCalled();
        expect(comp.extraParams).toBe(orgExtraParams);
      });
      it(`with extra params`, () => {
        expect(context.change).not.toHaveBeenCalled();
        fixture.detectChanges();
        comp.reload({ a: 1 });
        expect(context.change).toHaveBeenCalled();
        expect(comp.extraParams.a).toBe(1);
      });
      it('merge extra params', () => {
        comp.reload({ a: 1 });
        comp.reload({ b: 2 }, { merge: true });
        expect(comp.extraParams.a).toBe(1);
        expect(comp.extraParams.b).toBe(2);
      });
    });
    describe('#reset', () => {
      beforeEach(() => genModule({ minColumn: true }));
      it('always the first page', () => {
        fixture.detectChanges();
        comp.load(2);
        expect(comp.pi).toBe(2);
        comp.reset();
        expect(comp.pi).toBe(1);
      });
      it('without extra params', () => {
        expect(context.change).not.toHaveBeenCalled();
        const orgExtraParams = comp.extraParams;
        fixture.detectChanges();
        comp.reset();
        expect(context.change).toHaveBeenCalled();
        expect(comp.extraParams).toBe(orgExtraParams);
        expect(comp.pi).toBe(1);
      });
      it(`with extra params`, () => {
        expect(context.change).not.toHaveBeenCalled();
        fixture.detectChanges();
        comp.reset({ a: 1 });
        expect(context.change).toHaveBeenCalled();
        expect(comp.extraParams.a).toBe(1);
        expect(comp.pi).toBe(1);
      });
      it('merge extra params', () => {
        comp.reset({ a: 1 });
        comp.reset({ b: 2 }, { merge: true });
        expect(comp.extraParams.a).toBe(1);
        expect(comp.extraParams.b).toBe(2);
      });
      it('should be clean check, radio, filter, sort', fakeAsync(() => {
        spyOn(comp, 'clearCheck');
        spyOn(comp, 'clearRadio');
        spyOn(comp, 'clearFilter');
        spyOn(comp, 'clearSort');
        comp.reset();
        expect(comp.clearCheck).toHaveBeenCalled();
        expect(comp.clearRadio).toHaveBeenCalled();
        expect(comp.clearFilter).toHaveBeenCalled();
        expect(comp.clearSort).toHaveBeenCalled();
      }));
    });
    describe('#export', () => {
      let exportSrv: SimpleTableExport;
      beforeEach(() => {
        genModule({ minColumn: true, providers: [SimpleTableExport] });
        fixture.detectChanges();
        exportSrv = comp['exportSrv'];
        spyOn(exportSrv, 'export');
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
        it('when data is string', () => {
          const mockHttp = injector.get(HttpTestingController);
          context.data = '/test';
          fixture.detectChanges();
          mockHttp.expectOne(w => true).flush({ list: [] });
          expect(exportSrv.export).not.toHaveBeenCalled();
          comp.export();
          mockHttp.expectOne(w => true).flush({ list: [] });
          expect(exportSrv.export).toHaveBeenCalled();
        });
      });
      describe('with specified data', () => {
        it('should be specified url', () => {
          expect(exportSrv.export).not.toHaveBeenCalled();
          comp.export('/test');
          injector
            .get(HttpTestingController)
            .expectOne(w => true)
            .flush({ list: [] });
          expect(exportSrv.export).toHaveBeenCalled();
        });
        it('should be specified array data', () => {
          expect(exportSrv.export).not.toHaveBeenCalled();
          comp.export([], {});
          expect(exportSrv.export).toHaveBeenCalled();
        });
      });
    });
  });

  describe('[i18n]', () => {
    let i18nSrv: AlainI18NService;
    let curLang = 'en';
    beforeEach(() => {
      genModule({ i18n: true });
      i18nSrv = injector.get(ALAIN_I18N_TOKEN);
      spyOn(i18nSrv, 'fanyi').and.callFake(() => curLang);
    });
    it('in title', () => {
      page.newColumn([{ title: '', index: 'id' }]);
      expect(i18nSrv.fanyi).not.toHaveBeenCalled();
      page.newColumn([{ title: '', i18n: 'en', index: 'id' }]);
      expect(i18nSrv.fanyi).toHaveBeenCalled();
    });
    it('in buttons', () => {
      page.newColumn([{ title: '', index: 'id', buttons: [{ text: '' }] }]);
      expect(i18nSrv.fanyi).not.toHaveBeenCalled();
      page.newColumn([
        { title: '', index: 'id', buttons: [{ text: '', i18n: 'a' }] },
      ]);
      expect(i18nSrv.fanyi).toHaveBeenCalled();
    });
    it('should be re-render columns when i18n changed', () => {
      page
        .newColumn([{ title: '', i18n: curLang, index: 'id' }])
        .expectHead(curLang, 'id');
      curLang = 'zh';
      i18nSrv.use(curLang);
      fixture.detectChanges();
      page.expectHead(curLang, 'id');
    });
  });

  describe('[acl]', () => {
    let acl: ACLService;

    beforeEach(() => {
      genModule({ acl: true });
      acl = injector.get(ACLService);
      acl.set({ role: ['user'] });
    });

    it('in column', () => {
      page
        .newColumn([{ title: '', index: 'id' }])
        .expectCell('1')
        .newColumn([{ title: '', index: 'id', acl: 'admin' }])
        .expectCell(null);
    });

    it('in selections', () => {
      page
        .newColumn([
          {
            title: '',
            index: 'id',
            type: 'checkbox',
            selections: [{ text: '1', select: () => {} }],
          },
        ])
        .expectHead('', 'id', '.ad-st-checkselection')
        .newColumn([
          {
            title: '',
            index: 'id',
            type: 'checkbox',
            selections: [{ text: '1', select: () => {}, acl: 'admin' }],
          },
        ])
        .expectHead(null, 'id', '.ad-st-checkselection');
    });

    it('in filter', () => {
      page
        .newColumn([
          {
            title: '',
            index: 'id',
            filter: () => true,
            filters: [{ text: '1' }],
          },
        ])
        .expectHead('', 'id', '.ad-st-filter')
        .newColumn([
          {
            title: '',
            index: 'id',
            filter: () => true,
            filters: [{ text: '1', acl: 'admin' }],
          },
        ])
        .expectHead(null, 'id', '.ad-st-filter');
    });

    it('in buttons', () => {
      page
        .newColumn([
          {
            title: '',
            buttons: [{ text: '<p class="j-btn"></p>' }],
          },
        ])
        .expectCell('', 1, 1, '.j-btn')
        .newColumn([
          {
            title: '',
            buttons: [{ text: '<p class="j-btn"></p>', acl: 'admin' }],
          },
        ])
        .expectCell(null, 1, 1, '.j-btn');
    });
  });

  describe('[row events]', () => {
    beforeEach(() => {
      genModule({ minColumn: true });
      context.rowClickTime = 10;
      fixture.detectChanges();
    });
    it(`should be row click`, (done: () => void) => {
      expect(context.rowClick).not.toHaveBeenCalled();
      expect(context.rowDblClick).not.toHaveBeenCalled();
      (page.getCell() as HTMLElement).click();
      fixture.detectChanges();
      setTimeout(() => {
        expect(context.rowClick).toHaveBeenCalled();
        expect(context.rowDblClick).not.toHaveBeenCalled();
        done();
      }, 25);
    });
    it(`should be row double click`, (done: () => void) => {
      expect(context.rowClick).not.toHaveBeenCalled();
      expect(context.rowDblClick).not.toHaveBeenCalled();
      const cell = page.getCell() as HTMLElement;
      cell.click();
      cell.click();
      fixture.detectChanges();
      setTimeout(() => {
        expect(context.rowClick).not.toHaveBeenCalled();
        expect(context.rowDblClick).toHaveBeenCalled();
        done();
      }, 25);
    });
  });

  class PageObject {
    constructor() {
      spyOn(context, 'reqError');
      spyOn(context, 'change');
      spyOn(context, 'checkboxChange');
      spyOn(context, 'radioChange');
      spyOn(context, 'sortChange');
      spyOn(context, 'filterChange');
      spyOn(context, 'rowClick');
      spyOn(context, 'rowDblClick');
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
        `.ad-st-body tr[data-index="${row - 1}"] td:nth-child(${column})`,
      ) as HTMLElement;
      return cell;
    }
    /**
     * 断言单元格内容，下标从 `1` 开始
     * @param value 当 `null` 时，表示无单元格
     * @param cls 对单元格进一步筛选
     */
    expectCell(
      value: string,
      row: number = 1,
      column: number = 1,
      cls?: string,
    ): this {
      let cell = this.getCell(row, column);
      if (cls) cell = cell.querySelector(cls);
      if (value == null) {
        expect(cell).toBeNull();
      } else {
        expect(cell.innerText.trim()).toBe(value);
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
    go(pi: number = 2): this {
      this.getEl(`.ant-pagination [title="${pi}"]`).click();
      fixture.detectChanges();
      return this;
    }
    newColumn(columns: SimpleTableColumn[], pi = 1, ps = PS): this {
      context.columns = columns;
      context.pi = pi;
      context.ps = ps;
      fixture.detectChanges();
      return this;
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
        dl.query(By.css(`.ad-st-body tr[data-index="${row - 1}"]`)),
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
    <simple-table #st
        [data]="data" [extraParams]="extraParams"
        [reqMethod]="reqMethod" [reqBody]="reqBody" [reqHeaders]="reqHeaders" [reqReName]="reqReName" (reqError)="reqError()"
        [resReName]="resReName"
        [zeroIndexedOnPage]="zeroIndexedOnPage"
        [columns]="columns"
        [ps]="ps" [pi]="pi" [total]="total"
        [showPagination]="showPagination"
        [frontPagination]="frontPagination"
        [loading]="loading" [loadingDelay]="loadingDelay"
        [bordered]="bordered" [size]="size"
        [scroll]="scroll"
        [showSizeChanger]="showSizeChanger"
        [pageSizeOptions]="pageSizeOptions"
        [showQuickJumper]="showQuickJumper"
        [showTotal]="showTotal"
        [isPageIndexReset]="isPageIndexReset"
        [pagePlacement]="pagePlacement"
        [toTopInChange]="toTopInChange" [toTopOffset]="toTopOffset"
        [sortReName]="sortReName" [multiSort]="multiSort"
        [preDataChange]="preDataChange"
        [noResult]="noResult"
        (change)="change()"
        (checkboxChange)="checkboxChange()"
        (radioChange)="radioChange()"
        (sortChange)="sortChange()"
        (filterChange)="filterChange()"
        [rowClickTime]="rowClickTime"
        (rowClick)="rowClick()"
        (rowDblClick)="rowDblClick()"
    >
    </simple-table>`,
})
class TestComponent {
  @ViewChild('st') comp: SimpleTableComponent;
  data: string | any[] | Observable<any[]> = deepCopy(USERS);
  extraParams: any;
  reqMethod: string;
  reqBody: any;
  reqHeaders: any;
  reqReName: Object;
  zeroIndexedOnPage = false;
  reqError() {}
  resReName: ResReNameType;
  ps = PS;
  columns: SimpleTableColumn[];
  pi: number;
  total: number;
  showPagination = true;
  loading: boolean;
  loadingDelay: number;
  bordered: boolean;
  size: 'small' | 'middle' | 'default';
  scroll: { y?: string; x?: string };
  showSizeChanger: boolean;
  pageSizeOptions: number[];
  frontPagination: boolean = true;
  showQuickJumper = false;
  showTotal: any;
  isPageIndexReset: boolean;
  pagePlacement?: 'left' | 'center' | 'right';
  toTopInChange: boolean;
  toTopOffset: number;
  sortReName: { ascend?: string; descend?: string };
  multiSort: boolean | SimpleTableMultiSort;
  preDataChange: (data: SimpleTableData[]) => SimpleTableData[] = null;
  noResult = 'noResult';
  change() {}
  checkboxChange() {}
  radioChange() {}
  sortChange() {}
  filterChange() {}
  rowClickTime = 200;
  rowClick() {}
  rowDblClick() {}
}
