// tslint:disable:no-any
import { Injectable } from '@angular/core';
import { NzTreeNode } from 'ng-zorro-antd';
import { DelonUtilConfig } from '../util.config';
import { ArrayConfig } from './array.config';

@Injectable({ providedIn: 'root' })
export class ArrayService {
  private c: ArrayConfig;
  constructor(cog: DelonUtilConfig) {
    this.c = {
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
      ...(cog && cog.array),
    };
  }
  /**
   * 将树结构转换成数组结构
   */
  treeToArr(
    tree: any[],
    options?: {
      /** 深度项名，默认：`'deep'` */
      deepMapName?: string;
      /** 扁平后数组的父数据项名，默认：`'parent'` */
      parentMapName?: string;
      /** 源数据子项名，默认：`'children'` */
      childrenMapName?: string;
      /** 是否移除 `children` 节点，默认：`true` */
      clearChildren?: boolean;
      /** 转换成数组结构时回调 */
      cb?: (item: any, parent: any, deep: number) => void;
    },
  ): any[] {
    options = {
      deepMapName: this.c.deepMapName,
      parentMapName: this.c.parentMapName,
      childrenMapName: this.c.childrenMapName,
      clearChildren: true,
      cb: null,
      ...options,
    };
    const result: any[] = [];
    const inFn = (list: any[], parent: any, deep: number) => {
      for (const i of list) {
        i[options.deepMapName] = deep;
        i[options.parentMapName] = parent;
        if (options.cb) { options.cb(i, parent, deep); }
        result.push(i);
        const children = i[options.childrenMapName];
        if (
          children != null &&
          Array.isArray(children) &&
          children.length > 0
        ) {
          inFn(children, i, deep + 1);
        }
        if (options.clearChildren) { delete i[options.childrenMapName]; }
      }
    };
    inFn(tree, 1, null);
    return result;
  }

  /**
   * 数组转换成树数据
   */
  arrToTree(
    arr: any[],
    options?: {
      /** 编号项名，默认：`'id'` */
      idMapName?: string;
      /** 父编号项名，默认：`'parent_id'` */
      parentIdMapName?: string;
      /** 子项名，默认：`'children'` */
      childrenMapName?: string;
      /** 转换成树数据时回调 */
      cb?: (item: any) => void;
    },
  ): any[] {
    options = {
      idMapName: this.c.idMapName,
      parentIdMapName: this.c.parentIdMapName,
      childrenMapName: this.c.childrenMapName,
      cb: null,
      ...options,
    };
    const tree: any[] = [];
    const childrenOf = {};
    for (const item of arr) {
      const id = item[options.idMapName];
      const pid = item[options.parentIdMapName];
      childrenOf[id] = childrenOf[id] || [];
      item[options.childrenMapName] = childrenOf[id];
      if (options.cb) { options.cb(item); }
      if (pid) {
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
  arrToTreeNode(
    arr: any[],
    options?: {
      /** 编号项名，默认：`'id'` */
      idMapName?: string;
      /** 父编号项名，默认：`'parent_id'` */
      parentIdMapName?: string;
      /** 标题项名，默认：`'title'` */
      titleMapName?: string;
      /** 设置为叶子节点项名，若数据源不存在时自动根据 `children` 值决定是否为叶子节点，默认：`'isLeaf'` */
      isLeafMapName?: string;
      /** 节点 Checkbox 是否选中项名，默认：`'checked'` */
      checkedMapname?: string;
      /** 节点本身是否选中项名，默认：`'selected'` */
      selectedMapname?: string;
      /** 节点是否展开(叶子节点无效)项名，默认：`'expanded'` */
      expandedMapname?: string;
      /** 设置是否禁用节点(不可进行任何操作)项名，默认：`'disabled'` */
      disabledMapname?: string;
      /** 转换成树数据后，执行的递归回调 */
      cb?: (item: any, parent: any, deep: number) => void;
    },
  ): NzTreeNode[] {
    options = {
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
    };
    const tree = this.arrToTree(arr, {
      idMapName: options.idMapName,
      parentIdMapName: options.parentIdMapName,
      childrenMapName: 'children',
    });
    this.visitTree(tree, (item: any, parent: any, deep: number) => {
      item.key = item[options.idMapName];
      item.title = item[options.titleMapName];
      item.checked = item[options.checkedMapname];
      item.selected = item[options.selectedMapname];
      item.expanded = item[options.expandedMapname];
      item.disabled = item[options.disabledMapname];
      if (item[options.isLeafMapName] == null) {
        item.isLeaf = item.children.length === 0;
      } else {
        item.isLeaf = item[options.isLeafMapName];
      }
      if (options.cb) { options.cb(item, parent, deep); }
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
        const childrenVal = item[options.childrenMapName];
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
  getKeysByTreeNode(
    tree: NzTreeNode[],
    options?: {
      /** 是否包含半选状态的值，默认：`true` */
      includeHalfChecked?: boolean;
      /** 是否重新指定 `key` 键名，若不指定表示使用 `NzTreeNode.key` 值 */
      keyMapName?: string;
      /** 回调，返回一个值 `key` 值，优先级高于其他 */
      cb?: (item: NzTreeNode, parent: NzTreeNode, deep: number) => any;
    },
  ): any[] {
    options = {
      includeHalfChecked: true,
      ...options,
    };
    const keys: any[] = [];
    this.visitTree(
      tree,
      (item: NzTreeNode, parent: NzTreeNode, deep: number) => {
        if (item.isChecked || (options.includeHalfChecked && item.isHalfChecked)) {
          keys.push(
            options.cb ?
              options.cb(item, parent, deep) :
              options.keyMapName ? item.origin[options.keyMapName] : item.key,
          );
        }
      },
    );
    return keys;
  }
}
