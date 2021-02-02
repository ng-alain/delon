import { Injectable, TemplateRef, Type } from '@angular/core';
import { deepMerge } from '@delon/util/other';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzDrawerOptions, NzDrawerRef, NzDrawerService } from 'ng-zorro-antd/drawer';
import { Observable, Observer } from 'rxjs';

export interface DrawerHelperOptions {
  /**
   * 大小，若值为数值类型，则根据 `nzPlacement` 自动转化为 `nzHeight` 或 `nzWidth`；例如：lg、600，默认：`md`
   *
   * | 类型 | 默认大小 |
   * | --- | ------ |
   * | `sm` | `300` |
   * | `md` | `600` |
   * | `lg` | `900` |
   * | `xl` | `1200` |
   *
   * > 以上值，可通过覆盖相应的LESS参数自行调整
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  /**
   * 是否包含底部工具条，默认：`true`
   */
  footer?: boolean;
  /**
   * 底部工具条高度，默认：`55`
   */
  footerHeight?: number;
  /** 是否精准（默认：`true`），若返回值非空值（`null`或`undefined`）视为成功，否则视为错误 */
  exact?: boolean;
  /** 抽屉 [NzDrawerOptions](https://ng.ant.design/components/drawer/zh#nzdraweroptions) 参数 */
  drawerOptions?: NzDrawerOptions;
}

/**
 * 抽屉辅助类
 *
 * **注意：** 构建结果都可被订阅，但永远都不会触发 `observer.error`
 *
 * @example
 * this.drawerHelper.create('Edit', FormEditComponent, { i }).subscribe(res => this.load());
 * // 对于组件的成功&关闭的处理说明
 * // 成功
 * this.NzDrawerRef.close(data);
 * this.NzDrawerRef.close(true);
 * // 关闭
 * this.NzDrawerRef.close();
 * this.NzDrawerRef.close(false);
 */
@Injectable({ providedIn: 'root' })
export class DrawerHelper {
  constructor(private srv: NzDrawerService) {}

  /**
   * 构建一个抽屉
   */
  create(
    title: string | TemplateRef<{}> | undefined | null,
    comp:
      | TemplateRef<{
          $implicit: NzSafeAny;
          drawerRef: NzDrawerRef;
        }>
      | Type<NzSafeAny>,
    params?: NzSafeAny,
    options?: DrawerHelperOptions,
  ): Observable<any> {
    options = deepMerge(
      {
        size: 'md',
        footer: true,
        footerHeight: 50,
        exact: true,
        drawerOptions: {
          nzPlacement: 'right',
          nzWrapClassName: '',
        },
      },
      options,
    );
    return new Observable((observer: Observer<any>) => {
      const { size, footer, footerHeight, drawerOptions } = options as DrawerHelperOptions;
      const defaultOptions: NzDrawerOptions = {
        nzContent: comp,
        nzContentParams: params,
        nzTitle: title as NzSafeAny,
      };

      if (typeof size === 'number') {
        defaultOptions[
          drawerOptions!.nzPlacement === 'top' || drawerOptions!.nzPlacement === 'bottom' ? 'nzHeight' : 'nzWidth'
        ] = options!.size;
      } else if (!drawerOptions!.nzWidth) {
        defaultOptions.nzWrapClassName = (drawerOptions!.nzWrapClassName + ` drawer-${options!.size}`).trim();
        delete drawerOptions!.nzWrapClassName;
      }

      if (footer) {
        // The 24 value is @drawer-body-padding
        defaultOptions.nzBodyStyle = {
          'padding-bottom.px': footerHeight! + 24,
        };
      }

      const subject = this.srv.create({ ...defaultOptions, ...drawerOptions });
      const afterClose$ = subject.afterClose.subscribe((res: any) => {
        if (options!.exact === true) {
          if (res != null) {
            observer.next(res);
          }
        } else {
          observer.next(res);
        }
        observer.complete();
        afterClose$.unsubscribe();
      });
    });
  }

  /**
   * 构建一个抽屉，点击蒙层不允许关闭
   */
  static(
    title: string | TemplateRef<{}> | undefined | null,
    comp:
      | TemplateRef<{
          $implicit: NzSafeAny;
          drawerRef: NzDrawerRef;
        }>
      | Type<NzSafeAny>,
    params?: NzSafeAny,
    options?: DrawerHelperOptions,
  ): Observable<any> {
    const drawerOptions = {
      nzMaskClosable: false,
      ...(options && options.drawerOptions),
    };
    return this.create(title, comp, params, { ...options, drawerOptions });
  }
}
