import { FullLocaleData } from '../locale.types';

export default {
  abbr: 'id-ID',
  exception: {
    403: `Maaf, Anda tidak memiliki akses ke halaman ini`,
    404: `Maaf, halaman yang Anda kunjungi tidak ada`,
    500: `Maaf, server melaporkan kesalahan`,
    backToHome: 'Kembali ke Beranda'
  },
  noticeIcon: {
    emptyText: 'Tidak ada data',
    clearText: 'Bersihkan'
  },
  reuseTab: {
    close: 'Tutup tab',
    closeOther: 'Tutup tab lainnya',
    closeRight: 'Tutup tab di sebelah kanan',
    refresh: 'Segarkan'
  },
  tagSelect: {
    expand: 'Perluas',
    collapse: 'Ciutkan'
  },
  miniProgress: {
    target: 'Target: '
  },
  st: {
    total: '{{range[0]}} - {{range[1]}} dari {{total}}',
    filterConfirm: 'OK',
    filterReset: 'Atur ulang'
  },
  sf: {
    submit: 'Kirim',
    reset: 'Atur ulang',
    search: 'Cari',
    edit: 'Simpan',
    addText: 'Tambah',
    removeText: 'Hapus',
    checkAllText: 'Pilih semua',
    error: {
      'false schema': `Skema boolean salah`,
      $ref: `Tidak dapat menyelesaikan referensi {ref}`,
      additionalItems: `Tidak boleh memiliki lebih dari {limit} item`,
      additionalProperties: `Tidak boleh memiliki properti tambahan`,
      anyOf: `Harus cocok dengan salah satu skema di "anyOf"`,
      dependencies: `harus memiliki properti {deps} ketika properti {property} ada`,
      enum: `Harus sama dengan salah satu nilai yang telah ditentukan`,
      format: `Harus sesuai dengan format "{format}"`,
      type: `Harus berupa {type}`,
      required: `Diperlukan`,
      maxLength: `Tidak boleh lebih panjang dari {limit} karakter`,
      minLength: `Tidak boleh lebih pendek dari {limit} karakter`,
      minimum: `Harus {comparison} {limit}`,
      formatMinimum: `Harus {comparison} {limit}`,
      maximum: `Harus {comparison} {limit}`,
      formatMaximum: `Harus {comparison} {limit}`,
      maxItems: `Tidak boleh memiliki lebih dari {limit} item`,
      minItems: `Tidak boleh memiliki kurang dari {limit} item`,
      maxProperties: `Tidak boleh memiliki lebih dari {limit} properti`,
      minProperties: `Tidak boleh memiliki kurang dari {limit} properti`,
      multipleOf: `Harus kelipatan dari {multipleOf}`,
      not: `Tidak boleh valid menurut skema dalam "not"`,
      oneOf: `Harus cocok dengan tepat satu skema dalam "oneOf"`,
      pattern: `Harus cocok dengan pola "{pattern}"`,
      uniqueItems: `Tidak boleh memiliki item duplikat (item ## {j} dan {i} identik)`,
      custom: `Harus sesuai dengan format`,
      propertyNames: `Nama properti "{propertyName}" tidak valid`,
      patternRequired: `Harus memiliki properti yang cocok dengan pola "{missingPattern}"`,
      switch: `Harus lulus validasi kata kunci "switch", kasus {caseIndex} gagal`,
      const: `Harus sama dengan konstanta`,
      contains: `Harus berisi item yang valid`,
      formatExclusiveMaximum: `formatExclusiveMaximum harus berupa boolean`,
      formatExclusiveMinimum: `formatExclusiveMinimum harus berupa boolean`,
      if: `Harus cocok dengan skema "{failingKeyword}"`
    }
  },
  onboarding: {
    skip: `Lewati`,
    prev: `Sebelumnya`,
    next: `Berikutnya`,
    done: `Selesai`
  },
  datePicker: {
    today: 'Hari Ini',
    yesterday: 'Kemarin',
    last3Days: '3 Hari Terakhir',
    last7Days: '7 Hari Terakhir',
    thisWeek: 'Minggu Ini',
    lastWeek: 'Minggu Lalu',
    thisMonth: 'Bulan Ini',
    lastMonth: 'Bulan Lalu',
    thisYear: 'Tahun Ini'
  },
  loading: {
    text: 'Memuat...'
  }
} as FullLocaleData;
