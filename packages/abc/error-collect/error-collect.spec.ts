import { Component, DebugElement, OnInit, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ErrorCollectComponent } from './error-collect.component';
import { ErrorCollectModule } from './error-collect.module';

describe('abc: error-collect', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ErrorCollectModule, ReactiveFormsModule, NzFormModule],
      declarations: [TestComponent],
    });
  });

  function getPropertiesAndCreate(): void {
    fixture = TestBed.createComponent(TestComponent);
    dl = fixture.debugElement;
    context = fixture.componentInstance;
    fixture.detectChanges();
    const iptEl = dl.query(By.css('#email'));
    if (iptEl) {
      const ipt = iptEl.nativeElement as HTMLInputElement;
      ipt.value = '1';
      ipt.dispatchEvent(new Event('input'));
      fixture.detectChanges();
    }
  }

  afterEach(() => {
    if (context) context.comp.ngOnDestroy();
  });

  describe('[default]', () => {
    beforeEach(() => getPropertiesAndCreate());
    it('should be collect error', (done: () => void) => {
      setTimeout(() => {
        expect(context.comp.count).toBe(1);
        done();
      }, 21);
    });

    it('should be click go to first error element', (done: () => void) => {
      setTimeout(() => {
        expect(context.comp.count).toBe(1);
        const el = dl.query(By.css('.ant-form-item-has-error')).nativeElement as HTMLElement;
        spyOn(el, 'scrollIntoView');
        expect(el.scrollIntoView).not.toHaveBeenCalled();
        (dl.query(By.css('error-collect')).nativeElement as HTMLElement).click();
        expect(el.scrollIntoView).toHaveBeenCalled();
        done();
      }, 21);
    });
  });

  it('should be not to error element when not errores', () => {
    TestBed.overrideTemplate(
      TestComponent,
      `<form nz-form [formGroup]="validateForm"><error-collect #ec [freq]="freq"></error-collect></form>`,
    );
    getPropertiesAndCreate();
    const safeComp = context.comp as NzSafeAny;
    spyOn(safeComp, 'findParent');
    (dl.query(By.css('error-collect')).nativeElement as HTMLElement).click();
    expect(safeComp.findParent).not.toHaveBeenCalled();
  });

  it('should be throw [No found form element] if no form element', () => {
    expect(() => {
      TestBed.overrideTemplate(TestComponent, `<error-collect #ec [freq]="freq"></error-collect>`)
        .createComponent(TestComponent)
        .detectChanges();
    }).toThrowError('No found form element');
  });
});

@Component({
  template: `
    <form nz-form [formGroup]="validateForm">
      <nz-form-item>
        <nz-form-control>
          <input nz-input formControlName="email" id="email" />
        </nz-form-control>
      </nz-form-item>
      <error-collect #ec [freq]="freq" [offsetTop]="offsetTop"></error-collect>
    </form>
  `,
})
class TestComponent implements OnInit {
  freq = 20;
  offsetTop = 65 + 16;
  @ViewChild('ec', { static: true })
  comp: ErrorCollectComponent;
  validateForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.validateForm = fb.group({
      email: [null, [Validators.required, Validators.email]],
    });
  }

  get email(): AbstractControl {
    return this.validateForm.controls.email;
  }

  ngOnInit(): void {
    this.email.markAsDirty();
  }
}
