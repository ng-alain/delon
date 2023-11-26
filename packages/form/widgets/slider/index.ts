import type { SFWidgetProvideConfig } from '@delon/form';

import { SliderWidget } from './widget';

export * from './widget';
export * from './schema';
export * from './module';

export function withSliderWidget(): SFWidgetProvideConfig {
  return { KEY: SliderWidget.KEY, type: SliderWidget };
}
