import type { G2Spec, Theme } from '@antv/g2';

import { type G2InteractionType, toInteraction } from './types/interaction';

export type G2Padding = number | number[] | 'auto';

export interface G2ViewSpecOptions {
  theme: Theme | undefined;
  padding?: G2Padding;
  height?: number;
  width?: number;
  animate?: boolean;
  autoFit?: boolean;
  interaction?: G2InteractionType;
}

/** 主题归一化：空值（`undefined` 或空串）统一取内置默认主题 `{ type: 'classic' }`，对象按 v5 `Theme` 结构透传 */
export function toTheme(theme: Theme | undefined): Theme {
  if (theme == null || theme === '') {
    return { type: 'classic' };
  }
  return theme as Theme;
}

/** 内边距归一化：四元数组需拆成 `paddingTop/Right/Bottom/Left`（v5 的 `Padding` 只接受 `number | 'auto'`） */
export function toPadding(padding: G2Padding | undefined): Record<string, unknown> {
  if (padding == null) {
    return {};
  }
  if (typeof padding === 'number' || padding === 'auto') {
    return { padding };
  }
  const [top, right, bottom, left] = padding;
  const res: Record<string, number> = {};
  if (top != null) res['paddingTop'] = top;
  if (right != null) res['paddingRight'] = right;
  if (bottom != null) res['paddingBottom'] = bottom;
  if (left != null) res['paddingLeft'] = left;
  return res;
}

/** 组件共用：产出 v5 view 的公共片段，组件再补 `data` / `children` 等 */
export type G2ViewSpecFragment = G2Spec & {
  animate?: boolean;
  autoFit?: boolean;
  interaction?: G2Spec['interaction'];
};

export function viewSpec(options: G2ViewSpecOptions): G2ViewSpecFragment {
  const { theme, padding, height, width, animate, autoFit, interaction } = options;
  const res: G2ViewSpecFragment = {
    type: 'view',
    theme: toTheme(theme),
    // v5 内置主题给 view 的 `margin` 默认 16，不覆盖为 0 时绘图区两个方向各少 32px
    margin: 0,
    ...toPadding(padding)
  };
  if (height != null) res.height = height;
  if (width != null) res.width = width;
  if (animate === false) res.animate = false;
  if (autoFit != null) res.autoFit = autoFit;
  const it = toInteraction(interaction);
  if (it) res.interaction = it;
  return res;
}
