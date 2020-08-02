import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { createTestContext } from '@delon/testing';
import { G2CustomComponent } from './custom.component';
import { G2CustomModule } from './custom.module';

describe('chart: custom', () => {
  let fixture: ComponentFixture<TestComponent>;
  let context: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [G2CustomModule],
      declarations: [TestComponent],
    });
    ({ fixture, context } = createTestContext(TestComponent));

    spyOn(context, 'render');
    spyOn(context, 'resize');
  });

  afterEach(() => context.comp.ngOnDestroy());

  it('should be working', fakeAsync(() => {
    expect(context.render).not.toHaveBeenCalled();
    fixture.detectChanges();
    tick(1);
    expect(context.render).toHaveBeenCalled();
  }));

  it('should be resize', fakeAsync(() => {
    expect(context.resize).not.toHaveBeenCalled();
    context.resizeTime = 1;
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    window.dispatchEvent(new Event('resize'));
    tick(2);
    expect(context.resize).toHaveBeenCalled();
  }));
});

@Component({
  template: ` <g2-custom #comp [resizeTime]="resizeTime" (resize)="resize()" (render)="render()"></g2-custom> `,
})
class TestComponent {
  @ViewChild('comp', { static: true }) comp: G2CustomComponent;
  resizeTime = 0;
  render(): void {}
  resize(): void {}
}
