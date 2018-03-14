import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { share, filter } from 'rxjs/operators';

export interface LazyResult {
    path: string;
    loaded: boolean;
    status: 'ok' | 'error';
}

@Injectable()
export class LazyService {

    private list: any = {};
    private cached: any = {};
    private _notify: BehaviorSubject<LazyResult[]> = new BehaviorSubject<LazyResult[]>([]);

    constructor(@Inject(DOCUMENT) private doc: Document) {}

    get change(): Observable<LazyResult[]> {
        return this._notify.asObservable().pipe(share(), filter(ls => ls.length !== 0));
    }

    clear(): void {
        this.list = {};
        this.cached = {};
    }

    load(paths: string | string[]): Promise<LazyResult[]> {

        if (!Array.isArray(paths)) paths = [ paths ];

        const promises: Promise<LazyResult>[] = [];
        paths.forEach(path => {
            if (path.includes('.js'))
                promises.push(this.loadScript(path));
            else
                promises.push(this.loadStyle(path));
        });

        return Promise.all(promises).then(res => {
            this._notify.next(res);
            return Promise.resolve(res);
        });
    }

    loadScript(path: string): Promise<LazyResult> {
        return new Promise((resolve) => {
            if (this.list[path] === true) {
                resolve(this.cached[path]);
                return;
            }

            this.list[path] = true;
            const onSuccess = (item: any) => {
                this.cached[path] = item;
                resolve(item);
            };

            const node = this.doc.createElement('script');
            node.type = 'text/javascript';
            node.src = path;
            node.charset = 'utf-8';
            if ((<any>node).readyState) { // IE
                (<any>node).onreadystatechange = () => {
                    if ((<any>node).readyState === 'loaded' || (<any>node).readyState === 'complete') {
                        (<any>node).onreadystatechange = null;
                        onSuccess({
                            path: path,
                            loaded: true,
                            status: 'ok'
                        });
                    }
                };
            } else {
                node.onload = () => {
                    onSuccess({
                        path: path,
                        loaded: true,
                        status: 'ok'
                    });
                };
            }
            node.onerror = (error: any) => onSuccess({
                path: path,
                loaded: false,
                status: 'error'
            });
            this.doc.getElementsByTagName('head')[0].appendChild(node);
        });
    }

    loadStyle(path: string): Promise<LazyResult> {
        return new Promise((resolve) => {
            if (this.list[path] === true) {
                resolve(this.cached[path]);
                return;
            }

            this.list[path] = true;
            const onSuccess = (item: any) => {
                this.cached[path] = item;
                resolve(item);
            };

            const node = this.doc.createElement('link');
            node.rel = 'stylesheet';
            node.type = 'text/css';
            node.href = path;
            this.doc.getElementsByTagName('head')[0].appendChild(node);
            onSuccess({
                path: path,
                loaded: true,
                status: 'ok'
            });
        });
    }
}
