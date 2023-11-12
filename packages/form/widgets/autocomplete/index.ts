import type { SFWidgetProvideConfig } from '@delon/form';

import { AutoCompleteWidget } from './widget';

export * from './widget';
export * from './schema';

export function withAutoComplete(): SFWidgetProvideConfig {
  return { KEY: AutoCompleteWidget.KEY, type: AutoCompleteWidget };
}
