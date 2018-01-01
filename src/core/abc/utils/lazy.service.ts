import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { share } from 'rxjs/operators';

@Injectable()
export class LazyService {

    private list: any = {};
    private _notify: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

    constructor(@Inject(DOCUMENT) private doc: any) {}

    get change(): Observable<boolean> {
        return this._notify.asObservable().pipe(share());
    }

    load(paths: string | string[]): Promise<void> {
        const promises: Promise<any>[] = [];

        if (!Array.isArray(paths)) paths = [ paths ];

        paths.forEach(path => {
            if (path.endsWith('.js'))
                promises.push(this.loadScript(path));
            else
                promises.push(this.loadStyle(path));
        });

        return Promise.all(promises).then(res => {
            this._notify.next(true);
        });
    }

    loadScript(path: string): Promise<any> {
        return new Promise((resolve, reject) => {
            if (this.list[path] === true) {
                resolve(<any>{
                    path: path,
                    loaded: true,
                    status: 'Loaded'
                });
                return;
            }

            this.list[path] = true;

            const node = this.doc.createElement('script');
            node.type = 'text/javascript';
            node.src = path;
            node.charset = 'utf-8';
            if ((<any>node).readyState) { // IE
                (<any>node).onreadystatechange = () => {
                    if ((<any>node).readyState === 'loaded' || (<any>node).readyState === 'complete') {
                        (<any>node).onreadystatechange = null;
                        resolve(<any>{
                            path: path,
                            loaded: true,
                            status: 'Loaded'
                        });
                    }
                };
            } else {
                node.onload = () => {
                    resolve(<any>{
                        path: path,
                        loaded: true,
                        status: 'Loaded'
                    });
                };
            }
            node.onerror = (error: any) => resolve(<any>{
                path: path,
                loaded: false,
                status: 'Loaded'
            });
            this.doc.getElementsByTagName('head')[0].appendChild(node);
        });
    }

    loadStyle(path: string): Promise<any> {
        return new Promise((resolve, reject) => {
            if (this.list[path] === true) {
                resolve(<any>{
                    path: path,
                    loaded: true,
                    status: 'Loaded'
                });
                return;
            }

            this.list[path] = true;

            const node = this.doc.createElement('link');
            node.rel = 'stylesheet';
            node.type = 'text/css';
            node.href = path;
            this.doc.getElementsByTagName('head')[0].appendChild(node);
            resolve(<any>{
                path: path,
                loaded: true,
                status: 'Loaded'
            });
        });
    }
}
