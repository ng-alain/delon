import { NzSafeAny } from 'ng-zorro-antd/core/types';

export class MockStatusError {
  statusText: string;

  constructor(public status: number, public error?: NzSafeAny) {}
}
