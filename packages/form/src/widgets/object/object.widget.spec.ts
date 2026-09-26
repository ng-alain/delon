import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

import { createTestContext } from '@delon/testing';

import { SFObjectWidgetSchema } from './schema';
import { configureSFTestSuite, SFPage, TestFormComponent } from '../../../spec/base';

describe('form: widget: object', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;

  configureSFTestSuite();

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestFormComponent));
    page = new SFPage(context.comp);
    page.prop(dl, context, fixture);
  });

  it('should working', async () => {
    page.newSchema({
      properties: {
        a: {
          type: 'object',
          properties: {
            b: { type: 'string' }
          }
        }
      }
    });
    const property = page.getProperty('/a');
    property.setValue({ b: 1, c: 0 }, false);
    page.time();
    page.dc();
    await page.stabilize();
    const ipt = page.getEl('.ant-input') as HTMLInputElement;
    expect(ipt.value).toBe('1');
  });

  describe('#showTitle', () => {
    it('should be hide second title when value is undefined', () => {
      page
        .newSchema({
          title: 'root',
          properties: {
            a: {
              type: 'object',
              title: 'a',
              properties: {}
            }
          }
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
              properties: {}
            }
          }
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
              properties: {}
            }
          }
        })
        .checkCount('.sf__title', 0);
    });
    it('should be hide title when title is null', () => {
      page
        .newSchema({
          title: null,
          ui: { showTitle: true },
          properties: {}
        })
        .checkCount('.sf__title', 0);
    });
    it('should be hide title when is array property', () => {
      page
        .newSchema({
          properties: {
            a: {
              title: 'a',
              type: 'array'
            }
          }
        })
        .checkCount('.sf__title', 0);
    });
  });

  describe('render grid', () => {
    it('should be working with grid', () => {
      page
        .newSchema({
          properties: {
            a: {
              type: 'object',
              ui: {
                grid: { gutter: 16, span: 12, offset: 1, xs: 24, sm: 12, md: 8, lg: 6, xl: 4, xxl: 3 }
              },
              properties: {
                b: { type: 'string', ui: { grid: { span: 6 } } },
                c: { type: 'string', ui: { hidden: true } },
                d: { type: 'string' }
              }
            }
          }
        })
        .checkCount('sf-object > .ant-row', 1)
        .checkCount('sf-object > .ant-row > .ant-col', 2)
        .checkCount('sf-object > .ant-row > .ant-col-6', 1)
        .checkCount('sf-object > .ant-row > .ant-col-12', 1);
    });
  });

  describe('render card', () => {
    it('should be working', () => {
      page
        .newSchema({
          title: 'root',
          properties: {},
          ui: { type: 'card' }
        })
        .checkCount('.sf__object-card', 1)
        .checkCount('.sf__object-card-fold', 0)
        .click('.ant-card-head-title div')
        .checkCount('.sf__object-card-fold', 1);
    });
    it('should be disabled toggle expand when showExpand is false', () => {
      page
        .newSchema({
          title: 'root',
          properties: {},
          ui: { type: 'card', showExpand: false } as SFObjectWidgetSchema
        })
        .checkCount('.sf__object-card', 1)
        .checkCount('.sf__object-card-fold', 0)
        .click('.ant-card-head-title div')
        .checkCount('.sf__object-card-fold', 0);
    });
    it('should be show optional text', () => {
      page
        .newSchema({
          title: 'root',
          properties: {},
          ui: { type: 'card', optional: 'optional text' } as SFObjectWidgetSchema
        })
        .checkCount('.sf__optional', 1)
        .checkCount('.sf__optional [nz-tooltip]', 0);
    });
    it('should be show optional help', () => {
      page
        .newSchema({
          title: 'root',
          properties: {},
          ui: {
            type: 'card',
            optional: 'optional text',
            optionalHelp: { text: 'help text', placement: 'bottomRight' }
          } as SFObjectWidgetSchema
        })
        .checkCount('.sf__optional', 1)
        .checkCount('.sf__optional [nz-tooltip]', 1);
    });
  });
});
