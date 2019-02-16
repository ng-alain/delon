import { FullLocaleData } from '../locale.types';

export default {
  abbr: 'tr-TR',
  exception: {
    403: `Üzgünüz, bu sayfaya erişiminiz yok`,
    404: `Maalesef bu sayfa mevcut değil`,
    500: `Üzgünüz, sunucu hatası`,
    backToHome: 'Ana Sayfa\'ya geri dön',
  },
  noticeIcon: {
    emptyText: 'Veri yok',
    clearText: 'Temiz',
  },
  reuseTab: {
    close: 'Sekmeyi Kapat',
    closeOther: 'Diğer sekmeleri kapat',
    closeRight: 'Sağdaki sekmeleri kapat',
    clear: 'Sekmeleri temizle',
  },
  tagSelect: {
    expand: 'Genişlet',
    collapse: 'Daralt',
  },
  miniProgress: {
    target: 'Hedef: ',
  },
  st: {
    total: '{{range[0]}} ile {{range[1]}} arasında {{total}}',
  },
  sf: {
    submit: 'Gönder',
    reset: 'Sıfırla',
    search: 'Ara',
    edit: 'Kaydet',
    addText: 'Ekle',
    removeText: 'Kaldır',
    checkAllText: 'Tümünü kontrol et',
  },
} as FullLocaleData;
