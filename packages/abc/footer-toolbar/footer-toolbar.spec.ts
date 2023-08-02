import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FooterToolbarModule } from './footer-toolbar.module';
import { ErrorCollectModule } from '../error-collect/error-collect.module';

describe('abc: footer-toolbar', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ErrorCollectModule, FooterToolbarModule],
      declarations: [TestComponent]
    });
  });

  function create(): void {
    fixture = TestBed.createComponent(TestComponent);
    dl = fixture.debugElement;
    context = fixture.componentInstance;
    fixture.detectChanges();
  }

  it('should be create', () => {
    create();
    expect(dl.queryAll(By.css('.footer-toolbar')).length).toBe(1);
  });

  it('should be load error-collect', () => {
    create();
    context.errorCollect = true;
    fixture.detectChanges();
    expect(dl.queryAll(By.css('error-collect')).length).toBe(1);
  });

  describe('#extra', () => {
    it('with string', () => {
      create();
      const left = dl.query(By.css('.footer-toolbar__left')).nativeElement as HTMLElement;
      expect(left.textContent!.trim()).toBe(`1`);
    });
    it('with custom template', () => {
      TestBed.overrideTemplate(
        TestComponent,
        `
      <footer-toolbar [extra]="extra">
        <ng-template #extra><div id="extra">1</div></ng-template>
      </footer-toolbar>
      `
      );
      create();
      expect(dl.queryAll(By.css('#extra')).length).toBe(1);
    });
  });
});

@Component({
  template: ` <form><footer-toolbar [errorCollect]="errorCollect" [extra]="extra" /></form> `
})
class TestComponent {
  errorCollect = true;
  extra = '1';
}
