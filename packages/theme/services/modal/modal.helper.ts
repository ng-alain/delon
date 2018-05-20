import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { NzModalService, ModalOptionsForService } from 'ng-zorro-antd';

/**
 * 对话框辅助类
 */
@Injectable()
export class ModalHelper {
  private zIndex = 500;

  constructor(private srv: NzModalService) {}

  /**
   * 打开对话框
   * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
   *
   * 对于组件的成功&关闭的处理说明：
   * 成功：
   *  this.NzModalRef.close(data);
   *  this.NzModalRef.close();
   *
   * 关闭：
   * this.NzModalRef.destroy();
   *
   * @param comp 组件
   * @param params 组件参数
   * @param size 大小；例如：lg、600，默认：lg
   * @param options 对话框 `ModalOptionsForService` 参数
   */
  open(
    comp: any,
    params?: any,
    size: 'sm' | 'lg' | '' | number = 'lg',
    options?: ModalOptionsForService,
  ): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      let cls = '',
        width = '';
      if (size) {
        if (typeof size === 'number') {
          width = `${size}px`;
        } else {
          cls = `modal-${size}`;
        }
      }
      const defaultOptions: ModalOptionsForService = {
        nzWrapClassName: cls,
        nzContent: comp,
        nzWidth: width ? width : undefined,
        nzFooter: null,
        nzComponentParams: params,
        nzZIndex: ++this.zIndex,
      };
      const subject = this.srv.create(Object.assign(defaultOptions, options));
      const afterClose$ = subject.afterClose.subscribe((res: any) => {
        observer.next(res);
        observer.complete();
        afterClose$.unsubscribe();
      });
    });
  }

  /**
   * 静态框，点击蒙层不允许关闭
   */
  static(
    comp: any,
    params?: any,
    size: 'sm' | 'lg' | '' | number = 'lg',
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
