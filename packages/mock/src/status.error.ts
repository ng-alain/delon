/* eslint-disable @typescript-eslint/no-explicit-any */

export class MockStatusError {
  statusText?: string;

  constructor(
    public status: number,
    public error?: any
  ) {}
}
