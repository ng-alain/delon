import { Injector } from '@angular/core';

import { AlainSFConfig } from '@delon/util/config';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { SFValue } from '../interface';
import { SFSchema } from '../schema/index';
import { SFUISchema, SFUISchemaItem } from '../schema/ui';
import { orderProperties } from '../utils';
import { SchemaValidatorFactory } from '../validator.factory';
import { FormProperty, PropertyGroup } from './form.property';
import { FormPropertyFactory } from './form.property.factory';

export class ObjectProperty extends PropertyGroup {
  private _propertiesId: string[] = [];

  get propertiesId(): string[] {
    return this._propertiesId;
  }

  constructor(
    injector: Injector,
    private formPropertyFactory: FormPropertyFactory,
    schemaValidatorFactory: SchemaValidatorFactory,
    schema: SFSchema,
    ui: SFUISchema | SFUISchemaItem,
    formData: NzSafeAny,
    parent: PropertyGroup | null,
    path: string,
    options: AlainSFConfig
  ) {
    super(injector, schemaValidatorFactory, schema, ui, formData, parent, path, options);
    this.createProperties();
  }

  private createProperties(): void {
    this.properties = {};
    this._propertiesId = [];
    let orderedProperties: string[];
    try {
      orderedProperties = orderProperties(Object.keys(this.schema.properties!), this.ui.order as string[]);
    } catch (e) {
      console.error(`Invalid ${this.schema.title || 'root'} object field configuration:`, e);
    }
    orderedProperties!.forEach(propertyId => {
      (this.properties as Record<string, FormProperty>)[propertyId] = this.formPropertyFactory.createProperty(
        this.schema.properties![propertyId],
        this.ui[`$${propertyId}`],
        ((this.formData || {}) as NzSafeAny)[propertyId],
        this,
        propertyId
      );
      this._propertiesId.push(propertyId);
    });
  }

  setValue(value: SFValue, onlySelf: boolean): void {
    const properties = this.properties as Record<string, FormProperty>;
    for (const propertyId in value) {
      if (Object.prototype.hasOwnProperty.call(value, propertyId) && properties[propertyId]) {
        (properties[propertyId] as FormProperty).setValue(value[propertyId], true);
      }
    }
    this.cd(onlySelf);
    this.updateValueAndValidity({ onlySelf, emitValueEvent: true });
  }

  resetValue(value: SFValue, onlySelf: boolean): void {
    value = value || this.schema.default || {};
    const properties = this.properties as Record<string, FormProperty>;
    for (const propertyId in this.schema.properties) {
      if (Object.prototype.hasOwnProperty.call(this.schema.properties, propertyId)) {
        properties[propertyId].resetValue(value[propertyId], true);
      }
    }
    this.cd(onlySelf);
    this.updateValueAndValidity({ onlySelf, emitValueEvent: true });
  }

  _hasValue(): boolean {
    return this.value != null && !!Object.keys(this.value).length;
  }

  _updateValue(): void {
    const value: SFValue = {};
    this.forEachChild((property, propertyId) => {
      if (property.visible && property._hasValue()) {
        value[propertyId] = property.value;
      }
    });
    this._value = value;
  }
}
