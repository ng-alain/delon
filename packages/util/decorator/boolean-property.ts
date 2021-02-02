import { propDecoratorFactory } from './factory';

export type BooleanInput = boolean | string | undefined | null;

export function toBoolean(value: any, allowUndefined: boolean | null = false): boolean | undefined {
  return allowUndefined && typeof value === 'undefined' ? undefined : value != null && `${value}` !== 'false';
}

/**
 * Input decorator that handle a prop to do get/set automatically with toBoolean
 *
 * ```ts
 * @Input() InputBoolean() visible: boolean = false;
 * @Input() @InputBoolean(null) visible: boolean = false;
 * ```
 */
export function InputBoolean(defaultValue: boolean | null = false): any {
  return propDecoratorFactory('InputNumber', toBoolean, defaultValue);
}
