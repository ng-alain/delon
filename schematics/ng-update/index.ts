import { createMigrationSchematicRule, NullableDevkitMigration, TargetVersion } from '@angular/cdk/schematics';

import { chain, Rule, SchematicContext } from '@angular-devkit/schematics';

import { ruleUpgradeData } from './upgrade-data';
import { SrcToNzImageRule } from './upgrade-rules/checks/_src-to-nz-image-rule';
import { v11Rule } from './upgrade-rules/v11';
import { v117Rule } from './upgrade-rules/v117';
import { v12Rule } from './upgrade-rules/v12';

const migrations: NullableDevkitMigration[] = [SrcToNzImageRule];

export function updateToV11(): Rule {
  return chain([v11Rule]);
}

export function updateToV117(): Rule {
  return chain([v117Rule]);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function updateToV12(schema: any): Rule {
  const rule = v12Rule(schema);
  return chain([rule, createMigrationSchematicRule(TargetVersion.V12, migrations, ruleUpgradeData, postUpdate)]);
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
