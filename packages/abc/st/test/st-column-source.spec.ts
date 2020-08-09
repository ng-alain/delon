import { ACLService } from '@delon/acl';
import { AlainI18NService, AlainI18NServiceFake } from '@delon/theme';
import { deepGet } from '@delon/util';
import { STColumnSource } from '../st-column-source';
import { STRowSource } from '../st-row.directive';
import { STWidgetRegistry } from '../st-widget';
import { ST_DEFULAT_CONFIG } from '../st.config';
import { STColumn, STColumnButtonPop, STIcon, STWidthMode } from '../st.interfaces';
import { _STColumn } from '../st.types';

const i18nResult = 'zh';
class MockI18NServiceFake extends AlainI18NServiceFake {
  fanyi(_key: string): string {
    return i18nResult;
  }
}

class MockDomSanitizer {
  bypassSecurityTrustHtml(text: string): string {
    return text;
  }
}

const widthMode: STWidthMode = {
  type: 'default',
  strictBehavior: 'truncate',
};

describe('st: column-source', () => {
  let aclSrv: ACLService | null;
  let i18nSrv: AlainI18NService | null;
  let srv: STColumnSource;
  let rowSrv: STRowSource;
  let stWidgetRegistry: STWidgetRegistry;
  let page: PageObject;

  function genModule(other: { acl?: boolean; i18n?: boolean; cog?: any }): void {
    aclSrv = other.acl ? new ACLService({ merge: (_: any, def: any) => def } as any) : null;
    i18nSrv = other.i18n ? new MockI18NServiceFake() : null;
    rowSrv = new STRowSource();
    stWidgetRegistry = new STWidgetRegistry();
    srv = new STColumnSource(new MockDomSanitizer() as any, rowSrv, aclSrv!, i18nSrv!, stWidgetRegistry);
    srv.setCog(other.cog || ST_DEFULAT_CONFIG);
    page = new PageObject();
  }

  it('should be throw error when is empty columns', () => {
    expect(() => {
      genModule({});
      srv.process(null!, null!);
    }).toThrow();
    expect(() => {
      genModule({});
      srv.process([], {});
    }).toThrow();
  });

  describe('[columns property]', () => {
    beforeEach(() => genModule({}));
    describe('[index]', () => {
      it('support undefined', () => {
        page.expectValue([{ title: '' }], undefined);
      });
      it('support null', () => {
        page.expectValue([{ title: '', index: null }], undefined);
      });
      it('support string', () => {
        page.expectValue([{ title: '', index: 'id' }], 'id');
      });
      it('support array', () => {
        page.expectValue([{ title: '', index: ['prices', 'fix'] }], 'prices.fix');
      });
      it('support a.b', () => {
        page.expectValue([{ title: '', index: 'prices.fix' }], 'prices.fix');
      });
    });
    describe('[type]', () => {
      describe(`with no`, () => {
        it('should be working', () => {
          const res = srv.process([{ title: '', type: 'no' }], widthMode).columns;
          expect(res[0].type).toBe('no');
          expect(res[0].noIndex).toBe(1);
        });
        it('should be start zero', () => {
          const res = srv.process([{ title: '', type: 'no', noIndex: 0 }], widthMode).columns;
          expect(res[0].type).toBe('no');
          expect(res[0].noIndex).toBe(0);
        });
        it('should be custom by funciton', () => {
          const res = srv.process([{ title: '', type: 'no', noIndex: () => 10 }], widthMode).columns;
          expect(res[0].type).toBe('no');
          expect(typeof res[0].noIndex).toBe('function');
        });
      });
      describe(`with checkbox`, () => {
        it('should be keep an empty list', () => {
          const res = srv.process([{ title: '', index: 'id', type: 'checkbox' }], widthMode).columns;
          expect(res[0].selections).not.toBeNull();
          expect(res[0].selections!.length).toBe(0);
        });
        it('should be throw error when mulit column', () => {
          expect(() => {
            srv.process(
              [
                { title: '1', index: 'id', type: 'checkbox' },
                { title: '2', index: 'id', type: 'checkbox' },
              ],
              widthMode,
            );
          }).toThrow();
        });
        it('should auto 50px width when without specified with value', () => {
          page.expectValue([{ title: '', index: 'id', type: 'checkbox' }], '50px', 'width');
        });
        it('should auto 62px width when specifyied selections and without specified with value', () => {
          page.expectValue(
            [
              {
                title: '',
                index: 'id',
                type: 'checkbox',
                selections: [{ text: '', select: () => true }],
              },
            ],
            '62px',
            'width',
          );
        });
        it('should be width', () => {
          page.expectValue([{ title: '', index: 'id', type: 'checkbox', width: '65px' }], '65px', 'width');
        });
      });
      describe(`with radio`, () => {
        it('should be throw error when mulit column', () => {
          expect(() => {
            srv.process(
              [
                { title: '1', index: 'id', type: 'radio' },
                { title: '2', index: 'id', type: 'radio' },
              ],
              widthMode,
            );
          }).toThrow();
        });
        it('should auto 50px width when without specified with value', () => {
          page.expectValue([{ title: '', index: 'id', type: 'radio' }], '50px', 'width');
        });
        it('should be specify width', () => {
          page.expectValue([{ title: '', index: 'id', type: 'radio', width: '150px' }], '150px', 'width');
        });
      });
      describe(`with yn`, () => {
        it('should be auto specified truth is [true]', () => {
          const res = srv.process([{ title: '', index: 'id', type: 'yn' }], widthMode).columns[0];
          expect(res.yn).not.toBeNull();
          expect(res.yn!.truth).toBe(true);
        });
        it('should be spcified yes value', () => {
          const res = srv.process([{ title: '', index: 'id', type: 'yn', yn: { yes: 'Y' } }], widthMode).columns[0];
          expect(res.yn).not.toBeNull();
          expect(res.yn!.yes).toBe('Y');
        });
        it('should be spcified no value', () => {
          const res = srv.process([{ title: '', index: 'id', type: 'yn', yn: { no: 'N' } }], widthMode).columns[0];
          expect(res.yn).not.toBeNull();
          expect(res.yn!.no).toBe('N');
        });
      });
      describe(`with widget`, () => {
        it('should be working', () => {
          spyOn(stWidgetRegistry, 'has').and.returnValue(true);
          const res = srv.process([{ title: '', index: 'id', type: 'widget', widget: { type: 'test' } }], widthMode).columns[0];
          expect(res.type).toBe('widget');
        });
        it('should be remove type when widget not specified', () => {
          const res = srv.process([{ title: '', index: 'id', type: 'widget' }], widthMode).columns[0];
          expect(res.type).toBeUndefined();
        });
        it('should be remove type when widget is not found', () => {
          spyOn(stWidgetRegistry, 'has').and.returnValue(false);
          const res = srv.process([{ title: '', index: 'id', type: 'widget', widget: { type: 'test' } }], widthMode).columns[0];
          expect(res.type).toBeUndefined();
        });
      });
      describe('invalid type', () => {
        it('when not specify click value', () => {
          page
            .expectValue([{ title: '', type: 'link' }], '', 'type')
            .expectValue([{ title: '', type: 'link', click: () => true }], 'link', 'type');
        });
        it('when not specify badge value', () => {
          page
            .expectValue([{ title: '', type: 'badge' }], '', 'type')
            .expectValue([{ title: '', type: 'badge', badge: {} }], 'badge', 'type');
        });
        it('when not specify tag value', () => {
          page.expectValue([{ title: '', type: 'tag' }], '', 'type').expectValue([{ title: '', type: 'tag', tag: {} }], 'tag', 'type');
        });
      });
    });
    describe('[width]', () => {
      it('should be support number type', () => {
        page.expectValue([{ title: '', index: 'id', width: 65 }], '65px', 'width');
      });
      it('should be support string type', () => {
        page.expectValue([{ title: '', index: 'id', width: '65px' }], '65px', 'width');
      });
    });
    describe('[className]', () => {
      it('should be custom class name', () => {
        page.expectValue([{ title: '', type: 'number', className: 'aa' }], 'aa', 'className');
      });
      it('should be auto text-right when type is number', () => {
        page.expectValue([{ title: '', type: 'number' }], 'text-right', 'className');
      });
      it('should be auto text-right when type is currency', () => {
        page.expectValue([{ title: '', type: 'currency' }], 'text-right', 'className');
      });
      it('should be auto text-center when type is date', () => {
        page.expectValue([{ title: '', type: 'date' }], 'text-center', 'className');
      });
    });
    describe('[iif]', () => {
      it('when return true', () => {
        const res = srv.process([{ title: '', iif: () => true }], widthMode).columns;
        expect(res.length).toBe(1);
      });
      it('when return false', () => {
        const res = srv.process([{ title: '', iif: () => false }], widthMode).columns;
        expect(res.length).toBe(0);
      });
    });
    describe('[sort]', () => {
      it('should be disabled', () => {
        expect(srv.process([{ title: '' }], widthMode).columns[0]._sort!.enabled).toBe(false);
      });
      it('should be enabled when is true', () => {
        expect(srv.process([{ title: '', sort: true }], widthMode).columns[0]._sort!.enabled).toBe(true);
      });
      it('should be enabled when is string', () => {
        const res = srv.process([{ title: '', sort: 'true' }], widthMode).columns[0]._sort!;
        expect(res.enabled).toBe(true);
        expect(res.key).toBe('true');
      });
      it('should be enabled when is object', () => {
        const res = srv.process([{ title: '', sort: { default: 'ascend' } }], widthMode).columns[0]._sort!;
        expect(res.enabled).toBe(true);
        expect(res.default).toBe('ascend');
      });
      it('should be used index when key is null', () => {
        const res = srv.process([{ title: '', index: 'aa', sort: { key: null } }], widthMode).columns[0]._sort!;
        expect(res.enabled).toBe(true);
        expect(res.key).toBe('aa');
      });
    });
    describe('[filter]', () => {
      it('should be disabled when invalid menus', () => {
        const res = srv.process([{ title: '', filter: { menus: [] } }], widthMode).columns[0].filter;
        expect(res).toBeNull();
      });
      it('should be used index when key is null', () => {
        const res = srv.process(
          [
            {
              title: '',
              index: 'aa',
              filter: { menus: [{ text: '' }], key: null },
            },
          ],
          widthMode,
        ).columns[0];
        expect(res.filter!.key).toBe('aa');
      });
      it('should be used index when key is undefined', () => {
        const res = srv.process(
          [
            {
              title: '',
              index: 'aa',
              filter: { menus: [{ text: '' }] },
            },
          ],
          widthMode,
        ).columns[0];
        expect(res.filter!.key).toBe('aa');
      });
      it('should be key', () => {
        const res = srv.process(
          [
            {
              title: '',
              index: 'aa',
              filter: { menus: [{ text: '' }], key: 'aaa' },
            },
          ],
          widthMode,
        ).columns[0];
        expect(res.filter!.key).toBe('aaa');
      });
      describe('#multiple', () => {
        it('should be default to true when is null', () => {
          const res = srv.process([{ title: '', filter: { menus: [{ text: '' }] } }], widthMode).columns[0].filter;
          expect(res!.multiple).toBe(true);
        });
        it('should be specify value', () => {
          const res = srv.process([{ title: '', filter: { multiple: false, menus: [{ text: '' }] } }], widthMode).columns[0].filter;
          expect(res!.multiple).toBe(false);
        });
      });
      describe('#confirmText', () => {
        it('should be i18n when is null', () => {
          const res = srv.process([{ title: '', filter: { menus: [{ text: '' }] } }], widthMode).columns[0].filter;
          expect(res!.confirmText).toBe(undefined);
        });
        it('should be specify value', () => {
          const res = srv.process(
            [
              {
                title: '',
                filter: { confirmText: 'yes', menus: [{ text: '' }] },
              },
            ],
            widthMode,
          ).columns[0].filter;
          expect(res!.confirmText).toBe('yes');
        });
      });
      describe('#clearText', () => {
        it('should be i18n when is null', () => {
          const res = srv.process([{ title: '', filter: { menus: [{ text: '' }] } }], widthMode).columns[0].filter;
          expect(res!.clearText).toBe(undefined);
        });
        it('should be specify value', () => {
          const res = srv.process(
            [
              {
                title: '',
                filter: { clearText: 'reset', menus: [{ text: '' }] },
              },
            ],
            widthMode,
          ).columns[0].filter;
          expect(res!.clearText).toBe('reset');
        });
      });
      describe('#icon', () => {
        it('should be default to [filter] when is null', () => {
          const res = srv.process([{ title: '', filter: { menus: [{ text: '' }] } }], widthMode).columns[0].filter!.icon as STIcon;
          expect(res.type).toBe('filter');
        });
        it('should be specify value', () => {
          const res = srv.process([{ title: '', filter: { icon: 'icona', menus: [{ text: '' }] } }], widthMode).columns[0].filter!
            .icon as STIcon;
          expect(res.type).toBe('icona');
        });
        it('should be specify STIcon value', () => {
          const res = srv.process([{ title: '', filter: { icon: { type: 'aa' }, menus: [{ text: '' }] } }], widthMode).columns[0].filter!
            .icon as STIcon;
          expect(res.type).toBe('aa');
        });
      });
      describe('#default', () => {
        it('when menus contain checked', () => {
          const res = srv.process([{ title: '', filter: { menus: [{ text: '', checked: true }] } }], widthMode).columns[0].filter;
          expect(res!.default).toBe(true);
        });
        it('when menus non-contain checked', () => {
          const res = srv.process([{ title: '', filter: { menus: [{ text: '' }] } }], widthMode).columns[0].filter;
          expect(res!.default).toBe(false);
        });
      });
      describe('#type', () => {
        describe('with keyword', () => {
          it('should be ingore specify menus values', () => {
            const res = srv.process([{ title: '', filter: { type: 'keyword' } }], widthMode).columns[0].filter;
            expect(res!.menus!.length).toBe(1);
          });
          it('should be specify menus values', () => {
            const res = srv.process([{ title: '', filter: { type: 'keyword', menus: [{ text: 'a' }] } }], widthMode).columns[0].filter;
            expect(res!.menus!.length).toBe(1);
            expect(res!.menus![0].text).toBe('a');
          });
        });
      });
    });
    describe('[buttons]', () => {
      describe('#pop', () => {
        it('should be pop is true when type of del', () => {
          const newColumns = srv.process([{ title: '', buttons: [{ text: '', type: 'del' }] }], widthMode).columns;
          const pop = newColumns[0].buttons![0].pop as STColumnButtonPop;
          expect(pop != null).toBe(true);
          expect(pop.condition!(null!)).toBe(false);
        });
        it('should be pop is false when type is null or false', () => {
          let newColumns = srv.process([{ title: '', buttons: [{ text: '' }] }], widthMode).columns;
          expect(newColumns[0].buttons![0].pop).toBe(false);
          newColumns = srv.process([{ title: '', buttons: [{ text: '', pop: false }] }], widthMode).columns;
          expect(newColumns[0].buttons![0].pop).toBe(false);
        });
        it('should be pop.title default to 确认删除吗？', () => {
          page.expectBtnValue([{ title: '', buttons: [{ text: '', type: 'del' }] }], '确认删除吗？', 'pop.title');
        });
        it('should be specify pop is string type', () => {
          page.expectBtnValue([{ title: '', buttons: [{ text: '', type: 'del', pop: 'aaa' }] }], 'aaa', 'pop.title');
        });
        it('should be specify pop is object type', () => {
          page.expectBtnValue([{ title: '', buttons: [{ text: '', type: 'del', pop: { title: 'aaa' } }] }], 'aaa', 'pop.title');
        });
        it('should be specify condition and return a true value', () => {
          const newColumns = srv.process([{ title: '', buttons: [{ text: '', type: 'del', pop: { condition: () => true } }] }], widthMode)
            .columns;
          const pop = newColumns[0].buttons![0].pop as STColumnButtonPop;
          expect(pop != null).toBe(true);
          expect(pop.condition!(null!)).toBe(true);
        });
      });
      describe('#icon', () => {
        it('should be string', () => {
          page.expectBtnValue([{ title: '', buttons: [{ text: '', icon: 'edit', type: 'del' }] }], 'edit', 'icon.type');
        });
        it('should be object', () => {
          page.expectBtnValue(
            [
              {
                title: '',
                buttons: [{ text: '', icon: { type: 'edit', theme: 'fill' }, type: 'del' }],
              },
            ],
            'fill',
            'icon.theme',
          );
        });
      });
      describe('#iif', () => {
        it('should be running', () => {
          const res = srv.process([{ title: '', buttons: [{ text: '' }] }], widthMode).columns[0].buttons![0];
          expect(res.iif!(null!, null!, null!)).toBe(true);
        });
        it('should be support condition', () => {
          const res = srv.process([{ title: '', buttons: [{ text: '', iif: () => false }] }], widthMode).columns[0].buttons![0];
          expect(res.iif!(null!, null!, null!)).toBe(false);
        });
        it('should be support children', () => {
          const res = srv.process([{ title: '', buttons: [{ text: '', children: [{ text: '', iif: () => false }] }] }], widthMode)
            .columns[0].buttons![0].children![0];
          expect(res.iif!(null!, null!, null!)).toBe(false);
        });
      });
      describe('#children', () => {
        it('should be', () => {
          const res = srv.process(
            [
              {
                title: '',
                buttons: [{ text: '', children: [{ text: '', type: 'del' }] }],
              },
            ],
            widthMode,
          ).columns[0].buttons![0];
          expect(res.children!.length).toBe(1);
          expect(res.children![0].pop != null).toBe(true);
        });
        it('should be support condition', () => {
          const res = srv.process(
            [
              {
                title: '',
                buttons: [{ text: '', children: [{ text: '', iif: () => false }] }],
              },
            ],
            widthMode,
          ).columns[0].buttons![0];
          expect(res.children![0].iif!(null!, null!, null!)).toBe(false);
        });
      });
      describe('#type', () => {
        describe('with modal', () => {
          it('should specify modal parameter', () => {
            spyOn(console, 'warn');
            const res = srv.process([{ title: '', buttons: [{ text: '', type: 'modal', modal: {} }] }], widthMode).columns[0].buttons![0];
            expect(console.warn).toHaveBeenCalled();
            expect(res.type).toBe('none');
          });
          it('should be apply default values', () => {
            const res = srv.process([{ title: '', buttons: [{ text: '', type: 'modal', modal: { component: {} } }] }], widthMode).columns[0]
              .buttons![0];
            expect(res.modal!.paramsName).toBe('record');
          });
        });
        describe('with drawer', () => {
          it('should specify drawer parameter', () => {
            spyOn(console, 'warn');
            const res = srv.process([{ title: '', buttons: [{ text: '', type: 'drawer', drawer: {} }] }], widthMode).columns[0].buttons![0];
            expect(console.warn).toHaveBeenCalled();
            expect(res.type).toBe('none');
          });
          it('should be apply default values', () => {
            const res = srv.process([{ title: '', buttons: [{ text: '', type: 'drawer', drawer: { component: {} } }] }], widthMode)
              .columns[0].buttons![0];
            expect(res.drawer!.paramsName).toBe('record');
          });
        });
      });
    });
    describe('[render]', () => {
      beforeEach(() => {
        spyOn(rowSrv, 'getTitle');
        spyOn(rowSrv, 'getRow');
      });
      it('should be restore render row elementref', () => {
        expect(rowSrv.getRow).not.toHaveBeenCalled();
        // tslint:disable-next-line:no-unused-expression
        srv.process([{ title: '', render: 'a' }], widthMode).columns[0];
        expect(rowSrv.getRow).toHaveBeenCalled();
      });
      it('should be restore render title elementref', () => {
        expect(rowSrv.getTitle).not.toHaveBeenCalled();
        // tslint:disable-next-line:no-unused-expression
        srv.process([{ title: '', renderTitle: 'a' }], widthMode).columns[0];
        expect(rowSrv.getTitle).toHaveBeenCalled();
      });
      it('#restoreAllRender', () => {
        expect(rowSrv.getRow).not.toHaveBeenCalled();
        expect(rowSrv.getTitle).not.toHaveBeenCalled();
        srv.restoreAllRender([{ title: '', render: 'a', renderTitle: 'b' }] as _STColumn[]);
        expect(rowSrv.getRow).toHaveBeenCalled();
        expect(rowSrv.getTitle).toHaveBeenCalled();
      });
    });
    describe('[fixed]', () => {
      it('should be fixed left column', () => {
        const res = srv.process(
          [
            { title: '1', index: 'id', fixed: 'left', width: '100px' },
            { title: '2', index: 'id', fixed: 'left', width: '100px' },
            { title: '3', index: 'id', fixed: 'left', width: '100px' },
          ],
          widthMode,
        ).columns;
        expect(res[0]._left).toBe('0px');
        expect(res[1]._left).toBe('100px');
        expect(res[2]._left).toBe('200px');
      });
      it('should be fixed right column', () => {
        const res = srv.process(
          [
            { title: '1', index: 'id', fixed: 'right', width: '100px' },
            { title: '2', index: 'id', fixed: 'right', width: '100px' },
            { title: '3', index: 'id', fixed: 'right', width: '100px' },
          ],
          widthMode,
        ).columns;
        expect(res[0]._right).toBe('200px');
        expect(res[1]._right).toBe('100px');
        expect(res[2]._right).toBe('0px');
      });
    });
    describe('[grouping-columns]', () => {
      it('should be working', () => {
        const res = srv.process([{ title: '1', index: 'id', children: [{ index: 'id' }] }], widthMode);
        expect(res.headers.length).toBe(2);
      });
      it('should be ingored grouping columns when children when is empty', () => {
        const res = srv.process([{ title: '1', index: 'id', children: [] }], widthMode);
        expect(res.headers.length).toBe(1);
      });
    });
  });

  describe('[acl]', () => {
    beforeEach(() => {
      genModule({ acl: true });
      aclSrv!.set({ role: ['user'] });
    });

    it('in columns', () => {
      page.expectCount([{ title: '', index: 'id' }], 1).expectCount([{ title: '', index: 'id', acl: 'admin' }], 0);
    });

    it('in selections', () => {
      page
        .expectCount(
          [
            {
              title: '',
              index: 'id',
              selections: [{ text: '1', select: () => {} }],
            },
          ],
          1,
          'selections',
        )
        .expectCount(
          [
            {
              title: '',
              index: 'id',
              selections: [{ text: '1', select: () => {}, acl: 'admin' }],
            },
          ],
          0,
          'selections',
        );
    });

    it('in filter', () => {
      expect(
        srv.process(
          [
            {
              title: '',
              index: 'id',
              filter: {
                menus: [{ text: '1' }],
              },
            },
          ],
          widthMode,
        ).columns[0].filter!.menus!.length,
      ).toBe(1);
      expect(
        srv.process(
          [
            {
              title: '',
              index: 'id',
              filter: {
                menus: [{ text: '1', acl: 'admin' }],
              },
            },
          ],
          widthMode,
        ).columns[0]!.filter as any,
      ).toBe(null);
    });

    it('in buttons', () => {
      page.expectCount([{ title: '', buttons: [{ text: '<p class="j-btn"></p>' }] }], 1, 'buttons').expectCount(
        [
          {
            title: '',
            buttons: [{ text: '<p class="j-btn"></p>', acl: 'admin' }],
          },
        ],
        0,
        'buttons',
      );
    });
  });

  describe('[i18n]', () => {
    const curLang = 'en';
    beforeEach(() => {
      genModule({ i18n: true });
      spyOn(i18nSrv!, 'fanyi').and.callFake(() => curLang);
    });

    it('in title', () => {
      srv.process([{ title: '', index: 'id' }], widthMode);
      expect(i18nSrv!.fanyi).not.toHaveBeenCalled();
    });

    it('in buttons', () => {
      srv.process([{ title: '', index: 'id', buttons: [{ text: '' }] }], widthMode);
      expect(i18nSrv!.fanyi).not.toHaveBeenCalled();
      srv.process([{ title: '', index: 'id', buttons: [{ text: '', i18n: 'a' }] }], widthMode);
      expect(i18nSrv!.fanyi).toHaveBeenCalled();
    });
  });

  it('should be merge default config', () => {
    genModule({ cog: { size: 'lg' } });
    const res = srv.process([{ title: '', buttons: [{ text: '', type: 'modal', modal: { component: {} } }] }], widthMode).columns;
    expect(res[0].buttons![0].modal!.paramsName).toBe('record');
  });

  class PageObject {
    expectValue(columns: STColumn[], value: any, path: string = 'indexKey'): this {
      const newColumns = srv.process(columns, widthMode).columns;
      expect(newColumns.length).toBeGreaterThan(0);
      expect(deepGet(newColumns[0], path)).toBe(value);
      return this;
    }
    expectBtnValue(columns: STColumn[], value: any, path: string = 'indexKey'): this {
      const newColumns = srv.process(columns, widthMode).columns;
      expect(newColumns.length).toBeGreaterThan(0);
      expect(deepGet(newColumns[0].buttons![0], path)).toBe(value);
      return this;
    }
    expectCount(columns: STColumn[], count: number = 1, type: string = ''): this {
      const newColumns = srv.process(columns, widthMode).columns;
      if (type) {
        expect(newColumns.length).toBe(1);
        expect((newColumns[0] as { [key: string]: any })[type].length).toBe(count);
      } else {
        expect(newColumns.length).toBe(count);
      }
      return this;
    }
  }
});
