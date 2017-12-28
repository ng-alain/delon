import { Injectable, OnDestroy, Inject } from '@angular/core';
import { DM_OPTIONS_TOKEN, MockOptions } from '../mock.options';
import { MockCachedRule, MockRule } from './interface';

@Injectable()
export class MockService implements OnDestroy {
    private cached: MockCachedRule[] = [];

    constructor(@Inject(DM_OPTIONS_TOKEN) private config: MockOptions) {
        this.applyMock();
        delete this.config.data;
    }

    // region: parse rule

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
                if (!(
                    typeof value === 'function' ||
                    typeof value === 'object' ||
                    typeof value === 'string'))
                    throw Error(`mock value of [${key}-${ruleKey}] should be function or object or string, but got ${typeof value}`);
                const rule = this.genRule(ruleKey, value);
                if (['GET', 'POST', 'PUT', 'HEAD', 'DELETE', 'PATCH', 'OPTIONS'].indexOf(rule.method) === -1) {
                    throw Error(`method of ${key}-${ruleKey} is not valid`);
                }
                const item = this.cached.find(w => w.url === rule.url && w.method === rule.method);
                if (item) {
                    item.callback = rule.callback;
                } else {
                    this.cached.push(rule);
                }
            });
        });
    }

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
            segments = url!.split('/').filter(segment => segment.startsWith(':')).map(v => v.substring(1));
            const reStr = url!.split('/').map(segment => segment.startsWith(':') ? `([^/]+)` : segment).join('/');
            martcher = new RegExp(reStr, 'i');
        }

        return {
            url,
            martcher,
            segments,
            callback,
            method: method.toUpperCase()
        };
    }

    private outputError(error: any) {
        if (!error) return;

        const filePath = error.message.split(': ')[0];
        const errors = error.stack.split('\n')
            .filter(line => line.trim().indexOf('at ') !== 0)
            .map(line => line.replace(`${filePath}: `, ''));
        errors.splice(1, 0, ['']);

        console.group();
        console.warn(`==========Failed to parse mock config.==========`);
        console.log(errors.join('\n'));
        console.groupEnd();

        throw error;
    }

    // endregion

    getRule(method: string, url: string): MockRule {
        method = (method || 'GET').toUpperCase();
        const params: any = {};
        const ret = this.cached.find(w => w.method === method && (w.martcher ? w.martcher.test(url) : w.url === url)) || null;
        if (!ret) return null;
        if (ret.martcher) {
            const execArr = ret.martcher.exec(url);
            if (execArr && execArr.length > 0) {
                execArr.slice(1).map((value: string, index: number) => {
                    params[ret.segments[index]] = value;
                });
            }
        }
        return {
            url,
            method: ret.method,
            params,
            callback: ret.callback
        };
    }

    clearCache() {
        this.cached = [];
    }

    ngOnDestroy(): void {
        this.clearCache();
    }
}
