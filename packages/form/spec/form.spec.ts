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

    xdescribe('[default]', () => {
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
    });

    xdescribe('#validate', () => {
        it('should be validate when submitted and not liveValidate', () => {
            page.submit(false);
            expect((page.getEl('.ant-btn-primary') as HTMLButtonElement).disabled).toBe(true);
            context.liveValidate = false;
            fixture.detectChanges();
            page.submit(false);
            page.setValue('/name', 'cipchk')
                .setValue('/pwd', '1111')
                .submit(true);
        });
    });

    xdescribe('#submit', () => {
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

    xdescribe('#reset', () => {
        it('should be set default value', () => {
            const schema = deepCopy(SCHEMA.user) as SFSchema;
            schema.properties.name.default = 'cipchk';
            page.newSchema(schema)
                .reset()
                .checkValue('/name', 'cipchk');
        });
    });

    xdescribe('[cover schema]', () => {
        it('should be using select widget when not ui and enum exists', () => {
            page.newSchema({
                    properties: {
                        name: { type: 'string', enum: [ 'a' ] }
                    }
                })
                .checkUI('/name', 'widget', 'select');
        });
        it('should be using autocomplete widget when format equal email', () => {
            page.newSchema({
                    properties: {
                        name: { type: 'string', format: 'email' }
                    }
                })
                .checkUI('/name', 'widget', 'autocomplete');
        });
        it('support ui property is a string', () => {
            page.newSchema({
                    properties: {
                        name: { type: 'string', ui: 'textarea' }
                    }
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
                                b: { type: 'string' }
                            }
                        }
                    }
                }
            };
            const label = 10;
            const ui: SFUISchema = {
                '*': { spanLabel: label },
                $name2: {
                    $items: {
                        $a: { spanLabel: 9 }
                    }
                }
            };
            page.newSchema(schema, ui)
                .checkUI('/name1', 'spanLabel', label)
                .add()
                .checkUI('/name2/0/a', 'spanLabel', 9);
        });
        it('should be fixed label width', () => {
            const schema: SFSchema = {
                properties: {
                    name: { type: 'string' },
                    protocol: {
                        'type': 'boolean',
                        'title': '同意本协议',
                        'description': '《用户协议》',
                        'ui': {
                            'widget': 'checkbox'
                        },
                        'default': true
                    }
                },
                ui: { spanLabelFixed: 10, debug: true }
            };
            page.newSchema(schema)
                .checkUI('/name', 'spanLabelFixed', 10)
                .checkUI('/protocol', 'spanLabelFixed', 10);
        });
        it('support invalid format value', () => {
            page.newSchema({
                    properties: {
                        name: { type: 'string', format: 'email1' }
                    }
                })
                .checkUI('/name', 'widget', 'string');
        });
        it('should be null spanLabel when not horizontal layout', () => {
            context.layout = 'inline';
            fixture.detectChanges();
            page.checkUI('/name', 'spanLabel', null);
        });
        it('should call refreshSchema changed schema', () => {
            context.comp.refreshSchema({
                properties: {
                    user: {
                        type: 'object',
                        properties: {
                            name: { type: 'string' },
                            age: { type: 'number' }
                        }
                    }
                }
            }, { '*': { spanLabelFixed: 100, spanControl: 10, offsetControl: 11 } });
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
        xdescribe('#array', () => {
            const arrUI: SFUISchemaItem = { spanLabel: 10, grid: { arraySpan: 12 } };
            const arrSchema: SFSchema = {
                properties: {
                    name: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                a: { type: 'string' }
                            }
                        }
                    }
                }
            };
            xdescribe('[#via in json schema]', () => {
                it('should be has $items when is array', () => {
                    const schema = deepCopy(arrSchema) as SFSchema;
                    schema.properties.name.ui = deepCopy(arrUI);
                    page.newSchema(schema)
                        .checkUI('/name', 'grid.arraySpan', arrUI.grid.arraySpan);
                });
            });
            xdescribe('[#via ui property]', () => {
                it('should be has $items when is array', () => {
                    const schema = deepCopy(arrSchema);
                    const uiSchema: SFUISchema = {
                        $name: {
                            $items: {},
                            ...deepCopy(arrUI)
                        }
                    };
                    page.newSchema(schema, uiSchema)
                        .checkUI('/name', 'grid.arraySpan', arrUI.grid.arraySpan);
                });
            });
        });
    });

});
