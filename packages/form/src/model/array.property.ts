import { Injector } from '@angular/core';

import { AlainSFConfig } from '@delon/util/config';
import { deepCopy } from '@delon/util/other';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { SF_SEQ } from '../const';
import { SFValue } from '../interface';
import { SFSchema } from '../schema/index';
import { SFUISchema, SFUISchemaItem } from '../schema/ui';
import { SchemaValidatorFactory } from '../validator.factory';
import { FormProperty, PropertyGroup } from './form.property';
import { FormPropertyFactory } from './form.property.factory';
import { ObjectProperty } from './object.property';

export class ArrayProperty extends PropertyGroup {
  constructor(
    injector: Injector,
    private formPropertyFactory: FormPropertyFactory,
    schemaValidatorFactory: SchemaValidatorFactory,
    schema: SFSchema,
    ui: SFUISchema | SFUISchemaItem,
    formData: Record<string, unknown>,
    parent: PropertyGroup | null,
    path: string,
    options: AlainSFConfig
  ) {
    super(injector, schemaValidatorFactory, schema, ui, formData, parent, path, options);
    this.properties = [];
  }

  getProperty(path: string): FormProperty | undefined {
    const subPathIdx = path.indexOf(SF_SEQ);
    const pos = +(subPathIdx !== -1 ? path.substring(0, subPathIdx) : path);
    const list = this.properties as PropertyGroup[];
    if (isNaN(pos) || pos >= list.length) {
      return undefined;
    }
    const subPath = path.substring(subPathIdx + 1);
    return list[pos].getProperty(subPath);
  }

  setValue(value: SFValue, onlySelf: boolean): void {
    this.properties = [];
    this._objErrors.clear();
    this.resetProperties(value);
    this.updateValueAndValidity({ onlySelf, emitValueEvent: true });
  }

  resetValue(value: SFValue, onlySelf: boolean): void {
    this._value = value ?? this.schema.default ?? [];
    this.setValue(this._value, onlySelf);
  }

  _hasValue(): boolean {
    return true;
  }

  _updateValue(): void {
    const value: NzSafeAny[] = [];
    this.forEachChild((property: FormProperty) => {
      if (property.visible) {
        // 从根节点读 `_cleanValue`：`reset()` 早于 widget 创建，此时经 widget 读不到
        value.push({ ...(this.root._cleanValue ? null : property.formData), ...property.value });
      }
    });
    this._value = value;
  }

  private addProperty(formData: Record<string, unknown>): FormProperty {
    const newProperty = this.formPropertyFactory.createProperty(
      deepCopy(this.schema.items!),
      deepCopy(this.ui.$items),
      formData,
      this as PropertyGroup
    ) as ObjectProperty;
    // 整值替换（不能就地 push），这样 `properties` 的 signal 才会通知 array 模板
    this.properties = [...(this.properties as FormProperty[]), newProperty];
    return newProperty;
  }

  private resetProperties(formDatas: Array<Record<string, unknown>>): void {
    for (const item of formDatas) {
      const property = this.addProperty(item);
      property.resetValue(item, true);
    }
  }

  // #region actions

  add(formData: Record<string, unknown>): FormProperty {
    const newProperty = this.addProperty(formData);
    newProperty.resetValue(formData, false);
    return newProperty;
  }

  remove(index: number): void {
    const list = [...(this.properties as FormProperty[])];
    const [removed] = list.splice(index, 1);
    list.forEach((property, idx) => {
      property.path = [property.parent!.path, idx].join(SF_SEQ);
    });
    // 被删项自己的错误要一起丢掉；其余子项的错误按实例保留，不受 `path` 重编号影响
    this._objErrors.delete(removed);
    // 整值替换，理由同 `addProperty`
    this.properties = list;
    if (list.length === 0) {
      // 空数组要校验自身：`minItems` 这类规则只有它自己能报
      this.updateValueAndValidity();
    } else {
      // 下标变了要重算值（不需要校验），随后按剩下的子项重算聚合
      this.updateValueAndValidity({ emitValidator: false, emitValueEvent: false });
      this._refreshObjErrors();
    }
  }

  // #endregion
}
