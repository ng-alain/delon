import { SFWidgetProvideConfig } from '@delon/form';

import { MonacoEditorWidget } from './widget';

export * from './widget';
export * from './schema';

export function withMonacoEditorWidget(): SFWidgetProvideConfig {
  return { KEY: MonacoEditorWidget.KEY, type: MonacoEditorWidget };
}
