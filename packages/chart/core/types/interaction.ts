import type { G2Spec } from '@antv/g2';

/** 交互类型词汇表（自 v4 保留的公开 API）；v5 的名称不同，映射见 `toInteraction()` */
export type G2InteractionType = 'none' | 'element-active' | 'active-region' | 'brush' | 'drag-move';

/** `G2InteractionType` → v5 `interaction` spec；无忠实对应物的值降级为无交互 */
export function toInteraction(type: G2InteractionType | undefined): G2Spec['interaction'] {
  switch (type) {
    case 'element-active':
      return { elementHighlight: true };
    case 'brush':
      return { brushXHighlight: true };
    default:
      return null;
  }
}
