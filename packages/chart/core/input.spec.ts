import { Component, Directive, Signal, input, numberAttribute } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { resolveInputs, watchInputs } from './input';

@Component({ selector: 'test-input-host', template: '' })
class TestInputHostComponent {
  readonly title = input('a');
  readonly count = input(0, { transform: numberAttribute });
  readonly data = input<number[]>([]);
  readonly fired: Array<Array<Signal<unknown>>> = [];

  constructor() {
    watchInputs(this, changed => this.fired.push([...changed]));
  }
}

/** 关键机制探针：抽象 @Directive 基类声明 input()，由 @Component 子类继承（与 G2BaseComponent 同构） */
@Directive()
abstract class TestBaseHostDirective {
  readonly baseInput = input('b');
}

@Component({ selector: 'test-derived-host', template: '' })
class TestDerivedHostComponent extends TestBaseHostDirective {
  readonly own = input(1);
}

describe('chart: core/input', () => {
  let fixture: ReturnType<typeof TestBed.createComponent<TestInputHostComponent>>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TestInputHostComponent);
  });

  it('resolveInputs 应采集全部 signal input（含 transform 的）', () => {
    expect(
      resolveInputs(fixture.componentInstance)
        .map(i => i.name)
        .sort()
    ).toEqual(['count', 'data', 'title']);
  });

  it('resolveInputs 应包含继承链上的 signal input（G2BaseComponent 的关键机制）', () => {
    const derived = TestBed.createComponent(TestDerivedHostComponent);
    expect(
      resolveInputs(derived.componentInstance)
        .map(i => i.name)
        .sort()
    ).toEqual(['baseInput', 'own']);
  });

  it('watchInputs 首跑只建基线，不回调', () => {
    fixture.detectChanges();
    expect(fixture.componentInstance.fired.length).toBe(0);
  });

  it('watchInputs 应只回报发生变化的输入信号', () => {
    fixture.detectChanges();
    fixture.componentRef.setInput('title', 'b');
    fixture.detectChanges();

    expect(fixture.componentInstance.fired.length).toBe(1);
    expect(fixture.componentInstance.fired[0]).toEqual([fixture.componentInstance.title]);
  });

  it('watchInputs 对 transform 输入应按变换后的值比较', () => {
    fixture.detectChanges();
    fixture.componentRef.setInput('count', '3');
    fixture.detectChanges();
    expect(fixture.componentInstance.fired.length).toBe(1);
    expect(fixture.componentInstance.fired[0]).toEqual([fixture.componentInstance.count]);
    expect(fixture.componentInstance.count()).toBe(3);
  });

  it('watchInputs 同值写入不应触发', () => {
    fixture.detectChanges();
    fixture.componentRef.setInput('title', 'a');
    fixture.detectChanges();
    expect(fixture.componentInstance.fired.length).toBe(0);
  });
});
