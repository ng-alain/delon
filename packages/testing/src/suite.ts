import { DebugElement, Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

export class TestContext<T> {
  constructor(public fixture: ComponentFixture<T>) {}

  get component(): T {
    return this.fixture.componentInstance;
  }

  get el(): HTMLElement {
    return this.fixture.debugElement.nativeElement;
  }

  get dl(): DebugElement {
    return this.fixture.debugElement;
  }

  get context(): T {
    return this.fixture.componentInstance;
  }

  detectChanges(): void {
    this.fixture.detectChanges();
  }

  resolve<T1>(component: Type<T1>): T1 {
    return this.fixture.debugElement.injector.get(component) as T1;
  }
}

export const createTestContext = <T>(component: Type<T>): TestContext<T> => {
  return new TestContext<T>(TestBed.createComponent<T>(component));
};
