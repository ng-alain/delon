import type { SFWidgetProvideConfig } from '@delon/form';

import { TreeSelectWidget } from './widget';

export * from './widget';
export * from './schema';

export function withTreeSelectWidget(): SFWidgetProvideConfig {
  return { KEY: TreeSelectWidget.KEY, type: TreeSelectWidget };
}
