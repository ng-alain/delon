import { chain, Rule, SchematicContext } from '@angular-devkit/schematics';
import { v11Rule } from './upgrade-rules/v11';

export function updateToV11(): Rule {
  return chain([v11Rule]);
}

/** Post-update schematic to be called when update is finished. */
export function postUpdate(context: SchematicContext, targetVersion: any, hasFailures: boolean): void {
  context.logger.info('');
  context.logger.info(`  ✓  Updated NG-ALAIN to ${targetVersion}`);
  context.logger.info('');

  if (hasFailures) {
    context.logger.warn(
      '  ⚠  Some issues were detected but could not be fixed automatically. Please check the ' +
        'output above and fix these issues manually.',
    );
  }
}
