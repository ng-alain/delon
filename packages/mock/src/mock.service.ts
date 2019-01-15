import { Injectable, OnDestroy } from '@angular/core';
import { MockCachedRule, MockRule } from './interface';
import { DelonMockConfig } from './mock.config';

@Injectable()
export class MockService implements OnDestroy {
  private cached: MockCachedRule[] = [];

  constructor(private config: DelonMockConfig) {
    this.applyMock();
    delete this.config.data;
  }

  // #region parse rule

  private applyMock() {
    this.cached = [];
    try {
      this.realApplyMock();
    } catch (e) {
      this.outputError(e);
    }
  }

  private realApplyMock() {
    const data = this.config.data;
    if (!data) return;
    Object.keys(data).forEach((key: string) => {
      const rules = data[key];
      if (!rules) return;
      Object.keys(rules).forEach((ruleKey: string) => {
        const value = rules[ruleKey];
        if (
          !(
            typeof value === 'function' ||
            typeof value === 'object' ||
            typeof value === 'string'
          )
        ) {
          throw Error(
            `mock value of [${key}-${ruleKey}] should be function or object or string, but got ${typeof value}`,
          );
        }
        const rule = this.genRule(ruleKey, value);
        if (
          ['GET', 'POST', 'PUT', 'HEAD', 'DELETE', 'PATCH', 'OPTIONS'].indexOf(
            rule.method,
          ) === -1
        ) {
          throw Error(`method of ${key}-${ruleKey} is not valid`);
        }
        const item = this.cached.find(
          w => w.url === rule.url && w.method === rule.method,
        );
        if (item) {
          item.callback = rule.callback;
        } else {
          this.cached.push(rule);
        }
      });
    });
    // regular ordering
    this.cached.sort(
      (a, b) =>
        (b.martcher || '').toString().length -
        (a.martcher || '').toString().length,
    );
  }

  // tslint:disable-next-line:no-any
  private genRule(key: string, callback: any): MockCachedRule {
    let method = 'GET';
    let url = key;

    if (key.indexOf(' ') > -1) {
      const splited = key.split(' ');
      method = splited[0].toLowerCase();
      url = splited[1];
    }

    let martcher: RegExp = null;
    let segments: string[] = [];
    if (~url.indexOf(':')) {
      segments = url!
        .split('/')
        .filter(segment => segment.startsWith(':'))
        .map(v => v.substring(1));
      const reStr = url!
        .split('/')
        .map(segment => (segment.startsWith(':') ? `([^/]+)` : segment))
        .join('/');
      martcher = new RegExp(`^${reStr}`, 'i');
    } else if (/(\([^)]+\))/i.test(url)) {
      martcher = new RegExp(url, 'i');
    }

    return {
      url,
      martcher,
      segments,
      callback,
      method: method.toUpperCase(),
    };
  }

  // tslint:disable-next-line:no-any
  private outputError(error: any) {
    const filePath = error.message.split(': ')[0];
    const errors = error.stack
      .split('\n')
      .filter(line => line.trim().indexOf('at ') !== 0)
      .map(line => line.replace(`${filePath}: `, ''));
    errors.splice(1, 0, ['']);

    console.group();
    console.warn(`==========Failed to parse mock config.==========`);
    console.log(errors.join('\n'));
    console.groupEnd();

    throw error;
  }

  // #endregion

  getRule(method: string, url: string): MockRule {
    method = (method || 'GET').toUpperCase();
    const params = {};
    const list =
      this.cached.filter(
        w =>
          w.method === method &&
          (w.martcher ? w.martcher.test(url) : w.url === url),
      );
    if (list.length === 0) return null;
    const ret = list.find(w => w.url === url) || list[0];
    if (ret.martcher) {
      const execArr = ret.martcher.exec(url);
      execArr.slice(1).map((value: string, index: number) => {
        params[ret.segments[index]] = value;
      });
    }
    return {
      url,
      method: ret.method,
      params,
      callback: ret.callback,
    };
  }

  clearCache() {
    this.cached = [];
  }

  get rules() {
    return this.cached;
  }

  ngOnDestroy(): void {
    this.clearCache();
  }
}
