import type { SFWidgetProvideConfig } from '@delon/form';

import { TransferWidget } from './widget';

export * from './widget';
export * from './schema';

export function withTransferWidget(): SFWidgetProvideConfig {
  return { KEY: TransferWidget.KEY, type: TransferWidget };
}
