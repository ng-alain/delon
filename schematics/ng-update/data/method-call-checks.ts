import { MethodCallUpgradeData, TargetVersion, VersionChanges } from '@angular/cdk/schematics';

export const methodCallChecks: VersionChanges<MethodCallUpgradeData> = {
  [TargetVersion.V17]: []
};
