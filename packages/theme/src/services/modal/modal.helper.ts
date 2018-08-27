import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { NzModalService, ModalOptionsForService } from 'ng-zorro-antd';

export interface ModalHelperOptions {
  /** 大小；例如：lg、600，默认：`lg` */
  size?: 'sm' | 'md' | 'lg' | 'xl' | '' | number;
  /** 对话框 `ModalOptionsForService` 参数 */
  modalOptions?: ModalOptionsForService;
  /** 是否精准（默认：`true`），若返回值非空值（`null`或`undefined`）视为成功，否则视为错误 */
  exact?: boolean;
  /** 是否包裹标签页 */
  includeTabs?: boolean;
}

/**
 * 对话框辅助类
 */
@Injectable({ providedIn: 'root' })
export class ModalHelper {
  private zIndex = 500;

  constructor(private srv: NzModalService) {}

  /**
   * 构建一个对话框
   *
   * @param comp 组件
   * @param params 组件参数
   * @param options 额外参数
   *
   * 示例：
  ```ts
this.modalHelper.create(FormEditComponent, { i }).subscribe(res => this.load());
// 对于组件的成功&关闭的处理说明
// 成功
this.NzModalRef.close(data);
this.NzModalRef.close();
// 关闭
this.NzModalRef.destroy();
```
   */
  create(
    comp: any,
    params?: any,
    options?: ModalHelperOptions
  ): Observable<any> {
    options = Object.assign({
      size: 'lg',
      exact: true,
      includeTabs: false,
    }, options);
    return Observable.create((observer: Observer<any>) => {
      let cls = '',
        width = '';
      if (options.size) {
        if (typeof options.size === 'number') {
          width = `${options.size}px`;
        } else {
          cls = `modal-${options.size}`;
        }
      }
      if (options.includeTabs) {
        cls += ' modal-include-tabs';
      }
      const defaultOptions: ModalOptionsForService = {
        nzWrapClassName: cls,
        nzContent: comp,
        nzWidth: width ? width : undefined,
        nzFooter: null,
        nzComponentParams: params,
        nzZIndex: ++this.zIndex,
      };
      const subject = this.srv.create(
        Object.assign(defaultOptions, options.modalOptions),
      );
      const afterClose$ = subject.afterClose.subscribe((res: any) => {
        if (options.exact === true) {
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
   * 构建静态框，点击蒙层不允许关闭
   *
   * @param comp 组件
   * @param params 组件参数
   * @param options 额外参数
   *
   * 示例：
  ```ts
this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
// 对于组件的成功&关闭的处理说明
// 成功
this.NzModalRef.close(data);
this.NzModalRef.close();
// 关闭
this.NzModalRef.destroy();
```
   */
  createStatic(
    comp: any,
    params?: any,
    options?: ModalHelperOptions
  ): Observable<any> {
    const modalOptions = Object.assign(
      { nzMaskClosable: false },
      options && options.modalOptions,
    );
    return this.create(comp, params, Object.assign({}, options, { modalOptions }));
  }

  /**
   * 打开对话框
   * @param comp 组件
   * @param params 组件参数
   * @param size 大小；例如：lg、600，默认：lg
   * @param options 对话框 `ModalOptionsForService` 参数
   *
   * 示例：
  ```ts
this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
// 对于组件的成功&关闭的处理说明
// 成功
this.NzModalRef.close(data);
this.NzModalRef.close();
// 关闭
this.NzModalRef.destroy();
```
   */
  open(
    comp: any,
    params?: any,
    size: 'sm' | 'md' | 'lg' | 'xl' | '' | number = 'lg',
    options?: ModalOptionsForService,
  ): Observable<any> {
    return this.create(comp, params, {
      size,
      modalOptions: options,
      exact: false,
    });
  }

  /**
   * 静态框，点击蒙层不允许关闭
   * @param comp 组件
   * @param params 组件参数
   * @param size 大小；例如：lg、600，默认：lg
   * @param options 对话框 `ModalOptionsForService` 参数
   *
   * 示例：
  ```ts
this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
// 对于组件的成功&关闭的处理说明
// 成功
this.NzModalRef.close(data);
this.NzModalRef.close();
// 关闭
this.NzModalRef.destroy();
```
   */
  static(
    comp: any,
    params?: any,
    size: 'sm' | 'md' | 'lg' | 'xl' | '' | number = 'lg',
    options?: any,
  ): Observable<any> {
    return this.open(
      comp,
      params,
      size,
      Object.assign(
        {
          nzMaskClosable: false,
        },
        options,
      ),
    );
  }
}
