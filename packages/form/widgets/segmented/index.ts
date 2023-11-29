import type { SFWidgetProvideConfig } from '@delon/form';

import { SegmentedWidget } from './widget';

export * from './widget';
export * from './schema';
export * from './module';

export function withSegmentedWidget(): SFWidgetProvideConfig {
  return { KEY: SegmentedWidget.KEY, type: SegmentedWidget };
}
