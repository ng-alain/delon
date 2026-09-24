export * from './types/interaction';
export * from './types/time';
export * from './g2.servicce';
export * from './g2.base.component';
export * from './utils';

// 内部模块：仅供 @delon/chart 包内各入口点（chart-echarts、water-wave 等）跨入口点消费，
// 不属于稳定的公开 API，外部使用者请勿依赖，实现与导出可能随时调整。
// ⚠️ 不要给本文件或 input.ts 的声明加 JSDoc 的 at-internal 标记（前缀 at 符号 + internal）：
// packages/tsconfig.lib.json 开启了 "stripInternal": true，只要注释里出现该标记，
// 被标注的声明/再导出就会被从生成的 types/core.d.ts 中整体剔除；而 chart-echarts /
// water-wave 需要从 @delon/chart/core 导入 resolveInputs / watchInputs，声明缺失会让库构建以 TS2305 失败。
// 注意：本说明刻意不写出该标记的字面量 —— 即便只在普通行注释里提及它，同样会被剥离（已实测）。
export * from './input';
