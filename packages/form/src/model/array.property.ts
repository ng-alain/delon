import { PropertyGroup, FormProperty } from './form.property';
import { SchemaValidatorFactory } from '../validator.factory';
import { SFUISchema, SFUISchemaItem } from '../schema/ui';
import { DelonFormConfig } from '../config';
import { FormPropertyFactory } from './form.property.factory';
import { ObjectProperty } from './object.property';

export class ArrayProperty extends PropertyGroup {
  tick = 1;

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
    this.properties = [];
  }

  getProperty(path: string) {
    const subPathIdx = path.indexOf('/');
    const pos = +(subPathIdx !== -1 ? path.substr(0, subPathIdx) : path);
    const list = this.properties as PropertyGroup[];
    if (isNaN(pos) || pos >= list.length) return undefined;
    const subPath = path.substr(subPathIdx + 1);
    return list[pos].getProperty(subPath);
  }

  setValue(value: any, onlySelf: boolean) {
    this.properties = [];
    this.clearErrors();
    this.resetProperties(value);
    this.updateValueAndValidity(onlySelf, true);
  }

  resetValue(value: any, onlySelf: boolean) {
    this._value = value || this.schema.default || [];
    this.properties = [];
    this.clearErrors();
    this.resetProperties(this._value);
    this.updateValueAndValidity(onlySelf, true);
  }

  _hasValue(): boolean {
    return true;
  }

  _updateValue() {
    const value: any[] = [];
    this.forEachChild((property: ObjectProperty) => {
      if (property.visible && property._hasValue()) {
        value.push(Object.assign({}, property.formData, property.value));
      }
    });
    this._value = value;
  }

  private addProperty(value: any) {
    const newProperty = this.formPropertyFactory.createProperty(
      this.schema.items,
      this.ui.$items,
      value,
      this,
    ) as ObjectProperty;
    (<FormProperty[]>this.properties).push(newProperty);
    return newProperty;
  }

  private resetProperties(value: any[]) {
    for (const item of value) {
      const property = this.addProperty(item);
      property.resetValue(item, true);
    }
  }

  private clearErrors(path?: string) {
    if (path) delete this._objErrors[path];
    else this._objErrors = {};
  }

  // #region actions

  add(value: any): FormProperty {
    const newProperty = this.addProperty(value);
    newProperty.resetValue(value, false);
    return newProperty;
  }

  remove(index: number) {
    const list = <FormProperty[]>this.properties;
    this.clearErrors(list[index].path);
    list.splice(index, 1);
    this.updateValueAndValidity(false, true);
  }

  // #endregion
}
