import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import * as deepExtend from 'deep-extend';
import { builder, TestFormComponent, SFPage, SCHEMA } from './base.spec';
import { SFSchema } from '../src/schema/index';
import { SFUISchemaItem, SFUISchema } from '../src/schema/ui';

describe('form: schema', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;

  beforeEach(() => ({ fixture, dl, context, page } = builder()));

  describe('[cover schema]', () => {
    it('should be using select widget when not ui and enum exists', () => {
      page
        .newSchema({
          properties: {
            name: { type: 'string', enum: ['a'] },
          },
        })
        .checkUI('/name', 'widget', 'select');
    });
    it('should be using autocomplete widget when format equal email', () => {
      page
        .newSchema({
          properties: {
            name: { type: 'string', format: 'email' },
          },
        })
        .checkUI('/name', 'widget', 'autocomplete');
    });
    it('support ui property is a string', () => {
      page
        .newSchema({
          properties: {
            name: { type: 'string', ui: 'textarea' },
          },
        })
        .checkUI('/name', 'widget', 'textarea');
    });
    it('should be inherit all properties with * for ui schema', () => {
      const schema: SFSchema = {
        properties: {
          name1: { type: 'string' },
          name2: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                a: { type: 'string' },
                b: { type: 'string' },
              },
            },
          },
        },
      };
      const label = 10;
      const ui: SFUISchema = {
        '*': { spanLabel: label },
        $name2: {
          $items: {
            $a: { spanLabel: 9 },
          },
        },
      };
      page
        .newSchema(schema, ui)
        .checkUI('/name1', 'spanLabel', label)
        .add()
        .checkUI('/name2/0/a', 'spanLabel', 9);
    });
    it('should be fixed label width', () => {
      const schema: SFSchema = {
        properties: {
          name: { type: 'string' },
          protocol: {
            type: 'boolean',
            title: '同意本协议',
            description: '《用户协议》',
            ui: {
              widget: 'checkbox',
            },
            default: true,
          },
        },
        ui: { spanLabelFixed: 10, debug: true },
      };
      page
        .newSchema(schema)
        .checkUI('/name', 'spanLabelFixed', 10)
        .checkUI('/protocol', 'spanLabelFixed', 10);
    });
    it('support invalid format value', () => {
      page
        .newSchema({
          properties: {
            name: { type: 'string', format: 'email1' },
          },
        })
        .checkUI('/name', 'widget', 'string');
    });
    it('should be null spanLabel when not horizontal layout', () => {
      context.layout = 'inline';
      fixture.detectChanges();
      page.checkUI('/name', 'spanLabel', null);
    });
    it('should call refreshSchema changed schema', () => {
      context.comp.refreshSchema(
        {
          properties: {
            user: {
              type: 'object',
              properties: {
                name: { type: 'string' },
                age: { type: 'number' },
              },
            },
          },
        },
        { '*': { spanLabelFixed: 100, spanControl: 10, offsetControl: 11 } },
      );
      page.checkUI('/user/name', 'spanLabelFixed', 100);
      page.checkUI('/user/name', 'spanControl', 10);
      page.checkUI('/user/name', 'offsetControl', 11);
    });
    it('support ui is null', () => {
      expect(() => {
        context.ui = null;
        fixture.detectChanges();
      }).not.toThrow();
    });
    describe('#array', () => {
      const arrUI: SFUISchemaItem = { spanLabel: 10, grid: { arraySpan: 12 } };
      const arrSchema: SFSchema = {
        properties: {
          name: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                a: { type: 'string' },
              },
            },
          },
        },
      };
      describe('[#via in json schema]', () => {
        it('should be has $items when is array', () => {
          const schema = deepExtend({}, arrSchema) as SFSchema;
          schema.properties.name.ui = deepExtend({}, arrUI);
          page
            .newSchema(schema)
            .checkUI('/name', 'grid.arraySpan', arrUI.grid.arraySpan);
        });
      });
      describe('[#via ui property]', () => {
        it('should be has $items when is array', () => {
          const schema = deepExtend({}, arrSchema);
          const uiSchema: SFUISchema = {
            $name: {
              $items: {},
              ...deepExtend({}, arrUI),
            },
          };
          page
            .newSchema(schema, uiSchema)
            .checkUI('/name', 'grid.arraySpan', arrUI.grid.arraySpan);
        });
      });
    });
  });
});
