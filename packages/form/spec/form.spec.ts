import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { deepCopy } from '@delon/abc';
import { builder, TestFormComponent, SFPage, SCHEMA } from './base.spec';
import { SFSchema } from '../src/schema/index';
import { SFUISchemaItem, SFUISchema } from '../src/schema/ui';

describe('form: component', () => {
    let fixture: ComponentFixture<TestFormComponent>;
    let dl: DebugElement;
    let context: TestFormComponent;
    let page: SFPage;

    beforeEach(() => ({ fixture, dl, context, page } = builder()));

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
                required: [ 'name', 'age' ],
                ui: {
                    debug: true
                }
            }
            fixture.detectChanges();
            page.setValue('/name', 'a');
            expect(console.warn).toHaveBeenCalled();
        });
    });

    describe('[button]', () => {
        it('should be has a primary button when default value', () => {
            page.checkCount('.sf-btns', 1)
                .checkCount('.ant-btn-primary', 1);
        });
        it('should be has a fix 100px width', () => {
            page.newSchema({
                properties: {
                    name: {
                        type: 'string',
                        ui: {
                            spanLabelFixed: 100
                        }
                    }
                }
            }).checkStyle('.sf-btns .ant-form-item-control-wrapper', 'margin-left', '100px');
        });
        it('should be null', () => {
            context.button = null;
            fixture.detectChanges();
            page.checkCount('.sf-btns', 1)
                .checkCount('button', 0);
        });
        it('should be undefined', () => {
            context.button = undefined;
            fixture.detectChanges();
            page.checkCount('.sf-btns', 1)
                .checkCount('button', 0);
        });
        it('should be none', () => {
            context.button = 'none';
            fixture.detectChanges();
            page.checkCount('.sf-btns', 0);
        });
    });

    describe('properites', () => {

        describe('#validate', () => {
            it('should be validate when submitted and not liveValidate', () => {
                page.submit(false);
                expect((page.getEl('.ant-btn-primary') as HTMLButtonElement).disabled).toBe(true);
                context.liveValidate = false;
                fixture.detectChanges();
                page.submit(false)
                    .setValue('/name', 'cipchk')
                    .setValue('/pwd', '1111')
                    .submit(true);
            });
        });

        describe('#submit', () => {
            it('should be submit when is valid', () => {
                page.setValue('/name', 'cipchk')
                    .setValue('/pwd', '1111')
                    .isValid();
            });
            it('should not be submit when is invalid', () => {
                page.setValue('/name', 'cipchk')
                    .isValid(false);
            });
        });

        describe('#reset', () => {
            it('should be set default value', () => {
                const schema = deepCopy(SCHEMA.user) as SFSchema;
                schema.properties.name.default = 'cipchk';
                page.newSchema(schema)
                    .reset()
                    .checkValue('/name', 'cipchk');
            });
        });

        describe('#layout', () => {
            [ 'horizontal', 'vertical', 'inline' ].forEach(type => {
                it(`with ${type}`, () => {
                    context.layout = type;
                    fixture.detectChanges();
                    page.checkCls('form', `ant-form-${type}`);
                });
            });
            describe(`when with horizontal`, () => {
                it('shoule be fixed label width', () => {
                    page.newSchema({
                        properties: {
                            name: {
                                type: 'string',
                                ui: {
                                    spanLabelFixed: 100
                                }
                            }
                        }
                    }).checkStyle('.ant-form-item-label', 'width', '100px');
                });
                it('shoule be fixed label width if parent node had setting', () => {
                    page.newSchema({
                        properties: {
                            name: { type: 'string' }
                        },
                        ui: {
                            spanLabelFixed: 99
                        }
                    }).checkStyle('.ant-form-item-label', 'width', '99px');
                });
            });
        });

        describe('#autocomplete', () => {
            [ null , 'on', 'off' ].forEach((type: any) => {
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

        describe('#mode', () => {
            it('with search', () => {
                context.mode = 'search';
                fixture.detectChanges();
                expect(context.comp.layout).toBe('inline');
                expect(context.comp.firstVisual).toBe(false);
                expect(context.comp.liveValidate).toBe(false);
            });
            it('with edit', () => {
                context.mode = 'edit';
                fixture.detectChanges();
                expect(context.comp.layout).toBe('horizontal');
                expect(context.comp.firstVisual).toBe(false);
                expect(context.comp.liveValidate).toBe(true);
            });
        });

        it('#formChange', () => {
            page.setValue('/name', 'cipchk');
            expect(context.formChange).toHaveBeenCalled();
        });

        it('#formSubmit', () => {
            page.setValue('/name', 'cipchk')
                .setValue('/pwd', 'asdf')
                .submit();
            expect(context.formSubmit).toHaveBeenCalled();
        });

        it('#formReset', () => {
            page.setValue('/name', 'cipchk')
                .setValue('/pwd', 'asdf')
                .reset();
            expect(context.formReset).toHaveBeenCalled();
        });

        it('#formError', () => {
            page.setValue('/name', 'cipchk')
                .setValue('/name', '');
            expect(context.formError).toHaveBeenCalled();
        });

    });

    describe('[widgets]', () => {
        it('#size', () => {
            page.newSchema({ properties: { name: { type: 'string', ui: { size: 'large' } }} })
                .checkCls('input', 'ant-input-lg');
        });
        it('#disabled', () => {
            page.newSchema({ properties: { name: { type: 'string', readOnly: true }} })
                .checkCls('input', 'ant-input-disabled');
        });
        it('should be custom class', () => {
            page.newSchema({ properties: { name: { type: 'string', ui: { class: 'test-cls' } }} })
                .checkCls('sf-string', 'test-cls');
        });
    });

});
