import { TemplateRef } from '@angular/core';

export type SELayout = 'horizontal' | 'vertical' | 'inline';

export type SESize = 'default' | 'compact';

export type SEErrorType = string | TemplateRef<void> | SEError;

export interface SEError {
  [key: string]: string | TemplateRef<void>;
}

export interface SEErrorRefresh {
  name: string;
  error: SEErrorType;
}

// /**
//  * Error collection
//  * - `name`: The value of` ngModel` or `formControlName`
//  * - `error`: Replaced error value
//  */
// errors: Array<{ name: string; error: SEErrorType }>;
// /**
//  * Whether force show error, even if the form component has not invalid, Default: `false`
//  * - `false`: Whether to display error by `invalid`
//  * - `true`: Force show display error
//  */
// force?: boolean;
