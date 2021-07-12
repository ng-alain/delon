import { FullLocaleData } from '../locale.types';

export default {
  abbr: 'zh-CN',
  exception: {
    403: '抱歉，你无权访问该页面',
    404: '抱歉，你访问的页面不存在',
    500: '抱歉，服务器出错了',
    backToHome: '返回首页'
  },
  noticeIcon: {
    emptyText: '暂无数据',
    clearText: '清空'
  },
  reuseTab: {
    close: '关闭标签',
    closeOther: '关闭其它标签',
    closeRight: '关闭右侧标签',
    refresh: '刷新'
  },
  tagSelect: {
    expand: '展开',
    collapse: '收起'
  },
  miniProgress: {
    target: '目标值：'
  },
  st: {
    total: '共 {{total}} 条',
    filterConfirm: '确定',
    filterReset: '重置'
  },
  sf: {
    submit: '提交',
    reset: '重置',
    search: '搜索',
    edit: '保存',
    addText: '添加',
    removeText: '移除',
    checkAllText: '全选',
    error: {
      'false schema': `布尔模式出错`,
      $ref: `无法找到引用{ref}`,
      additionalItems: `不允许超过{limit}个元素`,
      additionalProperties: `不允许有额外的属性`,
      anyOf: `数据应为 anyOf 所指定的其中一个`,
      dependencies: `应当拥有属性{property}的依赖属性{deps}`,
      enum: `应当是预设定的枚举值之一`,
      format: `格式不正确`,
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
    }
  },
  onboarding: {
    skip: `跳过`,
    prev: `上一项`,
    next: `下一项`,
    done: `完成`
  }
} as FullLocaleData;
