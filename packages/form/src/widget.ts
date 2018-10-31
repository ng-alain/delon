import {
  HostBinding,
  Optional,
  AfterViewInit,
  Inject,
  ChangeDetectorRef,
} from '@angular/core';
import { filter } from 'rxjs/operators';
import { di } from './utils';
import { FormProperty } from './model/form.property';
import { ArrayProperty } from './model/array.property';
import { ObjectProperty } from './model/object.property';
import { SFSchema } from './schema';
import { SFUISchemaItem } from './schema/ui';
import { ErrorData } from './errors';
import { SFComponent } from './sf.component';

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

  get disabled(): boolean {
    if (this.schema.readOnly === true) return true;

    return null;
  }

  constructor(
    @Inject(ChangeDetectorRef) public readonly cd: ChangeDetectorRef,
    @Inject(SFComponent) public readonly sfComp?: SFComponent,
  ) {}

  ngAfterViewInit(): void {
    this.formProperty.errorsChanges
      .pipe(filter(w => w != null))
      .subscribe((errors: ErrorData[]) => {
        if (this.ui.debug) di('errorsChanges', this.formProperty.path, errors);

        // 不显示首次校验视觉
        if (this.firstVisual) {
          this.showError = errors.length > 0;
          this.error = this.showError ? errors[0].message : '';

          if (this.ui.__destroy !== true) this.cd.detectChanges();
        }
        this.firstVisual = true;
      });
  }

  setValue(value: any) {
    this.formProperty.setValue(value, false);
    if (this.ui.debug) {
      di('valueChanges', this.formProperty.path, this.formProperty);
    }
  }

  get value() {
    return this.formProperty.value;
  }

  detectChanges() {
    this.formProperty.root.widget.cd.markForCheck();
  }

  abstract reset(value: any);
}

export class ControlWidget extends Widget<FormProperty> {
  reset(value: any) {}
}

export class ArrayLayoutWidget extends Widget<ArrayProperty>
  implements AfterViewInit {
  reset(value: any) {}

  ngAfterViewInit() {
    this.formProperty.errorsChanges
      .pipe(filter(() => this.ui.__destroy !== true))
      .subscribe(() => this.cd.detectChanges());
  }
}

export class ObjectLayoutWidget extends Widget<ObjectProperty>
  implements AfterViewInit {
  reset(value: any) {}

  ngAfterViewInit() {
    this.formProperty.errorsChanges
      .pipe(filter(() => this.ui.__destroy !== true))
      .subscribe(() => this.cd.detectChanges());
  }
}
