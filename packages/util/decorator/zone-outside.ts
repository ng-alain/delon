import { warn } from '../other';

export interface ZoneOptions {
  ngZoneName?: string;
}

function makeFn(
  type: 'runOutsideAngular' | 'run',
  options?: ZoneOptions,
): (target: any, fn: string, descriptor: PropertyDescriptor) => PropertyDescriptor {
  return (_, __, descriptor) => {
    const source = descriptor.value;
    descriptor.value = function (...data: any): Function {
      const that = this as any;
      const ngZone = that[options?.ngZoneName || 'ngZone'];
      if (!ngZone) {
        warn(`ZoneOutside: Decorator should have 'ngZone' property with 'NgZone' class.`);
        return source.call(this, ...data);
      }
      let res: any;
      ngZone[type](() => {
        console.log('in runOutsideAngular call');
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
export function ZoneOutside(options?: ZoneOptions) {
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
export function ZoneRun(options?: ZoneOptions) {
  return makeFn('run', options);
}
