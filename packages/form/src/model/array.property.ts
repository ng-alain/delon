import { DelonFormConfig } from '../config';
import { SFValue } from '../interface';
import { SFSchema } from '../schema/index';
import { SFUISchema, SFUISchemaItem } from '../schema/ui';
import { SchemaValidatorFactory } from '../validator.factory';
import { FormProperty, PropertyGroup } from './form.property';
import { FormPropertyFactory } from './form.property.factory';
import { ObjectProperty } from './object.property';
import { SF_SEQ } from '../const';

export class ArrayProperty extends PropertyGroup {
  constructor(
    private formPropertyFactory: FormPropertyFactory,
    schemaValidatorFactory: SchemaValidatorFactory,
    schema: SFSchema,
    ui: SFUISchema | SFUISchemaItem,
    formData: {},
    parent: PropertyGroup | null,
    path: string,
    options: DelonFormConfig,
  ) {
    super(schemaValidatorFactory, schema, ui, formData, parent, path, options);
    this.properties = [];
  }

  getProperty(path: string) {
    const subPathIdx = path.indexOf(SF_SEQ);
    const pos = +(subPathIdx !== -1 ? path.substr(0, subPathIdx) : path);
    const list = this.properties as PropertyGroup[];
    if (isNaN(pos) || pos >= list.length) {
      return undefined;
    }
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
    this.forEachChild((property: FormProperty) => {
      if (property.visible && property._hasValue()) {
        value.push({ ...property.formData, ...property.value });
      }
    });
    this._value = value;
  }

  private addProperty(formData: {}) {
    const newProperty = this.formPropertyFactory.createProperty(this.schema.items!, this.ui.$items, formData, this) as ObjectProperty;
    (this.properties as FormProperty[]).push(newProperty);
    return newProperty;
  }

  private resetProperties(formDatas: Array<{}>) {
    for (const item of formDatas) {
      const property = this.addProperty(item);
      property.resetValue(item, true);
    }
  }

  private clearErrors(property?: FormProperty) {
    (property || this)._objErrors = {};
  }

  // #region actions

  add(formData: {}): FormProperty {
    const newProperty = this.addProperty(formData);
    newProperty.resetValue(formData, false);
    return newProperty;
  }

  remove(index: number) {
    const list = this.properties as FormProperty[];
    this.clearErrors();
    list.splice(index, 1);
    list.forEach((property, idx) => {
      property.path = [property.parent!.path, idx].join(SF_SEQ);
      this.clearErrors(property);
      // TODO: 受限于 sf 的设计思路，对于移除数组项需要重新对每个子项进行校验，防止错误被父级合并后引起始终是错误的现象
      if (property instanceof ObjectProperty) {
        property.forEachChild(p => {
          p.updateValueAndValidity();
        });
      }
    });
    if (list.length === 0) {
      this.updateValueAndValidity();
    }
  }

  // #endregion
}
