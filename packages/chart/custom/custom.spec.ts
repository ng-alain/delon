import { Component, ViewChild } from '@angular/core';
import { fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { configureTestSuite, createTestContext } from '@delon/testing';
import { G2CustomComponent } from './custom.component';
import { G2CustomModule } from './custom.module';

describe('chart: custom', () => {
  let fixture: ComponentFixture<TestComponent>;
  let context: TestComponent;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [G2CustomModule],
      declarations: [TestComponent],
    });
  });

  beforeEach(() => {
    ({ fixture, context } = createTestContext(TestComponent));

    spyOn(context, 'render');
    spyOn(context, 'resize');
  });

  afterEach(() => context.comp.ngOnDestroy());

  it('should be working', () => {
    expect(context.render).not.toHaveBeenCalled();
    fixture.detectChanges();
    expect(context.render).toHaveBeenCalled();
  });

  it('should be resize', fakeAsync(() => {
    expect(context.resize).not.toHaveBeenCalled();
    context.resizeTime = 200;
    fixture.detectChanges();
    window.dispatchEvent(new Event('resize'));
    tick(201);
    expect(context.resize).toHaveBeenCalled();
  }));
});

@Component({
  template: `
    <g2-custom #comp [resizeTime]="resizeTime" (resize)="resize()" (render)="render()"></g2-custom>
  `,
})
class TestComponent {
  @ViewChild('comp') comp: G2CustomComponent;
  resizeTime = 0;
  render() {}
  resize() {}
}
