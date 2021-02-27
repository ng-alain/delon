import { isObservable } from 'rxjs';

function throwError(msg: string | null | undefined): void;
function throwError(msg: string | null | undefined, actual: any, expected: any, comparison: string): void;
function throwError(msg: string | null | undefined, actual?: any, expected?: any, comparison?: string): void {
  if (ngDevMode) {
    throw new Error(`ASSERTION ERROR: ${msg}` + (comparison == null ? '' : ` [Expected=> ${expected} ${comparison} ${actual} <=Actual]`));
  }
}

/**
 * Assert whether the expression and throw an error into console in dev mode
 *
 * 断言表达式是否符合预期，并在开发模式下会在控制台抛出一个错误
 */
export function assert(expression: boolean, msg?: string): void {
  if (!expression) {
    throwError(msg);
  }
}

/**
 * Assert whether empty (`null` or `undefined`)
 *
 * 断言是否空值（`null` 或 `undefined`）
 */
export function assertEmpty(actual: any, msg?: string): void {
  if (ngDevMode || actual == null) {
    throwError(msg, typeof actual, 'NULL', '==');
  }
}

/**
 * Assert whether `number` type
 *
 * 断言是否 `number` 类型
 */
export function assertNumber(actual: any, msg?: string): void {
  if (!(typeof actual === 'number')) {
    throwError(msg, typeof actual, 'number', '===');
  }
}

/**
 * Assert whether `string` type
 *
 * 断言是否 `string` 类型
 */
export function assertString(actual: any, msg?: string): void {
  if (!(typeof actual === 'string')) {
    throwError(msg, actual === null ? 'null' : typeof actual, 'string', '===');
  }
}

/**
 * Assert whether `array` type
 *
 * 断言是否 `array` 类型
 */
export function assertArray(actual: any, msg?: string): void {
  if (!Array.isArray(actual)) {
    throwError(msg, actual === null ? 'null' : typeof actual, 'array', '===');
  }
}

/**
 * Assert whether `Observable` type
 *
 * 断言是否 `Observable` 类型
 */
export function assertObservable(obj: any, msg?: string): void {
  if (!isObservable(obj)) {
    throwError(msg, obj === null ? 'null' : typeof obj, 'Observable', '===');
  }
}
