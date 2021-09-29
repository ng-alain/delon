import { FullLocaleData } from '../locale.types';

export default {
  abbr: 'hr-HR',
  exception: {
    403: `Nažalost, nemate pristup ovoj lokaciji`,
    404: `Nažalost, lokacija ne postoji`,
    500: `Nažalost, server je javio pogrešku`,
    backToHome: 'Nazad na početnu stranicu'
  },
  noticeIcon: {
    emptyText: 'Nema podataka',
    clearText: 'Obriši'
  },
  reuseTab: {
    close: 'Zatvori karticu',
    closeOther: 'Zatvori druge kartice',
    closeRight: 'Zatvori kartice desno',
    refresh: 'Refresh'
  },
  tagSelect: {
    expand: 'Proširi',
    collapse: 'Skupi'
  },
  miniProgress: {
    target: 'Cilj: '
  },
  st: {
    total: '{{range[0]}} - {{range[1]}} od {{total}}',
    filterConfirm: 'U redu',
    filterReset: 'Poništi'
  },
  sf: {
    submit: 'Pošalji',
    reset: 'Poništi',
    search: 'Pretraži',
    edit: 'Spremi',
    addText: 'Dodaj',
    removeText: 'Ukloni',
    checkAllText: 'Označi sve'
  },
  onboarding: {
    skip: `Preskočiti`,
    prev: `Prethodna`,
    next: `Sljedeći`,
    done: `Sastavljeno`
  }
} as FullLocaleData;
