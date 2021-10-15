import { FullLocaleData } from '../locale.types';

export default {
  abbr: 'el-GR',
  exception: {
    403: `Λυπούμαστε, δεν έχετε πρόσβαση σε αυτήν τη σελίδα`,
    404: `Λυπούμαστε, η σελίδα αυτή δεν βρέθηκε`,
    500: `Λυπούμαστε, σφάλμα διακομιστή`,
    backToHome: 'Επιστροφή στην αρχική σελίδα'
  },
  noticeIcon: {
    emptyText: 'Δεν υπάρχουν δεδομένα',
    clearText: 'Καθαρισμός'
  },
  reuseTab: {
    close: 'Κλείσιμο καρτέλας',
    closeOther: 'Κλείσιμο των άλλων καρτέλων',
    closeRight: 'Κλείσιμο των καρτελών δεξιά',
    refresh: 'Ανανέωση'
  },
  tagSelect: {
    expand: 'Επέκταση',
    collapse: 'Σύμπτυξη'
  },
  miniProgress: {
    target: 'Στόχος: '
  },
  st: {
    total: '{{range[0]}} - {{range[1]}} από {{total}}',
    filterConfirm: 'ΟΚ',
    filterReset: 'Επαναφορά'
  },
  sf: {
    submit: 'Υποβολή',
    reset: 'Επαναφορά',
    search: 'Αναζήτηση',
    edit: 'Αποθήκευση',
    addText: 'Προσθήκη',
    removeText: 'Αφαίρεση',
    checkAllText: 'Επιλογή όλων',
    error: {
      'false schema': `Η δυαδική δομή είναι ψευδής`,
      $ref: `Δεν είναι δυνατή η επίλυση της αναφοράς {ref}`,
      additionalItems: `Δεν πρέπει να έχει περισσότερα από {limit} στοιχεία`,
      additionalProperties: `Δεν πρέπει να έχει επιπλέον χαρακτηριστικά`,
      anyOf: `Πρέπει να ταιριάζει με κάποια απο τις δομές στο "anyOf"`,
      dependencies: `τα χαρακτηριστικά {deps} είναι απαραίτητα, όταν υπάρχει το χαρακτηριστικό {property}`,
      enum: `Πρέπει να είναι ίσο με μία από τις προκαθορισμένες τιμές`,
      format: `Πρέπει να έχει την μορφή "{format}"`,
      type: `Πρέπει να είναι {type}`,
      required: `Απαιτείται`,
      maxLength: `Δεν πρέπει να είναι μεγαλύτερο από {limit} χαρακτήρες`,
      minLength: `Δεν πρέπει να είναι μικρότερο από {limit} χαρακτήρες`,
      minimum: `Πρέπει να είναι {comparison} {limit}`,
      formatMinimum: `Πρέπει να είναι {comparison} {limit}`,
      maximum: `Πρέπει να είναι {comparison} {limit}`,
      formatMaximum: `Πρέπει να είναι {comparison} {limit}`,
      maxItems: `Δεν πρέπει να έχει περισσότερα από {limit} στοιχεία`,
      minItems: `Δεν πρέπει να έχει λιγότερα από {limit} στοιχεία`,
      maxProperties: `Δεν πρέπει να έχει περισσότερα από {limit} χαρακτηριστικά`,
      minProperties: `Δεν πρέπει να έχει λιγότερα από {limit} χαρακτηριστικά`,
      multipleOf: `Πρέπει να είναι πολλαπλάσιο του {multipleOf}`,
      not: `Δεν πρέπει να είναι εγκύρο, σύμφωνα με την δομή στο "not"`,
      oneOf: `Πρέπει να ταιριάζει με ακριβώς μια απο τις δομές στο "oneOf"`,
      pattern: `Πρέπει να ταιριάζει με το πρότυπο "{pattern}"`,
      uniqueItems: `Τα στοιχεία δεν πρέπει να επαναλαμβάνονται (τα στοιχεία ## {j} και {i} είναι ίδια)`,
      custom: `Πρέπει να έχει την μορφή`,
      propertyNames: `Το όνομα του χαρακτηριστικού "{propertyName}" δεν είναι έγκυρο`,
      patternRequired: `Πρέπει να υπάρχει το χαρακτηριστικό αντιπαραβολής προτύπου "{missingPattern}"`,
      switch: `Πρέπει να περάσει ο έλεγχος εγκυρότητας της λέξης-κλειδιού με την χρήση της "switch", η περίπτωση {caseIndex} αποτυγχάνει`,
      const: `Πρέπει να είναι ίσο με σταθερά`,
      contains: `Πρέπει να περιέχει κάποιο έγκυρο στοιχείο`,
      formatExclusiveMaximum: `formatExclusiveMaximum πρέπει να είναι boolean`,
      formatExclusiveMinimum: `formatExclusiveMinimum πρέπει να είναι boolean`,
      if: `Πρέπει να ταιριάζει στην δομή "{failingKeyword}"`
    }
  },
  onboarding: {
    skip: `Παράλειψη`,
    prev: `Προηγούμενο`,
    next: `Επόμενο`,
    done: `Ολοκληρώθηκε`
  }
} as FullLocaleData;
