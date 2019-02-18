import { SFUISchemaItem } from './ui';

export interface SFSchemaDefinition {
  [key: string]: SFSchema;
}

export interface SFSchemaEnum {
  [key: string]: any;

  /** 是否禁用状态 */
  disabled?: boolean;

  /** 文本 */
  label?: any;

  /** 文本 */
  title?: any;

  /** 值 */
  value?: any;

  /**
   * 主键，适用部分小部件数据键名，例如：`tree-select`
   */
  key?: any;

  /** 是否选中 */
  checked?: boolean;

  /**
   * 组名，适用部分允许组列表的小部件，例如：`select`
   * - 组对应的文本为 `label`
   * - `children` 为子项
   */
  group?: boolean;

  /** 组对应的子类 */
  children?: SFSchemaEnum[];
}

export type SFSchemaEnumType = SFSchemaEnum | number | string | boolean;

/**
 * JSON Schema Form 结构体
 *
 * **注意：** 所有结构都以标准为基准，除了 `ui` 属性为非标准单纯只是为了更好的开发
 */
export interface SFSchema {
  //////////// Any /////////////
  /**
   * 数据类型，支持 JavaScript 基础类型；注意项：
   *
   * - `integer` 表示整型，`number` 表示浮点型
   * - JSON 中 `date` 等同 `string` 类型
   * - 指定 `format` 标准参数可以自动适配渲染小部件
   * - 指定 `widget` 参数强制渲染小部件
   */
  type?: 'number' | 'integer' | 'string' | 'boolean' | 'object' | 'array';
  /**
   * 枚举，静态数据源，例如：`radio`、`checkbox` 等
   *
   * - `disabled` 属性表示：禁用状态
   * - `label` 属性表示：文本
   * - `value` 属性表示：返回值
   * - 基础数据类型数组会自动转化成 `SFSchemaEnum` 数组格式
   */
  enum?: SFSchemaEnumType[];
  //////////// 数值类型 /////////////
  /**
   * 最小值
   */
  minimum?: number;
  /**
   * 约束是否包括 `minimum` 值
   */
  exclusiveMinimum?: boolean;
  /**
   * 最大值
   */
  maximum?: number;
  /**
   * 约束是否包括 `maximum` 值
   */
  exclusiveMaximum?: boolean;
  /**
   * 倍数
   */
  multipleOf?: number;
  //////////// 字符串类型/////////////
  /**
   * 定义字符串的最大长度
   */
  maxLength?: number;
  /**
   * 定义字符串的最小长度
   */
  minLength?: number;
  /**
   * 验证输入字段正则表达式字符串，若指定 `format: 'regex'` 时务必指定
   */
  pattern?: string;
  //////////// 数组类型/////////////
  /**
   * 数组元素类型描述，只支持数组对象，若需要基础类型数组可通过其他部件支持
   *
   * ```json
   * items: {
   *   type: 'object',
   *   properties: {
   *     name: { type: 'string' },
   *     age: { type: 'number' }
   *   }
   * }
   * ```
   *
   * 结果
   *
   * ```json
   * [
   *   { "name": "cipchk1", "age": 18 },
   *   { "name": "cipchk2", "age": 16 }
   * ]
   * ```
   */
  items?: SFSchema;
  /**
   * 约束数组最小的元素个数
   * - `type="array"` 时有效
   */
  minItems?: number;
  /**
   * 约束数组最大的元素个数
   * - `type="array"` 时有效
   */
  maxItems?: number;
  /**
   * 约束数组每个元素都不相同
   * - `type="array"` 时有效
   */
  uniqueItems?: boolean;
  /**
   * 数组额外元素的校验规则
   */
  additionalItems?: SFSchema;
  //////////// 对象类型/////////////
  /**
   * 最大属性个数，必须是非负整数
   */
  maxProperties?: number;
  /**
   * 最小属性个数，必须是非负整数
   */
  minProperties?: number;
  /**
   * 必填项属性
   */
  required?: string[];
  /**
   * 定义属性
   */
  properties?: { [key: string]: SFSchema };
  //////////// 条件类/////////////
  // 未来可能被移除
  // dependencies?: { [key: string]: string[] | SFSchema };
  /**
   * 条件验证
   * - 必须包含 `properties` 节点
   *  - 键名必须是当前节点 `properties` 值之一
   *  - 利用 `enum` 属性表示条件值，支持 `$ANY$` 表示任意值
   * - 不支持跨 Schema 节点
   * - 当条件成功会执行 `then` 否则执行 `else`
   * - `if`和`then` 是必须同时出现，`else` 可选项
   */
  if?: SFSchema;
  /**
   * 条件成功时执行
   * - 只支持 `required` 参数，用于表示显示
   */
  then?: SFSchema;
  /**
   * 条件失败时执行
   * - 只支持 `required` 参数，用于表示显示
   */
  else?: SFSchema;
  //////////// 逻辑类/////////////
  /** **不建议** 使用，可用 `required` 替代 */
  allOf?: SFSchema[];
  /** **不建议** 使用，可用 `required` 和 `minProperties` 替代 */
  anyOf?: SFSchema[];
  /** 值必须是其中之一 */
  oneOf?: SFSchema[];
  //////////// 格式/////////////
  /**
   * 数据格式，[文档](http://json-schema.org/latest/json-schema-validation.html#rfc.section.7.3)
   * - `date-time` 日期时间，渲染为 `date`，[RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6)
   * - `date`、`full-date` 日期，渲染为 `date`
   * - `time`、`full-time` 时间，渲染为 `time`
   * - `email` Email格式，渲染为 `autocomplete`
   * - 非标准：`week`，渲染为 `nz-week-picker`
   * - 非标准：`month`，渲染为 `nz-month-picker`
   * - `ip` IP地址，渲染为 `input`
   * - `uri` URL地址，渲染为 `upload`
   * - `regex` 正则表达式，必须指定 `pattern` 属性，渲染为 `input`
   * - `mobile` 手机号
   * - `id-card` 身份证
   * - `color` 颜色值
   */
  format?: string;
  //////////// 注释/////////////
  /**
   * 属性描述，相当于 `label` 值，按以下规则展示：
   * - 当值为 `null`、`undefined` 时使用 `key` 替代
   * - 当值为 `''` 空字符串表示不展示 `label` 部分，例如：`checkbox` 可能需要
   */
  title?: string;
  /**
   * 属性目的性解释，采用 `nz-form-extra` 渲染
   */
  description?: string;
  /**
   * 默认值
   */
  default?: any;
  /**
   * 是否只读状态
   */
  readOnly?: boolean;
  //////////// 其他/////////////
  //////////// Definitions /////////////
  // /** 指定 Schema JSON 模式，默认为：`http://json-schema.org/draft-07/schema` */
  // $schema?: string;
  /** 内部类型定义体 */
  definitions?: SFSchemaDefinition;
  /** 引用定义体 */
  $ref?: string;
  // $schema?: string;
  /** 针对开发者的注释，无任何意义，也不会被校验 */
  $comment?: string;
  //////////// 非标准/////////////
  /** **唯一非标准：** 指定UI配置信息，优先级高于 `sf` 组件 `ui` 属性值 */
  ui?: SFUISchemaItem | string;
}
