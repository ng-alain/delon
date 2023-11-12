import { SFWidgetProvideConfig } from '@delon/form';

import { MonacoEditorWidget } from './widget';

export * from './widget';
export * from './schema';
export * from './module';

export function withMonacoEditorWidget(): SFWidgetProvideConfig {
  return { KEY: MonacoEditorWidget.KEY, type: MonacoEditorWidget };
}
