import { DragDrop, DragRef } from '@angular/cdk/drag-drop';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, TemplateRef, Type } from '@angular/core';
import { Observable, Observer, filter, take } from 'rxjs';

import { deepMerge } from '@delon/util/other';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { ModalOptions, NzModalService } from 'ng-zorro-antd/modal';

export interface ModalHelperOptions {
  /** 大小；例如：lg、600、80%，默认：`lg` */
  size?: 'sm' | 'md' | 'lg' | 'xl' | '' | number | string;
  /** 对话框 [ModalOptions](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/modal/modal-types.ts) 参数 */
  modalOptions?: ModalOptions;
  /** 是否精准（默认：`true`），若返回值非空值（`null`或`undefined`）视为成功，否则视为错误 */
  exact?: boolean;
  /** 是否包裹标签页，修复模态包含标签间距问题 */
  includeTabs?: boolean;
  /**
   * 是否支持拖动，默认是通过标题来触发
   */
  drag?: ModalHelperDragOptions | boolean;
  /**
   * 是否强制使用 `nzData` 传递参数，若为 `false` 表示参数会直接映射到组件实例中，其他值只能通过 `NZ_MODAL_DATA` 的方式来获取参数，默认：`false`
   */
  useNzData?: boolean;
}

export interface ModalHelperDragOptions {
  /**
   * 指定拖地区域的类名，若指定为 `null` 时表示整个对话框，默认：`.modal-header, .ant-modal-title`
   */
  handleCls?: string | null;
}

/**
 * 对话框辅助类
 */
@Injectable({ providedIn: 'root' })
export class ModalHelper {
  private document: Document;
  private dragClsPrefix = 'MODAL-DRAG';

  constructor(
    private srv: NzModalService,
    private drag: DragDrop,
    @Inject(DOCUMENT) doc: NzSafeAny
  ) {
    this.document = doc;
  }

  private createDragRef(options: ModalHelperDragOptions, wrapCls: string): DragRef {
    const wrapEl = this.document.querySelector(wrapCls) as HTMLDivElement;
    const modalEl = wrapEl.firstChild as HTMLDivElement;
    const handelEl = options.handleCls ? wrapEl.querySelector<HTMLDivElement>(options.handleCls) : null;
    if (handelEl) {
      handelEl.classList.add(`${this.dragClsPrefix}-HANDLE`);
    }

    return this.drag
      .createDrag(handelEl ?? modalEl)
      .withHandles([handelEl ?? modalEl])
      .withBoundaryElement(wrapEl)
      .withRootElement(modalEl);
  }

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
   * // 成功，其中 `nzModalRef` 指目标组件在构造函数 `NzModalRef` 变量名
   * this.nzModalRef.close(data);
   * this.nzModalRef.close();
   * // 关闭
   * this.nzModalRef.destroy();
   */
  create(
    comp: TemplateRef<NzSafeAny> | Type<NzSafeAny>,
    params?: NzSafeAny,
    options?: ModalHelperOptions
  ): Observable<NzSafeAny> {
    options = deepMerge(
      {
        size: 'lg',
        exact: true,
        includeTabs: false
      },
      options
    );
    return new Observable((observer: Observer<NzSafeAny>) => {
      const { size, includeTabs, modalOptions, drag, useNzData } = options as ModalHelperOptions;
      let cls = '';
      let width = '';
      if (size) {
        if (typeof size === 'number') {
          width = `${size}px`;
        } else if (['sm', 'md', 'lg', 'xl'].includes(size)) {
          cls = `modal-${size}`;
        } else {
          width = size;
        }
      }
      if (includeTabs) {
        cls += ' modal-include-tabs';
      }
      if (modalOptions && modalOptions.nzWrapClassName) {
        cls += ` ${modalOptions.nzWrapClassName}`;
        delete modalOptions.nzWrapClassName;
      }
      let dragOptions: ModalHelperDragOptions | null;
      let dragWrapCls = `${this.dragClsPrefix}-${+new Date()}`;
      let dragRef: DragRef | null;
      if (drag != null && drag !== false) {
        dragOptions = {
          handleCls: `.modal-header, .ant-modal-title`,
          ...(typeof drag === 'object' ? drag : {})
        };
        cls += ` ${this.dragClsPrefix} ${dragWrapCls}`;
      }
      const subject = this.srv.create({
        nzWrapClassName: cls,
        nzContent: comp,
        nzWidth: width ? width : undefined,
        nzFooter: null,
        nzData: params,
        ...modalOptions
      });
      // 保留 nzComponentParams 原有风格，但依然可以通过 @Inject(NZ_MODAL_DATA) 获取
      if (useNzData !== true) {
        Object.assign(subject.componentInstance, params);
      }
      subject.afterOpen
        .pipe(
          take(1),
          filter(() => dragOptions != null)
        )
        .subscribe(() => {
          dragRef = this.createDragRef(dragOptions!!, `.${dragWrapCls}`);
        });
      subject.afterClose.pipe(take(1)).subscribe((res: NzSafeAny) => {
        if (options!.exact === true) {
          if (res != null) {
            observer.next(res);
          }
        } else {
          observer.next(res);
        }
        observer.complete();
        dragRef?.dispose();
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
   * // 成功，其中 `nzModalRef` 指目标组件在构造函数 `NzModalRef` 变量名
   * this.nzModalRef.close(data);
   * this.nzModalRef.close();
   * // 关闭
   * this.nzModalRef.destroy();
   */
  createStatic(
    comp: TemplateRef<NzSafeAny> | Type<NzSafeAny>,
    params?: NzSafeAny,
    options?: ModalHelperOptions
  ): Observable<NzSafeAny> {
    const modalOptions = {
      nzMaskClosable: false,
      ...(options && options.modalOptions)
    };
    return this.create(comp, params, { ...options, modalOptions });
  }
}
