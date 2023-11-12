import type { SFWidgetProvideConfig } from '@delon/form';

import { TimeWidget } from './widget';

export * from './widget';
export * from './schema';

export function withTimeWidget(): SFWidgetProvideConfig {
  return { KEY: TimeWidget.KEY, type: TimeWidget };
}
