import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzIconService } from 'ng-zorro-antd/icon';

import { ACLService, DelonACLModule } from '@delon/acl';
import { createTestContext } from '@delon/testing';
import { AlainI18NService, AlainThemeModule, ALAIN_I18N_TOKEN, DelonLocaleService, en_US } from '@delon/theme';
import { deepCopy } from '@delon/util/other';

import { FormPropertyFactory } from '../src/model/form.property.factory';
import { DelonFormModule } from '../src/module';
import { SFSchema } from '../src/schema/index';
import { WidgetRegistry } from '../src/widget.factory';
import { SCHEMA, SFPage, TestFormComponent } from './base.spec';
registerLocaleData(zh);

describe('form: component', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;

  function genModule(options: { acl?: boolean; i18n?: boolean } = {}): void {
    options = { acl: false, i18n: false, ...options };
    const imports = [NoopAnimationsModule, DelonFormModule.forRoot(), AlainThemeModule.forRoot()];
    if (options.i18n) {
      imports.push(AlainThemeModule.forRoot());
    }
    if (options.acl) {
      imports.push(DelonACLModule.forRoot());
    }
    TestBed.configureTestingModule({
      imports,
      declarations: [TestFormComponent, TestModeComponent]
    });
  }

  function createComp(): void {
    fixture.detectChanges();
    page = new SFPage(context.comp);
    page.prop(dl, context, fixture);
  }

  describe('', () => {
    beforeEach(() => {
      genModule();
      ({ fixture, dl, context } = createTestContext(TestFormComponent));
      createComp();
    });

    describe('[default]', () => {
      it('should throw error when parent is not object or array', () => {
        expect(() => {
          const factory = context.comp['formPropertyFactory'] as FormPropertyFactory;
          factory.createProperty({}, {}, {}, { type: 'invalid', path: 'a' } as NzSafeAny, 'a');
        }).toThrowError(`Instanciation of a FormProperty with an unknown parent type: invalid`);
      });

      it('should throw error when type is invalid', () => {
        expect(() => {
          context.schema = {
            properties: {
              a: {
                type: 'aa' as NzSafeAny
              }
            }
          };
          fixture.detectChanges();
        }).toThrowError(`Undefined type aa`);
      });

      it('should throw error when is invalid schema', () => {
        expect(() => {
          context.schema = null;
          fixture.detectChanges();
        }).toThrowError('Invalid Schema');
      });

      it(`Don't support string with root ui property`, () => {
        expect(() => {
          context.schema = {
            ui: 'string',
            properties: {}
          };
          fixture.detectChanges();
        }).toThrowError(`Don't support string with root ui property`);
      });

      it('should be used default widget when is invalid schema type', () => {
        spyOn(console, 'warn');
        expect(console.warn).not.toHaveBeenCalled();
        context.schema = {
          type: 'string',
          properties: {},
          ui: {
            widget: 'asdf'
          }
        };
        fixture.detectChanges();
        expect(console.warn).toHaveBeenCalled();
      });

      it('should be console debug informations', () => {
        spyOn(console, 'warn');
        expect(console.warn).not.toHaveBeenCalled();
        context.schema = {
          properties: {
            name: { type: 'string' },
            age: { type: 'number' }
          },
          required: ['name', 'age'],
          ui: {
            debug: true
          }
        };
        fixture.detectChanges();
        page.setValue('/name', 'a');
        expect(console.warn).toHaveBeenCalled();
      });

      it('should be console debug informations when ajv throw error', () => {
        spyOn(console, 'warn');
        expect(console.warn).not.toHaveBeenCalled();
        context.schema = {
          properties: {
            time: {
              type: 'string',
              ui: { widget: 'date', mode: 'range' },
              title: 'Date',
              format: 'yyyy-MM-dd HH:mm:ss'
            }
          },
          ui: {
            debug: true
          }
        };
        fixture.detectChanges();
        expect(console.warn).toHaveBeenCalled();
      });

      it('should be ingore required when element is hidden', () => {
        const s: SFSchema = {
          properties: {
            name: {
              type: 'string',
              ui: { hidden: true }
            }
          },
          required: ['name']
        };
        page.newSchema(s);
        expect(context.comp._schema.required!.indexOf('name') === -1).toBe(true);
      });

      it('should be ingore trigger formChange event when call refreshSchema method', () => {
        expect(context.formChange).not.toHaveBeenCalled();
        page.newSchema({ properties: { name: { type: 'string' } } });
        expect(context.formChange).not.toHaveBeenCalled();
      });

      it('should be hava values when call refreshSchema method after', () => {
        page.newSchema({ properties: { name: { type: 'string', default: 'a' } } });
        expect(context.formChange).not.toHaveBeenCalled();
        expect(context.comp.value.name).toBe('a');
      });
    });

    describe('[button]', () => {
      it('should be has a primary button when default value', () => {
        page.checkCount('.sf-btns', 1).checkCount('.ant-btn-primary', 1);
      });
      it('should be null', () => {
        context.button = null;
        fixture.detectChanges();
        page.checkCount('.sf-btns', 1).checkCount('button', 0);
      });
      it('should be undefined', () => {
        context.button = undefined;
        fixture.detectChanges();
        page.checkCount('.sf-btns', 1).checkCount('button', 0);
      });
      it('should be none', () => {
        context.button = 'none';
        fixture.detectChanges();
        page.checkCount('.sf-btns', 0);
      });
      it('should be icon', () => {
        context.button = {
          submit_icon: {
            type: 'search'
          },
          reset_icon: {
            type: 'file'
          }
        };
        fixture.detectChanges();
        page.checkCount('[type="submit"] .anticon', 1);
        page.checkCount('[type="button"] .anticon', 1);
      });
      describe('when layout is horizontal', () => {
        it('should be has a fix 100px width', () => {
          page
            .newSchema({
              properties: {
                name: {
                  type: 'string',
                  ui: {
                    spanLabelFixed: 100
                  }
                }
              }
            })
            .checkStyle('.sf-btns .ant-form-item-control', 'margin-left', '100px');
        });
        it('should be specified grid', () => {
          const span = 11;
          context.button = {
            render: {
              grid: { span }
            }
          };
          fixture.detectChanges();
          page.checkCls('.sf-btns .ant-form-item-control', `ant-col-${span}`);
        });
        it('should be fixed label', () => {
          const spanLabelFixed = 56;
          context.button = {
            render: {
              spanLabelFixed
            }
          };
          fixture.detectChanges();
          page.checkStyle('.sf-btns .ant-form-item-control', 'margin-left', `${spanLabelFixed}px`);
        });
      });
      describe('#size', () => {
        it('with small', () => {
          context.button = { render: { size: 'small' } };
          fixture.detectChanges();
          page.checkCount('.ant-btn-sm', 2);
        });
        it('with large', () => {
          context.button = { render: { size: 'large' } };
          fixture.detectChanges();
          page.checkCount('.ant-btn-lg', 2);
        });
      });
      it('should be update button text when i18n changed', () => {
        page.checkElText('.ant-btn-primary', '提交');
        const i18n = TestBed.inject<DelonLocaleService>(DelonLocaleService) as DelonLocaleService;
        i18n.setLocale(en_US);
        fixture.detectChanges();
        page.checkElText('.ant-btn-primary', 'Submit');
      });
    });

    describe('properites', () => {
      describe('#validate', () => {
        it('should be validate when submitted and not liveValidate', () => {
          page.submit(false);
          expect((page.getEl('.ant-btn-primary') as HTMLButtonElement).disabled).toBe(true);
          context.liveValidate = false;
          fixture.detectChanges();
          page.submit(false).setValue('/name', 'cipchk').setValue('/pwd', '1111').submit(true);
        });
      });

      describe('#submit', () => {
        it('should be submit when is valid', () => {
          page.setValue('/name', 'cipchk').setValue('/pwd', '1111').isValid();
        });
        it('should not be submit when is invalid', () => {
          page.setValue('/name', 'cipchk').isValid(false);
        });
      });

      describe('#reset', () => {
        it('should be set default value', () => {
          const schema = deepCopy(SCHEMA.user) as SFSchema;
          schema.properties!.name.default = 'cipchk';
          page.newSchema(schema).reset().checkValue('/name', 'cipchk');
        });
      });

      describe('#layout', () => {
        ['horizontal', 'vertical', 'inline'].forEach(type => {
          it(`with ${type}`, () => {
            context.layout = type;
            fixture.detectChanges();
            page.checkCls('form', `ant-form-${type}`);
          });
        });
        describe(`when with horizontal`, () => {
          it('shoule be fixed label width', () => {
            page
              .newSchema({
                properties: {
                  name: {
                    type: 'string',
                    ui: {
                      spanLabelFixed: 100
                    }
                  }
                }
              })
              .checkStyle('.ant-form-item-label', 'flex', '0 0 100px')
              .checkStyle('.ant-form-item-control', 'maxWidth', 'calc(100% - 100px)');
          });
          it('should inherit parent node', () => {
            page
              .newSchema({
                properties: {
                  address: {
                    type: 'object',
                    ui: { spanLabelFixed: 98 },
                    properties: {
                      city: { type: 'string' }
                    }
                  }
                }
              })
              .checkStyle('.ant-form-item-label', 'flex', '0 0 98px')
              .checkStyle('.ant-form-item-control', 'maxWidth', 'calc(100% - 98px)');
          });
        });
      });

      describe('#autocomplete', () => {
        [null, 'on', 'off'].forEach((type: NzSafeAny) => {
          it(`with [${type}]`, () => {
            context.autocomplete = type;
            fixture.detectChanges();
            page.checkAttr('form', 'autocomplete', type, !!type);
          });
        });
      });

      describe('#firstVisual', () => {
        it('with false', () => {
          context.firstVisual = false;
          fixture.detectChanges();
          page.checkCount('.ant-form-item-explain', 0);
        });
        it('with true', () => {
          context.firstVisual = true;
          fixture.detectChanges();
          page.checkCount('.ant-form-item-explain', 2);
        });
      });

      describe('#onlyVisual', () => {
        it('with false', () => {
          context.onlyVisual = false;
          fixture.detectChanges();
          page.checkCount('.sf__no-error', 0);
          page.checkCount('.ant-form-item-explain', 2);
        });
        it('with true', () => {
          context.onlyVisual = true;
          fixture.detectChanges();
          page.checkCount('.sf__no-error', 1);
          page.checkCount('.ant-form-item-explain', 0);
        });
      });

      it('#disabled', () => {
        const CLS: { [key: string]: string | NzSafeAny[] } = {
          input: '.ant-input[disabled]',
          number: '.ant-input-number-disabled',
          switch: '.ant-switch-disabled'
        };
        page.newSchema({
          properties: {
            ipt: { type: 'string' },
            number: { type: 'number' },
            switch: { type: 'boolean' },
            select: { type: 'string', enum: ['A'] }
          }
        });
        context.disabled = false;
        fixture.detectChanges();
        Object.keys(CLS).forEach(key => {
          if (Array.isArray(CLS[key])) {
            page.checkCount(CLS[key][0][0], CLS[key][0][1]);
          } else {
            page.checkCount(CLS[key] as string, 0);
          }
        });
        context.disabled = true;
        fixture.detectChanges();
        Object.keys(CLS).forEach(key => {
          if (Array.isArray(CLS[key])) {
            page.checkCount(CLS[key][1][0], CLS[key][1][1]);
          } else {
            page.checkCount(CLS[key] as string, 1);
          }
        });
      });

      it('#loading', () => {
        context.loading = false;
        fixture.detectChanges();
        const CLS = {
          loading: '[data-type="submit"].ant-btn-loading',
          disabled: '[data-type="reset"][disabled]'
        };
        page.checkCount(CLS.loading, 0);
        page.checkCount(CLS.disabled, 0);
        context.loading = true;
        fixture.detectChanges();
        page.checkCount(CLS.loading, 1);
        page.checkCount(CLS.disabled, 1);
      });

      it('#noColon', () => {
        context.noColon = true;
        fixture.detectChanges();
        const CLS = `.sf__no-colon`;
        page.checkCount(CLS, 1);
        context.noColon = false;
        fixture.detectChanges();
        page.checkCount(CLS, 0);
      });

      describe('#cleanValue', () => {
        it('with true', () => {
          context.cleanValue = true;
          fixture.detectChanges();
          page.newSchema(
            {
              properties: {
                name: { type: 'string' },
                arr: { type: 'array', items: { type: 'object', properties: { x: { type: 'string' } } } }
              }
            },
            {},
            { name: 'a', age: 10, arr: [{ x: 1, y: 2 }] }
          );
          expect(context.comp.value.age == null).toBe(true);
          expect(context.comp.value.arr[0].y == null).toBe(true);
        });
        it('with false', () => {
          context.cleanValue = false;
          fixture.detectChanges();
          page.newSchema(
            {
              properties: {
                name: { type: 'string' },
                arr: { type: 'array', items: { type: 'object', properties: { x: { type: 'string' } } } }
              }
            },
            {},
            { name: 'a', age: 10, arr: [{ x: 1, y: 2 }] }
          );
          expect(context.comp.value.age).toBe(10);
          expect(context.comp.value.arr[0].y).toBe(2);
        });
      });

      it('#formChange', () => {
        page.setValue('/name', 'cipchk');
        expect(context.formChange).toHaveBeenCalled();
      });

      it('#formValueChange', () => {
        page.setValue('/name', 'cipchk');
        expect(context.formValueChange).toHaveBeenCalled();
      });

      it('#formSubmit', () => {
        page.setValue('/name', 'cipchk').setValue('/pwd', 'asdf').submit();
        expect(context.formSubmit).toHaveBeenCalled();
      });

      it('#formReset', () => {
        page.setValue('/name', 'cipchk').setValue('/pwd', 'asdf').reset();
        expect(context.formReset).toHaveBeenCalled();
      });

      it('#formError', () => {
        page.setValue('/name', 'cipchk').setValue('/name', '');
        expect(context.formError).toHaveBeenCalled();
      });
    });

    describe('[widgets]', () => {
      it('#size', () => {
        page
          .newSchema({
            properties: { name: { type: 'string', ui: { size: 'large' } } }
          })
          .checkCls('input', 'ant-input-lg');
      });
      it('#disabled', fakeAsync(() => {
        const el = page
          .newSchema({ properties: { name: { type: 'string', readOnly: true } } })
          .getEl('input') as HTMLInputElement;
        tick();
        expect(el.disabled).toBe(true);
        expect(el.classList).toContain('ant-input-disabled');
      }));
      it('should be custom class', () => {
        page
          .newSchema({
            properties: { name: { type: 'string', ui: { class: 'test-cls' } } }
          })
          .checkCls('sf-string', 'test-cls');
      });
      it('should get all registered widgets', () => {
        const wr = TestBed.inject(WidgetRegistry) as WidgetRegistry;
        expect(Object.keys(wr.widgets).length).toBeGreaterThan(0);
      });
    });

    describe('public methods', () => {
      it('#getProperty', () => {
        expect(context.comp.getProperty('/name')).not.toBeNull();
      });
      it('#getValue', () => {
        const name = 'asdf';
        page.newSchema({ properties: { name: { type: 'string' } } }, null!, { name });
        expect(context.comp.getValue('/name')).toBe(name);
      });
      it('#setValue', () => {
        const name = 'new-asdf';
        context.comp.setValue('/name', name);
        expect(context.comp.value.name).toBe(name);
      });
      it('#setValue, shoule be throw error when invlaid path', () => {
        expect(() => {
          context.comp.setValue('/invalid-path', name);
        }).toThrow();
      });
    });

    describe('[Custom Validator]', () => {
      it('with function and shoule be success when return a empty errors', () => {
        const s: SFSchema = {
          properties: {
            a: {
              type: 'string',
              ui: {
                validator: jasmine.createSpy().and.returnValue([{ keyword: 'required', message: 'a' }])
              }
            }
          }
        };
        page.newSchema(s);
        expect(page.getProperty('/a').valid).toBe(false);
      });
      it('with function', () => {
        const s: SFSchema = {
          properties: {
            a: {
              type: 'string',
              ui: {
                validator: jasmine.createSpy().and.returnValue([])
              }
            }
          }
        };
        page.newSchema(s);
        expect(page.getProperty('/a').valid).toBe(true);
      });
      it('with observable', () => {
        const s: SFSchema = {
          properties: {
            a: {
              type: 'string',
              ui: {
                validator: jasmine.createSpy().and.returnValue(of([{ keyword: 'required', message: 'a' }]))
              }
            }
          }
        };
        page.newSchema(s);
        expect(page.getProperty('/a').valid).toBe(false);
      });
      it('shoule be throw error when non-include a message property', () => {
        expect(() => {
          const s: SFSchema = {
            properties: {
              a: {
                type: 'string',
                ui: {
                  validator: jasmine.createSpy().and.returnValue([{ keyword: 'required' }])
                }
              }
            }
          };
          page.newSchema(s);
        }).toThrowError();
      });
      it('shoule be support custom params in message', () => {
        const s: SFSchema = {
          properties: {
            a: {
              type: 'string',
              ui: {
                validator: () => [
                  {
                    keyword: 'a',
                    message: 'a-{id}-{invalid}',
                    params: {
                      id: 10
                    }
                  }
                ]
              }
            }
          }
        };
        page.newSchema(s);
        expect(page.getProperty('/a').errors![0].message).toBe(`a-10-`);
      });
    });

    describe('[Custom Show Errors]', () => {
      it('shoule be re-error message via error property', () => {
        const s: SFSchema = {
          properties: {
            a: {
              type: 'string',
              ui: {
                errors: {
                  required: 'REQUEST'
                }
              }
            }
          },
          required: ['a']
        };
        page.newSchema(s);
        expect(page.getProperty('/a').errors![0].message).toBe('REQUEST');
      });

      it('shoule be re-error message via error property and type is function', () => {
        const s: SFSchema = {
          properties: {
            a: {
              type: 'string',
              ui: {
                errors: {
                  required: jasmine.createSpy().and.returnValue('A')
                }
              }
            }
          },
          required: ['a']
        };
        page.newSchema(s);
        expect(page.getProperty('/a').errors![0].message).toBe('A');
        expect((s.properties!.a.ui as NzSafeAny).errors.required).toHaveBeenCalled();
      });

      it('should be i18n', () => {
        const iconSrv = TestBed.inject(NzIconService);
        spyOn(iconSrv, 'getRenderedContent').and.returnValue(of());
        const s: SFSchema = {
          properties: {
            a: {
              type: 'string'
            },
            arr: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  name: {
                    type: 'string'
                  }
                },
                required: ['name']
              }
            }
          },
          required: ['a']
        };
        page.newSchema(s, undefined, { a: '', arr: [{ name: '' }] });
        expect(page.getProperty('/a').errors![0].message).toBe(context.comp.locale.error.required);
        const i18n = TestBed.inject(DelonLocaleService);
        i18n.setLocale(en_US);
        fixture.detectChanges();
        expect(page.getProperty('/a').errors![0].message).toBe(context.comp.locale.error.required);
        expect(page.getProperty('/arr').errors![0].message).toBe(context.comp.locale.error.required);
      });

      it('should be display required * when showRequired is true', () => {
        const s: SFSchema = {
          properties: {
            a: {
              type: 'string',
              ui: {
                showRequired: true
              }
            }
          }
        };
        page.newSchema(s).checkCount('.ant-form-item-required', 1);
      });

      it('should be replace valid parameters in error', () => {
        const s: SFSchema = {
          properties: {
            a: {
              type: 'number',
              title: '单价',
              multipleOf: 0.01,
              default: 0.011
            }
          }
        };
        page.newSchema(s).checkError(`应当是 0.01 的整数倍`);
      });
    });
  });

  describe('#mode', () => {
    beforeEach(() => {
      genModule();
      ({ fixture, dl, context } = createTestContext(TestModeComponent));
    });
    it('should be auto 搜索 in submit', () => {
      context.mode = 'search';
      createComp();
      expect(page.getEl('.ant-btn-primary').textContent).toContain('搜索');
    });
    it('should be auto 保存 in submit', () => {
      context.mode = 'edit';
      createComp();
      expect(page.getEl('.ant-btn-primary').textContent).toContain('保存');
    });
    it('should be custom text of search', () => {
      context.mode = 'search';
      context.button = {
        search: 'SEARCH'
      };
      createComp();
      expect(page.getEl('.ant-btn-primary').textContent).toContain('SEARCH');
    });
    it('should be custom text of edit', () => {
      context.mode = 'edit';
      context.button = {
        edit: 'SAVE'
      };
      createComp();
      expect(page.getEl('.ant-btn-primary').textContent).toContain('SAVE');
    });
  });

  describe('ACL', () => {
    beforeEach(() => genModule({ acl: true }));

    it('should working', fakeAsync(() => {
      ({ fixture, dl, context } = createTestContext(TestFormComponent));
      createComp();
      const acl = TestBed.inject<ACLService>(ACLService);
      acl.setFull(false);
      acl.setRole(['admin']);
      const s: SFSchema = {
        properties: {
          a: {
            type: 'string',
            ui: {
              acl: 'admin'
            }
          }
        },
        required: ['a']
      };
      page.newSchema(s);
      page.checkUI('/a', 'hidden', false);
      acl.setRole(['user']);
      tick();
      fixture.detectChanges();
      page.checkUI('/a', 'hidden', true);
    }));
  });

  describe('I18N', () => {
    beforeEach(() => genModule({ i18n: true }));

    it('should working', fakeAsync(() => {
      ({ fixture, dl, context } = createTestContext(TestFormComponent));
      createComp();
      const i18n = TestBed.inject(ALAIN_I18N_TOKEN) as AlainI18NService;
      let lang = 'en';
      spyOn(i18n, 'fanyi').and.callFake(((key: string) => {
        if (key === 'null') return null;
        return lang === 'en' ? key : `zh-${key}`;
      }) as NzSafeAny);
      const s: SFSchema = {
        properties: {
          a: {
            type: 'string',
            title: 'title',
            description: 'title',
            ui: {
              i18n: 'i18n',
              descriptionI18n: 'descriptionI18n',
              optionalHelp: {
                i18n: 'ohi18n'
              }
            }
          },
          b: {
            type: 'string',
            title: 'a',
            ui: {
              i18n: 'null'
            }
          }
        }
      };
      page.newSchema(s);
      page
        .checkSchema('/a', 'title', 'i18n')
        .checkSchema('/b', 'title', 'null')
        .checkSchema('/a', 'description', 'descriptionI18n')
        .checkUI('/a', 'optionalHelp.text', 'ohi18n');
      lang = 'zh';
      i18n.use(lang, {});
      page
        .checkSchema('/a', 'title', 'zh-i18n')
        .checkSchema('/a', 'description', 'zh-descriptionI18n')
        .checkUI('/a', 'optionalHelp.text', 'zh-ohi18n');
    }));
  });
});

@Component({
  template: `
    <sf [layout]="layout" #comp [schema]="schema" [ui]="ui" [button]="button" [mode]="mode" [loading]="loading"></sf>
  `
})
class TestModeComponent extends TestFormComponent {}
