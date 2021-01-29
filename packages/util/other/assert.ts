import { isDevMode } from '@angular/core';

function throwError(msg: string | null | undefined): void;
function throwError(msg: string | null | undefined, actual: any, expected: any, comparison: string): void;
function throwError(msg: string | null | undefined, actual?: any, expected?: any, comparison?: string): void {
  if (isDevMode()) {
    throw new Error(`ASSERTION ERROR: ${msg}` + (comparison == null ? '' : ` [Expected=> ${expected} ${comparison} ${actual} <=Actual]`));
  }
}

export function assert(assertion: boolean, msg?: string): void {
  if (!assertion) {
    throwError(msg);
  }
}

export function assertNumber(actual: any, msg?: string): void {
  if (!(typeof actual === 'number')) {
    throwError(msg, typeof actual, 'number', '===');
  }
}

export function assertString(actual: any, msg?: string): void {
  if (!(typeof actual === 'string')) {
    throwError(msg, actual === null ? 'null' : typeof actual, 'string', '===');
  }
}
