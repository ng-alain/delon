import { DelonFormConfig } from '../config';
import { SFSchema } from '../schema';
import { SFUISchema, SFUISchemaItem } from '../schema/ui';
import { retrieveSchema } from '../utils';
import { SchemaValidatorFactory } from '../validator.factory';

import { ArrayProperty } from './array.property';
import { BooleanProperty } from './boolean.property';
import { FormProperty, PropertyGroup } from './form.property';
import { NumberProperty } from './number.property';
import { ObjectProperty } from './object.property';
import { StringProperty } from './string.property';

export class FormPropertyFactory {
  constructor(private schemaValidatorFactory: SchemaValidatorFactory, private options: DelonFormConfig) { }

  createProperty(
    schema: SFSchema,
    ui: SFUISchema | SFUISchemaItem,
    formData: {},
    parent: PropertyGroup = null,
    propertyId?: string,
  ): FormProperty {
    let newProperty = null;
    let path = '';
    if (parent) {
      path += parent.path;
      if (parent.parent !== null) {
        path += '/';
      }
      if (parent.type === 'object') {
        path += propertyId;
      } else if (parent.type === 'array') {
        path += (parent as ArrayProperty).tick++;
      } else {
        throw new Error(
          'Instanciation of a FormProperty with an unknown parent type: ' +
          parent.type,
        );
      }
    } else {
      path = '/';
    }

    if (schema.$ref) {
      const refSchema = retrieveSchema(schema, parent.root.schema.definitions);
      newProperty = this.createProperty(refSchema, ui, formData, parent, path);
    } else {
      // fix required
      if (
        propertyId &&
        ((parent!.schema.required || []) as string[]).indexOf(propertyId) !== -1
      ) {
        ui._required = true;
      }
      // fix title
      if (schema.title == null) schema.title = propertyId;
      // fix date
      if (
        (schema.type === 'string' || schema.type === 'number') &&
        !schema.format &&
        !(ui as SFUISchemaItem).format
      ) {
        if ((ui as SFUISchemaItem).widget === 'date')
          ui.format =
            schema.type === 'string'
              ? this.options.uiDateStringFormat
              : this.options.uiDateNumberFormat;
        else if ((ui as SFUISchemaItem).widget === 'time')
          ui.format =
            schema.type === 'string'
              ? this.options.uiTimeStringFormat
              : this.options.uiTimeNumberFormat;
      }
      switch (schema.type) {
        case 'integer':
        case 'number':
          newProperty = new NumberProperty(
            this.schemaValidatorFactory,
            schema,
            ui,
            formData,
            parent,
            path,
            this.options,
          );
          break;
        case 'string':
          newProperty = new StringProperty(
            this.schemaValidatorFactory,
            schema,
            ui,
            formData,
            parent,
            path,
            this.options,
          );
          break;
        case 'boolean':
          newProperty = new BooleanProperty(
            this.schemaValidatorFactory,
            schema,
            ui,
            formData,
            parent,
            path,
            this.options,
          );
          break;
        case 'object':
          newProperty = new ObjectProperty(
            this,
            this.schemaValidatorFactory,
            schema,
            ui,
            formData,
            parent,
            path,
            this.options,
          );
          break;
        case 'array':
          newProperty = new ArrayProperty(
            this,
            this.schemaValidatorFactory,
            schema,
            ui,
            formData,
            parent,
            path,
            this.options,
          );
          break;
        default:
          throw new TypeError(`Undefined type ${schema.type}`);
      }
    }

    if (newProperty instanceof PropertyGroup) {
      this.initializeRoot(newProperty);
    }

    return newProperty;
  }

  private initializeRoot(rootProperty: PropertyGroup) {
    // rootProperty.init();
    rootProperty._bindVisibility();
  }
}
