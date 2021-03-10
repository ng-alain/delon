import { Component, DebugElement, TemplateRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { createTestContext } from '@delon/testing';
import { LayoutDefaultModule } from './layout.module';
import { LayoutDefaultOptions } from './types';

const DEFAULT_OPTIONS: LayoutDefaultOptions = { logoExpanded: '', logoCollapsed: '' };

describe('theme: layout-default', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;
  let page: PageObject;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LayoutDefaultModule, RouterTestingModule],
      declarations: [TestComponent],
    });

    ({ fixture, dl, context } = createTestContext(TestComponent));
    page = new PageObject();
  });

  describe('#options', () => {
    it('#hideAside', () => {
      context.options = { ...DEFAULT_OPTIONS, hideAside: true };
      fixture.detectChanges();
      page.expectEl(`.alain-default__hide-aside`);
      page.expectEl(`.alain-default__nav-item--collapse`, false);
    });
  });

  class PageObject {
    getEl(cls: string): HTMLElement {
      return dl.query(By.css(cls)).nativeElement as HTMLElement;
    }

    expectEl(cls: string, result: boolean = true): this {
      expect(dl.queryAll(By.css(cls)).length > 0).toBe(result);
      return this;
    }
  }
});

@Component({
  template: ` <layout-default [options]="options">test</layout-default> `,
})
class TestComponent {
  options: LayoutDefaultOptions = { ...DEFAULT_OPTIONS };
  asideUser: TemplateRef<void>;
  nav: TemplateRef<void>;
  content: TemplateRef<void>;
}
