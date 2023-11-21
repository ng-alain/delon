/* eslint-disable @typescript-eslint/no-explicit-any */
import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { of, Subject, throwError } from 'rxjs';

import {
  DatePipe,
  DelonLocaleService,
  DrawerHelper,
  en_US,
  ModalHelper,
  _HttpClient,
  AlainI18NService
} from '@delon/theme';
import { deepCopy } from '@delon/util/other';
import { NzPaginationComponent } from 'ng-zorro-antd/pagination';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';

import { STWidgetRegistry } from './../st-widget';
import { PS, DEFAULTCOUNT, USERS, MOCKDATE, MOCKIMG, genData, PageObject, TestComponent, genModule } from './base.spec';
import { STDataSource } from '../st-data-source';
import { STExport } from '../st-export';
import { STComponent } from '../st.component';
import {
  STClickRowClassNameType,
  STColumn,
  STColumnBadge,
  STColumnTag,
  STContextmenuItem,
  STResReNameType
} from '../st.interfaces';
import { _STColumn } from '../st.types';

describe('abc: st', () => {
  let fixture: ComponentFixture<TestComponent>;
  let context: TestComponent;
  let dl: DebugElement;
  let comp: STComponent;
  let i18nSrv: AlainI18NService;
  let registerWidget: STWidgetRegistry;
  let page: PageObject<TestComponent>;

  function refAssign(): void {
    fixture = page.fixture;
    context = page.context;
    dl = page.dl;
    comp = page.comp;
    i18nSrv = page.i18nSrv;
    registerWidget = page.registerWidget;
  }

  describe('', () => {
    beforeEach(() => {
      page = genModule(TestComponent, { minColumn: true })!;
      refAssign();
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
                select: (ls: any[]) => ls.forEach(i => (i.checked = i.id < 2))
              }
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
                click: jasmine.createSpy()
              }
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
                  click: (item: any) => item.link
                }
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
              .expectCell('1')
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
                  numberDigits: '3.1-5'
                }
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
              .expectCell(new DatePipe().transform(MOCKDATE, 'yyyy-MM-dd HH:mm'))
              .asyncEnd();
          }));
          it(`should be custom render date format`, fakeAsync(() => {
            page
              .updateColumn([
                {
                  title: '',
                  index: 'date',
                  type: 'date',
                  dateFormat: 'yyyy-MM'
                }
              ])
              .expectCell(new DatePipe().transform(MOCKDATE, 'yyyy-MM'))
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
                    no: 'N'
                  }
                }
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
            page
              .updateColumn([{ type: 'widget', widget: { type: 'test' } }], 1, 1)
              .expectCell('1', 1, 1, '.widget-record-value');
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
          5: { text: '警告', color: 'warning', tooltip: 'TIPS' }
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
        it(`#tooltip`, fakeAsync(() => {
          page.updateColumn([{ title: '', index: 'status', type: 'badge', badge: BADGE }]).updateData([{ status: 5 }]);
          const tooltips = page.dl.queryAll(By.directive(NzTooltipDirective));
          expect(tooltips.length).toBe(1);
          page.asyncEnd();
        }));
      });
      describe('with tag', () => {
        const TAG: STColumnTag = {
          1: { text: '成功', color: 'green' },
          2: { text: '错误', color: 'red' },
          3: { text: '进行中', color: 'blue' },
          4: { text: '默认', color: '' },
          5: { text: '警告', color: 'orange', tooltip: 'TIPS' }
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
        it(`#tooltip`, fakeAsync(() => {
          page.updateColumn([{ title: 'tag', index: 'tag', type: 'tag', tag: TAG }]).updateData([{ tag: 5 }]);
          const tooltips = page.dl.queryAll(By.directive(NzTooltipDirective));
          expect(tooltips.length).toBe(1);
          page.asyncEnd();
        }));
      });
      describe('with cell', () => {
        it('should be working', fakeAsync(() => {
          page
            .updateColumn([{ index: 'id', cell: { type: 'checkbox' } }])
            .expectElCount('.cell', PS)
            .expectElCount('.ant-checkbox', PS);
        }));
        it('should be support function', fakeAsync(() => {
          page
            .updateColumn([
              {
                index: 'id',
                cell: i => (i.id === 1 ? { type: 'checkbox' } : {})
              }
            ])
            .expectElCount('.cell', PS)
            .expectElCount('.ant-checkbox', 1);
        }));
      });
      describe('[other]', () => {
        it('should custom render via format', fakeAsync(() => {
          page
            .updateColumn([
              {
                title: '',
                index: 'id',
                format: a => `<div class="j-format">${a.id}</div>`
              }
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
                default: '-'
              }
            ])
            .expectCell('-')
            .asyncEnd();
        }));
        it('should be custom class in cell', fakeAsync(() => {
          page.updateColumn([{ title: '', index: 'id', className: 'asdf' }]);
          expect(page.getCell().classList).toContain('asdf');
          page.asyncEnd();
        }));
        it('should be custom class in row', fakeAsync(() => {
          page.updateColumn([{ title: '', index: 'id', className: 'asdf' }]);
          page.comp.setRow(0, { className: 'aaa' });
          page.cd().expectElCount('.aaa', 1).asyncEnd();
        }));
      });
      describe('[buttons]', () => {
        it(`should be pop confirm when type=del`, fakeAsync(() => {
          const columns: STColumn[] = [
            {
              title: '',
              buttons: [{ text: 'del', type: 'del', click: jasmine.createSpy() }]
            }
          ];
          page.updateColumn(columns).expectCell('del', 1, 1, '[nz-popconfirm]').click('.st__btn-text').cd();
          expect(columns[0].buttons![0].click).not.toHaveBeenCalled();
          page.click('.ant-popover-buttons .ant-btn-primary').cd();
          expect(columns[0].buttons![0].click).toHaveBeenCalled();
          page.asyncEnd();
        }));
        it('should custom render text via format', fakeAsync(() => {
          const columns: STColumn[] = [
            {
              title: '',
              buttons: [
                {
                  text: a => `<div class="j-btn-format">${a.id}</div>`
                }
              ]
            }
          ];
          page.updateColumn(columns).expectElCount('.j-btn-format', PS).asyncEnd();
        }));
        it('should custom render text via text function', fakeAsync(() => {
          const columns: STColumn[] = [
            {
              title: '',
              buttons: [
                {
                  text: a => `<div class="j-btn-format">${a.id}</div>`
                }
              ]
            }
          ];
          page.updateColumn(columns).expectElCount('.j-btn-format', PS).asyncEnd();
        }));
        describe('[condition]', () => {
          it('should be hide menu in first row', fakeAsync(() => {
            const columns: STColumn[] = [
              {
                title: '',
                buttons: [{ text: 'a', iif: (item: any) => item.id !== 1 }]
              }
            ];
            page.updateColumn(columns).expectCell(null!, 1, 1, 'a').expectCell('a', 2, 1, 'a').asyncEnd();
          }));
        });
        describe('[events]', () => {
          it('#reload', fakeAsync(() => {
            const columns: STColumn[] = [
              {
                title: '',
                buttons: [{ text: 'a', click: 'reload' }]
              }
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
                buttons: [{ text: 'a', click: 'load' }]
              }
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
                        params: () => ({ aa: 1 })
                      }
                    }
                  ]
                }
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
                        params: () => ({ aa: 1 })
                      }
                    }
                  ]
                }
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
            it('recoard is pure', fakeAsync(() => {
              const columns: STColumn[] = [
                {
                  title: '',
                  buttons: [
                    {
                      text: 'a',
                      type: 'static',
                      click: jasmine.createSpy(),
                      modal: {
                        component: {}
                      }
                    }
                  ]
                }
              ];
              context.comp.cog.modal!.pureRecoard = true;
              const modalHelp = TestBed.inject<ModalHelper>(ModalHelper);
              const mock$ = new Subject();
              const spy = spyOn(modalHelp, 'createStatic').and.callFake(() => mock$);
              page.updateColumn(columns);
              page.clickCell('a');
              expect(spy.calls.first().args[1].record._values).not.toBeDefined();
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
                        params: () => ({ aa: 1 })
                      }
                    }
                  ]
                }
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
            it('recoard is pure', fakeAsync(() => {
              const columns: STColumn[] = [
                {
                  title: '',
                  buttons: [
                    {
                      text: 'a',
                      type: 'drawer',
                      click: jasmine.createSpy(),
                      drawer: {
                        component: {}
                      }
                    }
                  ]
                }
              ];
              context.comp.cog.drawer!.pureRecoard = true;
              const drawerHelp = TestBed.inject<DrawerHelper>(DrawerHelper);
              const mock$ = new Subject();
              const spy = spyOn(drawerHelp, 'create').and.callFake(() => mock$);
              page.updateColumn(columns);
              page.clickCell('a');
              expect(spy.calls.first().args[2].record._values).not.toBeDefined();
              page.asyncEnd();
            }));
          });
          describe('#link', () => {
            it('should be trigger click', fakeAsync(() => {
              const columns: STColumn[] = [
                {
                  title: '',
                  buttons: [{ text: 'a', type: 'link', click: () => null }]
                }
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
                  buttons: [{ text: 'a', type: 'link', click: () => '/a' }]
                }
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
                  buttons: [{ text: 'a', type: 'link', click: () => '/a' }]
                }
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
        it('should be className is function', fakeAsync(() => {
          const columns: STColumn[] = [
            {
              title: '',
              buttons: [
                {
                  className: a => `${a.id === 1 ? 'Y' : 'N'}`
                }
              ]
            }
          ];
          page
            .updateColumn(columns)
            .expectElCount('.Y', 1)
            .updateData([{ id: 2 }])
            .expectElCount('.Y', 0)
            .asyncEnd();
        }));
        it('should be icon is function', fakeAsync(() => {
          page
            .updateColumn([
              {
                title: '',
                buttons: [
                  {
                    icon: a => ({ type: `${a.id === 1 ? 'Y' : 'N'}` })
                  }
                ]
              }
            ])
            .updateData([{ id: 1 }, { id: 2 }, { id: 3 }])
            .expectElCount('.anticon-Y', 1)
            .expectElCount('.anticon-N', 2)
            .updateColumn([
              {
                title: '',
                buttons: [
                  {
                    icon: a => ({ type: `${a.id !== 1 ? 'Y' : 'N'}` })
                  }
                ]
              }
            ])
            .expectElCount('.anticon-Y', 2)
            .expectElCount('.anticon-N', 1)
            .asyncEnd();
        }));
      });
      // TODO: 当前版本自动设置，无须参与计算
      xdescribe('[fixed]', () => {
        it('should be fixed left column', fakeAsync(() => {
          page.updateColumn([
            { title: '1', index: 'id', fixed: 'left', width: '100px' },
            { title: '2', index: 'id', fixed: 'left', width: '100px' },
            { title: '3', index: 'id', fixed: 'left', width: '100px' }
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
            { title: '3', index: 'id', fixed: 'right', width: '100px' }
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
                { title: 'age', index: 'age', colSpan: 1, rowSpan: 2 }
              ]
            }
          ]);
          page
            .expectElCount('.ant-table-thead .ant-table-row', 2)
            .expectElCount('.ant-table-thead .ant-table-cell', 3)
            .asyncEnd();
        }));
        it('should be auto set widthConfig when column has width value', fakeAsync(() => {
          page.updateColumn([
            {
              title: 'user',
              children: [
                { title: 'name', index: 'name' },
                { title: 'age', index: 'age', width: 100 }
              ]
            }
          ]);
          page
            .expectElCount('.ant-table-thead .ant-table-row', 2)
            .expectElCount('.ant-table-thead .ant-table-cell', 3)
            .asyncEnd();
        }));
      });
    });
    describe('[data source]', () => {
      let _http: _HttpClient;
      beforeEach(() => {
        _http = TestBed.inject(_HttpClient);
      });
      it('support null data', fakeAsync(() => {
        page.updateData(null);
        expect(comp._data.length).toBe(0);
        page.updateData(genData(10));
        expect(comp._data.length).toBe(PS);
        page.asyncEnd();
      }));
      it('should only restore data', () => {
        const dataSource: STDataSource = comp['dataSource'];
        spyOn(dataSource, 'process').and.callFake(() => of({} as any));
        fixture.detectChanges();
        expect(comp.ps).toBe(PS);
      });
      it('should be automatically cancel paging when the returned body value is an array type', done => {
        spyOn(_http, 'request').and.returnValue(of([{}, {}, {}]));
        context.pi = 1;
        context.ps = 2;
        context.data = '/mock';
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(comp.pi).toBe(1);
          expect(comp.ps).toBe(3);
          expect(comp._isPagination).toBe(false);
          done();
        });
      });
      describe('Http Request', () => {
        it('when error request', () => {
          spyOn(_http, 'request').and.returnValue(throwError(() => 'cancel'));
          context.data = '/mock';
          fixture.detectChanges();
          expect(page.spyErrorData?.error).toBe('cancel');
          TestBed.resetTestingModule();
        });
        it('should be ingored incomplete request when has new request', fakeAsync(() => {
          let mockData = [{}];
          spyOn(_http, 'request').and.callFake(() => of(mockData) as any);
          context.data = '/mock1';
          fixture.detectChanges();
          tick(1000);
          fixture.detectChanges();
          mockData = [{}, {}];
          context.data = '/mock2';
          fixture.detectChanges();
          tick(1000);
          fixture.detectChanges();
          expect(comp._data.length).toBe(mockData.length);
        }));
        it('#customRequest', fakeAsync(() => {
          context.customRequest = jasmine.createSpy('customRequest').and.callFake(() => of([]));
          context.data = '/invalid-url';
          fixture.detectChanges();
          tick(1000);
          fixture.detectChanges();
          expect(context.customRequest).toHaveBeenCalled();
        }));
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
          return of({});
        });
        const pc = dl
          .query(By.directive(NzPaginationComponent))
          .injector.get<NzPaginationComponent>(NzPaginationComponent);
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
      it('should scroll to .ant-table-content when used scroll', fakeAsync(() => {
        context.scroll = { x: '1300px' };
        context.page.toTop = true;
        page.cd();
        const el = page.getEl('st');
        spyOn(el, 'scrollIntoView');
        page.go(2);
        expect(el.scrollIntoView).toHaveBeenCalled();
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
      it('should be working in virtual scroll', fakeAsync(() => {
        context.page.toTop = true;
        context.virtualScroll = true;
        context.scroll = { x: '100px', y: '100px' };
        page.cd();
        expect(context.comp.cdkVirtualScrollViewport != null).toBe(true);
        spyOn(context.comp.cdkVirtualScrollViewport!!, 'checkViewportSize');
        page.cd().go(2);
        expect(context.comp.cdkVirtualScrollViewport!!.checkViewportSize).toHaveBeenCalled();
        page.asyncEnd();
      }));
      it('should be working in only x is set', fakeAsync(() => {
        context.page.toTop = true;
        context.scroll = { x: '100px' };
        page.cd();
        expect(context.comp.cdkVirtualScrollViewport == null).toBe(true);
        const bodyEl = page.getEl('.ant-table-body, .ant-table-content');
        spyOn(bodyEl, 'scrollTo');
        page.cd().go(2);
        expect(bodyEl.scrollTo).toHaveBeenCalled();
        page.asyncEnd();
      }));
    });
    describe('[row events]', () => {
      beforeEach(fakeAsync(() => {
        page.cd();
      }));
      it(`should be row click`, fakeAsync(() => {
        page.clickCell();
        expect(page._changeData.type).toBe('click');
      }));
      it(`should be row double click`, fakeAsync(() => {
        const cell = page.getCell() as HTMLElement;
        (cell.closest('tr') as HTMLElement).dispatchEvent(new Event('dblclick'));
        page.cd();
        expect(page._changeData.type).toBe('dblClick');
      }));
      it('should be ingore input', fakeAsync(() => {
        const el = page.getCell() as HTMLElement;
        // mock input nodeName
        spyOnProperty(el, 'nodeName', 'get').and.returnValue('INPUT');
        el.click();
        page.cd().expectChangeType('click', false);
      }));
      describe('clickRowClassName', () => {
        it('should be null', fakeAsync(() => {
          context.clickRowClassName = null;
          page.cd();
          const trEl = (page.getCell() as HTMLElement).closest('tr') as HTMLElement;
          const oldClassName = trEl.classList.value;
          trEl.click();
          page.cd(100);
          expect(trEl.classList.value).toBe(oldClassName);
        }));
        it('should be string', fakeAsync(() => {
          context.clickRowClassName = 'aa';
          page.cd();
          const trEl = (page.getCell() as HTMLElement).closest('tr') as HTMLElement;
          expect(trEl.classList).not.toContain('aa');
          trEl.click();
          page.cd(100);
          expect(trEl.classList).toContain('aa');
          trEl.click();
          page.cd(100);
          expect(trEl.classList).not.toContain('aa');
        }));
        it('should be exclusive with false', fakeAsync(() => {
          context.clickRowClassName = { exclusive: false, fn: () => 'bb' } as STClickRowClassNameType;
          page.cd();
          [1, 2].forEach(idx => {
            const trEl = (page.getCell(idx) as HTMLElement).closest('tr') as HTMLElement;
            expect(trEl.classList).not.toContain('bb');
            trEl.click();
            page.cd(100);
            expect(trEl.classList).toContain('bb');
          });
          const len = ((page.getCell() as HTMLElement).closest('tbody') as HTMLElement).querySelectorAll(
            'tr.bb'
          ).length;
          expect(len).toBe(2);
        }));
        it('should be exclusive with true', fakeAsync(() => {
          context.clickRowClassName = { exclusive: true, fn: () => 'bb' } as STClickRowClassNameType;
          page.cd();
          [1, 2].forEach(idx => {
            const trEl = (page.getCell(idx) as HTMLElement).closest('tr') as HTMLElement;
            expect(trEl.classList).not.toContain('bb');
            trEl.click();
            page.cd(100);
            expect(trEl.classList).toContain('bb');
          });
          const len = ((page.getCell() as HTMLElement).closest('tbody') as HTMLElement).querySelectorAll(
            'tr.bb'
          ).length;
          expect(len).toBe(1);
        }));
      });
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
      it('#addRow', fakeAsync(() => {
        page.cd().expectCurrentPageTotal(PS);
        comp.addRow({ id: 100 }).cd();
        page.expectCurrentPageTotal(PS + 1).expectCell('100', 1, 1);
        comp.addRow([{ id: 101 }], { index: 2 }).cd();
        page.expectCurrentPageTotal(PS + 2).expectCell('101', 3, 1);
      }));
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
          comp._data.forEach((_v, idx) => page.expectCell(`${idx + 1}`, idx + 1));
          comp.removeRow(comp._data[0]);
          comp._data.forEach((_v, idx) => page.expectCell(`${idx + 1}`, idx + 1));
        }));
        it('shoule be ingored invalid data', fakeAsync(() => {
          page.cd().expectCurrentPageTotal(PS);
          comp.removeRow([null]);
          page.expectCurrentPageTotal(PS);
        }));
        it('shoule be support mulit-rows', fakeAsync(() => {
          page.cd().expectCurrentPageTotal(PS);
          page.expectData(1, 'id', 1);
          comp.removeRow([comp._data[0], comp._data[2]]);
          page.expectCurrentPageTotal(PS - 2);
          page.expectData(1, 'id', 2);
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
        it('should be support data of index', fakeAsync(() => {
          page.cd();
          page.expectData(1, 'name', `name 1`);
          spyOn(comp, 'resetColumns');
          comp.setRow(comp.list[0], { name: 'new name' });
          expect(comp.resetColumns).not.toHaveBeenCalled();
          page.expectData(1, 'name', `new name`);
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
        it('should be pre-clear data', fakeAsync(() => {
          const cls = '.st__body tr[data-index="0"] td';
          page.updateColumn([{ title: '', index: 'name' }]).expectElCount(cls, 1);
          comp.resetColumns({ preClearData: true, columns: [{ title: '', index: 'invalid-name' }] });
          page.cd().expectElContent(cls, '').asyncEnd();
        }));
      });
      it('#filteredData', fakeAsync(() => {
        page.cd();
        expect((comp.data as any[]).length).toBe(DEFAULTCOUNT);
        expect(comp._data.length).toBe(PS);
        comp.filteredData.subscribe(list => {
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
      describe('#pureItem', () => {
        it('should be deleted _values', fakeAsync(() => {
          page.cd();
          expect(comp.list[0]._values).not.toBeUndefined();
          expect(comp.pureItem(comp.list[0])!._values).toBeUndefined();
          page.asyncEnd();
        }));
        it('should be deleted _values via index', fakeAsync(() => {
          page.cd();
          expect(comp.list[0]._values).not.toBeUndefined();
          expect(comp.pureItem(0)!._values).toBeUndefined();
          page.asyncEnd();
        }));
        it('should be return null when not found row via index', fakeAsync(() => {
          page.cd();
          expect(comp.list[0]._values).not.toBeUndefined();
          expect(comp.pureItem(PS + 10)).toBe(null);
          page.asyncEnd();
        }));
      });
    });
    describe('#export', () => {
      let exportSrv: STExport;
      beforeEach(() => {
        exportSrv = comp['exportSrv'] = {
          export: jasmine.createSpy('export')
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
          spyOnProperty(comp, 'filteredData', 'get').and.returnValue(of([]));
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
            .expectElCount(`td.text-truncate`, context.comp._data.length)
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
        page.cd().expectElCount(`.ant-spin-spinning`, 0).asyncEnd();
      }));
    });
    describe('#button', () => {
      describe('#iifBehavior', () => {
        it('with hide', fakeAsync(() => {
          page
            .updateColumn([
              {
                title: '',
                buttons: [{ text: 'a', click: () => 'load', iif: () => false, iifBehavior: 'hide' }]
              }
            ])
            .expectElCount('.st__body tr td a', 0)
            .asyncEnd();
        }));
        it('with disabled', fakeAsync(() => {
          page
            .updateColumn([
              {
                title: '',
                buttons: [{ text: 'a', click: () => 'load', iif: () => false, iifBehavior: 'disabled' }]
              }
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
              buttons: [{ text: 'a', click: () => 'load', tooltip: 't' }]
            }
          ])
          .expectElCount('.st__body [nz-tooltip]', PS)
          .asyncEnd();
      }));
    });
    describe('#resizable', () => {
      it('should be working', fakeAsync(() => {
        page.updateColumn([
          { index: 'id', resizable: true },
          { index: 'id', resizable: true }
        ]);
        comp.colResize({ width: 100 }, { width: 10 } as _STColumn);
        expect(page._changeData.type).toBe('resize');
        page.asyncEnd();
      }));
      it('should be ingore resize hanle of last column', fakeAsync(() => {
        page
          .updateColumn([
            { index: 'id', resizable: true },
            { index: 'id', resizable: true }
          ])
          .expectElCount('nz-resize-handle', 1)
          .asyncEnd();
      }));
    });
    it('#showHeader', () => {
      context.showHeader = false;
      fixture.detectChanges();
      page.expectElCount('.ant-table-thead', 0);
      page.expectElCount('.st__body', 1);
    });
    describe('#contextmenu', () => {
      it('should be working', fakeAsync(() => {
        page
          .updateColumn([{ title: 'a', index: 'id' }])
          .openContextMenu(1, 1)
          .clickContentMenu(1)
          .openContextMenu(1) // head
          .clickContentMenu(1)
          .asyncEnd();
      }));
      it('should be support return a observable value', fakeAsync(() => {
        context.contextmenu = () => of([{ text: 'a', fn: jasmine.createSpy() }] as STContextmenuItem[]);
        page
          .updateColumn([{ title: 'a', index: 'id' }])
          .openContextMenu(1, 1)
          .clickContentMenu(1)
          .asyncEnd();
      }));
      it('should be ingore invalid target', fakeAsync(() => {
        context.contextmenu = jasmine.createSpy();
        page.updateColumn([{ title: 'a', index: 'id' }]).openContextMenu(1, 1, { target: { closest: () => null } });
        expect(context.contextmenu).not.toHaveBeenCalled();
        page.asyncEnd();
      }));
      it('should be ingore unspecified contextmenu property', fakeAsync(() => {
        context.contextmenu = null;
        const event = { preventDefault: jasmine.createSpy() };
        page.updateColumn([{ title: 'a', index: 'id' }]).openContextMenu(1, 1, event);
        expect(event.preventDefault).not.toHaveBeenCalled();
        page.asyncEnd();
      }));
    });
  });
  describe('[custom render template]', () => {
    it('with column title', fakeAsync(() => {
      page = genModule(TestComponent, {
        template: `<st #st [data]="data" [columns]="columns">
            <ng-template st-row="id" type="title"><div class="id-title">ID</div></ng-template>
          </st>`
      })!;
      page.updateColumn([{ title: '', index: 'id', renderTitle: 'id' }]);
      expect(page.getHead('id').querySelector('.id-title')!.textContent).toBe('ID');
      page.asyncEnd();
    }));
    it('should be custom row', fakeAsync(() => {
      page = genModule(TestComponent, {
        template: `<st #st [data]="data" [columns]="columns">
            <ng-template st-row="id" let-item><div class="j-id">id{{item.id}}</div></ng-template>
          </st>`
      })!;
      page.updateColumn([{ title: '', render: 'id' }]).cd();
      const jIdEl = page.getCell().querySelector('.j-id');
      expect(jIdEl != null)
        .withContext('expect found j-id')
        .toBe(true);
      expect(jIdEl?.textContent).toBe('id1');
      page.asyncEnd();
    }));
    it('allow invalid id', fakeAsync(() => {
      page = genModule(TestComponent, {
        template: `<st #st [data]="data" [columns]="columns">
            <ng-template st-row="invalid-id" let-item><div class="j-id">id{{item.id}}</div></ng-template>
          </st>`
      })!;
      page.updateColumn([{ title: '', index: 'id', render: 'id' }]);
      expect(page.getCell().querySelector('.j-id')).toBeNull();
      page.asyncEnd();
    }));
  });
  describe('[i18n]', () => {
    let curLang = 'en';
    beforeEach(() => {
      page = genModule(TestComponent, { i18n: true })!;
      refAssign();
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
      i18nSrv.use(curLang, {});
      expect(i18nSrv.fanyi).toHaveBeenCalled();
    }));
  });
});
