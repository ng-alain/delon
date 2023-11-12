import type { SFWidgetProvideConfig } from '@delon/form';

import { TagWidget } from './widget';

export * from './widget';
export * from './schema';

export function withTagWidget(): SFWidgetProvideConfig {
  return { KEY: TagWidget.KEY, type: TagWidget };
}
