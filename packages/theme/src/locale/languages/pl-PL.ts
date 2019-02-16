import { FullLocaleData } from '../locale.types';

export default {
  abbr: 'en-US',
  exception: {
    403: `Niestety, nie masz uprawnień do tej strony`,
    404: `Niestety, ta strona nie istnieje`,
    500: `Niestety, błąd serwera`,
    backToHome: 'Powróć do strony głównej',
  },
  noticeIcon: {
    emptyText: 'Brak danych',
    clearText: 'Wyczyść',
  },
  reuseTab: {
    close: 'Zamknij kartę',
    closeOther: 'Zamknij inne karty',
    closeRight: 'Zamknij karty po prawej',
    clear: 'Wyczyść karty',
  },
  tagSelect: {
    expand: 'Rozszerz',
    collapse: 'Zmniejsz',
  },
  miniProgress: {
    target: 'Cel: ',
  },
  st: {
    total: '{{range[0]}} - {{range[1]}} z {{total}}',
  },
  sf: {
    submit: 'Wyślij',
    reset: 'Resetuj',
    search: 'Szukaj',
    edit: 'Zapisz',
    addText: 'Dodaj',
    removeText: 'Usuń',
    checkAllText: 'Zaznacz wszystkie',
  },
} as FullLocaleData;
