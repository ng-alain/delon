import { createDragRef, DragRef } from '@angular/cdk/drag-drop';
import { DOCUMENT } from '@angular/common';
import { Injectable, Injector, TemplateRef, Type, inject } from '@angular/core';
import { SIGNAL, SignalNode } from '@angular/core/primitives/signals';
import { Observable, Observer, delay, take, tap } from 'rxjs';

import { deepMerge } from '@delon/util/other';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { ModalOptions, NzModalService } from 'ng-zorro-antd/modal';

const CLS_DRAG = 'MODAL-DRAG';

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

  /**
   * 设置焦点按钮
   */
  focus?: 'ok' | 'cancel';
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
  private readonly srv = inject(NzModalService);
  private readonly injector = inject(Injector);
  private readonly doc = inject(DOCUMENT);

  private buildDrag(options: ModalHelperDragOptions, wrapCls: string): DragRef {
    const wrapEl = this.doc.querySelector(wrapCls) as HTMLDivElement;
    const modalEl = wrapEl.firstChild as HTMLDivElement;
    const handelEl = options.handleCls ? wrapEl.querySelector<HTMLDivElement>(options.handleCls) : null;
    if (handelEl) {
      handelEl.classList.add(`${CLS_DRAG}-HANDLE`);
    }

    return createDragRef(this.injector, handelEl ?? modalEl)
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
    comp?: TemplateRef<NzSafeAny> | Type<NzSafeAny> | 'confirm' | 'info' | 'success' | 'error' | 'warning',
    params?: NzSafeAny | ModalHelperOptions | null,
    options?: ModalHelperOptions
  ): Observable<NzSafeAny> {
    const isBuildIn = typeof comp === 'string';
    options = deepMerge(
      {
        size: 'lg',
        exact: true,
        includeTabs: false
      },
      isBuildIn && arguments.length === 2 ? params : options
    );
    return new Observable((observer: Observer<NzSafeAny>) => {
      const { size, includeTabs, modalOptions, drag, useNzData, focus } = options as ModalHelperOptions;
      let cls: string[] = [];
      let width = '';
      if (size) {
        if (typeof size === 'number') {
          width = `${size}px`;
        } else if (['sm', 'md', 'lg', 'xl'].includes(size)) {
          cls.push(`modal-${size}`);
        } else {
          width = size;
        }
      }
      if (includeTabs) {
        cls.push(`modal-include-tabs`);
      }
      if (modalOptions && modalOptions.nzWrapClassName) {
        cls.push(modalOptions.nzWrapClassName);
        delete modalOptions.nzWrapClassName;
      }
      let dragOptions: ModalHelperDragOptions | null;
      let dragWrapCls = `${CLS_DRAG}-${+new Date()}`;
      let dragRef: DragRef | null;
      if (drag != null && drag !== false) {
        dragOptions = {
          handleCls: `.modal-header, .ant-modal-title`,
          ...(typeof drag === 'object' ? drag : {})
        };
        cls.push(CLS_DRAG, dragWrapCls);
      }
      const mth = isBuildIn ? this.srv[comp] : this.srv.create;
      const callOptions: ModalOptions = {
        nzWrapClassName: cls.join(' '),
        nzFooter: null,
        nzData: params,
        nzDraggable: false,
        ...modalOptions
      };
      if (!isBuildIn) callOptions.nzContent = comp;
      if (width) callOptions.nzWidth = width;
      const modalRef = mth.call(this.srv, callOptions);
      // 保留 nzComponentParams 原有风格，但依然可以通过 @Inject(NZ_MODAL_DATA) 获取
      if (modalRef.componentInstance != null && useNzData !== true && params != null) {
        Object.entries(params as object).forEach(([key, value]) => {
          const t = modalRef.componentInstance as any;
          const s = t[key]?.[SIGNAL] as SignalNode<any>;
          if (s != null) {
            s.value = value;
          } else {
            t[key] = value;
          }
        });
      }
      modalRef.afterOpen
        .pipe(
          take(1),
          delay(modalOptions?.nzNoAnimation ? 10 : 341),
          tap(() => {
            if (dragOptions != null) {
              dragRef = this.buildDrag(dragOptions, `.${dragWrapCls}`);
            }
          })
        )
        .subscribe(() => {
          if (focus == null) return;
          const btns = modalRef
            .getElement()
            .querySelector<HTMLDivElement>('.ant-modal-confirm-btns, .modal-footer')
            ?.querySelectorAll<HTMLButtonElement>('.ant-btn');
          const btnSize = btns?.length ?? 0;
          let el: HTMLButtonElement | null = null;
          if (btnSize === 1) {
            el = btns![0];
          } else if (btnSize > 1) {
            el = btns![focus === 'ok' ? 1 : 0];
          }
          if (el != null) {
            el.focus();
            el.dataset.focused = focus;
          }
        });
      modalRef.afterClose.pipe(take(1)).subscribe((res: NzSafeAny) => {
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
