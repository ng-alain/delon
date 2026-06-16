import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { Component, DebugElement, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { createTestContext } from '@delon/testing';
import { AlainThemeModule } from '@delon/theme';
import { provideNzNoAnimation } from 'ng-zorro-antd/core/animation';

import { DelonFormModule } from '../src/module';
import { SFSchema } from '../src/schema/index';
import { SFComponent } from '../src/sf.component';

registerLocaleData(zh);

@Component({
  template: ` <sf [schema]="schema" [expandable]="expandable" [(expanded)]="expanded" /> `,
  imports: [DelonFormModule, AlainThemeModule]
})
class CollapseTestComponent {
  @ViewChild(SFComponent, { static: true }) comp!: SFComponent;
  schema: SFSchema = {
    properties: {
      name: { type: 'string', title: 'Name' }
    }
  };
  expandable = true;
  expanded = false;
}

describe('form: collapse', () => {
  describe('[expand button]', () => {
    let fixture: ComponentFixture<CollapseTestComponent>;
    let dl: DebugElement;
    let context: CollapseTestComponent;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [DelonFormModule.forRoot(), AlainThemeModule],
        providers: [provideNzNoAnimation()]
      });
    });

    it('should not show expand button when expandable is false', () => {
      ({ fixture, dl, context } = createTestContext(CollapseTestComponent));
      context.expandable = false;
      context.schema = {
        properties: {
          name: { type: 'string', title: 'Name' },
          nickname: { type: 'string', title: 'Nickname', ui: { collapse: true } }
        }
      };
      fixture.detectChanges();
      const btn = dl.query(By.css('[data-type="expand"]'));
      expect(btn).toBeNull();
    });

    it('should not show expand button when no collapse fields', () => {
      ({ fixture, dl, context } = createTestContext(CollapseTestComponent));
      context.schema = {
        properties: {
          name: { type: 'string', title: 'Name' },
          email: { type: 'string', title: 'Email' }
        }
      };
      fixture.detectChanges();
      const btn = dl.query(By.css('[data-type="expand"]'));
      expect(btn).toBeNull();
    });

    it('should show expand button when expandable and has collapse fields', () => {
      ({ fixture, dl, context } = createTestContext(CollapseTestComponent));
      context.schema = {
        properties: {
          name: { type: 'string', title: 'Name' },
          nickname: { type: 'string', title: 'Nickname', ui: { collapse: true } }
        }
      };
      fixture.detectChanges();
      const btn = dl.query(By.css('[data-type="expand"]'));
      expect(btn).not.toBeNull();
    });

    it('should toggle button text between expand and collapse on click', () => {
      ({ fixture, dl, context } = createTestContext(CollapseTestComponent));
      context.schema = {
        properties: {
          name: { type: 'string', title: 'Name' },
          nickname: { type: 'string', title: 'Nickname', ui: { collapse: true } }
        }
      };
      fixture.detectChanges();
      const btn = dl.query(By.css('[data-type="expand"]'))!;
      // Initial text should be locale.expand (展开)
      expect(btn.nativeElement.textContent!.trim()).toBe('展开');
      btn.nativeElement.click();
      fixture.detectChanges();
      // After click, text should be locale.collapse (收起)
      expect(btn.nativeElement.textContent!.trim()).toBe('收起');
      btn.nativeElement.click();
      fixture.detectChanges();
      // After second click, text should be locale.expand (展开) again
      expect(btn.nativeElement.textContent!.trim()).toBe('展开');
    });

    it('should update expanded via two-way binding on click', () => {
      ({ fixture, dl, context } = createTestContext(CollapseTestComponent));
      context.schema = {
        properties: {
          name: { type: 'string', title: 'Name' },
          nickname: { type: 'string', title: 'Nickname', ui: { collapse: true } }
        }
      };
      fixture.detectChanges();
      expect(context.expanded).toBeFalse();
      const btn = dl.query(By.css('[data-type="expand"]'))!;
      btn.nativeElement.click();
      fixture.detectChanges();
      expect(context.expanded).toBeTrue();
      btn.nativeElement.click();
      fixture.detectChanges();
      expect(context.expanded).toBeFalse();
    });

    it('should update aria-expanded attribute on click', () => {
      ({ fixture, dl, context } = createTestContext(CollapseTestComponent));
      context.schema = {
        properties: {
          name: { type: 'string', title: 'Name' },
          nickname: { type: 'string', title: 'Nickname', ui: { collapse: true } }
        }
      };
      fixture.detectChanges();
      const btn = dl.query(By.css('[data-type="expand"]'))!;
      expect(btn.nativeElement.getAttribute('aria-expanded')).toBe('false');
      btn.nativeElement.click();
      fixture.detectChanges();
      expect(btn.nativeElement.getAttribute('aria-expanded')).toBe('true');
      btn.nativeElement.click();
      fixture.detectChanges();
      expect(btn.nativeElement.getAttribute('aria-expanded')).toBe('false');
    });
  });

  describe('[collapse class]', () => {
    let fixture: ComponentFixture<CollapseTestComponent>;
    let dl: DebugElement;
    let context: CollapseTestComponent;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [DelonFormModule.forRoot(), AlainThemeModule],
        providers: [provideNzNoAnimation()]
      });
    });

    it('should have sf__collapse-item class on nz-form-item when ui.collapse is true', () => {
      ({ fixture, dl, context } = createTestContext(CollapseTestComponent));
      context.schema = {
        properties: {
          name: { type: 'string', title: 'Name', ui: { collapse: true } }
        }
      };
      fixture.detectChanges();
      const formItem = dl.query(By.css('sf-item.sf__collapse-item'));
      expect(formItem).not.toBeNull();
    });

    it('should have sf__collapse class on sf host when expanded is false', () => {
      ({ fixture, dl, context } = createTestContext(CollapseTestComponent));
      context.schema = {
        properties: {
          name: { type: 'string', title: 'Name' },
          nickname: { type: 'string', title: 'Nickname', ui: { collapse: true } }
        }
      };
      fixture.detectChanges();
      const sfHost = dl.query(By.css('sf'));
      expect(sfHost.nativeElement.classList.contains('sf__collapse')).toBeTrue();
    });

    it('should remove sf__collapse class when expanded is true', () => {
      ({ fixture, dl, context } = createTestContext(CollapseTestComponent));
      context.schema = {
        properties: {
          name: { type: 'string', title: 'Name' },
          nickname: { type: 'string', title: 'Nickname', ui: { collapse: true } }
        }
      };
      fixture.detectChanges();
      context.expanded = true;
      fixture.detectChanges();
      const sfHost = dl.query(By.css('sf'));
      expect(sfHost.nativeElement.classList.contains('sf__collapse')).toBeFalse();
    });

    it('should not set sf__collapse class when expandable is false', () => {
      ({ fixture, dl, context } = createTestContext(CollapseTestComponent));
      context.expandable = false;
      context.schema = {
        properties: {
          name: { type: 'string', title: 'Name' },
          nickname: { type: 'string', title: 'Nickname', ui: { collapse: true } }
        }
      };
      fixture.detectChanges();
      const sfHost = dl.query(By.css('sf'));
      expect(sfHost.nativeElement.classList.contains('sf__collapse')).toBeFalse();
    });

    it('should have sf__collapse class and sf__collapse-item elements when collapsed', () => {
      ({ fixture, dl, context } = createTestContext(CollapseTestComponent));
      context.schema = {
        properties: {
          name: { type: 'string', title: 'Name' },
          nickname: { type: 'string', title: 'Nickname', ui: { collapse: true } }
        }
      };
      fixture.detectChanges();
      const sfHost = dl.query(By.css('sf'));
      expect(sfHost.nativeElement.classList.contains('sf__collapse')).toBeTrue();
      const collapseItem = dl.query(By.css('.sf__collapse-item'));
      expect(collapseItem).not.toBeNull();
    });
  });
});
