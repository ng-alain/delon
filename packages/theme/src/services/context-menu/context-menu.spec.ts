import {
  Component,
  ViewChild,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContextMenuService, AlainThemeModule } from '@delon/theme';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { OverlayConfig } from '@angular/cdk/overlay';

describe('theme: context-menu', () => {
  let fixture: ComponentFixture<TestComponent>;
  let context: TestComponent;
  let page: PageObject;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AlainThemeModule],
      declarations: [TestComponent, MenuComponent],
    });
    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [MenuComponent],
      },
    });
    fixture = TestBed.createComponent(TestComponent);
    context = fixture.componentInstance;
    fixture.detectChanges();
    page = new PageObject();
  });

  afterEach(() => {
    const els = document.querySelectorAll('.cdk-overlay-container') as any;
    els.forEach((el: HTMLElement) => (el.innerHTML = ''));
  });

  it('should working', () => {
    page.checkFull('1');
  });

  it('should be close via click backdrop', () => {
    page.open();
    const backdrops = document.querySelectorAll('.cdk-overlay-backdrop');
    (backdrops[backdrops.length - 1] as HTMLElement).click();
    page.check(null);
  });

  it('should be open component', () => {
    context.isComponent = true;
    fixture.detectChanges();
    page.open().check('component');
  });

  it('should be disabled backdrop', () => {
    context.options = {
      hasBackdrop: false,
    };
    page.open();
    const backdrops = document.querySelectorAll('.cdk-overlay-backdrop');
    expect(backdrops.length).toBe(0);
  });

  class PageObject {
    open(eventArgs?: any): this {
      const btn = document.querySelector('#btn') as HTMLDivElement;
      btn.dispatchEvent(new MouseEvent('contextmenu', eventArgs));
      fixture.detectChanges();
      return this;
    }
    checkFull(text: string): this {
      return this.open()
        .check(text)
        .close();
    }
    check(text = '1'): this {
      const el = document.querySelector('#menu') as HTMLDivElement;
      if (text == null) {
        expect(el == null).toBe(true);
      } else {
        expect(el.textContent).toBe(text);
      }
      return this;
    }
    close(): this {
      context.srv.close();
      return this;
    }
  }
});

@Component({
  template: `
  <div id="btn" (contextmenu)="show($event)"></div>
  <ng-template #menu><div id="menu">{{text}}</div></ng-template>
  `,
})
class TestComponent {
  @ViewChild('menu')
  menuRef: TemplateRef<any>;
  text = '1';
  isComponent = false;
  options: OverlayConfig;

  constructor(
    private containerRef: ViewContainerRef,
    public srv: ContextMenuService,
  ) {}

  show(e: MouseEvent) {
    if (this.options) {
      this.srv.open(
        e,
        this.isComponent ? MenuComponent : this.menuRef,
        this.containerRef,
        this.options,
      );
    } else {
      this.srv.open(
        e,
        this.isComponent ? MenuComponent : this.menuRef,
        this.containerRef,
      );
    }
  }
}

@Component({
  template: `<div id="menu">component</div>`,
})
class MenuComponent {}
