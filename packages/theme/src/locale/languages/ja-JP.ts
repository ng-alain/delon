import { FullLocaleData } from '../locale.types';

export default {
  abbr: 'ja-JP',
  exception: {
    403: 'ページへのアクセス権限がありません',
    404: 'ページが存在しません',
    500: 'サーバーエラーが発生しました',
    backToHome: 'ホームに戻る'
  },
  noticeIcon: {
    emptyText: 'データが有りません',
    clearText: 'クリア'
  },
  reuseTab: {
    close: 'タブを閉じる',
    closeOther: '他のタブを閉じる',
    closeRight: '右のタブを閉じる',
    refresh: 'リフレッシュ'
  },
  tagSelect: {
    expand: '展開する',
    collapse: '折りたたむ'
  },
  miniProgress: {
    target: '設定値: '
  },
  st: {
    total: '{{range[0]}} - {{range[1]}} / {{total}}',
    filterConfirm: '確定',
    filterReset: 'リセット'
  },
  sf: {
    submit: '送信',
    reset: 'リセット',
    search: '検索',
    edit: '保存',
    addText: '追加',
    removeText: '削除',
    checkAllText: '全選択',
    error: {
      'false schema': `真偽値スキーマが不正です`,
      $ref: `参照を解決できません: {ref}`,
      additionalItems: `{limit}個を超えるアイテムを含めることはできません`,
      additionalProperties: `追加のプロパティを使用しないでください`,
      anyOf: `"anyOf"のスキーマと一致する必要があります`,
      dependencies: `プロパティ {property} を指定した場合、次の依存関係を満たす必要があります: {deps}`,
      enum: `定義された値のいずれかに等しくなければなりません`,
      format: `入力形式に一致しません: "{format}"`,
      type: `型が不正です: {type}`,
      required: `必須項目です`,
      maxLength: `最大文字数: {limit}`,
      minLength: `最少文字数: {limit}`,
      minimum: `値が不正です: {comparison} {limit}`,
      formatMinimum: `値が不正です: {comparison} {limit}`,
      maximum: `値が不正です: {comparison} {limit}`,
      formatMaximum: `値が不正です: {comparison} {limit}`,
      maxItems: `最大選択数は {limit} より小さい必要があります`,
      minItems: `最小選択数は {limit} より大きい必要があります`,
      maxProperties: `値を{limit}より大きくすることはできません`,
      minProperties: `値を{limit}より小さくすることはできません`,
      multipleOf: `値は次の数の倍数である必要があります: {multipleOf}`,
      not: `値が不正です:`,
      oneOf: `値が不正です:`,
      pattern: `次のパターンに一致する必要があります: "{pattern}"`,
      uniqueItems: `値が重複しています: 選択肢: {j} 、{i}`,
      custom: `形式と一致する必要があります`,
      propertyNames: `次のプロパティの値が無効です: "{propertyName}"`,
      patternRequired: `次のパターンに一致するプロパティが必須です: "{missingPattern}"`,
      switch: `"switch" キーワードの値が不正です: {caseIndex}`,
      const: `値が定数に一致しません`,
      contains: `有効なアイテムを含める必要があります`,
      formatExclusiveMaximum: `formatExclusiveMaximum は真偽値である必要があります`,
      formatExclusiveMinimum: `formatExclusiveMaximum は真偽値である必要があります`,
      if: `パターンと一致する必要があります: "{failingKeyword}" `
    }
  },
  onboarding: {
    skip: `スキップ`,
    prev: `前へ`,
    next: `次`,
    done: `できた`
  }
} as FullLocaleData;
