import { TestBed } from '@angular/core/testing';
import { NzTreeBaseService, NzTreeNode } from 'ng-zorro-antd/core';
import { deepCopy } from '../other/other';
import { DelonUtilConfig } from '../util.config';
import { DelonUtilModule } from '../util.module';
import { ArrayService } from './array.service';

const MOCK_ARR: any[] = [
  { id: 1, pid: 0, name: 'name1', other: 'value1', halfChecked: true },
  { id: 2, pid: 0, name: 'name2', other: 'value2', disabled: true },
  { id: 3, pid: 1, name: 'name3', other: 'value3', expanded: true },
  { id: 4, pid: 1, name: 'name4', other: 'value4', selected: true },
  { id: 5, pid: 2, name: 'name5', other: 'value5' },
  { id: 6, pid: 0, name: 'name6', other: 'value6', checked: true },
];
describe('utils: array', () => {
  let srv: ArrayService;
  let page: PageTreeNode;

  describe('#treeToArr', () => {
    beforeEach(() => {
      srv = TestBed.configureTestingModule({
        imports: [DelonUtilModule],
      }).get<ArrayService>(ArrayService);
    });
    it('should be tree to array', () => {
      const res = srv.treeToArr([
        {
          id: 1,
          children: [{ id: 2 }, { id: 3 }],
        },
        { id: 3 },
      ]);
      expect(res.length).toBe(4);
    });
    it('should be specified map names', () => {
      const res = srv.treeToArr(
        [
          {
            id: 1,
          },
        ],
        { deepMapName: 'd', parentMapName: 'p' },
      );
      expect(res[0].d).not.toBeUndefined();
      expect(res[0].p).not.toBeUndefined();
    });
    it(`can't clear children`, () => {
      const res = srv.treeToArr(
        [
          {
            id: 1,
            children: [{ id: 2 }],
          },
        ],
        { clearChildren: false },
      );
      expect(res[0].children).not.toBeUndefined();
    });
    it('should be callback', () => {
      const options = {
        cb: jasmine.createSpy(),
      };
      srv.treeToArr([{ id: 1 }], options);
      expect(options.cb).toHaveBeenCalled();
    });
  });

  describe('#arrToTree', () => {
    beforeEach(() => {
      srv = TestBed.configureTestingModule({
        imports: [DelonUtilModule],
      }).get<ArrayService>(ArrayService);
    });
    it('should be array to tree', () => {
      const res = srv.arrToTree([
        { id: 2, parent_id: 1, title: 'c1' },
        { id: 1, parent_id: 0, title: 't1' },
      ]);
      page = new PageTreeNode(res);
      page.check('0', 'id', 1).check('0/0', 'id', 2);
    });
    it('should be callback', () => {
      const options = {
        cb: jasmine.createSpy(),
      };
      srv.arrToTree(deepCopy(MOCK_ARR), options);
      expect(options.cb).toHaveBeenCalled();
    });
    it('should be support parent_id is string', () => {
      const res = srv.arrToTree([
        { id: 2, parent_id: '1', title: 'c1' },
        { id: 1, parent_id: '', title: 't1' },
      ]);
      page = new PageTreeNode(res);
      page.check('0', 'id', 1).check('0/0', 'id', 2);
    });
  });

  describe('[NzTreeNode]', () => {
    beforeEach(() => {
      srv = TestBed.configureTestingModule({
        imports: [DelonUtilModule],
      }).get<ArrayService>(ArrayService);
      page = new PageTreeNode();
    });

    describe('#arrToTreeNode', () => {
      it('should be array to NzTreeNode', () => {
        const res = srv.arrToTreeNode([
          { id: 1, parent_id: 0, title: 't1' },
          { id: 2, parent_id: 1, title: 'c1' },
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
          cb: jasmine.createSpy(),
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
            [`${key}MapName`]: key,
          };
          const res = srv.arrToTreeNode(
            [{ id: 1, parent_id: 0, title: 't1', [key]: true, isLeaf: key !== 'expanded' }],
            options,
          );
          page = new PageTreeNode(res);
          page.check(
            '0',
            key.startsWith('is') ? key : `is` + (key.slice(0, 1).toUpperCase() + key.slice(1)),
            true,
          );
        });
      }
    });

    describe('#getKeysByTreeNode', () => {
      it('should be get keys', () => {
        expect(srv.getKeysByTreeNode(page.data).join(',')).toBe(
          MOCK_ARR.filter(w => w.checked)
            .map(i => i.id)
            .join(','),
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
            .join(','),
        );
        page.data[0].isHalfChecked = false;
        expect(srv.getKeysByTreeNode(page.data, { includeHalfChecked: false }).join(',')).toBe(
          MOCK_ARR.filter(w => w.checked)
            .map(i => i.id)
            .join(','),
        );
      });
      it('should be specified name', () => {
        expect(srv.getKeysByTreeNode(page.data, { keyMapName: 'title' }).join(',')).toBe(
          MOCK_ARR.filter(w => w.checked)
            .map(i => i.name)
            .join(','),
        );
      });
      it('should be callback', () => {
        const options = {
          cb: jasmine.createSpy(),
        };
        srv.getKeysByTreeNode(page.data, options);
        expect(options.cb).toHaveBeenCalled();
      });
    });
  });

  describe('[config]', () => {
    beforeEach(() => {
      srv = TestBed.configureTestingModule({
        imports: [DelonUtilModule],
        providers: [
          {
            provide: DelonUtilConfig,
            useValue: {
              array: {
                idMapName: 'ID',
              },
            },
          },
        ],
      }).get<ArrayService>(ArrayService);
    });
    it('should be tree to array', () => {
      const id = 100;
      const res = srv.arrToTree([
        {
          ID: id,
        },
      ]);
      expect(res[0].ID).toBe(id);
    });
  });

  class PageTreeNode {
    data: NzTreeNode[];
    constructor(data?: any[]) {
      this.data = data
        ? data
        : srv.arrToTreeNode(deepCopy(MOCK_ARR), {
            parentIdMapName: 'pid',
            titleMapName: 'name',
          });
    }
    check(path: string, field: string, value: any): this {
      const pathArr = path.split('/');
      const firstIdx = +pathArr[0];
      let item = firstIdx >= this.data.length ? null : this.data[firstIdx];
      if (pathArr.length > 1) {
        const secondIdx = +pathArr[1];
        item =
          secondIdx >= (this.data as any)[firstIdx].children
            ? null
            : this.data[firstIdx].children[secondIdx];
      }
      if (value == null) {
        expect(item == null).toBe(true);
      } else {
        expect(item![field]).toBe(value);
      }
      return this;
    }
  }
});
