import { Observable } from 'rxjs';
import { SFValue } from './interface';
import { FormProperty, PropertyGroup } from './model/form.property';

export const ERRORSDEFAULT = {
  'false schema': `布尔模式出错`,
  $ref: `无法找到引用{ref}`,
  additionalItems: `不允许超过{ref}`,
  additionalProperties: `不允许有额外的属性`,
  anyOf: `数据应为 anyOf 所指定的其中一个`,
  dependencies: `应当拥有属性{property}的依赖属性{deps}`,
  enum: `应当是预设定的枚举值之一`,
  format: `格式不正确`, // `应当匹配格式 "{format}"`,
  type: `类型应当是 {type}`,
  required: `必填项`,
  maxLength: `至多 {limit} 个字符`,
  minLength: `至少 {limit} 个字符以上`,
  minimum: `必须 {comparison}{limit}`,
  formatMinimum: `必须 {comparison}{limit}`,
  maximum: `必须 {comparison}{limit}`,
  formatMaximum: `必须 {comparison}{limit}`,
  maxItems: `不应多于 {limit} 个项`,
  minItems: `不应少于 {limit} 个项`,
  maxProperties: `不应多于 {limit} 个属性`,
  minProperties: `不应少于 {limit} 个属性`,
  multipleOf: `应当是 {multipleOf} 的整数倍`,
  not: `不应当匹配 "not" schema`,
  oneOf: `只能匹配一个 "oneOf" 中的 schema`,
  pattern: `数据格式不正确`,
  uniqueItems: `不应当含有重复项 (第 {j} 项与第 {i} 项是重复的)`,
  custom: `格式不正确`,
  propertyNames: `属性名 "{propertyName}" 无效`,
  patternRequired: `应当有属性匹配模式 {missingPattern}`,
  switch: `由于 {caseIndex} 失败，未通过 "switch" 校验`,
  const: `应当等于常量`,
  contains: `应当包含一个有效项`,
  formatExclusiveMaximum: `formatExclusiveMaximum 应当是布尔值`,
  formatExclusiveMinimum: `formatExclusiveMinimum 应当是布尔值`,
  if: `应当匹配模式 "{failingKeyword}"`,
};

export interface ErrorData {
  [key: string]: any;

  keyword: string;
  dataPath?: string;
  schemaPath?: string;
  params?: { [key: string]: any };
  message?: string;
}

export interface ErrorSchema {
  /**
   * 是否实时校验，默认：`true`
   * - `true` 每一次都校验
   * - `false` 提交时校验
   */
  liveValidate?: boolean;
  /**
   * 自定义错误信息文本，键名赞同 `ErrorData.keyword` 值
   */
  errors?: { [key: string]: string | ((obj: ErrorData) => string) };
  /**
   * 是否立即呈现错误视觉，默认：`false`
   */
  firstVisual?: boolean;
  /**
   * 是否只展示错误视觉不显示错误文本，默认：`false`
   */
  onlyVisual?: boolean;
  /**
   * 是否忽略某些数据类型校验 `ERRORSDEFAULT`
   * - 值始终包含 `DelonSchemaFormConfig.ingoreKeywords`
   */
  ingoreKeywords?: string[];
  /**
   * 自定义校验
   */
  validator?: (
    value: SFValue,
    formProperty: FormProperty,
    form: PropertyGroup,
  ) => ErrorData[] | Observable<ErrorData[]>;
}
