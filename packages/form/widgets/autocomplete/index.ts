import type { SFWidgetProvideConfig } from '@delon/form';

import { AutoCompleteWidget } from './widget';

export * from './widget';
export * from './schema';

export function withAutoCompleteWidget(): SFWidgetProvideConfig {
  return { KEY: AutoCompleteWidget.KEY, type: AutoCompleteWidget };
}
