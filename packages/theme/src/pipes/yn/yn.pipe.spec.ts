import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AlainThemeModule } from '../../theme.module';
import { YNMode } from './yn.pipe';

describe('Pipe: yn', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AlainThemeModule.forRoot()],
      declarations: [TestComponent],
    });
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
      no: '坏',
    },
    {
      value: false,
      result: `坏`,
      yes: '好',
      no: '坏',
    },
  ].forEach((item: any) => {
    it(`${item.value.toString()} muse be ${item.result}`, () => {
      fixture.componentInstance.value = item.value;
      fixture.componentInstance.yes = item.yes;
      fixture.componentInstance.no = item.no;
      fixture.detectChanges();
      expect((fixture.debugElement.query(By.css('#result')).nativeElement as HTMLElement).innerHTML).toContain(
        item.result,
      );
    });
  });

  describe('#mode', () => {
    it('with text', () => {
      fixture.componentInstance.mode = 'text';
      fixture.componentInstance.value = true;
      fixture.detectChanges();
      expect(fixture.debugElement.queryAll(By.css('svg')).length).toBe(0);
      fixture.componentInstance.value = false;
      fixture.detectChanges();
      expect(fixture.debugElement.queryAll(By.css('svg')).length).toBe(0);
    });
    it('with full', () => {
      fixture.componentInstance.mode = 'full';
      fixture.componentInstance.value = true;
      fixture.detectChanges();
      let html = (fixture.debugElement.query(By.css('#result')).nativeElement as HTMLElement).innerHTML;
      expect(html).toContain('<svg');
      expect(html).not.toContain(`title="`);
      // when false
      fixture.componentInstance.value = false;
      fixture.detectChanges();
      html = (fixture.debugElement.query(By.css('#result')).nativeElement as HTMLElement).innerHTML;
      expect(html).toContain('<svg');
      expect(html).not.toContain(`title="`);
    });
  });
});

@Component({
  template: `
    <div id="result" [innerHTML]="value | yn: yes:no:mode"></div>
  `,
})
class TestComponent {
  value = true;
  yes: string;
  no: string;
  mode: YNMode;
}
