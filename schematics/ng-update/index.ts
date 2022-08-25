import { createMigrationSchematicRule, NullableDevkitMigration, TargetVersion } from '@angular/cdk/schematics';

import { chain, Rule, SchematicContext } from '@angular-devkit/schematics';

import { ruleUpgradeData } from './upgrade-data';
import { SrcToNzImageRule } from './upgrade-rules/checks/_src-to-nz-image-rule';
import { v12Rule } from './upgrade-rules/v12';
import { v13Rule } from './upgrade-rules/v13';
import { v14Rule } from './upgrade-rules/v14';

const migrations: NullableDevkitMigration[] = [SrcToNzImageRule];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function updateToV12(schema: any): Rule {
  const rule = v12Rule(schema);
  return chain([rule, createMigrationSchematicRule(TargetVersion.V12, migrations, ruleUpgradeData, postUpdate)]);
}

export function updateToV13(): Rule {
  return chain([v13Rule(), createMigrationSchematicRule(TargetVersion.V13, migrations, ruleUpgradeData, postUpdate)]);
}

export function updateToV14(): Rule {
  return chain([v14Rule(), createMigrationSchematicRule(TargetVersion.V14, migrations, ruleUpgradeData, postUpdate)]);
}

/** Post-update schematic to be called when update is finished. */
export function postUpdate(context: SchematicContext, targetVersion: TargetVersion, hasFailures: boolean): void {
  context.logger.info('');
  context.logger.info(`  ✓  Updated NG-ALAIN to ${targetVersion}`);
  context.logger.info('');

  if (hasFailures) {
    context.logger.warn(
      '  ⚠  Some issues were detected but could not be fixed automatically. Please check the ' +
        'output above and fix these issues manually.'
    );
  }
}
