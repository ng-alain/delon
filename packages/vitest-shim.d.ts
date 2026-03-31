/// <reference types="vitest/globals" />

// Override done callback type to work with Angular testing
declare global {
  interface DoneCallback {
    (): void;
    (error: Error): void;
    fail(error?: Error | string): void;
  }
}
