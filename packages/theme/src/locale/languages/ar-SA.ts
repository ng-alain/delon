import { FullLocaleData } from '../locale.types';

export default {
  abbr: 'ar-SA',
  exception: {
    403: `عذراً، ليس لديك إذن للوصول إلى هذه الصفحة`,
    404: `عذراً، الصفحة التي تبحث عنها غير موجودة`,
    500: `عذراً، خطأ في الخادم`,
    backToHome: 'العودة إلى الصفحة الرئيسية'
  },
  noticeIcon: {
    emptyText: 'لا توجد بيانات',
    clearText: 'مسح'
  },
  reuseTab: {
    close: 'إغلاق العلامة',
    closeOther: 'إغلاق العلامات الأخرى',
    closeRight: 'إغلاق العلامات اليمنى',
    refresh: 'تحديث'
  },
  tagSelect: {
    expand: 'توسيع',
    collapse: 'طي'
  },
  miniProgress: {
    target: 'الهدف: '
  },
  st: {
    total: '{{range[0]}} - {{range[1]}} من {{total}}',
    filterConfirm: 'تأكيد',
    filterReset: 'إعادة تعيين'
  },
  sf: {
    submit: 'حفظ',
    reset: 'إعادة تعيين',
    search: 'بحث',
    edit: 'تعديل',
    addText: 'إضافة',
    removeText: 'حذف',
    checkAllText: 'تحديد الكل',
    error: {
      'false schema': `القيمة المنطقية خاطئة`,
      $ref: `المرجع "{{ref}}" غير موجود`,
      additionalItems: `يجب ألا يحتوي على عناصر إضافية`,
      additionalProperties: `يجب ألا يحتوي على خصائص إضافية`,
      anyOf: `يجب أن يتطابق مع أحد النماذج في "anyOf"`,
      dependencies: `يجب أن يحتوي على الخصائص {{deps}} عندما تكون الخاصية {{property}} موجودة`,
      enum: `يجب أن يكون واحدًا من القيم المحددة`,
      format: `يجب أن يتوافق مع النمط "{{format}}"`,
      type: `يجب أن يكون {{type}}`,
      required: `مطلوب`,
      maxLength: `يجب ألا يكون أطول من {limit} حرف`,
      minLength: `يجب ألا يكون أقصر من {limit} حرف`,
      minimum: `يجب أن يكون أكبر من أو يساوي {comparison} {limit}`,
      formatMinimum: `يجب أن يكون أكبر من أو يساوي {comparison} {limit}`,
      maximum: `يجب أن يكون أقل من أو يساوي {comparison} {limit}`,
      formatMaximum: `يجب أن يكون أقل من أو يساوي {comparison} {limit}`,
      maxItems: `يجب ألا يكون أكثر من {limit} عنصر`,
      minItems: `يجب ألا يكون أقل من {limit} عنصر`,
      maxProperties: `يجب ألا يكون أكثر من {limit} خاصية`,
      minProperties: `يجب ألا يكون أقل من {limit} خاصية`,
      multipleOf: `يجب أن يكون مضاعفًا لـ {multipleOf}`,
      not: `لا يجب أن يتطابق مع النمط (not)`,
      oneOf: `يجب أن يتطابق مع أحد النماذج في "oneOf"`,
      pattern: `يجب أن يتطابق مع النمط "{pattern}"`,
      uniqueItems: `يجب ألا يحتوي على عناصر مكررة`,
      custom: `يجب أن يكون صالحًا`,
      propertyNames: `يجب أن تكون الخاصية صالحة`,
      patternRequired: `يجب أن تحتوي على خاصية تطابق النمط "{missingPattern}"`,
      switch: `يجب أن يكون {caseIndex} صالحًا`,
      const: `يجب أن يكون ثابتًا`,
      contains: `يجب أن يحتوي على قيمة صالحة`,
      formatExclusiveMaximum: `formatExclusiveMaximum يجب أن يكون قيمة منطقية`,
      formatExclusiveMinimum: `formatExclusiveMinimum يجب أن يكون قيمة منطقية`,
      if: `يجب أن يتوافق مع "{failingKeyword}"`
    }
  },
  onboarding: {
    skip: `تخطي`,
    prev: `السابق`,
    next: `التالي`,
    done: `تم`
  },
  datePicker: {
    today: 'اليوم',
    yesterday: 'أمس',
    last3Days: 'آخر 3 أيام',
    last7Days: 'آخر 7 أيام',
    thisWeek: 'هذا الأسبوع',
    lastWeek: 'الأسبوع الماضي',
    thisMonth: 'هذا الشهر',
    lastMonth: 'الشهر الماضي',
    thisYear: 'هذا العام'
  },
  loading: {
    text: 'جاري التحميل...'
  }
} as FullLocaleData;
