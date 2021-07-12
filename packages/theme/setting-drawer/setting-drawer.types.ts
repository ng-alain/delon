import { NzSafeAny } from 'ng-zorro-antd/core/types';

export const ALAINDEFAULTVAR = 'alain-default-vars';
export const DEFAULT_COLORS = [
  {
    key: 'dust',
    color: '#F5222D'
  },
  {
    key: 'volcano',
    color: '#FA541C'
  },
  {
    key: 'sunset',
    color: '#FAAD14'
  },
  {
    key: 'cyan',
    color: '#13C2C2'
  },
  {
    key: 'green',
    color: '#52C41A'
  },
  {
    key: 'daybreak',
    color: '#1890ff'
  },
  {
    key: 'geekblue',
    color: '#2F54EB'
  },
  {
    key: 'purple',
    color: '#722ED1'
  },
  {
    key: 'black',
    color: '#001529'
  }
];
export const DEFAULT_VARS: { [key: string]: NzSafeAny } = {
  'primary-color': { label: '主颜色', type: 'color', default: '#1890ff' },
  'alain-default-header-hg': {
    label: '高',
    type: 'px',
    default: '64px',
    max: 300,
    min: 24
  },
  'alain-default-header-bg': {
    label: '背景色',
    type: 'color',
    default: '@primary-color',
    tip: '默认同主色系'
  },
  'alain-default-header-padding': {
    label: '顶部左右内边距',
    type: 'px',
    default: '16px'
  },
  // 侧边栏
  'alain-default-aside-wd': { label: '宽度', type: 'px', default: '200px' },
  'alain-default-aside-bg': {
    label: '背景',
    type: 'color',
    default: '#ffffff'
  },
  'alain-default-aside-collapsed-wd': {
    label: '收缩宽度',
    type: 'px',
    default: '64px'
  },
  'alain-default-aside-nav-padding-top-bottom': {
    label: '项上下内边距',
    type: 'px',
    default: '8px',
    step: 8
  },
  // 主菜单
  'alain-default-aside-nav-fs': {
    label: '菜单字号',
    type: 'px',
    default: '14px',
    min: 14,
    max: 30
  },
  'alain-default-aside-collapsed-nav-fs': {
    label: '收缩菜单字号',
    type: 'px',
    default: '24px',
    min: 24,
    max: 32
  },
  'alain-default-aside-nav-item-height': {
    label: '菜单项高度',
    type: 'px',
    default: '38px',
    min: 24,
    max: 64
  },
  'alain-default-aside-nav-text-color': {
    label: '菜单文本颜色',
    type: 'color',
    default: 'rgba(0, 0, 0, 0.65)',
    rgba: true
  },
  'alain-default-aside-nav-text-hover-color': {
    label: '菜单文本悬停颜色',
    type: 'color',
    default: '@primary-color',
    tip: '默认同主色系'
  },
  'alain-default-aside-nav-group-text-color': {
    label: '菜单分组文本颜色',
    type: 'color',
    default: 'rgba(0, 0, 0, 0.43)',
    rgba: true
  },
  'alain-default-aside-nav-selected-text-color': {
    label: '菜单激活时文本颜色',
    type: 'color',
    default: '@primary-color',
    tip: '默认同主色系'
  },
  'alain-default-aside-nav-selected-bg': {
    label: '菜单激活时背景颜色',
    type: 'color',
    default: '#fcfcfc'
  },
  // 内容
  'alain-default-content-bg': {
    label: '背景色',
    type: 'color',
    default: '#f5f7fa'
  },
  'alain-default-content-heading-bg': {
    label: '标题背景色',
    type: 'color',
    default: '#fafbfc'
  },
  'alain-default-content-heading-border': {
    label: '标题底部边框色',
    type: 'color',
    default: '#efe3e5'
  },
  'alain-default-content-padding': {
    label: '内边距',
    type: 'px',
    default: '24px',
    min: 0,
    max: 128,
    step: 8
  },
  // zorro组件修正
  'form-state-visual-feedback-enabled': {
    label: '开启表单元素的视觉反馈',
    type: 'switch',
    default: true
  },
  'preserve-white-spaces-enabled': {
    label: '开启 preserveWhitespaces',
    type: 'switch',
    default: true
  },
  'nz-table-img-radius': {
    label: '表格中：图片圆角',
    type: 'px',
    default: '4px',
    min: 0,
    max: 128
  },
  'nz-table-img-margin-right': {
    label: '表格中：图片右外边距',
    type: 'px',
    default: '4px',
    min: 0,
    max: 128
  },
  'nz-table-img-max-width': {
    label: '表格中：图片最大宽度',
    type: 'px',
    default: '32px',
    min: 8,
    max: 128
  },
  'nz-table-img-max-height': {
    label: '表格中：图片最大高度',
    type: 'px',
    default: '32px',
    min: 8,
    max: 128
  }
};
