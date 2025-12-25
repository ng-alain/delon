import { createMigrationSchematicRule, NullableDevkitMigration, TargetVersion } from '@angular/cdk/schematics';

import { chain, Rule, SchematicContext } from '@angular-devkit/schematics';

import { ruleUpgradeData } from './upgrade-data';
import { v21Rule } from './upgrade-rules/V21';

const migrations: NullableDevkitMigration[] = [];

export function updateToV21(): Rule {
  return chain([v21Rule(), createMigrationSchematicRule(TargetVersion.V21, migrations, ruleUpgradeData, postUpdate)]);
}

/** Post-update schematic to be called when update is finished. */
export function postUpdate(context: SchematicContext, targetVersion: TargetVersion, hasFailures: boolean): void {
  context.logger.info('');
  context.logger.info(`✓  Updated NG-ALAIN to ${targetVersion}`);
  context.logger.info('');

  if (hasFailures) {
    context.logger.warn(
      '  ⚠  Some issues were detected but could not be fixed automatically. Please check the ' +
        'output above and fix these issues manually.'
    );
  }
}
