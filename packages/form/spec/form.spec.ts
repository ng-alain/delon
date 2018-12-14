import { Component, DebugElement } from '@angular/core';
import { fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { configureTestSuite, createTestContext } from '@delon/testing';
import { AlainThemeModule } from '@delon/theme';
import { deepCopy } from '@delon/util';
import { DelonFormModule } from '../src/module';
import { SFSchema } from '../src/schema/index';
import { SCHEMA, SFPage, TestFormComponent } from './base.spec';

describe('form: component', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, AlainThemeModule.forRoot(), DelonFormModule.forRoot()],
      declarations: [TestFormComponent, TestModeComponent],
    });
  });

  describe('', () => {
    beforeEach(() => {
      ({ fixture, dl, context } = createTestContext(TestFormComponent));
      fixture.detectChanges();
      page = new SFPage(context.comp);
      page.prop(dl, context, fixture);
    });

    describe('[default]', () => {
      it('should be create a form', () => {
        expect(context).not.toBeUndefined();
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
            properties: {},
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
            widget: 'asdf',
          },
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
            age: { type: 'number' },
          },
          required: ['name', 'age'],
          ui: {
            debug: true,
          },
        };
        fixture.detectChanges();
        page.setValue('/name', 'a');
        expect(console.warn).toHaveBeenCalled();
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
      describe('when layout is horizontal', () => {
        it('should be has a fix 100px width', () => {
          page
            .newSchema({
              properties: {
                name: {
                  type: 'string',
                  ui: {
                    spanLabelFixed: 100,
                  },
                },
              },
            })
            .checkStyle(
              '.sf-btns .ant-form-item-control-wrapper',
              'margin-left',
              '100px',
            );
        });
        it('should be specified grid', () => {
          const span = 11;
          context.button = {
            render: {
              grid: { span },
            },
          };
          fixture.detectChanges();
          page.checkCls(
            '.sf-btns .ant-form-item-control-wrapper',
            `ant-col-${span}`,
          );
        });
        it('should be fixed label', () => {
          const spanLabelFixed = 56;
          context.button = {
            render: {
              spanLabelFixed,
            },
          };
          fixture.detectChanges();
          page.checkStyle(
            '.sf-btns .ant-form-item-control-wrapper',
            'margin-left',
            `${spanLabelFixed}px`,
          );
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
    });

    describe('properites', () => {
      describe('#validate', () => {
        it('should be validate when submitted and not liveValidate', () => {
          page.submit(false);
          expect(
            (page.getEl('.ant-btn-primary') as HTMLButtonElement).disabled,
          ).toBe(true);
          context.liveValidate = false;
          fixture.detectChanges();
          page
            .submit(false)
            .setValue('/name', 'cipchk')
            .setValue('/pwd', '1111')
            .submit(true);
        });
      });

      describe('#submit', () => {
        it('should be submit when is valid', () => {
          page
            .setValue('/name', 'cipchk')
            .setValue('/pwd', '1111')
            .isValid();
        });
        it('should not be submit when is invalid', () => {
          page.setValue('/name', 'cipchk').isValid(false);
        });
      });

      describe('#reset', () => {
        it('should be set default value', () => {
          const schema = deepCopy(SCHEMA.user) as SFSchema;
          schema.properties.name.default = 'cipchk';
          page
            .newSchema(schema)
            .reset()
            .checkValue('/name', 'cipchk');
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
                      spanLabelFixed: 100,
                    },
                  },
                },
              })
              .checkStyle('.ant-form-item-label', 'width', '100px');
          });
          it('should inherit parent node', () => {
            page
              .newSchema({
                properties: {
                  address: {
                    type: 'object',
                    ui: { spanLabelFixed: 98 },
                    properties: {
                      city: { type: 'string' },
                    },
                  },
                },
              })
              .checkStyle('.ant-form-item-label', 'width', '98px');
          });
        });
      });

      describe('#autocomplete', () => {
        [null, 'on', 'off'].forEach((type: any) => {
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
          page.checkCount('nz-form-explain', 0);
        });
        it('with true', () => {
          context.firstVisual = true;
          fixture.detectChanges();
          page.checkCount('nz-form-explain', 2);
        });
      });

      it('#formChange', () => {
        page.setValue('/name', 'cipchk');
        expect(context.formChange).toHaveBeenCalled();
      });

      it('#formSubmit', () => {
        page
          .setValue('/name', 'cipchk')
          .setValue('/pwd', 'asdf')
          .submit();
        expect(context.formSubmit).toHaveBeenCalled();
      });

      it('#formReset', () => {
        page
          .setValue('/name', 'cipchk')
          .setValue('/pwd', 'asdf')
          .reset();
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
            properties: { name: { type: 'string', ui: { size: 'large' } } },
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
            properties: { name: { type: 'string', ui: { class: 'test-cls' } } },
          })
          .checkCls('sf-string', 'test-cls');
      });
    });

    describe('public methods', () => {
      it('#getProperty', () => {
        expect(context.comp.getProperty('/name')).not.toBeNull();
      });
      it('#getValue', () => {
        const name = 'asdf';
        page.newSchema({ properties: { name: { type: 'string' } } }, null, { name });
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
  });

  describe('#mode', () => {
    beforeEach(() => {
      ({ fixture, dl, context } = createTestContext(TestModeComponent));
      fixture.detectChanges();
      page = new SFPage(context.comp);
      page.prop(dl, context, fixture);
    });
    it('should be auto 搜索 in submit', () => {
      context.mode = 'search';
      fixture.detectChanges();
      expect(page.getEl('.ant-btn-primary').textContent).toBe('搜索');
    });
    it('should be auto 保存 in submit', () => {
      context.mode = 'edit';
      fixture.detectChanges();
      expect(page.getEl('.ant-btn-primary').textContent).toBe('保存');
    });
    it('should be custom text of search', () => {
      context.mode = 'search';
      context.button = {
        search: 'SEARCH',
      };
      fixture.detectChanges();
      expect(page.getEl('.ant-btn-primary').textContent).toBe('SEARCH');
    });
    it('should be custom text of edit', () => {
      context.mode = 'edit';
      context.button = {
        edit: 'SAVE',
      };
      fixture.detectChanges();
      expect(page.getEl('.ant-btn-primary').textContent).toBe('SAVE');
    });
  });

});

@Component({
  template: `<sf [layout]="layout" #comp [schema]="schema" [ui]="ui" [button]="button" [mode]="mode"></sf>`,
})
class TestModeComponent extends TestFormComponent {}
