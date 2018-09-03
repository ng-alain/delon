import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NaExceptionModule } from './exception.module';

describe('abc: exception', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NaExceptionModule.forRoot()],
      declarations: [TestComponent],
    });
    fixture = TestBed.createComponent(TestComponent);
    dl = fixture.debugElement;
    context = fixture.componentInstance;
    fixture.detectChanges();
  });

  [403, 404, 500].forEach((type: any) => {
    it(`#type=${type}`, () => {
      context.type = type;
      fixture.detectChanges();
      expect(
        (dl.query(By.css('.exception__cont-title')).nativeElement as HTMLElement).innerText,
      ).toBe('' + type);
    });
  });

  it('should be custom actions', () => {
    expect(dl.queryAll(By.css('#action-edit')).length).toBe(1);
  });

  it('should be custom img&title&desc', () => {
    context.img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';
    context.title = 'custom title';
    context.desc = 'custom desc';
    fixture.detectChanges();
    expect(
      (dl.query(By.css('.exception__img')).nativeElement as HTMLElement).style[
        'background-image'
      ],
    ).toContain(context.img);
    expect(
      (dl.query(By.css('.exception__cont-title')).nativeElement as HTMLElement).innerText,
    ).toBe(context.title);
    expect(
      (dl.query(By.css('.exception__cont-desc')).nativeElement as HTMLElement).innerText,
    ).toBe(context.desc);
  });
});

@Component({
  template: `
    <exception [type]="type" [img]="img" [title]="title" [desc]="desc">
      <button id="btn">查看详情</button>
      <div id="action-edit">action-edit</div>
    </exception>
    `,
})
class TestComponent {
  type: 403 | 404 | 500;
  img: string;
  title: string;
  desc: string;
}
