import { TargetVersion } from '../target-version';
import { VersionChanges } from '../upgrade-data';
import { ConvertAction } from '../dom/interfaces';

export interface V2ElementUpgradeData extends ConvertAction {}

export const v2Element: VersionChanges<V2ElementUpgradeData> = {
  [TargetVersion.V2]: [
    {
      pr: '',
      changes: [
        {
          name: 'simple-table',
          rules: [
            { type: 'name', value: 'st' },
            { type: 'add-template-atrr', value: 'body' },
            { type: 'add-template-atrr', value: 'expand' },
          ],
        },
        {
          name: 'footer-toolbar',
          rules: [
            { type: 'add-template-atrr', value: 'extra' },
          ],
        },
        {
          name: 'page-header',
          rules: [
            { type: 'attr-name', value: 'home_link', newValue: 'homeLink' },
            { type: 'attr-name', value: 'home_i18n', newValue: 'homeI18n' },
            { type: 'add-template-atrr', value: 'breadcrumb' },
            { type: 'add-template-atrr', value: 'logo' },
            { type: 'add-template-atrr', value: 'action' },
            { type: 'add-template-atrr', value: 'content' },
            { type: 'add-template-atrr', value: 'tab' },
            { type: 'add-template-atrr', value: 'extra' },
          ],
        },
        {
          name: 'g2-chart',
          rules: [
            { type: 'name', value: 'g2-custom' },
          ],
        },
      ],
    },
  ],
};
