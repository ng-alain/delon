import { FullLocaleData } from '../locale.types';

export default {
  abbr: 'zh-TW',
  exception: {
    403: '抱歉，你無權訪問該頁面',
    404: '抱歉，你訪問的頁面不存在',
    500: '抱歉，服務器出錯了',
    backToHome: '返回首頁'
  },
  noticeIcon: {
    emptyText: '暫無數據',
    clearText: '清空'
  },
  reuseTab: {
    close: '關閉標簽',
    closeOther: '關閉其它標簽',
    closeRight: '關閉右側標簽',
    refresh: '刷新'
  },
  tagSelect: {
    expand: '展開',
    collapse: '收起'
  },
  miniProgress: {
    target: '目標值：'
  },
  st: {
    total: '共 {{total}} 條',
    filterConfirm: '確定',
    filterReset: '重置'
  },
  sf: {
    submit: '提交',
    reset: '重置',
    search: '搜索',
    edit: '保存',
    addText: '添加',
    removeText: '移除',
    checkAllText: '全選',
    error: {
      'false schema': `佈爾模式出錯`,
      $ref: `無法找到引用{ref}`,
      additionalItems: `不允許超過{ref}`,
      additionalProperties: `不允許有額外的屬性`,
      anyOf: `數據應為 anyOf 所指定的其中一個`,
      dependencies: `應當擁有屬性{property}的依賴屬性{deps}`,
      enum: `應當是預設定的枚舉值之一`,
      format: `格式不正確`,
      type: `類型應當是 {type}`,
      required: `必填項`,
      maxLength: `至多 {limit} 個字符`,
      minLength: `至少 {limit} 個字符以上`,
      minimum: `必須 {comparison}{limit}`,
      formatMinimum: `必須 {comparison}{limit}`,
      maximum: `必須 {comparison}{limit}`,
      formatMaximum: `必須 {comparison}{limit}`,
      maxItems: `不應多於 {limit} 個項`,
      minItems: `不應少於 {limit} 個項`,
      maxProperties: `不應多於 {limit} 個屬性`,
      minProperties: `不應少於 {limit} 個屬性`,
      multipleOf: `應當是 {multipleOf} 的整數倍`,
      not: `不應當匹配 "not" schema`,
      oneOf: `隻能匹配一個 "oneOf" 中的 schema`,
      pattern: `數據格式不正確`,
      uniqueItems: `不應當含有重複項 (第 {j} 項與第 {i} 項是重複的)`,
      custom: `格式不正確`,
      propertyNames: `屬性名 "{propertyName}" 無效`,
      patternRequired: `應當有屬性匹配模式 {missingPattern}`,
      switch: `由於 {caseIndex} 失敗，未通過 "switch" 校驗`,
      const: `應當等於常量`,
      contains: `應當包含一個有效項`,
      formatExclusiveMaximum: `formatExclusiveMaximum 應當是佈爾值`,
      formatExclusiveMinimum: `formatExclusiveMinimum 應當是佈爾值`,
      if: `應當匹配模式 "{failingKeyword}"`
    }
  },
  onboarding: {
    skip: `跳過`,
    prev: `上一項`,
    next: `下一項`,
    done: `完成`
  }
} as FullLocaleData;
