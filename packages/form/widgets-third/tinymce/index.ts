import type { SFWidgetProvideConfig } from '@delon/form';

import { TinymceWidget } from './widget';

export * from './widget';
export * from './schema';

export function withTinymceWidget(): SFWidgetProvideConfig {
  return { KEY: TinymceWidget.KEY, type: TinymceWidget };
}
