import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { createTestContext } from '@delon/testing';
import { configureSFTestSuite, SFPage, TestFormComponent } from '../../../spec/base.spec';

describe('form: widget: string', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;

  configureSFTestSuite();

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestFormComponent));
    page = new SFPage(context.comp);
    page.cleanOverlay().prop(dl, context, fixture);
  });

  it('should be render input group when include addon', () => {
    page
      .newSchema({
        properties: {
          a: {
            type: 'string',
            ui: {
              prefix: 'P',
            },
          },
        },
      })
      .checkCount('nz-input-group', 1);
  });

  it('should be default color #000000 when format is color and default is null', () => {
    page.newSchema({
      properties: {
        a: {
          type: 'string',
          format: 'color',
        },
      },
    });
    const ipt = page.getEl('.ant-input') as HTMLInputElement;
    expect(ipt.value).toBe('#000000');
  });
});
