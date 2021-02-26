import { AfterViewInit, ChangeDetectorRef, Directive, HostBinding, Inject, Injector } from '@angular/core';
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

@Directive()
export abstract class Widget<T extends FormProperty, UIT extends SFUISchemaItem> implements AfterViewInit {
  formProperty: T;
  error: string;
  showError = false;
  id = '';
  schema: SFSchema;
  ui: UIT;
  firstVisual = false;

  @HostBinding('class')
  get cls(): string | string[] {
    return this.ui.class || '';
  }

  get disabled(): boolean {
    if (this.schema.readOnly === true || this.sfComp!.disabled) {
      return true;
    }

    return false;
  }

  get l(): LocaleData {
    return this.formProperty.root.widget.sfComp!.locale;
  }

  get oh(): SFOptionalHelp {
    return this.ui.optionalHelp as SFOptionalHelp;
  }

  get dom(): DomSanitizer {
    return this.injector.get(DomSanitizer);
  }

  get cleanValue(): boolean {
    return this.sfComp?.cleanValue!;
  }

  constructor(
    @Inject(ChangeDetectorRef) public readonly cd: ChangeDetectorRef,
    @Inject(Injector) public readonly injector: Injector,
    @Inject(SFItemComponent) public readonly sfItemComp?: SFItemComponent,
    @Inject(SFComponent) public readonly sfComp?: SFComponent,
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

  setValue(value: SFValue): void {
    this.formProperty.setValue(value, false);
    di(this.ui, 'valueChanges', this.formProperty.path, this.formProperty);
  }

  get value(): any {
    return this.formProperty.value;
  }

  detectChanges(onlySelf: boolean = false): void {
    if (onlySelf) {
      this.cd.markForCheck();
    } else {
      this.formProperty.root.widget.cd.markForCheck();
    }
  }

  abstract reset(value: SFValue): void;

  abstract afterViewInit(): void;
}

@Directive()
export class ControlWidget extends Widget<FormProperty, SFUISchemaItem> {
  reset(_value: SFValue): void {}
  afterViewInit(): void {}
}

@Directive()
export class ControlUIWidget<UIT extends SFUISchemaItem> extends Widget<FormProperty, UIT> {
  reset(_value: SFValue): void {}
  afterViewInit(): void {}
}

@Directive()
export class ArrayLayoutWidget extends Widget<ArrayProperty, SFArrayWidgetSchema> implements AfterViewInit {
  reset(_value: SFValue): void {}
  afterViewInit(): void {}

  ngAfterViewInit(): void {
    this.formProperty.errorsChanges.pipe(takeUntil(this.sfItemComp!.unsubscribe$)).subscribe(() => this.cd.detectChanges());
  }
}

@Directive()
export class ObjectLayoutWidget extends Widget<ObjectProperty, SFObjectWidgetSchema> implements AfterViewInit {
  reset(_value: SFValue): void {}
  afterViewInit(): void {}

  ngAfterViewInit(): void {
    this.formProperty.errorsChanges.pipe(takeUntil(this.sfItemComp!.unsubscribe$)).subscribe(() => this.cd.detectChanges());
  }
}
