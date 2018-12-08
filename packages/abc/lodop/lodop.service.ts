import { Injectable, OnDestroy } from '@angular/core';
import { of, Observable, Subject } from 'rxjs';

import { LazyService } from '@delon/util';

import { LodopConfig } from './lodop.config';
import { Lodop, LodopPrintResult, LodopResult } from './lodop.types';

@Injectable({ providedIn: 'root' })
export class LodopService implements OnDestroy {
  private _cog: LodopConfig;
  private pending = false;
  private _lodop: Lodop = null;
  private _init: Subject<LodopResult> = new Subject<LodopResult>();
  private _events: Subject<LodopPrintResult> = new Subject<LodopPrintResult>();

  constructor(private defCog: LodopConfig, private scriptSrv: LazyService) {
    this.cog = defCog;
  }

  /**
   * 获取或重新设置配置
   *
   * **注：**重新设置会倒置重新加载脚本资源
   */
  get cog() {
    return this._cog;
  }
  set cog(value: LodopConfig) {
    this._cog = {
      url: 'https://localhost:8443/CLodopfuncs.js',
      name: 'CLODOP',
      companyName: '',
      checkMaxCount: 100,
      ...this.defCog,
      ...value,
    };
  }

  /** 事件变更通知 */
  get events(): Observable<LodopPrintResult> {
    return this._events.asObservable();
  }

  private check() {
    if (!this._lodop) throw new Error(`请务必先调用 lodop 获取对象`);
  }

  private request(): void {
    this.pending = true;

    const url = `${this.cog.url}?name=${this.cog.name}`;
    let checkMaxCount = this.cog.checkMaxCount;
    const onResolve = (status, error?: {}) => {
      this._init.next({
        ok: status === 'ok',
        status,
        error,
        lodop: this._lodop,
      });
    };
    const checkStatus = () => {
      --checkMaxCount;
      if (this._lodop.webskt && this._lodop.webskt.readyState === 1) {
        onResolve('ok');
      } else {
        if (checkMaxCount < 0) {
          onResolve('check-limit');
          return;
        }
        setTimeout(() => checkStatus(), 100);
      }
    };

    this.scriptSrv.loadScript(url).then((res) => {
      if (res.status !== 'ok') {
        this.pending = false;
        onResolve('script-load-error', res[0]);
        return;
      }
      this._lodop =
        window.hasOwnProperty(this.cog.name) &&
        (window[this.cog.name] as Lodop);
      if (this._lodop === null) {
        onResolve('load-variable-name-error', { name: this.cog.name });
        return;
      }
      this._lodop.SET_LICENSES(
        this.cog.companyName,
        this.cog.license,
        this.cog.licenseA,
        this.cog.licenseB,
      );
      checkStatus();
    });
  }

  /** 重置 lodop 对象 */
  reset() {
    this._lodop = null;
    this.pending = false;
    this.request();
  }

  /** 获取 lodop 对象 */
  get lodop(): Observable<LodopResult> {
    if (this._lodop) return of({ ok: true, lodop: this._lodop } as LodopResult);
    if (this.pending) return this._init.asObservable();

    this.request();

    return this._init.asObservable();
  }

  /** 获取打印机列表 */
  get printer(): string[] {
    this.check();
    const ret: string[] = [];
    const count = this._lodop.GET_PRINTER_COUNT();
    for (let index = 0; index < count; index++) {
      ret.push(this._lodop.GET_PRINTER_NAME(index));
    }
    return ret;
  }

  /**
   * 附加代码至 `lodop` 对象上，字符串类支持 `{{key}}` 的动态参数
   *
   * **注：** 代码是指打印设计所产生字符串数据
   *
   * @param code 代码
   * @param contextObj 动态参数上下文对象
   * @param parser 自定义解析表达式，默认：`/LODOP\.([^(]+)\(([^\n]+)\);/i`
   */
  attachCode(code: string, contextObj?: {}, parser?: RegExp): void {
    this.check();
    if (!parser) parser = /LODOP\.([^(]+)\(([^\n]+)\);/i;
    code.split('\n').forEach(line => {
      const res = parser.exec(line.trim());
      if (!res) return;
      const fn = this._lodop[res[1]];
      if (fn) {
        // tslint:disable-next-line:no-any
        let arr: any[];
        try {
          const fakeFn = new Function(`return [${res[2]}]`);
          arr = fakeFn();
        } catch { }

        if (Array.isArray(arr) && contextObj) {
          for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'string') {
              arr[i] = arr[i].replace(
                /{{(.*?)}}/g,
                (match, key) => contextObj[key.trim()] || '',
              );
            }
          }
        }
        fn.apply(this._lodop, arr);
      }
    });
  }

  /**
   * 打开打印设计关闭后自动返回代码
   *
   * **注：** 自动监听 `On_Return` 事件，运行后会移除
   */
  design(): Promise<string> {
    this.check();
    const tid = this._lodop.PRINT_DESIGN();
    return new Promise(resolve => {
      this._lodop.On_Return = (taskID: string, value: boolean | string) => {
        if (tid !== taskID) return;
        this._lodop.On_Return = null;
        resolve('' + value);
      };
    });
  }

  // tslint:disable-next-line:no-any
  private printBuffer: any[] = [];
  private printDo() {
    const data = this.printBuffer.shift();
    if (!data) return;
    this.attachCode(data.code, data.item, data.parser);
    const tid = this._lodop.PRINT();
    this._lodop.On_Return = (taskID: string, value: boolean | string) => {
      if (tid !== taskID) return;
      this._lodop.On_Return = null;
      this._events.next({
        ok: value === true,
        error: value === true ? null : value,
        ...data,
      });
      this.printDo();
    };
  }

  /**
   * 立即打印，一般用于批量套打
   *
   * @param code 代码
   * @param contextObj 动态参数上下文对象
   * @param parser 自定义解析表达式，默认：`/LODOP\.([^(]+)\(([^\n]+)\);/i`
   */
  print(code: string, contextObj: {} | Array<{}>, parser?: RegExp): void {
    this.check();
    if (contextObj) {
      this.printBuffer.push(
        ...(Array.isArray(contextObj) ? contextObj : [contextObj]).map(item => {
          return { code, parser, item };
        }),
      );
    }
    this.printDo();
  }

  ngOnDestroy(): void {
    this._init.unsubscribe();
    this._events.unsubscribe();
  }
}
