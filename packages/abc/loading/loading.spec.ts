import { Component, DebugElement, ViewChild } from '@angular/core';
import { inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { configureTestSuite, createTestContext } from '@delon/testing';
import { LoadingModule } from './loading.module';

describe('abc: loading', () => {
  let fixture: ComponentFixture<TestComponent>;
  let dl: DebugElement;
  let context: TestComponent;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [LoadingModule],
      declarations: [TestComponent],
    });
  });
});

@Component({
  template: ``,
})
class TestComponent {}
