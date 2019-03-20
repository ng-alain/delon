import { FullLocaleData } from '../locale.types';

export default {
  abbr: 'ko-KR',
  exception: {
    403: `죄송합니다.이 페이지에 액세스 할 수 없습니다.`,
    404: `죄송합니다. 해당 페이지가 없습니다.`,
    500: `죄송합니다, 서버 오류가 있습니다.`,
    backToHome: '홈으로 돌아갑니다.',
  },
  noticeIcon: {
    emptyText: '데이터 없음',
    clearText: '지우기',
  },
  reuseTab: {
    close: '탭 닫기',
    closeOther: '다른 탭 닫기',
    closeRight: '오른쪽 탭 닫기',
    clear: '탭 지우기',
  },
  tagSelect: {
    expand: '펼치기',
    collapse: '접기',
  },
  miniProgress: {
    target: '대상: ',
  },
  st: {
    total: '전체 {{total}}건',
  },
  sf: {
    submit: '제출',
    reset: '재설정',
    search: '검색',
    edit: '저장',
    addText: '추가',
    removeText: '제거',
    checkAllText: '모두 확인',
  },
} as FullLocaleData;
