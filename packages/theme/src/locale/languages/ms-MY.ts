import { FullLocaleData } from '../locale.types';

export default {
  abbr: 'ms-MY',
  exception: {
    403: `Maaf, anda tidak mempunyai akses ke halaman ini`,
    404: `Maaf, halaman yang anda lawati tidak wujud`,
    500: `Maaf, pelayan melaporkan ralat`,
    backToHome: 'Kembali ke Laman Utama'
  },
  noticeIcon: {
    emptyText: 'Tiada data',
    clearText: 'Padam'
  },
  reuseTab: {
    close: 'Tutup tab',
    closeOther: 'Tutup tab lain',
    closeRight: 'Tutup tab di sebelah kanan',
    refresh: 'Segar semula'
  },
  tagSelect: {
    expand: 'Kembangkan',
    collapse: 'Lipat'
  },
  miniProgress: {
    target: 'Sasaran: '
  },
  st: {
    total: '{{range[0]}} - {{range[1]}} daripada {{total}}',
    filterConfirm: 'OK',
    filterReset: 'Set Semula',
    more: 'Lagi'
  },
  sf: {
    submit: 'Hantar',
    reset: 'Set Semula',
    search: 'Cari',
    edit: 'Simpan',
    addText: 'Tambah',
    removeText: 'Padam',
    checkAllText: 'Tanda semua',
    error: {
      'false schema': `Skema boolean adalah palsu`,
      $ref: `Tidak dapat menyelesaikan rujukan {ref}`,
      additionalItems: `Tidak sepatutnya mempunyai lebih daripada {limit} item`,
      additionalProperties: `Tidak sepatutnya mempunyai sifat tambahan`,
      anyOf: `Perlu sepadan dengan beberapa skema dalam "anyOf"`,
      dependencies: `Perlu mempunyai sifat {deps} apabila sifat {property} wujud`,
      enum: `Perlu sama dengan salah satu nilai yang telah ditetapkan`,
      format: `Perlu sepadan dengan format "{format}"`,
      type: `Perlu menjadi {type}`,
      required: `Diperlukan`,
      maxLength: `Tidak boleh lebih panjang daripada {limit} aksara`,
      minLength: `Tidak boleh lebih pendek daripada {limit} aksara`,
      minimum: `Perlu {comparison} {limit}`,
      formatMinimum: `Perlu {comparison} {limit}`,
      maximum: `Perlu {comparison} {limit}`,
      formatMaximum: `Perlu {comparison} {limit}`,
      maxItems: `Tidak boleh mempunyai lebih daripada {limit} item`,
      minItems: `Tidak boleh mempunyai kurang daripada {limit} item`,
      maxProperties: `Tidak boleh mempunyai lebih daripada {limit} sifat`,
      minProperties: `Tidak boleh mempunyai kurang daripada {limit} sifat`,
      multipleOf: `Perlu menjadi gandaan bagi {multipleOf}`,
      not: `Tidak sepatutnya sah mengikut skema dalam "not"`,
      oneOf: `Perlu sepadan tepat dengan satu skema dalam "oneOf"`,
      pattern: `Perlu sepadan dengan corak "{pattern}"`,
      uniqueItems: `Tidak boleh mempunyai item yang sama (item ## {j} dan {i} adalah sama)`,
      custom: `Perlu sepadan dengan format`,
      propertyNames: `Nama sifat "{propertyName}" tidak sah`,
      patternRequired: `Perlu mempunyai sifat yang sepadan dengan corak "{missingPattern}"`,
      switch: `Perlu melepasi pengesahan kata kunci "switch", kes {caseIndex} gagal`,
      const: `Perlu sama dengan nilai tetap`,
      contains: `Perlu mengandungi item yang sah`,
      formatExclusiveMaximum: `formatExclusiveMaximum mesti boolean`,
      formatExclusiveMinimum: `formatExclusiveMinimum mesti boolean`,
      if: `Perlu sepadan dengan skema "{failingKeyword}"`
    }
  },
  onboarding: {
    skip: `Langkau`,
    prev: `Sebelum`,
    next: `Seterusnya`,
    done: `Selesai`
  },
  datePicker: {
    today: 'Hari Ini',
    yesterday: 'Semalam',
    last3Days: '3 Hari Lalu',
    last7Days: '7 Hari Lalu',
    thisWeek: 'Minggu Ini',
    lastWeek: 'Minggu Lalu',
    thisMonth: 'Bulan Ini',
    lastMonth: 'Bulan Lalu',
    thisYear: 'Tahun Ini'
  },
  pageHeader: {
    home: 'Laman Utama'
  }
} as FullLocaleData;
