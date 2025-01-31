import { Observable } from 'rxjs';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import type { NzFormControlStatusType } from 'ng-zorro-antd/form';

import type { SFValue } from './interface';
import type { FormProperty, PropertyGroup } from './model/form.property';

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
  if: `应当匹配模式 "{failingKeyword}"`
};

export interface ErrorData {
  [key: string]: NzSafeAny;

  /**
   * When specifying `keyword`, you can use `sf` built-in some common types [ERRORSDEFAULT](https://github.com/ng-alain/delon/blob/master/packages/form/src/errors.ts#L4) , direct conversion. Or use the `message` parameter to specify an error message.
   *
   * 当指定 `keyword` 时，可以利用 `sf` 内置一些常见类型 [ERRORSDEFAULT](https://github.com/ng-alain/delon/blob/master/packages/form/src/errors.ts#L4)，直接转化。或者使用 `message` 参数来指定错误消息。
   */
  keyword?: string | null;
  dataPath?: string;
  data?: unknown;
  schemaPath?: string;
  instancePath?: string;
  /**
   * Parameters required for template parsing
   *
   * 指定模板解析所需要的参数
   */
  params?: Record<string, NzSafeAny>;
  /**
   * Specify error message
   *
   * 指定错误消息
   */
  message?: string | ((err: ErrorData) => string);
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
  errors?: Record<string, string | ((obj: ErrorData) => string)>;
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
   * Whether to force to display `*` on the label to indicate that it is required
   *
   * 是否强制在标签上显示 `*` 来表示必填，一般在当使用自定义校验 `validator` 可能需要必填项处理
   */
  showRequired?: boolean;

  /**
   * Custom verification, the final result will be merged with Ajv verification results
   *
   * 自定义校验，最后结果会与 Ajv 校验结果进行合并显示
   */
  validator?: (
    value: SFValue,
    formProperty: FormProperty,
    form: PropertyGroup
  ) => ErrorData[] | Observable<ErrorData[]>;

  /**
   * Form status value, only supports `this.sf.getProperty('/department')?.updateFeedback('validating')` calling method
   *
   * 表单状态值，只支持 `this.sf.getProperty('/department')?.updateFeedback('validating')` 调用方式
   *
   * > 注：若遇到出现校验时失焦，可尝试取消
   */
  feedback?: NzFormControlStatusType;
}
