import { Injectable } from '@angular/core';
import { AlainConfigService, AlainUtilArrayConfig } from '@delon/util/config';
import { NzTreeNode } from 'ng-zorro-antd/core/tree';
import {
  ArrayServiceArrToTreeNodeOptions,
  ArrayServiceArrToTreeOptions,
  ArrayServiceGetKeysByTreeNodeOptions,
  ArrayServiceGroupByResult,
  ArrayServiceTreeToArrOptions,
} from './array-type.service';

@Injectable({ providedIn: 'root' })
export class ArrayService {
  private c: AlainUtilArrayConfig;

  constructor(cog: AlainConfigService) {
    this.c = cog.merge('utilArray', {
      deepMapName: 'deep',
      parentMapName: 'parent',
      idMapName: 'id',
      parentIdMapName: 'parent_id',
      childrenMapName: 'children',
      titleMapName: 'title',
      checkedMapname: 'checked',
      selectedMapname: 'selected',
      expandedMapname: 'expanded',
      disabledMapname: 'disabled',
    })!;
  }

  /**
   * Convert tree structure to array structure
   *
   * 将树结构转换成数组结构
   */
  treeToArr<T extends object = any>(tree: ReadonlyArray<T>, options?: ArrayServiceTreeToArrOptions<T>): T[] {
    const opt = {
      deepMapName: this.c.deepMapName,
      parentMapName: this.c.parentMapName,
      childrenMapName: this.c.childrenMapName,
      clearChildren: true,
      cb: null,
      ...options,
    } as ArrayServiceTreeToArrOptions;
    const result: Array<{ [key: string]: any }> = [];
    const inFn = (list: ReadonlyArray<{ [key: string]: any }>, parent: T | null, deep: number = 0) => {
      for (const i of list) {
        i[opt.deepMapName!] = deep;
        i[opt.parentMapName!] = parent;
        if (opt.cb) {
          opt.cb(i, parent, deep);
        }
        result.push(i);
        const children = i[opt.childrenMapName!];
        if (children != null && Array.isArray(children) && children.length > 0) {
          inFn(children, i as T, deep + 1);
        }
        if (opt.clearChildren) {
          delete i[opt.childrenMapName!];
        }
      }
    };
    inFn(tree, null);
    return result as T[];
  }

  /**
   * Convert array structure to tree structure
   *
   * 数组转换成树数据
   */
  arrToTree<T extends object = any>(arr: ReadonlyArray<T>, options?: ArrayServiceArrToTreeOptions<T>): T[] {
    if (!Array.isArray(arr) || arr.length === 0) {
      return [];
    }

    const opt = {
      idMapName: this.c.idMapName,
      parentIdMapName: this.c.parentIdMapName,
      childrenMapName: this.c.childrenMapName,
      cb: null,
      ...options,
    } as ArrayServiceArrToTreeOptions<T>;
    const tree: T[] = [];
    const childrenOf: { [key: string]: T[] } = {};
    let rootPid = opt.rootParentIdValue;
    const arrType = arr as ReadonlyArray<{ [key: string]: any }>;
    if (!rootPid) {
      const pids = arrType.map(i => i[opt.parentIdMapName!]);
      const emptyPid = pids.findIndex(w => w == null);
      rootPid = emptyPid !== -1 ? pids[emptyPid] : pids.sort()[0];
    }
    for (const item of arrType) {
      const id = item[opt.idMapName!];
      const pid = item[opt.parentIdMapName!];
      childrenOf[id] = childrenOf[id] || [];
      item[opt.childrenMapName!] = childrenOf[id];
      if (opt.cb) {
        opt.cb(item as T);
      }
      if (pid !== rootPid) {
        childrenOf[pid] = childrenOf[pid] || [];
        childrenOf[pid].push(item as T);
      } else {
        tree.push(item as T);
      }
    }
    return tree;
  }

  /**
   * 数组转换成 `nz-tree` 数据源，通过 `options` 转化项名，也可以使用 `options.cb` 更高级决定数据项
   */
  arrToTreeNode<T extends object = any>(arr: ReadonlyArray<T>, options?: ArrayServiceArrToTreeNodeOptions): NzTreeNode[] {
    const opt = {
      idMapName: this.c.idMapName,
      parentIdMapName: this.c.parentIdMapName,
      titleMapName: this.c.titleMapName,
      isLeafMapName: 'isLeaf',
      checkedMapname: this.c.checkedMapname,
      selectedMapname: this.c.selectedMapname,
      expandedMapname: this.c.expandedMapname,
      disabledMapname: this.c.disabledMapname,
      cb: null,
      ...options,
    } as ArrayServiceArrToTreeNodeOptions<T>;
    const tree = this.arrToTree<T>(arr, {
      idMapName: opt.idMapName,
      parentIdMapName: opt.parentIdMapName,
      childrenMapName: 'children',
    });
    this.visitTree<T>(tree, (item: { [key: string]: any }, parent, deep) => {
      item.key = item[opt.idMapName!];
      item.title = item[opt.titleMapName!];
      item.checked = item[opt.checkedMapname!];
      item.selected = item[opt.selectedMapname!];
      item.expanded = item[opt.expandedMapname!];
      item.disabled = item[opt.disabledMapname!];
      if (item[opt.isLeafMapName!] == null) {
        item.isLeaf = item.children.length === 0;
      } else {
        item.isLeaf = item[opt.isLeafMapName!];
      }
      if (opt.cb) {
        opt.cb(item as any, parent, deep);
      }
    });
    return tree.map(node => new NzTreeNode(node as any));
  }

  /**
   * 递归访问整个树
   */
  visitTree<T extends object = any>(
    tree: ReadonlyArray<T>,
    cb: (item: T, parent: T | null, deep: number) => void,
    options?: {
      /** 子项名，默认：`'children'` */
      childrenMapName?: string;
    },
  ): void {
    options = {
      childrenMapName: this.c.childrenMapName,
      ...options,
    };
    const inFn = (data: ReadonlyArray<T>, parent: T | null, deep: number) => {
      for (const item of data) {
        cb(item, parent, deep);
        const childrenVal = (item as { [key: string]: any })[options!.childrenMapName!];
        if (Array.isArray(childrenVal) && childrenVal.length > 0) {
          inFn(childrenVal, item, deep + 1);
        }
      }
    };
    inFn(tree, null, 1);
  }

  /**
   * 获取所有已经选中的 `key` 值
   */
  getKeysByTreeNode(tree: NzTreeNode[], options?: ArrayServiceGetKeysByTreeNodeOptions): any[] {
    const opt = {
      includeHalfChecked: true,
      ...options,
    } as ArrayServiceGetKeysByTreeNodeOptions;
    const keys: any[] = [];
    this.visitTree<NzTreeNode>(tree, (item, parent, deep) => {
      if (item.isChecked || (opt.includeHalfChecked && item.isHalfChecked)) {
        keys.push(opt.cb ? opt.cb(item, parent, deep) : opt.keyMapName ? item.origin[opt.keyMapName] : item.key);
      }
    });
    return keys;
  }
  private baseFlat(array: any[], depth: number, result: any[] = []): any[] {
    let index = -1;
    while (++index < array.length) {
      const value = array[index];
      if (depth > 0 && Array.isArray(value)) {
        if (depth > 1) {
          this.baseFlat(value, depth - 1, result);
        } else {
          let pushIndex = -1;
          const offset = result.length;

          while (++pushIndex < value.length) {
            result[offset + pushIndex] = value[pushIndex];
          }
        }
      } else {
        result[result.length] = value;
      }
    }
    return result;
  }
  /**
   * Recursively flattens array
   *
   * 递归扁平数组
   * ```ts
   * srv.flat([1, [2, 3, [4, 5, [6]]]]) => [1,2,3,4,5,6]
   * srv.flat([1, [2, 3, [4, 5, [6]]]], 1) => [1,2,3,[4, 5, [6]]]
   * ```
   */
  flat<T>(array: ReadonlyArray<T>, depth: number = 1 / 0): ReadonlyArray<T> {
    return Array.isArray(array) ? this.baseFlat(array as any[], depth) : array;
  }
  /**
   * Group the array
   *
   * 对数组进行分组
   * ```ts
   * srv.groupBy([6.1, 4.2, 6.3], Math.floor) => {"4":[4.2],"6":[6.1,6.3]}
   * srv.groupBy(['one', 'two', 'three'], v => v.length) => {"3":["one","two"],"5":["three"]}
   * ```
   */
  groupBy<T>(array: ReadonlyArray<T>, iteratee: (value: T) => string | number): ArrayServiceGroupByResult {
    if (!Array.isArray(array)) {
      return {};
    }
    return array.reduce((result, value) => {
      const key = iteratee(value);
      if (Object.prototype.hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        result[key] = [value];
      }
      return result;
    }, {} as ArrayServiceGroupByResult);
  }
  /**
   * Creates a duplicate-free version of an array
   *
   * 创建去重后的数组
   * ```ts
   * uniq([1, 2, 2, 3, 1]) => [1,2,3]
   * uniq([{ a: 1 }, { a: 1 }, { a: 2 }], 'a') => [{"a":1},{"a":2}]
   * uniq([{ a: 1 }, { a: 1 }, { a: 2 }], i => (i.a === 1 ? 'a' : 'b')) => [{"a":1},{"a":2}]
   * ```
   */
  uniq<T>(array: ReadonlyArray<T>, predicate?: string | ((value: T) => string | number | boolean)): ReadonlyArray<T> {
    return Array.from(
      array
        .reduce((map, value) => {
          const key = predicate ? (typeof predicate === 'string' ? (value as any)[predicate] : predicate!(value)) : value;
          if (!map.has(key)) {
            map.set(key, value);
          }
          return map;
        }, new Map<string | number | boolean, T>())
        .values(),
    );
  }
}
