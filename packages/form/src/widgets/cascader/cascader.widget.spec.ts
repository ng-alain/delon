import { DebugElement } from '@angular/core';
import { fakeAsync, ComponentFixture } from '@angular/core/testing';

import { createTestContext } from '@delon/testing';
import { configureSFTestSuite, SFPage, TestFormComponent } from '../../../spec/base.spec';
import { SFSchema } from '../../../src/schema/index';
import { CascaderWidget } from './cascader.widget';

describe('form: widget: cascader', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;
  const widget = 'cascader';

  configureSFTestSuite();

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestFormComponent));
    page = new SFPage(context.comp);
    page.prop(dl, context, fixture);
  });

  describe('[data source]', () => {
    it('with enum', fakeAsync(() => {
      const data = [
        {
          value: 110000,
          label: '北京',
          parent: 0,
        },
      ];
      const s: SFSchema = {
        properties: {
          a: {
            type: 'number',
            ui: { widget, triggerAction: ['hover'] },
            enum: data,
            default: [110000],
          },
        },
      };
      page.newSchema(s);
      const comp = page.getWidget<CascaderWidget>('sf-cascader');
      expect(comp.data.length).toBe(1);
      expect(comp.data[0].checked).toBe(true);
    }));
  });
});
