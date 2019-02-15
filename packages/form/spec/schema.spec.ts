import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { createTestContext } from '@delon/testing';
import { deepCopy } from '@delon/util';
import { ObjectProperty } from '../src/model/object.property';
import { SFSchema } from '../src/schema/index';
import { SFUISchema, SFUISchemaItem } from '../src/schema/ui';
import { configureSFTestSuite, SFPage, TestFormComponent } from './base.spec';

describe('form: schema', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;

  configureSFTestSuite();

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestFormComponent));
    fixture.detectChanges();
    page = new SFPage(context.comp);
    page.prop(dl, context, fixture);
  });

  describe('[cover schema]', () => {
    beforeEach(() => spyOn(console, 'warn'));
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
          const schema = deepCopy(arrSchema) as SFSchema;
          schema.properties.name.ui = deepCopy(arrUI);
          page.newSchema(schema).checkUI('/name', 'grid.arraySpan', arrUI.grid.arraySpan);
        });
      });
      describe('[#via ui property]', () => {
        it('should be has $items when is array', () => {
          const schema = deepCopy(arrSchema);
          const uiSchema: SFUISchema = {
            $name: {
              $items: {},
              ...deepCopy(arrUI),
            },
          };
          page.newSchema(schema, uiSchema).checkUI('/name', 'grid.arraySpan', arrUI.grid.arraySpan);
        });
      });
    });
  });

  describe('[definitions]', () => {
    it('should be ref definitions', () => {
      page
        .newSchema({
          definitions: {
            large: {
              type: 'string',
              maxLength: 10,
            },
          },
          properties: {
            name: { $ref: '#/definitions/large' },
          },
        })
        .checkSchema('/name', 'maxLength', 10);
    });
    it('should be throw error when not fond defind', () => {
      expect(() => {
        page.newSchema({
          definitions: {},
          properties: {
            name: { $ref: '#/definitions/large' },
          },
        });
      }).toThrow();
    });
    it('should be throw error when is invalid $ref', () => {
      expect(() => {
        page.newSchema({
          definitions: {},
          properties: {
            name: { $ref: 'definitions/large' },
          },
        });
      }).toThrow();
    });
  });

  describe('[if]', () => {
    it('should be changed login type via if', () => {
      page
        .newSchema({
          properties: {
            login_type: {
              type: 'string',
              title: '登录方式',
              enum: [{ label: '手机', value: 'mobile' }, { label: '账密', value: 'account' }],
              default: 'mobile',
              ui: {
                widget: 'radio',
                class: 'j-login_type',
              },
            },
            mobile: { type: 'string', ui: { class: 'j-mobile' } },
            code: { type: 'number', ui: { class: 'j-code' } },
            name: { type: 'string', ui: { class: 'j-name' } },
            pwd: {
              type: 'string',
              ui: {
                type: 'password',
                class: 'j-pwd',
              },
            },
          },
          required: ['login_type'],
          if: {
            properties: { login_type: { enum: ['mobile'] } },
          },
          then: {
            required: ['mobile', 'code'],
          },
          else: {
            required: ['name', 'pwd'],
          },
        })
        .checkCount('.j-mobile', 1)
        .checkCount('.j-name', 0);
      const labels = page.getEl('.j-login_type nz-radio-group').querySelectorAll('label');
      expect(labels.length).toBe(2);
      labels[1].click();
      page.checkCount('.j-mobile', 0).checkCount('.j-name', 1);
    });
    it('should be not else', () => {
      page
        .newSchema({
          properties: {
            login_type: {
              type: 'string',
              title: '登录方式',
              enum: [{ label: '手机', value: 'mobile' }, { label: '账密', value: 'account' }],
              default: 'mobile',
              ui: {
                widget: 'radio',
                class: 'j-login_type',
              },
            },
            mobile: { type: 'string', ui: { class: 'j-mobile' } },
            code: { type: 'number', ui: { class: 'j-code' } },
            name: { type: 'string', ui: { class: 'j-name' } },
            pwd: {
              type: 'string',
              ui: {
                type: 'password',
                class: 'j-pwd',
              },
            },
          },
          required: ['login_type'],
          if: {
            properties: { login_type: { enum: ['mobile'] } },
          },
          then: {
            required: ['mobile', 'code'],
          },
        })
        .checkCount('.j-mobile', 1)
        .checkCount('.j-name', 1);
      const labels = page.getEl('.j-login_type nz-radio-group').querySelectorAll('label');
      expect(labels.length).toBe(2);
      labels[1].click();
      page.checkCount('.j-mobile', 0).checkCount('.j-name', 1);
    });
    it(`should be throw error when is not 'properties' for if`, () => {
      expect(() => {
        page.newSchema({
          properties: { name: { type: 'string' } },
          if: {},
          then: {},
        });
      }).toThrowError(`if: does not contain 'properties'`);
    });
    it(`should be throw error when invalid key for 'properties' in if`, () => {
      expect(() => {
        page.newSchema({
          properties: {
            login_type: {
              type: 'string',
              title: '登录方式',
              enum: [{ label: '手机', value: 'mobile' }, { label: '账密', value: 'account' }],
              default: 'mobile',
              ui: {
                widget: 'radio',
                class: 'j-login_type',
              },
            },
            mobile: { type: 'string', ui: { class: 'j-mobile' } },
            code: { type: 'number', ui: { class: 'j-code' } },
            name: { type: 'string', ui: { class: 'j-name' } },
            pwd: {
              type: 'string',
              ui: {
                type: 'password',
                class: 'j-pwd',
              },
            },
          },
          required: ['login_type'],
          if: {
            properties: { login_type1: { enum: ['mobile'] } },
          },
          then: {
            required: ['mobile', 'code'],
          },
        });
      }).toThrow();
    });
  });

  describe('[order]', () => {
    function genKeys() {
      return JSON.stringify(Object.keys((context.comp.rootProperty as ObjectProperty).properties));
    }

    function checkOrderKeys(arr: string[]) {
      expect(genKeys()).toBe(JSON.stringify(arr));
    }

    it('should be adjust the order', () => {
      const order = ['pwd', 'name'];
      page.newSchema({
        properties: {
          name: { type: 'string' },
          pwd: { type: 'string' },
        },
        ui: {
          order,
        },
      });
      checkOrderKeys(order);
    });

    it('should be used *', () => {
      page.newSchema({
        properties: {
          a: { type: 'string' },
          b: { type: 'string' },
          c: { type: 'string' },
        },
        ui: {
          order: ['b', '*'],
        },
      });
      checkOrderKeys(['b', 'a', 'c']);
    });

    describe('should be throw error', () => {
      beforeEach(() => spyOn(console, 'error'));
      it('when has extraneous key', () => {
        expect(() => {
          page.newSchema({
            properties: {
              a: { type: 'string' },
              b: { type: 'string' },
            },
            ui: {
              order: ['c', 'a'],
            },
          });
        }).toThrow();
      });
      it('when does not contain all keys', () => {
        expect(() => {
          page.newSchema({
            properties: {
              a: { type: 'string' },
              b: { type: 'string' },
            },
            ui: {
              order: ['a'],
            },
          });
        }).toThrow();
      });
      it('when contains more than one wildcard item', () => {
        expect(() => {
          page.newSchema({
            properties: {
              a: { type: 'string' },
              b: { type: 'string' },
            },
            ui: {
              order: ['a', '*', '*', '*', '*'],
            },
          });
        }).toThrow();
      });
    });
  });

  describe('[$ref]', () => {
    it('should be required valid', () => {
      page
        .newSchema({
          definitions: {
            nameRef: {
              type: 'string',
              title: 'nameRef',
            },
          },
          properties: {
            name: {
              type: 'string',
              title: 'Name',
            },
            nameTwo: {
              $ref: '#/definitions/nameRef',
            },
          },
          required: ['name', 'nameTwo'],
        })
        .checkUI('/nameTwo', '_required', true);
    });
  });
});
