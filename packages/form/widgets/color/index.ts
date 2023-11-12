import type { SFWidgetProvideConfig } from '@delon/form';

import { ColorWidget } from './widget';

export * from './widget';
export * from './schema';
export * from './module';

export function withColorWidget(): SFWidgetProvideConfig {
  return { KEY: ColorWidget.KEY, type: ColorWidget };
}
