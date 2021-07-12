import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { createTestContext } from '@delon/testing';

import { LetModule } from './let.module';

describe('abc: let', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LetModule],
      declarations: [TestComponent]
    });
    ({ fixture, dl } = createTestContext(TestComponent));
    fixture.detectChanges();
  });

  function getValue(): string {
    return (dl.query(By.css('.value')).nativeElement as HTMLElement).textContent!.trim();
  }

  it('should be working', () => {
    expect(getValue()).toContain(`aaa`);
  });
});

@Component({
  template: ` <div *let="getter as value" class="value">{{ value }}{{ value }}{{ value }}</div> `
})
class TestComponent {
  counter = 0;

  get getter(): string {
    this.counter++;

    return 'a';
  }
}
