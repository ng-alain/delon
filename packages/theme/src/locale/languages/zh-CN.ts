import { FullLocaleData } from '../locale.types';

export default {
  abbr: 'zh-CN',
  exception: {
    403: '抱歉，你无权访问该页面',
    404: '抱歉，你访问的页面不存在',
    500: '抱歉，服务器出错了',
    backToHome: '返回首页',
  },
  noticeIcon: {
    emptyText: '暂无数据',
    clearText: '清空',
  },
  reuseTab: {
    close: '关闭标签',
    closeOther: '关闭其它标签',
    closeRight: '关闭右侧标签',
    clear: '清空',
  },
  tagSelect: {
    expand: '展开',
    collapse: '收起',
  },
  miniProgress: {
    target: '目标值：',
  },
  st: {
    total: '共 {{total}} 条',
  },
  sf: {
    submit: '提交',
    reset: '重置',
    search: '搜索',
    edit: '保存',
    addText: '添加',
    removeText: '移除',
    checkAllText: '全选',
  },
} as FullLocaleData;
