import type { SFWidgetProvideConfig } from '@delon/form';

import { TinymceWidget } from './widget';

export * from './widget';
export * from './schema';
export * from './module';

export function withTinymceWidget(): SFWidgetProvideConfig {
  return { KEY: TinymceWidget.KEY, type: TinymceWidget };
}
