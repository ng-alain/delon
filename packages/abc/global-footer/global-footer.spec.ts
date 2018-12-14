import { APP_BASE_HREF } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  DebugElement,
  Injector,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { WINDOW } from '@delon/theme';

import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { GlobalFooterModule } from './global-footer.module';
import { GlobalFooterLink } from './global-footer.types';

class MockWindow {
  open() {}
  location = new MockLocation();
}
class MockLocation {
  private url: string;
  get href(): string {
    return this.url;
  }
  set href(url: string) {
    this.url = url;
  }
}

describe('abc: global-footer', () => {
  let injector: Injector;
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;
  let page: PageObject;

  beforeEach(() => {
    injector = TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        GlobalFooterModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [TestComponent],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: WINDOW, useFactory: () => new MockWindow() },
      ],
    });
  });

  function createComp() {
    fixture = TestBed.createComponent(TestComponent);
    dl = fixture.debugElement;
    context = fixture.componentInstance;
    fixture.detectChanges();
    page = new PageObject();
  }

  it('should be create', () => {
    createComp();
    context.links = [
      {
        title: '帮助',
        href: '',
      },
      {
        title: '隐私',
        href: '',
      },
      {
        title: '条款',
        href: '',
      },
    ];
    fixture.detectChanges();
    expect(dl.queryAll(By.css('.global-footer__links-item')).length).toBe(
      context.links.length,
    );
  });

  it('should be custom copyright template', () => {
    createComp();
    expect(dl.queryAll(By.css('#copyright')).length).toBe(1);
  });

  it('should be open new window when blankTarget is true', () => {
    createComp();
    const win = injector.get(WINDOW) as MockWindow;
    spyOn(win, 'open');
    context.links = [
      {
        title: '',
        href: 'https://www.youtube.com',
        blankTarget: true,
      },
    ];
    fixture.detectChanges();
    page.getFirst().click();
    expect(win.open).toHaveBeenCalled();
  });

  it('should be open extral link', () => {
    createComp();
    const win = injector.get(WINDOW) as MockWindow;
    context.links = [
      {
        title: '',
        href: 'https://www.youtube.com',
      },
    ];
    fixture.detectChanges();
    page.getFirst().click();
    expect(win.location.href).toBe(context.links[0].href);
  });

  it('should be navigate router', () => {
    createComp();
    const router = injector.get(Router);
    spyOn(router, 'navigateByUrl');
    context.links = [
      {
        title: '',
        href: '/',
      },
    ];
    fixture.detectChanges();
    page.getFirst().click();
    expect(router.navigateByUrl).toHaveBeenCalled();
  });

  it('should be ingore navigate when href is empty', () => {
    createComp();
    const router = injector.get(Router);
    spyOn(router, 'navigateByUrl');
    context.links = [
      {
        title: '',
        href: '',
      },
    ];
    fixture.detectChanges();
    page.getFirst().click();
    expect(router.navigateByUrl).not.toHaveBeenCalled();
  });

  it('should be custom item template', () => {
    TestBed.overrideTemplate(
      TestComponent,
      `
    <global-footer>
      <global-footer-item href="https://ng-alain.com/" blankTarget>
        <i class="icon-github"></i>
        <i class="icon-github"></i>
      </global-footer-item>
    </global-footer>
    `,
    );
    createComp();
    expect(dl.queryAll(By.css('.global-footer__links-item')).length).toBe(1);
    expect(dl.queryAll(By.css('.icon-github')).length).toBe(2);
  });

  class PageObject {
    getFirst(): HTMLAnchorElement {
      return dl.query(By.css('.global-footer__links-item'))
        .nativeElement as HTMLAnchorElement;
    }
  }
});

@Component({
  template: `
  <global-footer [links]="links">
    <div id="copyright">copyright</div>
  </global-footer>
  `,
})
class TestComponent {
  links: GlobalFooterLink[] = [];
}
