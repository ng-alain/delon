import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AlainThemeModule } from '../../theme.module';

describe('Pipe: url', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AlainThemeModule.forRoot()],
      declarations: [TestComponent],
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  [{ value: '', result: `` }, { value: 'https://ng-alain.com', result: `https://ng-alain.com` }].forEach(
    (item: any) => {
      it(`${item.value.toString()} muse be ${item.result}`, () => {
        fixture.componentInstance.value = item.value;
        fixture.detectChanges();
        const el = fixture.debugElement.query(By.css('#result')).nativeElement as HTMLElement;
        expect(el.attributes.getNamedItem('href')!.textContent).toBe(item.result);
      });
    },
  );
});

@Component({
  template: `
    <a id="result" [href]="value | url"></a>
  `,
})
class TestComponent {
  value = '';
}
