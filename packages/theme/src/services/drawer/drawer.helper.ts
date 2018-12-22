// tslint:disable:no-any
import { Injectable } from '@angular/core';
import { NzDrawerOptions, NzDrawerService } from 'ng-zorro-antd';
import { Observable, Observer } from 'rxjs';

export interface DrawerHelperOptions {
  /**
   * 大小；例如：lg、600，默认：`md`
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
  /** 抽屉 [NzDrawerOptions](https://ng.ant.design/components/drawer/zh#nzdraweroptions) 参数 */
  drawerOptions?: NzDrawerOptions;
}

/**
 * 抽屉辅助类
 *
 * **注意：** 构建结果都可被订阅，但永远都不会触发 `observer.error`
 *
 * 示例：
```ts
this.drawerHelper.create('Edit', FormEditComponent, { i }).subscribe(res => this.load());
// 对于组件的成功&关闭的处理说明
// 成功
this.NzDrawerRef.close(data);
this.NzDrawerRef.close(true);
// 关闭
this.NzDrawerRef.close();
this.NzDrawerRef.close(false);
```
 */
@Injectable({ providedIn: 'root' })
export class DrawerHelper {
  // 大部分情况下抽屉的层级比 Modal 会更低一些
  private zIndex = 400;

  constructor(private srv: NzDrawerService) { }

  /**
   * 构建一个抽屉
   */
  create(
    title: string,
    comp: any,
    params?: any,
    options?: DrawerHelperOptions,
  ): Observable<any> {
    options = {
      size: 'md',
      footer: true,
      footerHeight: 55,
      drawerOptions: {
        nzPlacement: 'right',
        nzWrapClassName: '',
      },
      ...options,
    };
    return new Observable((observer: Observer<any>) => {
      const { size, footer, footerHeight, drawerOptions } = options;
      const defaultOptions: NzDrawerOptions = {
        nzContent: comp,
        nzContentParams: params,
        nzZIndex: ++this.zIndex,
        nzTitle: title,
      };

      if (footer) {
        defaultOptions.nzBodyStyle = {
          'height': `calc(100% - ${footerHeight}px)`,
          'overflow': 'auto',
          'padding-bottom': `${footerHeight - 2}px`,
        };
      }

      if (typeof size === 'number') {
        defaultOptions[drawerOptions.nzPlacement === 'top' || drawerOptions.nzPlacement === 'bottom' ? 'nzHeight' : 'nzWidth'] = options.size;
      } else {
        defaultOptions.nzWrapClassName = (drawerOptions.nzWrapClassName + ` drawer-${options.size}`).trim();
        delete drawerOptions.nzWrapClassName;
      }

      const subject = this.srv.create(
        { ...defaultOptions, ...drawerOptions },
      );
      const afterClose$ = subject.afterClose.subscribe((res: any) => {
        if (res != null && res !== false) {
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
    title: string,
    comp: any,
    params?: any,
    options?: DrawerHelperOptions,
  ): Observable<any> {
    const drawerOptions = {
      nzMaskClosable: false,
      ...(options && options.drawerOptions),
    };
    return this.create(title, comp, params, { ...options, drawerOptions });
  }
}
