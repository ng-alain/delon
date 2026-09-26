import { Component, DebugElement, signal } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { createTestContext } from '@delon/testing';
import type { LocaleData } from '@delon/theme';

import { NoticeIconTabComponent } from './notice-icon-tab.component';
import { NoticeIconSelect, NoticeItem } from './notice-icon.types';

const LOCALE = { emptyText: 'No data', clearText: 'Clear' } as LocaleData;

describe('abc: notice-icon-tab', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestComponent));
    fixture.detectChanges();
  });

  describe('when list is empty', () => {
    it('should be fallback to the locale text', () => {
      const el = dl.query(By.css('.notice-icon__notfound')).nativeElement as HTMLElement;
      expect(el.textContent).toContain(LOCALE.emptyText);
      expect(dl.query(By.css('.notice-icon__notfound-img'))).toBeNull();
    });
    it('should be show custom emptyText and emptyImage', () => {
      context.item.set({ title: 'tab', list: [], emptyText: 'custom empty', emptyImage: 'empty.png' });
      fixture.detectChanges();
      const img = dl.query(By.css('.notice-icon__notfound-img')).nativeElement as HTMLImageElement;
      expect(img.getAttribute('src')).toBe('empty.png');
      expect((dl.query(By.css('.notice-icon__notfound')).nativeElement as HTMLElement).textContent).toContain(
        'custom empty'
      );
    });
  });

  describe('when has list', () => {
    beforeEach(() => {
      context.item.set({
        title: 'tab',
        list: [
          { title: 't1', description: 'd1', datetime: 'now', extra: 'extra', color: 'blue', read: true },
          { title: 't2' }
        ]
      });
      fixture.detectChanges();
    });

    it('should be render item meta', () => {
      expect(dl.queryAll(By.css('nz-list-item')).length).toBe(2);
      expect(dl.queryAll(By.css('.notice-icon__item-read')).length).toBe(1);
      expect(dl.queryAll(By.css('.notice-icon__item-extra')).length).toBe(1);
      expect(dl.queryAll(By.css('nz-tag')).length).toBe(1);
      expect(dl.queryAll(By.css('.notice-icon__item-desc')).length).toBe(1);
      expect(dl.queryAll(By.css('.notice-icon__item-time')).length).toBe(1);
    });

    it('should be emit select when click item', () => {
      const spy = vi.spyOn(context, 'select').mockReturnValue(undefined);
      (dl.query(By.css('nz-list-item')).nativeElement as HTMLElement).click();
      expect(spy).toHaveBeenCalledWith({
        title: 'tab',
        item: expect.objectContaining({ title: 't1' }),
        event: expect.anything()
      });
    });

    it('should be emit clear when click clear', () => {
      const spy = vi.spyOn(context, 'clear').mockReturnValue(undefined);
      const el = dl.query(By.css('.notice-icon__clear')).nativeElement as HTMLElement;
      expect(el.textContent).toContain(LOCALE.clearText);
      el.click();
      expect(spy).toHaveBeenCalledWith('tab');
    });

    it('should be show custom clearText', () => {
      context.item.set({ title: 'tab', list: [{ title: 't' }], clearText: 'custom clear' });
      fixture.detectChanges();
      expect((dl.query(By.css('.notice-icon__clear')).nativeElement as HTMLElement).textContent).toContain(
        'custom clear'
      );
    });
  });
});

@Component({
  template: `
    <notice-icon-tab [locale]="locale()" [item]="item()" (select)="select($event)" (clear)="clear($event)" />
  `,
  imports: [NoticeIconTabComponent]
})
class TestComponent {
  readonly locale = signal<LocaleData>(LOCALE);
  readonly item = signal<NoticeItem>({ title: 'tab', list: [] });
  select(_item: NoticeIconSelect): void {}
  clear(_title: string): void {}
}
