/* eslint-disable @typescript-eslint/no-explicit-any */
import { TestBed } from '@angular/core/testing';

import { NzTreeBaseService, NzTreeNode } from 'ng-zorro-antd/core/tree';

import { AlainConfig, ALAIN_CONFIG } from '@delon/util/config';
import { deepCopy } from '@delon/util/other';

import { ArrayService } from './array.service';

const MOCK_ARR: any[] = [
  { id: 1, pid: 0, name: 'name1', other: 'value1', halfChecked: true },
  { id: 2, pid: 0, name: 'name2', other: 'value2', disabled: true },
  { id: 3, pid: 1, name: 'name3', other: 'value3', expanded: true },
  { id: 4, pid: 1, name: 'name4', other: 'value4', selected: true },
  { id: 5, pid: 2, name: 'name5', other: 'value5' },
  { id: 6, pid: 0, name: 'name6', other: 'value6', checked: true }
];
const MOCK_TREE: any[] = [
  {
    id: 1,
    name: 'asdf1',
    children: [
      { id: 2, name: 'asdf2' },
      { id: 3, name: 'asdf2' }
    ]
  },
  { id: 4, name: 'asdf4' }
];
describe('utils: array', () => {
  let srv: ArrayService;
  let page: PageTreeNode;

  describe('#treeToArr', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({});
      srv = TestBed.inject<ArrayService>(ArrayService);
    });
    it('should be tree to array', () => {
      const res = srv.treeToArr([
        {
          id: 1,
          children: [{ id: 2 }, { id: 3 }]
        },
        { id: 3 }
      ]);
      expect(res.length).toBe(4);
    });
    it('should be specified map names', () => {
      const res = srv.treeToArr<{ id: number; d?: string; p?: string }>(
        [
          {
            id: 1
          }
        ],
        { deepMapName: 'd', parentMapName: 'p' }
      );
      expect(res[0].d).not.toBeUndefined();
      expect(res[0].p).not.toBeUndefined();
    });
    it(`can't clear children`, () => {
      const res = srv.treeToArr(
        [
          {
            id: 1,
            children: [{ id: 2 }]
          }
        ],
        { clearChildren: false }
      );
      expect(res[0].children).not.toBeUndefined();
    });
    it('should be callback', () => {
      const options = {
        cb: jasmine.createSpy()
      };
      srv.treeToArr([{ id: 1 }], options);
      expect(options.cb).toHaveBeenCalled();
    });
  });

  describe('#arrToTree', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({});
      srv = TestBed.inject<ArrayService>(ArrayService);
    });
    it('should be empty array to tree', () => {
      expect(srv.arrToTree([]).length).toBe(0);
    });
    it('should be array to tree', () => {
      const res = srv.arrToTree([
        { id: 2, parent_id: 1, title: 'c1' },
        { id: 1, parent_id: 0, title: 't1' }
      ]);
      page = new PageTreeNode(res);
      page.check('0', 'id', 1).check('0/0', 'id', 2);
    });
    it('should be callback', () => {
      const options = {
        cb: jasmine.createSpy()
      };
      srv.arrToTree(deepCopy(MOCK_ARR), options);
      expect(options.cb).toHaveBeenCalled();
    });
    it('should be support parent_id is string', () => {
      const res = srv.arrToTree([
        { id: 2, parent_id: '1', title: 'c1' },
        { id: 1, parent_id: '', title: 't1' }
      ]);
      page = new PageTreeNode(res);
      page.check('0', 'id', 1).check('0/0', 'id', 2);
    });
    it('should be support greater than 0 parent_id', () => {
      const res = srv.arrToTree([
        { id: 2, parent_id: 4, title: 'c1' },
        { id: 4, parent_id: 3, title: 't1' }
      ]);
      page = new PageTreeNode(res);
      page.check('0', 'id', 4).check('0/0', 'id', 2);
    });
    it('should be specify root parent_id value', () => {
      const res = srv.arrToTree(
        [
          { id: 2, parent_id: 'a', title: 'c1' },
          { id: 4, parent_id: 2, title: 't1' }
        ],
        { rootParentIdValue: 'a' }
      );
      page = new PageTreeNode(res);
      page.check('0', 'id', 2).check('0/0', 'id', 4);
    });
    it('should be null root parent_id value', () => {
      const res = srv.arrToTree([
        { id: 2, parent_id: 4, title: 'c1' },
        { id: 4, parent_id: null, title: 't1' }
      ]);
      page = new PageTreeNode(res);
      page.check('0', 'id', 4).check('0/0', 'id', 2);
    });
  });

  describe('[NzTreeNode]', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({});
      srv = TestBed.inject<ArrayService>(ArrayService);
      page = new PageTreeNode();
    });

    describe('#arrToTreeNode', () => {
      it('should be array to NzTreeNode', () => {
        const res = srv.arrToTreeNode([
          { id: 1, parent_id: 0, title: 't1' },
          { id: 2, parent_id: 1, title: 'c1' }
        ]);
        page = new PageTreeNode(res);
        page.check('0', 'key', 1).check('0/0', 'key', 2);
      });
      it('should be specified map names', () => {
        page.check('0', 'key', 1).check('0/0', 'key', 3);
      });
      it('should be callback', () => {
        const options = {
          pidMapName: 'pid',
          titleMapName: 'name',
          cb: jasmine.createSpy()
        };
        srv.arrToTreeNode(deepCopy(MOCK_ARR), options);
        expect(options.cb).toHaveBeenCalled();
      });
      it('should be auto setting isLeaf value', () => {
        page.check('0', 'isLeaf', false).check('2', 'isLeaf', true);
      });
      for (const key of ['isLeaf', 'checked', 'selected', 'expanded', 'disabled']) {
        it(`should map to ${key}`, () => {
          const options = {
            [`${key}MapName`]: key
          };
          const res = srv.arrToTreeNode(
            [{ id: 1, parent_id: 0, title: 't1', [key]: true, isLeaf: key !== 'expanded' }],
            options
          );
          page = new PageTreeNode(res);
          page.check('0', key.startsWith('is') ? key : `is${key.slice(0, 1).toUpperCase() + key.slice(1)}`, true);
        });
      }
    });

    describe('#getKeysByTreeNode', () => {
      it('should be get keys', () => {
        expect(srv.getKeysByTreeNode(page.data).join(',')).toBe(
          MOCK_ARR.filter(w => w.checked)
            .map(i => i.id)
            .join(',')
        );
      });
      it('should be include half checked', () => {
        const treeService = new NzTreeBaseService();
        page.data.forEach((i: any) => {
          spyOnProperty(i, 'treeService', 'get').and.returnValue(treeService);
        });
        page.data[0].isHalfChecked = true;
        expect(srv.getKeysByTreeNode(page.data, { includeHalfChecked: true }).join(',')).toBe(
          MOCK_ARR.filter(w => w.checked || w.halfChecked)
            .map(i => i.id)
            .join(',')
        );
        page.data[0].isHalfChecked = false;
        expect(srv.getKeysByTreeNode(page.data, { includeHalfChecked: false }).join(',')).toBe(
          MOCK_ARR.filter(w => w.checked)
            .map(i => i.id)
            .join(',')
        );
      });
      it('should be specified name', () => {
        expect(srv.getKeysByTreeNode(page.data, { keyMapName: 'title' }).join(',')).toBe(
          MOCK_ARR.filter(w => w.checked)
            .map(i => i.name)
            .join(',')
        );
      });
      it('should be callback', () => {
        const options = {
          cb: jasmine.createSpy()
        };
        srv.getKeysByTreeNode(page.data, options);
        expect(options.cb).toHaveBeenCalled();
      });
    });
  });

  describe('[config]', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          {
            provide: ALAIN_CONFIG,
            useValue: {
              utilArray: {
                idMapName: 'ID'
              }
            } as AlainConfig
          }
        ]
      });
      srv = TestBed.inject<ArrayService>(ArrayService);
    });
    it('should be tree to array', () => {
      const id = 100;
      const res = srv.arrToTree([
        {
          ID: id
        }
      ]);
      expect(res[0].ID).toBe(id);
    });
  });

  describe('[findTree]', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({});
      srv = TestBed.inject<ArrayService>(ArrayService);
    });
    it('should be working', () => {
      expect(srv.findTree(MOCK_TREE, item => item.id === 2).name).toBe('asdf2');
    });
    it('should be return undefined when predicate is false', () => {
      expect(srv.findTree(MOCK_TREE, item => item.id === 'INVALID')).toBeUndefined();
    });
  });

  describe('[flat]', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({});
      srv = TestBed.inject<ArrayService>(ArrayService);
    });
    it('should be working', () => {
      expect(srv.flat([1, [2, 3, [4, 5, [6]]]]).length).toBe(6);
    });
    it('should be depth 0', () => {
      expect(srv.flat([1, [2, 3, [4, 5, [6]]]], 0).length).toBe(2);
    });
    it('should be depth 1', () => {
      expect(srv.flat([1, [2, 3, [4, 5, [6]]]], 1).length).toBe(4);
    });
    it('should be return original when is not array', () => {
      expect(srv.flat(null as any)).toBeNull();
    });
  });

  describe('[groupBy]', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({});
      srv = TestBed.inject<ArrayService>(ArrayService);
    });
    it('should be working', () => {
      expect(JSON.stringify(srv.groupBy([6.1, 4.2, 6.3], Math.floor))).toBe(`{"4":[4.2],"6":[6.1,6.3]}`);
    });
    it('should be return empty when is not array', () => {
      expect(JSON.stringify(srv.groupBy(null as any, null as any))).toBe(`{}`);
    });
  });

  describe('[uniq]', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({});
      srv = TestBed.inject<ArrayService>(ArrayService);
    });
    it('should be working', () => {
      expect(JSON.stringify(srv.uniq([1, 2, 2, 3, 1]))).toBe(`[1,2,3]`);
      expect(JSON.stringify(srv.uniq([{ a: 1 }, { a: 1 }, { a: 2 }], 'a'))).toBe(`[{"a":1},{"a":2}]`);
      expect(JSON.stringify(srv.uniq([{ a: 1 }, { a: 1 }, { a: 2 }], _v => (_v.a === 1 ? 'a' : 'b')))).toBe(
        `[{"a":1},{"a":2}]`
      );
    });
  });

  class PageTreeNode {
    data: NzTreeNode[];
    constructor(data?: any[]) {
      this.data = data
        ? data
        : srv.arrToTreeNode(deepCopy(MOCK_ARR), {
            parentIdMapName: 'pid',
            titleMapName: 'name'
          });
    }
    check(path: string, field: string, value: any): this {
      const pathArr = path.split('/');
      const firstIdx = +pathArr[0];
      let item = firstIdx >= this.data.length ? null : this.data[firstIdx];
      if (pathArr.length > 1) {
        const secondIdx = +pathArr[1];
        item = secondIdx >= (this.data as any)[firstIdx].children ? null : this.data[firstIdx].children[secondIdx];
      }
      if (value == null) {
        expect(item == null).toBe(true);
      } else {
        expect((item! as any)[field]).toBe(value);
      }
      return this;
    }
  }
});
