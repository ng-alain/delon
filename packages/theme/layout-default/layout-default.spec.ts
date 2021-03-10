import { Component, DebugElement, TemplateRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { createTestContext } from '@delon/testing';
import { NzIconTestModule } from 'ng-zorro-antd/icon/testing';
import { LayoutDefaultModule } from './layout.module';
import { LayoutDefaultOptions } from './types';

describe('theme: layout-default', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;
  let page: PageObject;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LayoutDefaultModule, RouterTestingModule, NzIconTestModule],
      declarations: [TestComponent],
    });

    ({ fixture, dl, context } = createTestContext(TestComponent));
    page = new PageObject();
  });

  it('should be custom nav', () => {
    context.nav = context.navTpl;
    fixture.detectChanges();
    page.expectEl('.custom-nav', true);
    page.expectEl('layout-default-nav', false);
  });

  it('should be custom aside user', () => {
    context.asideUser = context.asideUserTpl;
    fixture.detectChanges();
    page.expectEl('.custom-aside-user', true);
  });

  it('should be custom content', () => {
    context.content = context.contentTpl;
    fixture.detectChanges();
    page.expectEl('.custom-content', true);
  });

  describe('#options', () => {
    it('#logoLink', () => {
      context.options = { logoLink: '/home' };
      fixture.detectChanges();
      const el = page.getEl<HTMLLinkElement>('.alain-default__header-logo-link');
      expect(el.href.endsWith('/home')).toBe(true);
    });

    it('#logoFixWidth', () => {
      context.options = { logoFixWidth: 100 };
      fixture.detectChanges();
      const el = page.getEl('.alain-default__header-logo');
      expect(el.style.width).toBe(`100px`);
    });

    it('#hideAside', () => {
      context.options = { hideAside: true };
      fixture.detectChanges();
      page.expectEl(`.alain-default__hide-aside`).expectEl(`.alain-default__nav-item--collapse`, false);
    });
  });

  class PageObject {
    getEl<T extends HTMLElement>(cls: string): T {
      return dl.query(By.css(cls)).nativeElement as T;
    }

    expectEl(cls: string, result: boolean = true): this {
      expect(dl.queryAll(By.css(cls)).length > 0).toBe(result);
      return this;
    }
  }
});

@Component({
  template: `
    <layout-default [options]="options" [asideUser]="asideUser" [nav]="nav" [content]="content">
      <layout-default-header-item direction="left">
        <span class="header-left">left</span>
      </layout-default-header-item>
      test
      <layout-default-header-item direction="right">
        <span class="header-right">right</span>
      </layout-default-header-item>
    </layout-default>
    <ng-template #asideUserTpl>
      <span class="custom-aside-user">custom-aside-user</span>
    </ng-template>
    <ng-template #navTpl>
      <span class="custom-nav">custom-nav</span>
    </ng-template>
    <ng-template #contentTpl>
      <span class="custom-content">custom-content</span>
    </ng-template>
  `,
})
class TestComponent {
  @ViewChild('asideUserTpl', { static: true }) asideUserTpl!: TemplateRef<void>;
  @ViewChild('navTpl', { static: true }) navTpl!: TemplateRef<void>;
  @ViewChild('contentTpl', { static: true }) contentTpl!: TemplateRef<void>;
  options: LayoutDefaultOptions = {};
  asideUser: TemplateRef<void>;
  nav: TemplateRef<void>;
  content: TemplateRef<void>;
}
