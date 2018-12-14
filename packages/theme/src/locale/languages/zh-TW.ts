import { LocaleData } from '../locale.types';

export default {
  abbr: 'zh-TW',
  exception: {
    403: '抱歉，妳無權訪問該頁面',
    404: '抱歉，妳訪問的頁面不存在',
    500: '抱歉，服務器出錯了',
    backToHome: '返回首頁',
  },
  noticeIcon: {
    emptyText: '暫無數據',
    clearText: '清空',
  },
  reuseTab: {
    close: '關閉標簽',
    closeOther: '關閉其它標簽',
    closeRight: '關閉右側標簽',
    clear: '清空',
  },
  tagSelect: {
    expand: '展開',
    collapse: '收起',
  },
  miniProgress: {
    target: '目標值：',
  },
  st: {
    total: '共 {{total}} 條',
  },
  sf: {
    submit: '提交',
    reset: '重置',
    search: '搜索',
    edit: '保存',
    addText: '添加',
    removeText: '移除',
    checkAllText: '全選',
  },
} as LocaleData;
