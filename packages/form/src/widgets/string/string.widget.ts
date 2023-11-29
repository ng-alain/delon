import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, debounceTime, switchMap, takeUntil } from 'rxjs';

import { SFStringWidgetSchema } from './schema';
import { SFValue } from '../../interface';
import { ControlUIWidget } from '../../widget';

@Component({
  selector: 'sf-string',
  template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <ng-template #ipt>
      <input
        nz-input
        [attr.id]="id"
        [disabled]="disabled"
        [attr.disabled]="disabled"
        [nzSize]="ui.size!"
        [nzBorderless]="ui.borderless"
        [ngModel]="value"
        (ngModelChange)="change($event)"
        [attr.maxLength]="schema.maxLength || null"
        [attr.type]="ui.type || 'text'"
        [attr.placeholder]="ui.placeholder"
        [attr.autocomplete]="ui.autocomplete"
        [attr.autoFocus]="ui.autofocus"
        (keyup.enter)="enter($event)"
        (focus)="focus($event)"
        (blur)="blur($event)"
      />
    </ng-template>

    @if (type === 'addon') {
      <nz-input-group
        [nzAddOnBefore]="ui.addOnBefore"
        [nzAddOnAfter]="ui.addOnAfter"
        [nzAddOnBeforeIcon]="ui.addOnBeforeIcon"
        [nzAddOnAfterIcon]="ui.addOnAfterIcon"
        [nzPrefix]="ui.prefix"
        [nzPrefixIcon]="ui.prefixIcon"
        [nzSuffix]="ui.suffix"
        [nzSuffixIcon]="ui.suffixIcon"
      >
        <ng-template [ngTemplateOutlet]="ipt" />
      </nz-input-group>
    } @else {
      <ng-template [ngTemplateOutlet]="ipt" />
    }
  </sf-item-wrap>`,
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None
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
      autofocus
    } = this.ui;
    this.type = !!(
      addOnAfter ||
      addOnBefore ||
      addOnAfterIcon ||
      addOnBeforeIcon ||
      prefix ||
      prefixIcon ||
      suffix ||
      suffixIcon
    )
      ? 'addon'
      : '';
    if (autofocus === true) {
      setTimeout(() => {
        (
          (this.injector.get(ElementRef).nativeElement as HTMLElement).querySelector(`#${this.id}`) as HTMLElement
        ).focus();
      }, 20);
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
    let obs = this.change$.asObservable().pipe(debounceTime(dueTime), takeUntil(this.sfItemComp!.destroy$));
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
    if (this.ui.change) this.ui.change(val);
  }

  focus(e: FocusEvent): void {
    if (this.ui.focus) this.ui.focus(e);
  }

  blur(e: FocusEvent): void {
    if (this.ui.blur) this.ui.blur(e);
  }

  enter(e: Event): void {
    if (this.ui.enter) this.ui.enter(e);
  }
}
