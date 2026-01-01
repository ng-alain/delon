import { CdkObserveContent } from '@angular/cdk/observers';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  Injector,
  TemplateRef,
  ViewEncapsulation,
  afterNextRender,
  booleanAttribute,
  computed,
  contentChild,
  effect,
  inject,
  input,
  linkedSignal,
  numberAttribute,
  runInInjectionContext,
  signal,
  viewChild
} from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { FormControlName, NgModel, RequiredValidator, Validator, Validators } from '@angular/forms';
import { filter, map, Subscription } from 'rxjs';

import { ResponsiveService } from '@delon/theme';
import { isEmpty } from '@delon/util/browser';
import { withAnimationCheck } from 'ng-zorro-antd/core/animation';
import { NzFormStatusService } from 'ng-zorro-antd/core/form';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';

import { SEContainerComponent } from './se-container.component';
import { SEErrorType } from './se.types';

const prefixCls = `se`;
let nextUniqueId = 0;

@Component({
  selector: 'se',
  exportAs: 'se',
  template: `
    @let _label = label();
    <div class="ant-form-item-label" [class.se__nolabel]="hideLabel() || !_label" [style.width.px]="_labelWidth()">
      @if (_label) {
        <label
          [attr.for]="_id()"
          class="se__label"
          [class.ant-form-item-required]="_required()"
          [class.se__no-colon]="_noColon()"
        >
          <span class="se__label-text">
            <ng-container *nzStringTemplateOutlet="_label">{{ _label }}</ng-container>
          </span>
          @let _optional = optional();
          @let _optionalHelp = optionalHelp();
          @if (_optional || _optionalHelp) {
            <span class="se__label-optional" [class.se__label-optional-no-text]="!_optional">
              <ng-container *nzStringTemplateOutlet="_optional">{{ _optional }}</ng-container>
              @if (_optionalHelp) {
                <nz-icon
                  nz-tooltip
                  [nzTooltipTitle]="_optionalHelp"
                  [nzTooltipColor]="optionalHelpColor()"
                  nzType="question-circle"
                />
              }
            </span>
          }
        </label>
      }
    </div>
    <div class="ant-form-item-control se__control">
      <div class="ant-form-item-control-input" [class]="controlClass()">
        <div class="ant-form-item-control-input-content" (cdkObserveContent)="checkContent()" #contentElement>
          <ng-content />
        </div>
      </div>
      @if (showErr()) {
        <div
          [animate.enter]="nzValidateAnimationEnter()"
          [animate.leave]="nzValidateAnimationLeave()"
          class="ant-form-item-explain ant-form-item-explain-connected"
        >
          <div role="alert" class="ant-form-item-explain-error">
            <ng-container *nzStringTemplateOutlet="errorText()">{{ errorText() }}</ng-container>
          </div>
        </div>
      }
      @let _extra = extra();
      @if (_extra && !compact()) {
        <div class="ant-form-item-extra">
          <ng-container *nzStringTemplateOutlet="_extra">{{ _extra }}</ng-container>
        </div>
      }
    </div>
  `,
  host: {
    '[style.padding-left.px]': 'paddingValue()',
    '[style.padding-right.px]': 'paddingValue()',
    '[class.se__hide-label]': 'hideLabel()',
    '[class.ant-form-item-has-error]': 'invalid()',
    '[class.ant-form-item-with-help]': 'showErr()',
    '[class.se__item-empty]': 'empty()',
    '[class]': 'cls()'
  },
  providers: [NzFormStatusService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [NzStringTemplateOutletDirective, NzTooltipDirective, NzIconDirective, CdkObserveContent]
})
export class SEComponent {
  private readonly parentComp = inject(SEContainerComponent, { host: true, optional: true })!;
  private readonly rep = inject(ResponsiveService);
  private readonly statusSrv = inject(NzFormStatusService);
  private readonly destroy$ = inject(DestroyRef);
  private readonly injector = inject(Injector);

  private readonly ngModel = contentChild(NgModel);
  private readonly formControlName = contentChild(FormControlName);
  private ngControl = computed(() => this.ngModel() ?? this.formControlName());
  private readonly contentElement = viewChild.required<ElementRef<HTMLElement>>('contentElement');
  private onceFlag = false;
  private bindModel$?: Subscription;
  protected empty = signal(false);

  // #region fields

  readonly optional = input<string | TemplateRef<void> | null>();
  readonly optionalHelp = input<string | TemplateRef<void> | null>();
  readonly optionalHelpColor = input<string>();
  error = input<SEErrorType>();
  readonly extra = input<string | TemplateRef<void> | null>();
  readonly label = input<string | TemplateRef<void> | null>();
  readonly col = input(null, { transform: (v: unknown) => (v == null ? null : numberAttribute(v)) });
  readonly required = input(false, { transform: booleanAttribute });
  readonly controlClass = input<string | null>();
  readonly line = input(null, { transform: (v: unknown) => (v == null ? null : booleanAttribute(v)) });
  readonly labelWidth = input(null, { transform: (v: unknown) => (v == null ? null : numberAttribute(v)) });
  readonly noColon = input(null, { transform: (v: unknown) => (v == null ? null : booleanAttribute(v)) });
  readonly hideLabel = input(false, { transform: booleanAttribute });
  readonly id = input<string>();

  // #endregion

  protected invalid = signal(false);
  protected showErr = computed(() => this.invalid() && !!this.errorText() && !this.compact());
  protected errorType = linkedSignal(() => this.error());
  protected errorData = computed(() => {
    const err = this.errorType();
    return typeof err === 'string' || err instanceof TemplateRef ? { '': err } : err;
  });
  protected errorText = signal<string | TemplateRef<void> | null>(null);
  protected _required = linkedSignal(() => this.required() === true);

  protected paddingValue = computed(() => this.parentComp._gutter() / 2);

  protected compact = computed(() => this.parentComp._size() === 'compact');
  protected _id = linkedSignal(() => this.id());
  protected _noColon = computed(() => {
    const noColon = this.noColon();
    return noColon != null ? noColon : this.parentComp!.noColon();
  });
  protected _labelWidth = computed(() => {
    const parent = this.parentComp!;
    const labelWidth = this.labelWidth();
    return parent.nzLayout() === 'horizontal' ? (labelWidth != null ? labelWidth : parent.labelWidth()) : null;
  });
  protected cls = computed(() => {
    const parent = this.parentComp!;
    const parentCol = parent.colInCon() ?? parent.col();
    const col = this.col();
    const repCls =
      parent.nzLayout() === 'horizontal' ? this.rep.genCls(col != null ? col : parentCol!, parentCol!) : [];
    const ret: string[] = [];
    ret.push(`ant-form-item`, ...repCls, `${prefixCls}__item`);
    if (this.line() || parent.line()) {
      ret.push(`${prefixCls}__line`);
    }
    return ret;
  });

  protected readonly nzValidateAnimationEnter = withAnimationCheck(() => 'ant-form-validate_animation-enter');
  protected readonly nzValidateAnimationLeave = withAnimationCheck(() => 'ant-form-validate_animation-leave');

  constructor() {
    if (this.parentComp == null) {
      throw new Error(`[se] must include 'se-container' component`);
    }

    toObservable(this.parentComp.errors)
      .pipe(
        takeUntilDestroyed(),
        map(ls => ls.find(w => this.ngControl()?.name === w.name)),
        filter(w => w != null)
      )
      .subscribe(item => {
        this.errorType.set(item.error);
        this.updateStatus();
      });

    effect(() => this.checkContent());

    effect(() => {
      const control = this.ngControl();
      if (!control) return;

      this.bindModel$?.unsubscribe();
      this.bindModel$ = control
        .statusChanges!.pipe(takeUntilDestroyed(this.destroy$))
        .subscribe(res => this.updateStatus(res === 'INVALID'));

      // set unique id
      let id = this.id() ?? `_se-${++nextUniqueId}`;
      const controlAccessor = this.ngControl()?.valueAccessor as NzSafeAny;
      const controlEl = (controlAccessor?.elementRef ?? controlAccessor?._elementRef)?.nativeElement as HTMLElement;
      if (controlEl) {
        if (controlEl.id) {
          this._id.set(controlEl.id);
        } else {
          controlEl.id = id;
        }
      }

      // auto required
      if (this.required() !== true) {
        let required = control?.control?.hasValidator(Validators.required);
        if (required !== true) {
          const rawValidators = (control as NzSafeAny)?._rawValidators as Validator[];
          required = rawValidators.find(w => w instanceof RequiredValidator) != null;
        }
        this._required.set(required);
      }
    });

    effect(() => {
      this.onceFlag = this.parentComp.firstVisual();
      if (!this.onceFlag) return;

      runInInjectionContext(this.injector, () => {
        afterNextRender(() => {
          this.updateStatus();
          this.onceFlag = false;
        });
      });
    });
  }

  private updateStatus(invalid?: boolean | null): void {
    const control = this.ngControl();
    if (!control || control.disabled || control.isDisabled) return;
    if (invalid == null) invalid = control.invalid;
    this.invalid.set(
      !this.onceFlag && invalid && this.parentComp.ingoreDirty() === false && !control?.dirty ? false : invalid!
    );
    const errors = control?.errors;
    if (errors != null && Object.keys(errors).length > 0) {
      const key = Object.keys(errors)[0] ?? '';
      const err = this.errorData()?.[key];
      this.errorText.set(err != null ? err : (this.errorData()?.[''] ?? ''));
    }

    this.statusSrv.formStatusChanges.next({ status: this.invalid() ? 'error' : '', hasFeedback: false });
  }

  checkContent(): void {
    const el = this.contentElement().nativeElement;
    this.empty.set(isEmpty(el));
  }
}
