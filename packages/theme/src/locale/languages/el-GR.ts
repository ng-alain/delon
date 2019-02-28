import { FullLocaleData } from '../locale.types';

export default {
  abbr: 'el-GR',
  exception: {
    403: `Λυπούμαστε, δεν έχετε πρόσβαση σε αυτήν τη σελίδα`,
    404: `Λυπούμαστε, η σελίδα αυτή δεν βρέθηκε`,
    500: `Λυπούμαστε, σφάλμα διακομιστή`,
    backToHome: 'Επιστροφή στην αρχική σελίδα',
  },
  noticeIcon: {
    emptyText: 'Δεν υπάρχουν δεδομένα',
    clearText: 'Καθαρισμός',
  },
  reuseTab: {
    close: 'Κλείσιμο καρτέλας',
    closeOther: 'Κλείσιμο των άλλων καρτέλων',
    closeRight: 'Κλείσιμο των καρτελών δεξιά',
    clear: 'Καθαρισμός καρτελών',
  },
  tagSelect: {
    expand: 'Επέκταση',
    collapse: 'Σύμπτυξη',
  },
  miniProgress: {
    target: 'Στόχος: ',
  },
  st: {
    total: '{{range[0]}} - {{range[1]}} από {{total}}',
  },
  sf: {
    submit: 'Υποβολή',
    reset: 'Επαναφορά',
    search: 'Αναζήτηση',
    edit: 'Αποθήκευση',
    addText: 'Προσθήκη',
    removeText: 'Αφαίρεση',
    checkAllText: 'Επιλογή όλων',
  },
} as FullLocaleData;
