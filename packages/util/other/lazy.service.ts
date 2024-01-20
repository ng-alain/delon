import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, filter, share } from 'rxjs';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

export interface LazyResult {
  path: string;
  status: 'ok' | 'error' | 'loading';
  error?: NzSafeAny;
}

export interface LazyLoadItem {
  path: string;
  options?: LazyLoadOptions;
}

export interface LazyLoadOptions {
  innerContent?: string;
  attributes?: { [qualifiedName: string]: string };
  rel?: string;
}

/**
 * `LazyService` delay loading JS or CSS files.
 *
 * 延迟加载资源（js 或 css）服务
 */
@Injectable({ providedIn: 'root' })
export class LazyService {
  private readonly doc = inject(DOCUMENT);

  private list: { [key: string]: boolean } = {};
  private cached: { [key: string]: LazyResult } = {};
  private _notify: BehaviorSubject<LazyResult[]> = new BehaviorSubject<LazyResult[]>([]);

  get change(): Observable<LazyResult[]> {
    return this._notify.asObservable().pipe(
      share(),
      filter(ls => ls.length !== 0)
    );
  }

  clear(): void {
    this.list = {};
    this.cached = {};
  }

  private attachAttributes(el: HTMLElement, attributes?: { [qualifiedName: string]: string }): void {
    if (attributes == null) return;

    Object.entries(attributes).forEach(([key, value]) => {
      el.setAttribute(key, value);
    });
  }

  /**
   * Load script or style files
   */
  load(paths: string | LazyLoadItem | Array<string | LazyLoadItem>): Promise<LazyResult[]> {
    if (!Array.isArray(paths)) {
      paths = [paths];
    }

    const promises: Array<Promise<LazyResult>> = [];
    paths
      .map(v => (typeof v !== 'object' ? ({ path: v } as LazyLoadItem) : v))
      .forEach(item => {
        if (item.path.endsWith('.js')) {
          promises.push(this.loadScript(item.path, item.options));
        } else {
          promises.push(this.loadStyle(item.path, item.options));
        }
      });

    return Promise.all(promises).then(res => {
      this._notify.next(res);
      return Promise.resolve(res);
    });
  }

  /**
   * Load a script file
   */
  loadScript(path: string, options?: LazyLoadOptions): Promise<LazyResult>;
  loadScript(
    path: string,
    innerContent?: string | LazyLoadOptions,
    attributes?: { [qualifiedName: string]: string }
  ): Promise<LazyResult> {
    const options: LazyLoadOptions =
      typeof innerContent === 'object'
        ? innerContent
        : {
            innerContent,
            attributes
          };
    return new Promise(resolve => {
      if (this.list[path] === true) {
        resolve({ ...this.cached[path], status: 'loading' });
        return;
      }

      this.list[path] = true;
      const onSuccess = (item: LazyResult): void => {
        this.cached[path] = item;
        resolve(item);
        this._notify.next([item]);
      };

      const node = this.doc.createElement('script') as HTMLScriptElement;
      node.type = 'text/javascript';
      node.src = path;
      this.attachAttributes(node, options.attributes);
      if (options.innerContent) {
        node.innerHTML = options.innerContent;
      }
      node.onload = () =>
        onSuccess({
          path,
          status: 'ok'
        });
      node.onerror = error =>
        onSuccess({
          path,
          status: 'error',
          error
        });
      this.doc.getElementsByTagName('head')[0].appendChild(node);
    });
  }

  /**
   * Load a style file
   */
  loadStyle(path: string, options?: LazyLoadOptions): Promise<LazyResult>;
  loadStyle(
    path: string,
    rel?: string | LazyLoadOptions,
    innerContent?: string,
    attributes?: { [qualifiedName: string]: string }
  ): Promise<LazyResult> {
    const options: LazyLoadOptions =
      typeof rel === 'object'
        ? rel
        : {
            rel,
            innerContent,
            attributes
          };
    return new Promise(resolve => {
      if (this.list[path] === true) {
        resolve(this.cached[path]);
        return;
      }

      this.list[path] = true;

      const node = this.doc.createElement('link') as HTMLLinkElement;
      node.rel = options.rel ?? 'stylesheet';
      node.type = 'text/css';
      node.href = path;
      this.attachAttributes(node, options.attributes);
      if (options.innerContent) {
        node.innerHTML = options.innerContent;
      }
      this.doc.getElementsByTagName('head')[0].appendChild(node);
      const item: LazyResult = {
        path,
        status: 'ok'
      };
      this.cached[path] = item;
      resolve(item);
    });
  }
}
