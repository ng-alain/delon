import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Injector, OnDestroy, Optional } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, map, delay, isObservable, switchMap, Subject, takeUntil, Subscription } from 'rxjs';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { AlainI18NService, ALAIN_I18N_TOKEN } from '../i18n/i18n';
import { MenuService } from '../menu/menu.service';

export interface RouteTitle {
  title?: string | Observable<string>;
  titleI18n?: string;
}

@Injectable({ providedIn: 'root' })
export class TitleService implements OnDestroy {
  private _prefix: string = '';
  private _suffix: string = '';
  private _separator: string = ' - ';
  private _reverse: boolean = false;
  private destroy$ = new Subject<void>();
  private tit$?: Subscription;

  readonly DELAY_TIME = 25;

  constructor(
    private injector: Injector,
    private title: Title,
    private menuSrv: MenuService,
    @Optional()
    @Inject(ALAIN_I18N_TOKEN)
    private i18nSrv: AlainI18NService,
    @Inject(DOCUMENT) private doc: NzSafeAny
  ) {
    this.i18nSrv.change.pipe(takeUntil(this.destroy$)).subscribe(() => this.setTitle());
  }

  /**
   * Set separator
   *
   * 设置分隔符
   */
  set separator(value: string) {
    this._separator = value;
  }

  /**
   * Set prefix
   *
   * 设置前缀
   */
  set prefix(value: string) {
    this._prefix = value;
  }

  /**
   * Set suffix
   *
   * 设置后缀
   */
  set suffix(value: string) {
    this._suffix = value;
  }

  /**
   * Set whether to reverse
   *
   * 设置是否反转
   */
  set reverse(value: boolean) {
    this._reverse = value;
  }

  /**
   * Set the default CSS selector string
   *
   * 设置默认CSS选择器字符串
   */
  selector?: string | null;

  /**
   * Set default title name
   *
   * 设置默认标题名
   */
  default = `Not Page Name`;

  private getByElement(): Observable<string> {
    return of('').pipe(
      delay(this.DELAY_TIME),
      map(() => {
        const el = ((this.selector != null ? this.doc.querySelector(this.selector) : null) ||
          this.doc.querySelector('.alain-default__content-title h1') ||
          this.doc.querySelector('.page-header__title')) as HTMLElement;
        if (el) {
          let text = '';
          el.childNodes.forEach(val => {
            if (!text && val.nodeType === 3) {
              text = val.textContent!.trim();
            }
          });
          return text || el.firstChild!.textContent!.trim();
        }
        return '';
      })
    );
  }

  private getByRoute(): Observable<string> {
    let next = this.injector.get(ActivatedRoute);
    while (next.firstChild) next = next.firstChild;
    const data: RouteTitle = (next.snapshot && next.snapshot.data) || {};
    if (data.titleI18n && this.i18nSrv) data.title = this.i18nSrv.fanyi(data.titleI18n);
    return isObservable(data.title) ? data.title : of(data.title!);
  }

  private getByMenu(): Observable<string> {
    const menus = this.menuSrv.getPathByUrl(this.injector.get<Router>(Router).url);
    if (!menus || menus.length <= 0) return of('');

    const item = menus[menus.length - 1];
    let title;
    if (item.i18n && this.i18nSrv) title = this.i18nSrv.fanyi(item.i18n);
    return of(title || item.text!);
  }

  /**
   * Set the document title
   */
  setTitle(title?: string | string[]): void {
    this.tit$?.unsubscribe();
    this.tit$ = of(title)
      .pipe(
        switchMap(tit => (tit ? of(tit) : this.getByRoute())),
        switchMap(tit => (tit ? of(tit) : this.getByMenu())),
        switchMap(tit => (tit ? of(tit) : this.getByElement())),
        map(tit => tit || this.default),
        map(title => (!Array.isArray(title) ? [title] : title)),
        takeUntil(this.destroy$)
      )
      .subscribe(titles => {
        let newTitles: string[] = [];
        if (this._prefix) {
          newTitles.push(this._prefix);
        }
        newTitles.push(...(titles as string[]));
        if (this._suffix) {
          newTitles.push(this._suffix);
        }
        if (this._reverse) {
          newTitles = newTitles.reverse();
        }
        this.title.setTitle(newTitles.join(this._separator));
      });
  }

  /**
   * Set i18n key of the document title
   */
  setTitleByI18n(key: string, params?: unknown): void {
    this.setTitle(this.i18nSrv.fanyi(key, params));
  }

  ngOnDestroy(): void {
    this.tit$?.unsubscribe();
    this.destroy$.next();
    this.destroy$.complete();
  }
}
