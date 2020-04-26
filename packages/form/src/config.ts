import { AlainConfigService, AlainSFConfig } from '@delon/util';
import { SFButton } from './interface';
import { SFUISchemaItem } from './schema/ui';

export const SF_DEFAULT_CONFIG: AlainSFConfig = {
  ingoreKeywords: ['type', 'enum'],
  liveValidate: true,
  autocomplete: null,
  firstVisual: false,
  onlyVisual: false,
  errors: {},
  ui: {} as SFUISchemaItem,
  button: { submit_type: 'primary', reset_type: 'default' } as SFButton,
  uiDateStringFormat: 'yyyy-MM-dd HH:mm:ss',
  uiDateNumberFormat: 'T',
  uiTimeStringFormat: 'HH:mm:ss',
  uiTimeNumberFormat: 'T',
  uiEmailSuffixes: ['qq.com', '163.com', 'gmail.com', '126.com', 'aliyun.com'],
};

export function mergeConfig(srv: AlainConfigService): AlainSFConfig {
  return srv.merge('sf', SF_DEFAULT_CONFIG);
}
