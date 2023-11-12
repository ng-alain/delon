import type { SFWidgetProvideConfig } from '@delon/form';

import { MentionWidget } from './widget';

export * from './widget';
export * from './schema';

export function withMentionWidget(): SFWidgetProvideConfig {
  return { KEY: MentionWidget.KEY, type: MentionWidget };
}
