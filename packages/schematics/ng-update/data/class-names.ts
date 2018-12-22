import { TargetVersion } from '../target-version';
import { VersionChanges } from '../upgrade-data';

export interface ClassNameUpgradeData {
  /** The Class name to replace. */
  replace: string;
  /** The new name for the Class. */
  replaceWith: string;
}

export const classNames: VersionChanges<ClassNameUpgradeData> = {
  [TargetVersion.V2]: [
    {
      pr: '',
      changes: [
        {
          replace: 'SimpleTableColumn',
          replaceWith: 'STColumn',
        },
        {
          replace: 'SimpleTableComponent',
          replaceWith: 'STComponent',
        },
        {
          replace: 'SimpleTableData',
          replaceWith: 'STData',
        },
        {
          replace: 'SimpleTableButton',
          replaceWith: 'STColumnButton',
        },
        {
          replace: 'SimpleTableChange',
          replaceWith: 'STChange',
        },
        {
          replace: 'AdPageHeaderConfig',
          replaceWith: 'PageHeaderConfig',
        },
      ],
    },
  ],
};
