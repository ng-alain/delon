import { Injectable } from '@angular/core';
import { deepMerge } from '@delon/util';
import { ModalOptionsForService, NzModalService } from 'ng-zorro-antd/modal';
import { Observable, Observer } from 'rxjs';

export interface ModalHelperOptions {
  /** 大小；例如：lg、600，默认：`lg` */
  size?: 'sm' | 'md' | 'lg' | 'xl' | '' | number;
  /** 对话框 [ModalOptionsForService](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/modal/nz-modal.type.ts) 参数 */
  modalOptions?: ModalOptionsForService;
  /** 是否精准（默认：`true`），若返回值非空值（`null`或`undefined`）视为成功，否则视为错误 */
  exact?: boolean;
  /** 是否包裹标签页，修复模态包含标签间距问题 */
  includeTabs?: boolean;
}

/**
 * 对话框辅助类
 */
@Injectable({ providedIn: 'root' })
export class ModalHelper {
  constructor(private srv: NzModalService) {}

  /**
   * 构建一个对话框
   *
   * @param comp 组件
   * @param params 组件参数
   * @param options 额外参数
   *
   * @example
   * this.modalHelper.create(FormEditComponent, { i }).subscribe(res => this.load());
   * // 对于组件的成功&关闭的处理说明
   * // 成功
   * this.NzModalRef.close(data);
   * this.NzModalRef.close();
   * // 关闭
   * this.NzModalRef.destroy();
   */
  create(comp: any, params?: any, options?: ModalHelperOptions): Observable<any> {
    options = deepMerge(
      {
        size: 'lg',
        exact: true,
        includeTabs: false,
      },
      options,
    );
    return new Observable((observer: Observer<any>) => {
      const { size, includeTabs, modalOptions } = options as ModalHelperOptions;
      let cls = '';
      let width = '';
      if (size) {
        if (typeof size === 'number') {
          width = `${size}px`;
        } else {
          cls = `modal-${size}`;
        }
      }
      if (includeTabs) {
        cls += ' modal-include-tabs';
      }
      if (modalOptions && modalOptions.nzWrapClassName) {
        cls += ` ${modalOptions.nzWrapClassName}`;
        delete modalOptions.nzWrapClassName;
      }
      const defaultOptions: ModalOptionsForService = {
        nzWrapClassName: cls,
        nzContent: comp,
        nzWidth: width ? width : undefined,
        nzFooter: null,
        nzComponentParams: params,
      };
      const subject = this.srv.create({ ...defaultOptions, ...modalOptions });
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
   * 构建静态框，点击蒙层不允许关闭
   *
   * @param comp 组件
   * @param params 组件参数
   * @param options 额外参数
   *
   * @example
   * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
   * // 对于组件的成功&关闭的处理说明
   * // 成功
   * this.NzModalRef.close(data);
   * this.NzModalRef.close();
   * // 关闭
   * this.NzModalRef.destroy();
   */
  createStatic(comp: any, params?: any, options?: ModalHelperOptions): Observable<any> {
    const modalOptions = {
      nzMaskClosable: false,
      ...(options && options.modalOptions),
    };
    return this.create(comp, params, { ...options, modalOptions });
  }

  /**
   * 打开对话框
   * @param comp 组件
   * @param params 组件参数
   * @param size 大小；例如：lg、600，默认：lg
   * @param options 对话框 `ModalOptionsForService` 参数
   *
   * @example
   * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
   * // 对于组件的成功&关闭的处理说明
   * // 成功
   * this.NzModalRef.close(data);
   * this.NzModalRef.close();
   * // 关闭
   * this.NzModalRef.destroy();
   */
  open(comp: any, params?: any, size: 'sm' | 'md' | 'lg' | 'xl' | '' | number = 'lg', options?: ModalOptionsForService): Observable<any> {
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
   * @example
   * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
   * // 对于组件的成功&关闭的处理说明
   * // 成功
   * this.NzModalRef.close(data);
   * this.NzModalRef.close();
   * // 关闭
   * this.NzModalRef.destroy();
   */
  static(comp: any, params?: any, size: 'sm' | 'md' | 'lg' | 'xl' | '' | number = 'lg', options?: any): Observable<any> {
    return this.open(comp, params, size, {
      nzMaskClosable: false,
      ...options,
    });
  }
}
