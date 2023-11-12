import type { SFWidgetProvideConfig } from '@delon/form';

import { UploadWidget } from './widget';

export * from './widget';
export * from './schema';

export function withUploadWidget(): SFWidgetProvideConfig {
  return { KEY: UploadWidget.KEY, type: UploadWidget };
}
