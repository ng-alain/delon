import { CdkObserveContent } from '@angular/cdk/observers';
import { DOCUMENT, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Injector,
  ViewEncapsulation,
  afterNextRender,
  booleanAttribute,
  effect,
  inject,
  input,
  numberAttribute,
  runInInjectionContext,
  signal,
  viewChild
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'ellipsis',
  exportAs: 'ellipsis',
  template: `
    <div (cdkObserveContent)="refresh()" #orgEl style="display: none"><ng-content /></div>
    <ng-template #tooltipTpl let-con>
      @if (tooltip()) {
        <span
          nz-tooltip
          [nzTooltipTitle]="titleTpl"
          [nzTooltipOverlayStyle]="{ 'overflow-wrap': 'break-word', 'word-wrap': 'break-word' }"
        >
          <ng-container *ngTemplateOutlet="con" />
          <ng-template #titleTpl><div [innerHTML]="orgHtml()"></div></ng-template>
        </span>
      } @else {
        <ng-container *ngTemplateOutlet="con" />
      }
    </ng-template>
    @let c = cls();
    @switch (type()) {
      @case ('default') {
        <span [class]="c"></span>
      }
      @case ('length') {
        <ng-template [ngTemplateOutlet]="tooltipTpl" [ngTemplateOutletContext]="{ $implicit: lengthTpl }" />
        <ng-template #lengthTpl>{{ text() }}</ng-template>
      }
      @case ('line-clamp') {
        <ng-template [ngTemplateOutlet]="tooltipTpl" [ngTemplateOutletContext]="{ $implicit: lineClampTpl }" />
        <ng-template #lineClampTpl>
          <div [class]="c" [style]="{ '-webkit-line-clamp': lines(), '-webkit-box-orient': 'vertical' }"></div>
        </ng-template>
      }
      @case ('line') {
        <div [class]="c">
          <div class="ellipsis__handle">
            <ng-template [ngTemplateOutlet]="tooltipTpl" [ngTemplateOutletContext]="{ $implicit: lineTpl }" />
            <ng-template #lineTpl>{{ linsWord }}</ng-template>
            <div class="ellipsis__shadow" #shadowOrgEl [innerHTML]="orgHtml()"></div>
            <div class="ellipsis__shadow" #shadowTextEl>
              <span>{{ text() }}</span>
            </div>
          </div>
        </div>
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [CdkObserveContent, NzTooltipDirective, NgTemplateOutlet]
})
export class EllipsisComponent {
  private readonly el: HTMLElement = inject(ElementRef).nativeElement;
  private readonly injector = inject(Injector);
  private readonly dom = inject(DomSanitizer);
  private readonly doc = inject(DOCUMENT);
  private isSupportLineClamp = this.doc.body.style['webkitLineClamp'] !== undefined;
  private readonly orgEl = viewChild.required<ElementRef<HTMLElement>>('orgEl');
  private readonly shadowOrgEl = viewChild<ElementRef<HTMLElement>>('shadowOrgEl');
  private readonly shadowTextEl = viewChild<ElementRef<HTMLElement>>('shadowTextEl');
  protected orgHtml = signal<SafeHtml | null>(null);
  protected type = signal('default');
  protected cls = signal<Record<string, NzSafeAny>>({});
  readonly text = signal('');
  targetCount = 0;

  readonly tooltip = input(false, { transform: booleanAttribute });
  readonly length = input(null, {
    transform: (v: unknown) => (v == null ? null : numberAttribute(v))
  });
  readonly lines = input(null, {
    transform: (v: unknown) => (v == null ? null : numberAttribute(v))
  });
  readonly fullWidthRecognition = input(false, { transform: booleanAttribute });
  readonly tail = input('...');

  protected get linsWord(): string {
    const { targetCount, text, tail } = this;
    return (
      (targetCount > 0 ? text().substring(0, targetCount) : '') +
      (targetCount > 0 && targetCount < text().length ? tail() : '')
    );
  }

  private get win(): NzSafeAny {
    return this.doc.defaultView ?? window;
  }

  constructor() {
    effect(() => {
      this.refresh();
    });
  }

  private getStrFullLength(str: string): number {
    return str.split('').reduce((pre, cur) => {
      const charCode = cur.charCodeAt(0);
      if (charCode >= 0 && charCode <= 128) {
        return pre + 1;
      }
      return pre + 2;
    }, 0);
  }

  private cutStrByFullLength(str: string, maxLength: number): string {
    let showLength = 0;
    return str.split('').reduce((pre, cur) => {
      const charCode = cur.charCodeAt(0);
      if (charCode >= 0 && charCode <= 128) {
        showLength += 1;
      } else {
        showLength += 2;
      }
      if (showLength <= maxLength) {
        return pre + cur;
      }
      return pre;
    }, '');
  }

  private bisection(
    targetHeight: number,
    mid: number,
    begin: number,
    end: number,
    text: string,
    node: HTMLElement
  ): number {
    const suffix = this.tail();
    node.innerHTML = text.substring(0, mid) + suffix;
    let sh = node.offsetHeight;

    if (sh <= targetHeight) {
      node.innerHTML = text.substring(0, mid + 1) + suffix;
      sh = node.offsetHeight;
      if (sh > targetHeight || mid === begin) {
        return mid;
      }
      begin = mid;
      mid = end - begin === 1 ? begin + 1 : Math.floor((end - begin) / 2) + begin;
      return this.bisection(targetHeight, mid, begin, end, text, node);
    }
    if (mid - 1 < 0) {
      return mid;
    }
    node.innerHTML = text.substring(0, mid - 1) + suffix;
    sh = node.offsetHeight;
    if (sh <= targetHeight) {
      return mid - 1;
    }
    end = mid;
    mid = Math.floor((end - begin) / 2) + begin;
    return this.bisection(targetHeight, mid, begin, end, text, node);
  }

  private genType(): void {
    const lines = this.lines();
    const length = this.length();
    const isSupportLineClamp = this.isSupportLineClamp;
    this.cls.set({
      ellipsis: true,
      ellipsis__lines: lines && !isSupportLineClamp,
      'ellipsis__line-clamp': lines && isSupportLineClamp
    });
    if (!lines && !length) {
      this.type.set('default');
    } else if (!lines) {
      this.type.set('length');
    } else if (isSupportLineClamp) {
      this.type.set('line-clamp');
    } else {
      this.type.set('line');
    }
  }

  private gen(): void {
    const lines = this.lines();
    const length = this.length();
    const type = this.type();
    const { fullWidthRecognition, tail, orgEl } = this;
    if (type === 'length') {
      const lengthText = orgEl().nativeElement.textContent!;
      const textLength = fullWidthRecognition() ? this.getStrFullLength(lengthText) : lengthText.length;
      if (length == null || textLength <= length || length < 0) {
        this.text.set(lengthText);
      } else {
        let displayText: string;
        if (length - tail().length <= 0) {
          displayText = '';
        } else {
          displayText = fullWidthRecognition()
            ? this.cutStrByFullLength(lengthText, length)
            : lengthText.slice(0, length);
        }
        this.text.set(displayText + tail());
      }
    } else if (type === 'line') {
      const { shadowOrgEl, shadowTextEl } = this;
      const orgNode = shadowOrgEl()!.nativeElement;
      const lineText = orgNode.innerText ?? orgNode.textContent!;
      const lineHeight = parseInt(this.win.getComputedStyle(this.getEl('.ellipsis')).lineHeight!, 10);
      const targetHeight = lines! * lineHeight;
      const handleEl = this.getEl('.ellipsis__handle');
      handleEl!.style.height = `${targetHeight}px`;

      if (orgNode.offsetHeight <= targetHeight) {
        this.text.set(lineText);
        this.targetCount = lineText.length;
      } else {
        // bisection
        const len = lineText.length;
        const mid = Math.ceil(len / 2);

        const firstChild = shadowTextEl()!.nativeElement.firstChild as HTMLElement;
        const count = this.bisection(targetHeight, mid, 0, len, lineText, firstChild);
        this.text.set(lineText);
        this.targetCount = count;
      }
    }
  }

  private getEl(cls: string): HTMLElement | null {
    return this.el.querySelector<HTMLElement>(cls);
  }

  protected refresh(): void {
    this.genType();
    const { dom, orgEl } = this;
    const html = orgEl().nativeElement.innerHTML;
    this.orgHtml.set(dom.bypassSecurityTrustHtml(html));
    const type = this.type();
    runInInjectionContext(this.injector, () => {
      afterNextRender(() => {
        this.gen();
        if (type !== 'line') {
          const el = this.getEl('.ellipsis');
          if (el) {
            el.innerHTML = html;
          }
        }
      });
    });
  }
}
