import { warn } from '@delon/util/other';

export interface ZoneOptions {
  ngZoneName?: string;
}

type DecoratorType = (target: any, fn: string, descriptor: PropertyDescriptor) => PropertyDescriptor;

function makeFn(type: 'runOutsideAngular' | 'run', options?: ZoneOptions): DecoratorType {
  return (_, __, descriptor) => {
    const source = descriptor.value;
    descriptor.value = function (...data: any): () => void {
      const that = this as any;
      const ngZone = that[options?.ngZoneName || 'ngZone'];
      if (!ngZone) {
        warn(`ZoneOutside: Decorator should have 'ngZone' property with 'NgZone' class.`);
        return source.call(this, ...data);
      }
      let res: any;
      ngZone[type](() => {
        res = source.call(this, ...data);
      });
      return res;
    };

    return descriptor;
  };
}

/**
 * The decoration method runs in `runOutsideAngular`
 *
 * 装饰方法运行在 `runOutsideAngular` 内
 *
 * ```ts
 * class MockClass {
 *  constructor(public ngZone: NgZone) {}
 *
 *  {AT}ZoneOutside()
 *  runOutsideAngular(): void {}
 * }
 * ```
 */
export function ZoneOutside(options?: ZoneOptions): DecoratorType {
  return makeFn('runOutsideAngular', options);
}

/**
 * The decoration method runs in `run`
 *
 * 装饰方法运行在 `run` 内
 *
 * ```ts
 * class MockClass {
 *  constructor(public ngZone: NgZone) {}
 *
 *  {AT}ZoneRun()
 *  run(): void {}
 * }
 * ```
 */
export function ZoneRun(options?: ZoneOptions): DecoratorType {
  return makeFn('run', options);
}
