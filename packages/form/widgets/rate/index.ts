import type { SFWidgetProvideConfig } from '@delon/form';

import { RateWidget } from './widget';

export * from './widget';
export * from './schema';

export function withRateWidget(): SFWidgetProvideConfig {
  return { KEY: RateWidget.KEY, type: RateWidget };
}
