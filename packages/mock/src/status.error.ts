export class MockStatusError {
  statusText: string;
  constructor(public status: number, public error?: any) {}
}
