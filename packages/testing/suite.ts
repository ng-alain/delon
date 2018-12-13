import { Type } from '@angular/core';
import { getTestBed, ComponentFixture, TestBed } from '@angular/core/testing';

export const configureTestSuite = (configureAction?: () => void) => {
  const testBedApi: any = getTestBed();
  const originReset = TestBed.resetTestingModule;

  beforeAll(() => {
    TestBed.resetTestingModule();
    TestBed.resetTestingModule = () => TestBed;
  });

  if (configureAction) {
    beforeAll((done: DoneFn) => (async () => {
      configureAction();
      await TestBed.compileComponents();
    })().then(done).catch(done.fail));
  }

  afterEach(() => {
    testBedApi._activeFixtures.forEach((fixture: ComponentFixture<any>) => fixture.destroy());
    testBedApi._instantiated = false;
  });

  afterAll(() => {
    TestBed.resetTestingModule = originReset;
    TestBed.resetTestingModule();
  });
};

export class TestCtx<T> {
  constructor(public fixture: ComponentFixture<T>) { }

  get component() { return this.fixture.componentInstance; }

  get el(): HTMLElement { return this.fixture.debugElement.nativeElement; }

  get dl() { return this.fixture.debugElement; }

  get context() { return this.fixture.componentInstance; }

  detectChanges() { this.fixture.detectChanges(); }

  resolve(component: Type<any>) { return this.fixture.debugElement.injector.get(component); }
}

export const createTestContext = <T>(component: Type<T>) => {
  const fixture = TestBed.createComponent<T>(component);
  const testCtx = new TestCtx<T>(fixture);
  return testCtx;
};

export const createStableTestContext = async <T>(component: Type<T>) => {
  const testCtx = createTestContext(component);
  testCtx.detectChanges();
  await testCtx.fixture.whenStable();
  testCtx.detectChanges();
  return testCtx;
};
