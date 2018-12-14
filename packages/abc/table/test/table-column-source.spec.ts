import { ACLService } from '@delon/acl';
import { AlainI18NService, AlainI18NServiceFake } from '@delon/theme';
import { deepGet } from '@delon/util';

import { STColumnSource } from '../table-column-source';
import { STRowSource } from '../table-row.directive';
import { STConfig } from '../table.config';
import { STColumn } from '../table.interfaces';

const i18nResult = 'zh';
class MockI18NServiceFake extends AlainI18NServiceFake {
  fanyi(key: string) {
    return i18nResult;
  }
}

describe('abc: table: column-souce', () => {
  let aclSrv: ACLService;
  let i18nSrv: AlainI18NService;
  let srv: STColumnSource;
  let rowSrv: STRowSource;
  let page: PageObject;

  function genModule(other: { acl?: boolean; i18n?: boolean; cog?: any }) {
    aclSrv = other.acl ? new ACLService() : null;
    i18nSrv = other.i18n ? new MockI18NServiceFake() : null;
    rowSrv = new STRowSource();
    srv = new STColumnSource(
      rowSrv,
      aclSrv,
      i18nSrv,
      other.cog || new STConfig(),
    );
    page = new PageObject();
  }

  it('should be throw error when is empty columns', () => {
    expect(() => {
      genModule({});
      srv.process(null);
    }).toThrow();
    expect(() => {
      genModule({});
      srv.process([]);
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
        page.expectValue(
          [{ title: '', index: ['prices', 'fix'] }],
          'prices.fix',
        );
      });
      it('support a.b', () => {
        page.expectValue([{ title: '', index: 'prices.fix' }], 'prices.fix');
      });
    });
    describe('[type]', () => {
      describe(`with no`, () => {
        it('should be working', () => {
          const res = srv.process([
            { title: '', type: 'no' },
          ]);
          expect(res[0].type).toBe('no');
          expect(res[0].noIndex).toBe(1);
        });
        it('should be start zero', () => {
          const res = srv.process([
            { title: '', type: 'no', noIndex: 0 },
          ]);
          expect(res[0].type).toBe('no');
          expect(res[0].noIndex).toBe(0);
        });
      });
      describe(`with checkbox`, () => {
        it('should be keep an empty list', () => {
          const res = srv.process([
            { title: '', index: 'id', type: 'checkbox' },
          ]);
          expect(res[0].selections).not.toBeNull();
          expect(res[0].selections.length).toBe(0);
        });
        it('should be throw error when mulit column', () => {
          expect(() => {
            srv.process([
              { title: '1', index: 'id', type: 'checkbox' },
              { title: '2', index: 'id', type: 'checkbox' },
            ]);
          }).toThrow();
        });
        it('should auto 50px width when without specified with value', () => {
          page.expectValue(
            [{ title: '', index: 'id', type: 'checkbox' }],
            '50px',
            'width',
          );
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
          page.expectValue(
            [{ title: '', index: 'id', type: 'checkbox', width: '65px' }],
            '65px',
            'width',
          );
        });
      });
      describe(`with radio`, () => {
        it('should be throw error when mulit column', () => {
          expect(() => {
            srv.process([
              { title: '1', index: 'id', type: 'radio' },
              { title: '2', index: 'id', type: 'radio' },
            ]);
          }).toThrow();
        });
        it('should auto 50px width when without specified with value', () => {
          page.expectValue(
            [{ title: '', index: 'id', type: 'radio' }],
            '50px',
            'width',
          );
        });
        it('should be specify width', () => {
          page.expectValue(
            [{ title: '', index: 'id', type: 'radio', width: '150px' }],
            '150px',
            'width',
          );
        });
      });
      describe(`with yn`, () => {
        it('#compatible', () => {
          const res = srv.process([
            {
              title: '',
              index: 'id',
              type: 'yn',
              ynTruth: true,
              ynYes: 'y',
              ynNo: 'n',
            },
          ])[0];
          expect(res.yn).not.toBeNull();
          expect(res.yn.truth).toBe(true);
          expect(res.yn.yes).toBe('y');
          expect(res.yn.no).toBe('n');
        });
        it('should be auto specified truth is [true]', () => {
          const res = srv.process([{ title: '', index: 'id', type: 'yn' }])[0];
          expect(res.yn).not.toBeNull();
          expect(res.yn.truth).toBe(true);
        });
        it('should be spcified yes value', () => {
          const res = srv.process([
            { title: '', index: 'id', type: 'yn', yn: { yes: 'Y' } },
          ])[0];
          expect(res.yn).not.toBeNull();
          expect(res.yn.yes).toBe('Y');
        });
        it('should be spcified no value', () => {
          const res = srv.process([
            { title: '', index: 'id', type: 'yn', yn: { no: 'N' } },
          ])[0];
          expect(res.yn).not.toBeNull();
          expect(res.yn.no).toBe('N');
        });
      });
      describe('invalid type', () => {
        it('when not specify click value', () => {
          page
            .expectValue([{ title: '', type: 'link' }], '', 'type')
            .expectValue(
              [{ title: '', type: 'link', click: () => true }],
              'link',
              'type',
            );
        });
        it('when not specify badge value', () => {
          page
            .expectValue([{ title: '', type: 'badge' }], '', 'type')
            .expectValue(
              [{ title: '', type: 'badge', badge: {} }],
              'badge',
              'type',
            );
        });
        it('when not specify tag value', () => {
          page
            .expectValue([{ title: '', type: 'tag' }], '', 'type')
            .expectValue([{ title: '', type: 'tag', tag: {} }], 'tag', 'type');
        });
      });
    });
    describe('[className]', () => {
      it('should be custom class name', () => {
        page.expectValue(
          [{ title: '', type: 'number', className: 'aa' }],
          'aa',
          'className',
        );
      });
      it('should be auto text-right when type is number', () => {
        page.expectValue(
          [{ title: '', type: 'number' }],
          'text-right',
          'className',
        );
      });
      it('should be auto text-right when type is currency', () => {
        page.expectValue(
          [{ title: '', type: 'currency' }],
          'text-right',
          'className',
        );
      });
      it('should be auto text-center when type is date', () => {
        page.expectValue(
          [{ title: '', type: 'date' }],
          'text-center',
          'className',
        );
      });
    });
    describe('[sort]', () => {
      describe('#compatible', () => {
        it('should be enabled', () => {
          expect(
            srv.process([{ title: '', sorter: () => true }])[0]._sort.enabled,
          ).toBe(true);
        });
      });
      it('should be disabled', () => {
        expect(srv.process([{ title: '' }])[0]._sort.enabled).toBe(false);
      });
      it('should be enabled when is true', () => {
        expect(srv.process([{ title: '', sort: true }])[0]._sort.enabled).toBe(
          true,
        );
      });
      it('should be enabled when is string', () => {
        const res = srv.process([{ title: '', sort: 'true' }])[0]._sort;
        expect(res.enabled).toBe(true);
        expect(res.key).toBe('true');
      });
      it('should be enabled when is object', () => {
        const res = srv.process([{ title: '', sort: { default: 'ascend' } }])[0]
          ._sort;
        expect(res.enabled).toBe(true);
        expect(res.default).toBe('ascend');
      });
      it('should be used index when key is null', () => {
        const res = srv.process([
          { title: '', index: 'aa', sort: { key: null } },
        ])[0]._sort;
        expect(res.enabled).toBe(true);
        expect(res.key).toBe('aa');
      });
    });
    describe('[filter]', () => {
      describe('#compatible', () => {
        it('should be enabled', () => {
          const res = srv.process([{ title: '', filters: [{ text: '' }] }])[0]
            .filter;
          expect(res).not.toBeNull();
        });
      });
      it('should be disabled when invalid menus', () => {
        const res = srv.process([{ title: '', filter: { menus: [] } }])[0]
          .filter;
        expect(res).toBeNull();
      });
      it('should be used index when key is null', () => {
        const res = srv.process([
          {
            title: '',
            index: 'aa',
            filter: { menus: [{ text: '' }], key: null },
          },
        ])[0];
        expect(res.filter.key).toBe('aa');
      });
      it('should be used index when key is undefined', () => {
        const res = srv.process([
          {
            title: '',
            index: 'aa',
            filter: { menus: [{ text: '' }] },
          },
        ])[0];
        expect(res.filter.key).toBe('aa');
      });
      it('should be key', () => {
        const res = srv.process([
          {
            title: '',
            index: 'aa',
            filter: { menus: [{ text: '' }], key: 'aaa' },
          },
        ])[0];
        expect(res.filter.key).toBe('aaa');
      });
      describe('#multiple', () => {
        it('should be default to true when is null', () => {
          const res = srv.process([
            { title: '', filter: { menus: [{ text: '' }] } },
          ])[0].filter;
          expect(res.multiple).toBe(true);
        });
        it('should be specify value', () => {
          const res = srv.process([
            { title: '', filter: { multiple: false, menus: [{ text: '' }] } },
          ])[0].filter;
          expect(res.multiple).toBe(false);
        });
      });
      describe('#confirmText', () => {
        it('should be default to 确认 when is null', () => {
          const res = srv.process([
            { title: '', filter: { menus: [{ text: '' }] } },
          ])[0].filter;
          expect(res.confirmText).toBe('确认');
        });
        it('should be specify value', () => {
          const res = srv.process([
            {
              title: '',
              filter: { confirmText: 'yes', menus: [{ text: '' }] },
            },
          ])[0].filter;
          expect(res.confirmText).toBe('yes');
        });
      });
      describe('#clearText', () => {
        it('should be default to 重置 when is null', () => {
          const res = srv.process([
            { title: '', filter: { menus: [{ text: '' }] } },
          ])[0].filter;
          expect(res.clearText).toBe('重置');
        });
        it('should be specify value', () => {
          const res = srv.process([
            {
              title: '',
              filter: { clearText: 'reset', menus: [{ text: '' }] },
            },
          ])[0].filter;
          expect(res.clearText).toBe('reset');
        });
      });
      describe('#icon', () => {
        it('should be default to [filter] when is null', () => {
          const res = srv.process([
            { title: '', filter: { menus: [{ text: '' }] } },
          ])[0].filter;
          expect(res.icon).toBe('filter');
        });
        it('should be specify value', () => {
          const res = srv.process([
            { title: '', filter: { icon: 'icona', menus: [{ text: '' }] } },
          ])[0].filter;
          expect(res.icon).toBe('icona');
        });
      });
      describe('#default', () => {
        it('when menus contain checked', () => {
          const res = srv.process([
            { title: '', filter: { menus: [{ text: '', checked: true }] } },
          ])[0].filter;
          expect(res.default).toBe(true);
        });
        it('when menus non-contain checked', () => {
          const res = srv.process([
            { title: '', filter: { menus: [{ text: '' }] } },
          ])[0].filter;
          expect(res.default).toBe(false);
        });
      });
    });
    describe('[buttons]', () => {
      it('should be pop is true when type of del', () => {
        page.expectBtnValue(
          [{ title: '', buttons: [{ text: '', type: 'del' }] }],
          true,
          'pop',
        );
      });
      it('should be popTitle default to 确认删除吗？', () => {
        page.expectBtnValue(
          [{ title: '', buttons: [{ text: '', type: 'del' }] }],
          '确认删除吗？',
          'popTitle',
        );
      });
      it('should be spcify popTitle value', () => {
        page.expectBtnValue(
          [{ title: '', buttons: [{ text: '', type: 'del', popTitle: 'aa' }] }],
          'aa',
          'popTitle',
        );
      });
      describe('#icon', () => {
        it('should be string', () => {
          page.expectBtnValue(
            [{ title: '', buttons: [{ text: '', icon: 'edit', type: 'del', popTitle: 'aa' }] }],
            'edit',
            'icon.type',
          );
        });
        it('should be object', () => {
          page.expectBtnValue(
            [{ title: '', buttons: [{ text: '', icon: { type: 'edit', theme: 'fill' }, type: 'del', popTitle: 'aa' }] }],
            'fill',
            'icon.theme',
          );
        });
      });
      describe('#iif', () => {
        it('should be running', () => {
          const res = srv.process([
            { title: '', buttons: [{ text: '' }] },
          ])[0].buttons[0];
          expect(res.iif(null, null, null)).toBe(true);
        });
        it('should be support condition', () => {
          const res = srv.process([
            { title: '', buttons: [{ text: '', iif: () => false }] },
          ])[0].buttons[0];
          expect(res.iif(null, null, null)).toBe(false);
        });
      });
      describe('#children', () => {
        it('should be', () => {
          const res = srv.process([
            {
              title: '',
              buttons: [{ text: '', children: [{ text: '', type: 'del' }] }],
            },
          ])[0].buttons[0];
          expect(res.children.length).toBe(1);
          expect(res.children[0].pop).toBe(true);
        });
        it('should be support condition', () => {
          const res = srv.process([
            {
              title: '',
              buttons: [
                { text: '', children: [{ text: '', iif: () => false }] },
              ],
            },
          ])[0].buttons[0];
          expect(res.children[0].iif(null, null, null)).toBe(false);
        });
      });
      describe('#type', () => {
        describe('with modal', () => {
          it('should specify modal parameter', () => {
            spyOn(console, 'warn');
            const res = srv.process([
              { title: '', buttons: [{ text: '', type: 'modal', modal: {} }] },
            ])[0].buttons[0];
            expect(console.warn).toHaveBeenCalled();
            expect(res.type).toBe('none');
          });
          it('should be apply default values', () => {
            const res = srv.process([
              { title: '', buttons: [{ text: '', type: 'modal', modal: { component: {} } }] },
            ])[0].buttons[0];
            expect(res.modal.paramsName).toBe('record');
          });
          describe('#compatible', () => {
            it('should be running', () => {
              const res = srv.process([
                { title: '', buttons: [{ text: '', type: 'modal', component: {} }] },
              ])[0].buttons[0];
              expect(res.modal.paramsName).toBe('record');
            });
          });
        });
        describe('with drawer', () => {
          it('should specify drawer parameter', () => {
            spyOn(console, 'warn');
            const res = srv.process([
              { title: '', buttons: [{ text: '', type: 'drawer', drawer: {} }] },
            ])[0].buttons[0];
            expect(console.warn).toHaveBeenCalled();
            expect(res.type).toBe('none');
          });
          it('should be apply default values', () => {
            const res = srv.process([
              { title: '', buttons: [{ text: '', type: 'drawer', drawer: { component: {} } }] },
            ])[0].buttons[0];
            expect(res.drawer.paramsName).toBe('record');
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
        srv.process([{ title: '', render: 'a' }])[0];
        expect(rowSrv.getRow).toHaveBeenCalled();
      });
      it('should be restore render title elementref', () => {
        expect(rowSrv.getTitle).not.toHaveBeenCalled();
        // tslint:disable-next-line:no-unused-expression
        srv.process([{ title: '', renderTitle: 'a' }])[0];
        expect(rowSrv.getTitle).toHaveBeenCalled();
      });
      it('#restoreAllRender', () => {
        expect(rowSrv.getRow).not.toHaveBeenCalled();
        expect(rowSrv.getTitle).not.toHaveBeenCalled();
        srv.restoreAllRender([{ title: '', render: 'a', renderTitle: 'b' }]);
        expect(rowSrv.getRow).toHaveBeenCalled();
        expect(rowSrv.getTitle).toHaveBeenCalled();
      });
    });
    describe('[fixed]', () => {
      it('should be fixed left column', () => {
        const res = srv.process([
          { title: '1', index: 'id', fixed: 'left', width: '100px' },
          { title: '2', index: 'id', fixed: 'left', width: '100px' },
          { title: '3', index: 'id', fixed: 'left', width: '100px' },
        ]);
        expect(res[0]._left).toBe('0px');
        expect(res[1]._left).toBe('100px');
        expect(res[2]._left).toBe('200px');
      });
      it('should be fixed right column', () => {
        const res = srv.process([
          { title: '1', index: 'id', fixed: 'right', width: '100px' },
          { title: '2', index: 'id', fixed: 'right', width: '100px' },
          { title: '3', index: 'id', fixed: 'right', width: '100px' },
        ]);
        expect(res[0]._right).toBe('200px');
        expect(res[1]._right).toBe('100px');
        expect(res[2]._right).toBe('0px');
      });
    });
  });

  describe('[acl]', () => {
    beforeEach(() => {
      genModule({ acl: true });
      aclSrv.set({ role: ['user'] });
    });

    it('in columns', () => {
      page
        .expectCount([{ title: '', index: 'id' }], 1)
        .expectCount([{ title: '', index: 'id', acl: 'admin' }], 0);
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
        srv.process([
          {
            title: '',
            index: 'id',
            filter: {
              menus: [{ text: '1' }],
            },
          },
        ])[0].filter.menus.length,
      ).toBe(1);
      expect(
        srv.process([
          {
            title: '',
            index: 'id',
            filter: {
              menus: [{ text: '1', acl: 'admin' }],
            },
          },
        ])[0].filter,
      ).toBe(null);
    });

    it('in buttons', () => {
      page
        .expectCount(
          [{ title: '', buttons: [{ text: '<p class="j-btn"></p>' }] }],
          1,
          'buttons',
        )
        .expectCount(
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
      spyOn(i18nSrv, 'fanyi').and.callFake(() => curLang);
    });

    it('in title', () => {
      srv.process([{ title: '', index: 'id' }]);
      expect(i18nSrv.fanyi).not.toHaveBeenCalled();
      srv.process([{ title: '', i18n: 'en', index: 'id' }]);
      expect(i18nSrv.fanyi).toHaveBeenCalled();
    });

    it('in buttons', () => {
      srv.process([{ title: '', index: 'id', buttons: [{ text: '' }] }]);
      expect(i18nSrv.fanyi).not.toHaveBeenCalled();
      srv.process([
        { title: '', index: 'id', buttons: [{ text: '', i18n: 'a' }] },
      ]);
      expect(i18nSrv.fanyi).toHaveBeenCalled();
    });
  });

  it('should be merge default config', () => {
    genModule({ cog: { size: 'lg'} });
    const res = srv.process([
      { title: '', buttons: [ { text: '', type: 'modal', modal: { component: {} } } ] },
    ]);
    expect(res[0].buttons[0].modal.paramsName).toBe('record');
  });

  class PageObject {
    expectValue(columns: STColumn[], value: any, path = 'indexKey'): this {
      const newColumns = srv.process(columns);
      expect(newColumns.length).toBeGreaterThan(0);
      expect(deepGet(newColumns[0], path)).toBe(value);
      return this;
    }
    expectBtnValue(
      columns: STColumn[],
      value: any,
      path = 'indexKey',
    ): this {
      const newColumns = srv.process(columns);
      expect(newColumns.length).toBeGreaterThan(0);
      expect(deepGet(newColumns[0].buttons[0], path)).toBe(value);
      return this;
    }
    expectCount(columns: STColumn[], count = 1, type = ''): this {
      const newColumns = srv.process(columns);
      if (type) {
        expect(newColumns.length).toBe(1);
        expect(newColumns[0][type].length).toBe(count);
      } else {
        expect(newColumns.length).toBe(count);
      }
      return this;
    }
  }
});
