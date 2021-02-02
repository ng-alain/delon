import { Injectable } from '@angular/core';
import { AlainConfigService, AlainUtilArrayConfig } from '@delon/util/config';
import { NzTreeNode } from 'ng-zorro-antd/core/tree';
import {
  ArrayServiceArrToTreeNodeOptions,
  ArrayServiceArrToTreeOptions,
  ArrayServiceGetKeysByTreeNodeOptions,
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
   * 将树结构转换成数组结构
   */
  treeToArr(tree: any[], options?: ArrayServiceTreeToArrOptions): any[] {
    const opt = {
      deepMapName: this.c.deepMapName,
      parentMapName: this.c.parentMapName,
      childrenMapName: this.c.childrenMapName,
      clearChildren: true,
      cb: null,
      ...options,
    } as ArrayServiceTreeToArrOptions;
    const result: any[] = [];
    const inFn = (list: any[], parent: any, deep: number = 0) => {
      for (const i of list) {
        i[opt.deepMapName!] = deep;
        i[opt.parentMapName!] = parent;
        if (opt.cb) {
          opt.cb(i, parent, deep);
        }
        result.push(i);
        const children = i[opt.childrenMapName!];
        if (children != null && Array.isArray(children) && children.length > 0) {
          inFn(children, i, deep + 1);
        }
        if (opt.clearChildren) {
          delete i[opt.childrenMapName!];
        }
      }
    };
    inFn(tree, 1);
    return result;
  }

  /**
   * 数组转换成树数据
   */
  arrToTree(arr: any[], options?: ArrayServiceArrToTreeOptions): any[] {
    const opt = {
      idMapName: this.c.idMapName,
      parentIdMapName: this.c.parentIdMapName,
      childrenMapName: this.c.childrenMapName,
      cb: null,
      ...options,
    } as ArrayServiceArrToTreeOptions;
    if (arr.length === 0) {
      return [];
    }
    const tree: any[] = [];
    const childrenOf: any = {};
    let rootPid = opt.rootParentIdValue;
    if (!rootPid) {
      const pids = arr.map(i => i[opt.parentIdMapName!]);
      const emptyPid = pids.findIndex(w => w == null);
      rootPid = emptyPid !== -1 ? pids[emptyPid] : pids.sort()[0];
    }
    for (const item of arr) {
      const id = item[opt.idMapName!];
      const pid = item[opt.parentIdMapName!];
      childrenOf[id] = childrenOf[id] || [];
      item[opt.childrenMapName!] = childrenOf[id];
      if (opt.cb) {
        opt.cb(item);
      }
      if (pid !== rootPid) {
        childrenOf[pid] = childrenOf[pid] || [];
        childrenOf[pid].push(item);
      } else {
        tree.push(item);
      }
    }
    return tree;
  }

  /**
   * 数组转换成 `nz-tree` 数据源，通过 `options` 转化项名，也可以使用 `options.cb` 更高级决定数据项
   */
  arrToTreeNode(arr: any[], options?: ArrayServiceArrToTreeNodeOptions): NzTreeNode[] {
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
    } as ArrayServiceArrToTreeNodeOptions;
    const tree = this.arrToTree(arr, {
      idMapName: opt.idMapName,
      parentIdMapName: opt.parentIdMapName,
      childrenMapName: 'children',
    });
    this.visitTree(tree, (item: any, parent: any, deep: number) => {
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
        opt.cb(item, parent, deep);
      }
    });
    return tree.map(node => new NzTreeNode(node));
  }

  /**
   * 递归访问整个树
   */
  visitTree(
    tree: any[],
    cb: (item: any, parent: any, deep: number) => void,
    options?: {
      /** 子项名，默认：`'children'` */
      childrenMapName?: string;
    },
  ): void {
    options = {
      childrenMapName: this.c.childrenMapName,
      ...options,
    };
    const inFn = (data: any[], parent: any, deep: number) => {
      for (const item of data) {
        cb(item, parent, deep);
        const childrenVal = item[options!.childrenMapName!];
        if (childrenVal && childrenVal.length > 0) {
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
    this.visitTree(tree, (item: NzTreeNode, parent: NzTreeNode, deep: number) => {
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
   */
  flat(array: any[], depth: number = 1 / 0): any[] {
    return this.baseFlat(array, depth);
  }
}
