import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { YNMode, YNPipe } from './yn.pipe';

describe('Pipe: yn', () => {
  let fixture: ComponentFixture<TestComponent>;

  describe('', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
    });

    [
      { value: true, result: `是` },
      { value: false, result: `否` },
      {
        value: true,
        result: `好`,
        yes: '好',
        no: '坏'
      },
      {
        value: false,
        result: `坏`,
        yes: '好',
        no: '坏'
      }
    ].forEach((item: { value: boolean; result: string; yes?: string; no?: string }) => {
      it(`${item.value.toString()} muse be ${item.result}`, () => {
        fixture.componentInstance.value.set(item.value);
        fixture.componentInstance.yes.set(item.yes);
        fixture.componentInstance.no.set(item.no);
        fixture.detectChanges();
        expect((fixture.debugElement.query(By.css('#result')).nativeElement as HTMLElement).innerHTML).toContain(
          item.result
        );
      });
    });

    describe('#mode', () => {
      it('with text', () => {
        fixture.componentInstance.mode.set('text');
        fixture.componentInstance.value.set(true);
        fixture.detectChanges();
        expect(fixture.debugElement.queryAll(By.css('svg')).length).toBe(0);
        fixture.componentInstance.value.set(false);
        fixture.detectChanges();
        expect(fixture.debugElement.queryAll(By.css('svg')).length).toBe(0);
      });
      it('with full', () => {
        fixture.componentInstance.mode.set('full');
        fixture.componentInstance.value.set(true);
        fixture.detectChanges();
        let html = (fixture.debugElement.query(By.css('#result')).nativeElement as HTMLElement).innerHTML;
        expect(html).toContain('<svg');
        expect(html).not.toContain(`title="`);
        // when false
        fixture.componentInstance.value.set(false);
        fixture.detectChanges();
        html = (fixture.debugElement.query(By.css('#result')).nativeElement as HTMLElement).innerHTML;
        expect(html).toContain('<svg');
        expect(html).not.toContain(`title="`);
      });
    });
  });

  it('should be used default config', () => {
    TestBed.overrideTemplate(TestComponent, `<div id="result" [innerHTML]="value() | yn"></div>`);
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    expect((fixture.debugElement.query(By.css('#result')).nativeElement as HTMLElement).innerHTML).toContain(`是`);
  });
});

@Component({
  template: ` <div id="result" [innerHTML]="value() | yn: yes() : no() : mode()"></div> `,
  imports: [YNPipe]
})
class TestComponent {
  readonly value = signal(true);
  readonly yes = signal<string | undefined>(undefined);
  readonly no = signal<string | undefined>(undefined);
  readonly mode = signal<YNMode | undefined>(undefined);
}
