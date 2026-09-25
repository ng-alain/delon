import type { NzSafeAny } from 'ng-zorro-antd/core/types';

/** G2 v5 未导出事件类型，这里给出图表交互事件的最小结构约定，供各组件的 `ev` 字段使用 */
export interface G2Event {
  /** 命中元素对应的数据项 */
  data?: { data?: NzSafeAny };
  /** 被命中的元素（`@antv/g` DisplayObject），不得依赖其内部结构 */
  target?: NzSafeAny;
  /** 画布坐标 */
  x?: number;
  y?: number;
  nativeEvent?: NzSafeAny;
  [key: string]: NzSafeAny;
}
