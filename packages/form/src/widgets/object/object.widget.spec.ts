import { DebugElement } from '@angular/core';
import { fakeAsync, ComponentFixture } from '@angular/core/testing';

import { createTestContext } from '@delon/testing';
import { configureSFTestSuite, SFPage, TestFormComponent } from '../../../spec/base.spec';

describe('form: widget: object', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;
  const widget = 'object';

  configureSFTestSuite();

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestFormComponent));
    page = new SFPage(context.comp);
    page.prop(dl, context, fixture);
  });

  it('should working', fakeAsync(() => {
    page
      .newSchema({
        properties: {
          a: {
            type: 'object',
            properties: {
              b: { type: 'string' },
            },
          },
        },
      });
    const property = page.getProperty('/a');
    property.setValue({ b: 1, c: 0 }, false);
    page.time();
    const ipt = page.getEl('.ant-input') as HTMLInputElement;
    expect(ipt.value).toBe('1');
  }));

  describe('#showTitle', () => {
    it('should be hide second title when value is undefined', () => {
      page
        .newSchema({
          title: 'root',
          properties: {
            a: {
              type: 'object',
              title: 'a',
              properties: {
              },
            },
          },
        })
        .checkCount('.sf__title', 0);
    });
    it('should be show title when value is true', () => {
      page
        .newSchema({
          title: 'root',
          ui: { showTitle: true },
          properties: {
            a: {
              type: 'object',
              title: 'a',
              properties: {
              },
            },
          },
        })
        .checkCount('.sf__title', 1);
    });
    it('should be hide title when value is false', () => {
      page
        .newSchema({
          title: 'root',
          ui: { showTitle: false },
          properties: {
            a: {
              type: 'object',
              title: 'a',
              ui: { showTitle: false },
              properties: {
              },
            },
          },
        })
        .checkCount('.sf__title', 0);
    });
    it('should be hide title when title is null', () => {
      page
        .newSchema({
          title: null,
          ui: { showTitle: true },
          properties: {
          },
        })
        .checkCount('.sf__title', 0);
    });
    it('should be hide title when is array property', () => {
      page
        .newSchema({
          properties: {
            a: {
              title: 'a',
              type: 'array',
            },
          },
        })
        .checkCount('.sf__title', 0);
    });
  });
});
