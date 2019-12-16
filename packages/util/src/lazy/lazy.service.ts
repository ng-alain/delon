import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, share } from 'rxjs/operators';

export interface LazyResult {
  path: string;
  loaded: boolean;
  status: 'ok' | 'error';
  error?: {};
}

/**
 * 延迟加载资源（js 或 css）服务
 */
@Injectable({ providedIn: 'root' })
export class LazyService {
  private list: { [key: string]: boolean } = {};
  private cached: { [key: string]: LazyResult } = {};
  private _notify: BehaviorSubject<LazyResult[]> = new BehaviorSubject<LazyResult[]>([]);

  constructor(@Inject(DOCUMENT) private doc: any) { }

  get change(): Observable<LazyResult[]> {
    return this._notify.asObservable().pipe(
      share(),
      filter(ls => ls.length !== 0),
    );
  }

  clear(): void {
    this.list = {};
    this.cached = {};
  }

  load(paths: string | string[]): Promise<LazyResult[]> {
    if (!Array.isArray(paths)) {
      paths = [paths];
    }

    const promises: Array<Promise<LazyResult>> = [];
    paths.forEach(path => {
      if (path.endsWith('.js')) {
        promises.push(this.loadScript(path));
      } else {
        promises.push(this.loadStyle(path));
      }
    });

    return Promise.all(promises).then(res => {
      this._notify.next(res);
      return Promise.resolve(res);
    });
  }

  loadScript(path: string, innerContent?: string): Promise<LazyResult> {
    return new Promise(resolve => {
      if (this.list[path] === true) {
        resolve(this.cached[path]);
        return;
      }

      this.list[path] = true;
      const onSuccess = (item: LazyResult) => {
        this.cached[path] = item;
        resolve(item);
      };

      const node = this.doc.createElement('script') as any;
      node.type = 'text/javascript';
      node.src = path;
      node.charset = 'utf-8';
      if (innerContent) {
        node.innerHTML = innerContent;
      }
      if (node.readyState) {
        // IE
        node.onreadystatechange = () => {
          if (node.readyState === 'loaded' || node.readyState === 'complete') {
            node.onreadystatechange = null;
            onSuccess({
              path,
              loaded: true,
              status: 'ok',
            });
          }
        };
      } else {
        node.onload = () =>
          onSuccess({
            path,
            loaded: true,
            status: 'ok',
          });
      }
      node.onerror = (error: {}) =>
        onSuccess({
          path,
          loaded: false,
          status: 'error',
          error,
        });
      this.doc.getElementsByTagName('head')[0].appendChild(node);
    });
  }

  loadStyle(path: string, rel: string = 'stylesheet', innerContent?: string): Promise<LazyResult> {
    return new Promise(resolve => {
      if (this.list[path] === true) {
        resolve(this.cached[path]);
        return;
      }

      this.list[path] = true;

      const node = this.doc.createElement('link') as HTMLLinkElement;
      node.rel = rel;
      node.type = 'text/css';
      node.href = path;
      if (innerContent) {
        node.innerHTML = innerContent;
      }
      this.doc.getElementsByTagName('head')[0].appendChild(node);
      const item: LazyResult = {
        path,
        loaded: true,
        status: 'ok',
      };
      this.cached[path] = item;
      resolve(item);
    });
  }
}
