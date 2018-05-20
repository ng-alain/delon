import { PropertyGroup } from './form.property';
import { FormPropertyFactory } from './form.property.factory';
import { SchemaValidatorFactory } from '../validator.factory';
import { DelonFormConfig } from '../config';
import { ErrorData } from '../errors';
import { SFUISchema, SFUISchemaItem } from '../schema/ui';
import { orderProperties } from '../utils';

export class ObjectProperty extends PropertyGroup {
  private _propertiesId: string[] = [];

  get propertiesId() {
    return this._propertiesId;
  }

  constructor(
    private formPropertyFactory: FormPropertyFactory,
    schemaValidatorFactory: SchemaValidatorFactory,
    schema: any,
    ui: SFUISchema | SFUISchemaItem,
    formData: {},
    parent: PropertyGroup,
    path: string,
    options: DelonFormConfig,
  ) {
    super(schemaValidatorFactory, schema, ui, formData, parent, path, options);
    this.createProperties();
  }

  private createProperties() {
    this.properties = {};
    this._propertiesId = [];
    let orderedProperties: string[];
    try {
      orderedProperties = orderProperties(
        Object.keys(this.schema.properties),
        this.ui.order,
      );
    } catch (e) {
      console.error(
        `Invalid ${this.schema.title || 'root'} object field configuration:`,
        e,
      );
    }
    orderedProperties.forEach(propertyId => {
      const propertySchema = this.schema.properties[propertyId];
      this.properties[propertyId] = this.formPropertyFactory.createProperty(
        this.schema.properties[propertyId],
        this.ui['$' + propertyId],
        (this.formData || {})[propertyId],
        this,
        propertyId,
      );
      this._propertiesId.push(propertyId);
    });
  }

  setValue(value: any, onlySelf: boolean) {
    for (const propertyId in value) {
      if (value.hasOwnProperty(propertyId)) {
        this.properties[propertyId].setValue(value[propertyId], true);
      }
    }
    this.updateValueAndValidity(onlySelf, true);
  }
  resetValue(value: any, onlySelf: boolean) {
    value = value || this.schema.default || {};
    // tslint:disable-next-line:forin
    for (const propertyId in this.schema.properties) {
      this.properties[propertyId].resetValue(value[propertyId], true);
    }
    this.updateValueAndValidity(onlySelf, true);
  }
  _hasValue(): boolean {
    return this.value != null && !!Object.keys(this.value).length;
  }
  _updateValue() {
    const value: any = {};
    this.forEachChild((property: any, propertyId: string) => {
      if (property.visible && property._hasValue()) {
        value[propertyId] = property.value;
      }
    });
    this._value = value;
  }
}
