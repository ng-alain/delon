import { Component, DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import type { Mock } from 'vitest';

import { createTestContext } from '@delon/testing';

import { configureSFTestSuite, SFPage, TestFormComponent } from './base';
import { SFSchema } from '../src/schema';
import { ControlWidget } from '../src/widget';

/** 模拟用户自定义小部件（组件方式），内部使用 `ngModel` */
@Component({
  selector: 'sf-probe',
  imports: [FormsModule],
  template: `<input class="probe" [ngModel]="value" (ngModelChange)="setValue($event)" />`
})
class ProbeWidget extends ControlWidget {}

describe('form: NG01354', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;
  let warn: Mock;

  configureSFTestSuite({
    imports: [ProbeWidget],
    widgets: [{ KEY: 'probe', type: ProbeWidget }]
  });

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestFormComponent));
    page = new SFPage(context.comp);
    page.prop(dl, context, fixture);
    warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  function ng01354(): string[] {
    return vi
      .mocked(warn)
      .mock.calls.map(args => args.join(' '))
      .filter(msg => msg.includes('NG01354'));
  }

  it('should not warn NG01354 when built-in widgets render ngModel', () => {
    page.newSchema({
      properties: {
        string: { type: 'string' },
        number: { type: 'number' },
        boolean: { type: 'boolean' },
        textarea: { type: 'string', ui: { widget: 'textarea' } },
        select: { type: 'string', enum: ['a', 'b'] },
        radio: { type: 'string', enum: ['a', 'b'], ui: { widget: 'radio' } },
        checkbox: { type: 'string', enum: ['a', 'b'], ui: { widget: 'checkbox' } },
        date: { type: 'string', ui: { widget: 'date' } }
      }
    } as SFSchema);

    expect(ng01354()).toEqual([]);
  });

  it('should not warn NG01354 when a custom widget component render ngModel', () => {
    page.newSchema({
      properties: {
        a: { type: 'string', ui: { widget: 'probe' } }
      }
    } as SFSchema);

    expect(ng01354()).toEqual([]);
  });

  it('should keep novalidate on the inner form', () => {
    page.newSchema({
      properties: {
        a: { type: 'string' }
      }
    } as SFSchema);

    expect(page.getEl('form').hasAttribute('novalidate')).toBe(true);
  });
});
