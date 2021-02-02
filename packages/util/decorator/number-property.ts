import { propDecoratorFactory } from './factory';

export type NumberInput = number | string | undefined | null;

export function toNumber(value: any): number;
export function toNumber<D>(value: any, fallback: D): number | D;
export function toNumber(value: any, fallbackValue: number = 0): number {
  return !isNaN(parseFloat(value as any)) && !isNaN(Number(value)) ? Number(value) : fallbackValue;
}

/**
 * Input decorator that handle a prop to do get/set automatically with toNumber
 *
 * ```ts
 * @Input() @InputNumber() visible: number = 1;
 * @Input() @InputNumber(null) visible: number = 2;
 * ```
 */
export function InputNumber(defaultValue: number | null = 0): any {
  return propDecoratorFactory('InputNumber', toNumber, defaultValue);
}
