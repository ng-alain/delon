import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, debounceTime, switchMap, take, takeUntil, timer } from 'rxjs';

import { NzInputModule } from 'ng-zorro-antd/input';

import { SFStringWidgetSchema } from './schema';
import { SFValue } from '../../interface';
import { SFItemWrapComponent } from '../../sf-item-wrap.component';
import { ControlUIWidget } from '../../widget';

@Component({
  selector: 'sf-string',
  template: `
    @let maxLength = schema.maxLength ?? null;
    @let inputType = ui.type ?? 'text';
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      @if (type === 'addon') {
        <nz-input-wrapper
          [nzAddonBefore]="ui.addOnBefore"
          [nzAddonAfter]="ui.addOnAfter"
          [nzPrefix]="ui.prefix"
          [nzSuffix]="ui.suffix"
          [nzAllowClear]="ui.allowClear"
        >
          <input
            nz-input
            [attr.id]="id"
            [disabled]="disabled"
            [attr.disabled]="disabled"
            [nzSize]="ui.size!"
            [nzVariant]="ui.variant ?? 'outlined'"
            [ngModel]="value"
            [ngModelOptions]="{ standalone: true }"
            (ngModelChange)="change($event)"
            [attr.maxLength]="maxLength"
            [attr.type]="inputType"
            [attr.placeholder]="ui.placeholder"
            [attr.autocomplete]="ui.autocomplete"
            [attr.autoFocus]="ui.autofocus"
            (keyup.enter)="enter($event)"
            (focus)="focus($event)"
            (blur)="blur($event)"
          />
        </nz-input-wrapper>
      } @else {
        <input
          nz-input
          [attr.id]="id"
          [disabled]="disabled"
          [attr.disabled]="disabled"
          [nzSize]="ui.size!"
          [nzVariant]="ui.variant!"
          [ngModel]="value"
          [ngModelOptions]="{ standalone: true }"
          (ngModelChange)="change($event)"
          [attr.maxLength]="maxLength"
          [attr.type]="inputType"
          [attr.placeholder]="ui.placeholder"
          [attr.autocomplete]="ui.autocomplete"
          [attr.autoFocus]="ui.autofocus"
          (keyup.enter)="enter($event)"
          (focus)="focus($event)"
          (blur)="blur($event)"
        />
      }
    </sf-item-wrap>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [FormsModule, NzInputModule, SFItemWrapComponent]
})
export class StringWidget extends ControlUIWidget<SFStringWidgetSchema> implements OnInit {
  type!: string;
  private change$: BehaviorSubject<string> | null = null;

  ngOnInit(): void {
    const {
      addOnAfter,
      addOnAfterIcon,
      addOnBefore,
      addOnBeforeIcon,
      prefix,
      prefixIcon,
      suffix,
      suffixIcon,
      allowClear,
      autofocus
    } = this.ui;
    this.type =
      addOnAfter || addOnBefore || addOnAfterIcon || addOnBeforeIcon || prefix || prefixIcon || suffix || suffixIcon
        ? 'addon'
        : '';
    if (allowClear === true && this.type === '') {
      this.type = 'addon';
    }
    if (autofocus === true) {
      // `ngOnInit` 时输入框尚未渲染：等一拍再按 id 聚焦；widget 在这之前被销毁则不再执行
      timer(20)
        .pipe(takeUntil(this.sfItemComp.destroy$), take(1))
        .subscribe(() => {
          const root = this.injector.get(ElementRef).nativeElement as HTMLElement;
          (root.querySelector(`#${this.id}`) as HTMLElement).focus();
        });
    }
    this.initChange();
  }

  reset(value: SFValue): void {
    if (!value && this.schema.format === 'color') {
      this.setValue('#000000');
    }
  }

  private initChange(): void {
    const dueTime = this.ui.changeDebounceTime;
    const changeFn = this.ui.change;
    if (dueTime == null || dueTime <= 0 || changeFn == null) return;

    this.change$ = new BehaviorSubject<string>(this.value);
    let obs = this.change$.asObservable().pipe(debounceTime(dueTime), takeUntil(this.sfItemComp.destroy$));
    if (this.ui.changeMap != null) {
      obs = obs.pipe(switchMap(this.ui.changeMap));
    }
    obs.subscribe(val => changeFn(val));
  }

  change(val: string): void {
    this.setValue(val);
    if (this.change$ != null) {
      this.change$.next(val);
      return;
    }
    this.ui.change?.(val);
  }

  focus(e: FocusEvent): void {
    this.ui.focus?.(e);
  }

  blur(e: FocusEvent): void {
    this.ui.blur?.(e);
  }

  enter(e: Event): void {
    this.ui.enter?.(e);
  }
}
