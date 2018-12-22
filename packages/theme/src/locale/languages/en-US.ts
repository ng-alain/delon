import { LocaleData } from '../locale.types';

export default {
  abbr: 'en-US',
  exception: {
    403: `Sorry, you don't have access to this page`,
    404: `Sorry, that page don't exist`,
    500: `Sorry, server error`,
    backToHome: 'Back To Home',
  },
  noticeIcon: {
    emptyText: 'No data',
    clearText: 'Clear',
  },
  reuseTab: {
    close: 'Close tab',
    closeOther: 'Close other tabs',
    closeRight: 'Close tabs to right',
    clear: 'Clear tabs',
  },
  tagSelect: {
    expand: 'Expand',
    collapse: 'Collapse',
  },
  miniProgress: {
    target: 'Target: ',
  },
  st: {
    total: '{{range[0]}} - {{range[1]}} of {{total}}',
  },
  sf: {
    submit: 'Submit',
    reset: 'Reset',
    search: 'Search',
    edit: 'Save',
    addText: 'Add',
    removeText: 'Remove',
    checkAllText: 'Check all',
  },
} as LocaleData;
