import { SchematicContext } from '@angular-devkit/schematics';
import { color } from 'listr2';

export function logStart(context: SchematicContext, message: string): void {
  context.logger.info(`${color.green('✓')} ${message}`);
}

export function logInfo(context: SchematicContext, message: string): void {
  context.logger.info(`  ${color.green('✓')} ${message}`);
}

export function logWarn(context: SchematicContext, message: string): void {
  context.logger.info(`  ${color.yellow(`⚠ ${message}`)}`);
}

export function logEx(context: SchematicContext, message: string): void {
  context.logger.error(`  ${color.yellow(`x ${message}`)}`);
}

export function logFinished(context: SchematicContext, message: string): void {
  context.logger.info(`${color.green(`✓ ${message}`)}`);
}
