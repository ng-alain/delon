import { AfterViewInit, ChangeDetectorRef, HostBinding, Inject, Injector } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LocaleData } from '@delon/theme';
import { takeUntil } from 'rxjs/operators';
import { ErrorData } from './errors';
import { SFValue } from './interface';
import { ArrayProperty } from './model/array.property';
import { FormProperty } from './model/form.property';
import { ObjectProperty } from './model/object.property';
import { SFSchema } from './schema';
import { SFOptionalHelp, SFUISchemaItem } from './schema/ui';
import { SFItemComponent } from './sf-item.component';
import { SFComponent } from './sf.component';
import { di } from './utils';
import { SFArrayWidgetSchema, SFObjectWidgetSchema } from './widgets';

export abstract class Widget<T extends FormProperty, UIT extends SFUISchemaItem> implements AfterViewInit {
  formProperty: T;
  error: string;
  showError = false;
  id = '';
  schema: SFSchema;
  ui: UIT;
  firstVisual = false;

  @HostBinding('class')
  get cls() {
    return this.ui.class || '';
  }

  get disabled(): boolean | null {
    if (this.schema.readOnly === true || this.sfComp!.disabled) {
      return true;
    }

    return null;
  }

  get l(): LocaleData {
    return this.formProperty.root.widget.sfComp!.locale;
  }

  get oh() {
    return this.ui.optionalHelp as SFOptionalHelp;
  }

  get dom(): DomSanitizer {
    return this.injector.get(DomSanitizer);
  }

  constructor(
    @Inject(ChangeDetectorRef) protected readonly cd: ChangeDetectorRef,
    @Inject(Injector) protected readonly injector: Injector,
    @Inject(SFItemComponent) protected readonly sfItemComp?: SFItemComponent,
    @Inject(SFComponent) protected readonly sfComp?: SFComponent,
  ) {}

  ngAfterViewInit(): void {
    this.formProperty.errorsChanges.pipe(takeUntil(this.sfItemComp!.unsubscribe$)).subscribe((errors: ErrorData[] | null) => {
      if (errors == null) return;
      di(this.ui, 'errorsChanges', this.formProperty.path, errors);

      // 不显示首次校验视觉
      if (this.firstVisual) {
        this.showError = errors.length > 0;
        this.error = this.showError ? (errors[0].message as string) : '';

        this.cd.detectChanges();
      }
      this.firstVisual = true;
    });
    this.afterViewInit();
  }

  setValue(value: SFValue) {
    this.formProperty.setValue(value, false);
    di(this.ui, 'valueChanges', this.formProperty.path, this.formProperty);
  }

  get value() {
    return this.formProperty.value;
  }

  detectChanges(onlySelf = false) {
    if (onlySelf) {
      this.cd.markForCheck();
    } else {
      this.formProperty.root.widget.cd.markForCheck();
    }
  }

  abstract reset(value: SFValue): void;

  abstract afterViewInit(): void;
}

export class ControlWidget extends Widget<FormProperty, SFUISchemaItem> {
  reset(_value: SFValue) {}
  afterViewInit() {}
}

export class ControlUIWidget<UIT extends SFUISchemaItem> extends Widget<FormProperty, UIT> {
  reset(_value: SFValue) {}
  afterViewInit() {}
}

export class ArrayLayoutWidget extends Widget<ArrayProperty, SFArrayWidgetSchema> implements AfterViewInit {
  reset(_value: SFValue) {}
  afterViewInit() {}

  ngAfterViewInit() {
    this.formProperty.errorsChanges.pipe(takeUntil(this.sfItemComp!.unsubscribe$)).subscribe(() => this.cd.detectChanges());
  }
}

export class ObjectLayoutWidget extends Widget<ObjectProperty, SFObjectWidgetSchema> implements AfterViewInit {
  reset(_value: SFValue) {}
  afterViewInit() {}

  ngAfterViewInit() {
    this.formProperty.errorsChanges.pipe(takeUntil(this.sfItemComp!.unsubscribe$)).subscribe(() => this.cd.detectChanges());
  }
}
