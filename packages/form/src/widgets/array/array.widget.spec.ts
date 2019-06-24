import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { createTestContext } from '@delon/testing';
import { deepCopy } from '@delon/util';
import { configureSFTestSuite, SFPage, TestFormComponent } from '../../../spec/base.spec';
import { SFSchema } from '../../../src/schema/index';
import { ArrayProperty, FormProperty } from '../../model';

describe('form: widget: array', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;
  const maxItems = 3;
  const schema: SFSchema = {
    properties: {
      arr: {
        type: 'array',
        maxItems,
        items: {
          type: 'object',
          properties: {
            a: { type: 'string' },
          },
        },
      },
    },
  };

  configureSFTestSuite();

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestFormComponent));
    page = new SFPage(context.comp);
    page.prop(dl, context, fixture);
  });

  it('should be add item', () => {
    page
      .newSchema(schema)
      .checkCount('.sf-array-item', 0)
      .add()
      .checkCount('.sf-array-item', 1);
  });
  it(`should be maximum ${maxItems}`, () => {
    page
      .newSchema(schema)
      .add()
      .add()
      .add()
      .checkCount('.sf-array-item', maxItems)
      .add()
      .checkCount('.sf-array-item', maxItems);
  });
  it('should be set values', () => {
    page
      .newSchema(schema)
      .checkCount('.sf-array-item', 0)
      .add()
      .checkCount('.sf-array-item', 1)
      .setValue('/arr', [])
      .checkCount('.sf-array-item', 0);
  });
  describe('#removable', () => {
    it('with true', () => {
      const s = deepCopy(schema) as SFSchema;
      s.properties!.arr.ui = { removable: true };
      page
        .newSchema(s)
        .checkCount('.sf-array-item', 0)
        .add()
        .checkCount('.sf-array-item', 1)
        .remove()
        .checkCount('.sf-array-item', 0);
    });
    it('with false', () => {
      const s = deepCopy(schema) as SFSchema;
      s.properties!.arr.ui = { removable: false };
      page
        .newSchema(s)
        .checkCount('.sf-array-item', 0)
        .add()
        .checkCount('.sf-array-item', 1)
        .checkCount(`.sf__array-container [data-index="0"] .remove`, 0);
    });
  });
  describe('#default data', () => {
    it('via formData in sf component', () => {
      const data = {
        arr: [{ a: 'a1' }, { a: 'a2' }],
      };
      context.formData = data;
      page.newSchema(schema).checkCount('.sf-array-item', data.arr.length);
    });
    it('via default in schema', () => {
      const data = [{ a: 'a1' }, { a: 'a2' }];
      const s = deepCopy(schema) as SFSchema;
      s.properties!.arr.default = data;
      page.newSchema(s).checkCount('.sf-array-item', data.length);
    });
    it('should be keeping default value in reset action', () => {
      const data = [{ a: 'a1' }, { a: 'a2' }];
      const s = deepCopy(schema) as SFSchema;
      s.properties!.arr.default = data;
      page
        .newSchema(s)
        .checkCount('.sf-array-item', data.length)
        .add()
        .checkCount('.sf-array-item', data.length + 1)
        .reset()
        .checkCount('.sf-array-item', data.length);
    });
  });
  describe('#paths', () => {
    function getPaths(): string[] {
      const properties = (page.getProperty('/arr') as ArrayProperty).properties as FormProperty[];
      return properties.map(p => p.path);
    }
    it('should be reset path subscript when remove item', () => {
      page
        .newSchema(deepCopy(schema))
        .add()
        .add();
      expect(getPaths().length).toBe(2);
      expect(getPaths()[0]).toBe('/arr/0');
      expect(getPaths()[1]).toBe('/arr/1');
      page.remove();
      expect(getPaths().length).toBe(1);
      expect(getPaths()[0]).toBe('/arr/0');
    });
    it('should always start from 0', () => {
      page
        .newSchema(deepCopy(schema))
        .add()
        .add();
      expect(getPaths().length).toBe(2);
      expect(getPaths()[0]).toBe('/arr/0');
      expect(getPaths()[1]).toBe('/arr/1');
      page.reset().add();
      expect(getPaths().length).toBe(1);
      expect(getPaths()[0]).toBe('/arr/0');
    });
    it('should be return undefined when invalid path subscript', () => {
      page.newSchema(deepCopy(schema)).add();
      expect(page.getProperty('/arr/10/a')).toBeUndefined();
    });
  });
});
