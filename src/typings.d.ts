/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare namespace jasmine {
  interface Matchers<T> {
    toHaveCssClass(expected: any): boolean;
  }
}
