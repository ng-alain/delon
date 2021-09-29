import { colors } from '@angular/cli/utilities/color';

import { SchematicContext } from '@angular-devkit/schematics';

export function logStart(context: SchematicContext, message: string): void {
  context.logger.info(`    ${colors.green('✓')} ${message}`);
}

export function logInfo(context: SchematicContext, message: string): void {
  context.logger.info(`        ${colors.green('✓')} ${message}`);
}

export function logWarn(context: SchematicContext, message: string): void {
  context.logger.info(`        ${colors.yellow('✓')} ${message}`);
}
