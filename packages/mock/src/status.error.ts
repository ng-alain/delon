export class MockStatusError {
  statusText: string;
  // tslint:disable-next-line:no-any
  constructor(public status: number, public error?: any) { }
}
