import { SchematicContext } from '@angular-devkit/schematics';
import * as colors from 'ansi-colors';

export function logStart(context: SchematicContext, message: string): void {
  context.logger.info(`${colors.green('✓')} ${message}`);
}

export function logInfo(context: SchematicContext, message: string): void {
  context.logger.info(`  ${colors.green('✓')} ${message}`);
}

export function logWarn(context: SchematicContext, message: string): void {
  context.logger.info(`  ${colors.yellow(`⚠ ${message}`)}`);
}

export function logEx(context: SchematicContext, message: string): void {
  context.logger.error(`  ${colors.yellow(`x ${message}`)}`);
}

export function logFinished(context: SchematicContext, message: string): void {
  context.logger.info(`${colors.green(`✓ ${message}`)}`);
}
