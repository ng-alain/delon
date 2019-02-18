import { DelonFormConfig } from '../config';
import { SFValue } from '../interface';
import { SFSchema } from '../schema/index';
import { SFUISchema, SFUISchemaItem } from '../schema/ui';
import { SchemaValidatorFactory } from '../validator.factory';
import { FormProperty, PropertyGroup } from './form.property';
import { FormPropertyFactory } from './form.property.factory';
import { ObjectProperty } from './object.property';

export class ArrayProperty extends PropertyGroup {
  tick = 1;

  constructor(
    private formPropertyFactory: FormPropertyFactory,
    schemaValidatorFactory: SchemaValidatorFactory,
    schema: SFSchema,
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

  setValue(value: SFValue, onlySelf: boolean) {
    this.properties = [];
    this.clearErrors();
    this.resetProperties(value);
    this.updateValueAndValidity(onlySelf, true);
  }

  resetValue(value: SFValue, onlySelf: boolean) {
    this._value = value || this.schema.default || [];
    this.setValue(this._value, onlySelf);
  }

  _hasValue(): boolean {
    return true;
  }

  _updateValue() {
    const value: any[] = [];
    this.forEachChild((property: ObjectProperty) => {
      if (property.visible && property._hasValue()) {
        value.push({ ...property.formData, ...property.value });
      }
    });
    this._value = value;
  }

  private addProperty(formData: {}) {
    const newProperty = this.formPropertyFactory.createProperty(
      this.schema.items,
      this.ui.$items,
      formData,
      this,
    ) as ObjectProperty;
    (this.properties as FormProperty[]).push(newProperty);
    return newProperty;
  }

  private resetProperties(formDatas: Array<{}>) {
    for (const item of formDatas) {
      const property = this.addProperty(item);
      property.resetValue(item, true);
    }
  }

  private clearErrors(path?: string) {
    if (path) delete this._objErrors[path];
    else this._objErrors = {};
  }

  // #region actions

  add(formData: {}): FormProperty {
    const newProperty = this.addProperty(formData);
    newProperty.resetValue(formData, false);
    return newProperty;
  }

  remove(index: number) {
    const list = this.properties as FormProperty[];
    this.clearErrors(list[index].path);
    list.splice(index, 1);
    this.updateValueAndValidity(false, true);
  }

  // #endregion
}
