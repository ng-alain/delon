import { AfterViewInit, ChangeDetectorRef, HostBinding, Inject, Injector } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { ErrorData } from './errors';
import { SFValue } from './interface';
import { ArrayProperty } from './model/array.property';
import { FormProperty } from './model/form.property';
import { ObjectProperty } from './model/object.property';
import { SFSchema } from './schema';
import { SFUISchemaItem } from './schema/ui';
import { SFItemComponent } from './sf-item.component';
import { SFComponent } from './sf.component';
import { di } from './utils';

export abstract class Widget<T extends FormProperty> implements AfterViewInit {
  formProperty: T;
  error: string;
  showError = false;
  id = '';
  schema: SFSchema;
  ui: SFUISchemaItem;
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

  abstract reset(value: SFValue);
}

export class ControlWidget extends Widget<FormProperty> {
  reset(_value: SFValue) {}
}

export class ArrayLayoutWidget extends Widget<ArrayProperty> implements AfterViewInit {
  reset(_value: SFValue) {}

  ngAfterViewInit() {
    this.formProperty.errorsChanges.pipe(takeUntil(this.sfItemComp!.unsubscribe$)).subscribe(() => this.cd.detectChanges());
  }
}

export class ObjectLayoutWidget extends Widget<ObjectProperty> implements AfterViewInit {
  reset(_value: SFValue) {}

  ngAfterViewInit() {
    this.formProperty.errorsChanges.pipe(takeUntil(this.sfItemComp!.unsubscribe$)).subscribe(() => this.cd.detectChanges());
  }
}
