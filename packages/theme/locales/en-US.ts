import { LocaleData } from '../src/locale/locale.types';

export default <LocaleData>{
  abbr: 'en-US',
  exception: {
    403: `Sorry, you don't have access to this page`,
    404: `Sorry, that page don't exist`,
    500: `Sorry, server error`,
    backToHome: 'Back To Home'
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
    target: 'Target: '
  },
  sf: {
    submit: 'Submit',
    reset: 'Reset',
    search: 'Search',
    edit: 'Save',
  },
};
