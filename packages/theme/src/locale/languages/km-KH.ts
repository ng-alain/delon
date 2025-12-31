import { FullLocaleData } from '../locale.types';

export default {
  abbr: 'km-KH',
  exception: {
    403: `សូមអភ័យទោស អ្នកមិនមានសិទ្ធិចូលទំព័រនេះទេ`,
    404: `សូមអភ័យទោស ទំព័រដែលអ្នកចូលមិនមានទេ`,
    500: `សូមអភ័យទោស ម៉ាស៊ីនមេកំពុងរាយការណ៍កំហុស`,
    backToHome: 'ត្រឡប់ទៅទំព័រដើម'
  },
  noticeIcon: {
    emptyText: 'គ្មានទិន្នន័យ',
    clearText: 'សម្អាត'
  },
  reuseTab: {
    close: 'បិទផ្ទាំង',
    closeOther: 'បិទផ្ទាំងផ្សេងទៀត',
    closeRight: 'បិទផ្ទាំងខាងស្ដាំ',
    refresh: 'ផ្ទុកឡើងវិញ'
  },
  tagSelect: {
    expand: 'ពង្រីក',
    collapse: 'បង្រួម'
  },
  miniProgress: {
    target: 'គោលដៅ៖ '
  },
  st: {
    total: '{{range[0]}} - {{range[1]}} នៃ {{total}}',
    filterConfirm: 'យល់ព្រម',
    filterReset: 'កំណត់ឡើងវិញ'
  },
  sf: {
    submit: 'ដាក់ស្នើ',
    reset: 'កំណត់ឡើងវិញ',
    search: 'ស្វែងរក',
    edit: 'រក្សាទុក',
    addText: 'បន្ថែម',
    removeText: 'លុបចេញ',
    checkAllText: 'ពិនិត្យទាំងអស់',
    error: {
      'false schema': `ស្កីម៉ាមិនត្រឹមត្រូវទេ`,
      $ref: `មិនអាចដោះស្រាយយោង {ref} បានទេ`,
      additionalItems: `មិនគួរមានធាតុលើស {limit}`,
      additionalProperties: `មិនគួរមានលក្ខណៈបន្ថែមទេ`,
      anyOf: `ត្រូវតែត្រូវនឹងស្កីម៉ាណាមួយក្នុង "anyOf"`,
      dependencies: `ត្រូវមានលក្ខណៈ {deps} នៅពេលដែលមានលក្ខណៈ {property}`,
      enum: `ត្រូវតែស្មើនឹងតម្លៃដែលបានកំណត់ជាមុន`,
      format: `ត្រូវតែស្របនឹងទ្រង់ទ្រាយ "{format}"`,
      type: `ត្រូវតែជា {type}`,
      required: `ត្រូវការបំពេញ`,
      maxLength: `មិនគួរលើសពី {limit} តួអក្សរ`,
      minLength: `មិនគួរតិចជាង {limit} តួអក្សរ`,
      minimum: `ត្រូវជា {comparison} {limit}`,
      formatMinimum: `ត្រូវជា {comparison} {limit}`,
      maximum: `ត្រូវជា {comparison} {limit}`,
      formatMaximum: `ត្រូវជា {comparison} {limit}`,
      maxItems: `មិនគួរមានធាតុលើសពី {limit}`,
      minItems: `មិនគួរមានធាតុតិចជាង {limit}`,
      maxProperties: `មិនគួរមានលក្ខណៈលើសពី {limit}`,
      minProperties: `មិនគួរមានលក្ខណៈតិចជាង {limit}`,
      multipleOf: `ត្រូវជាចំនួនគុណនៃ {multipleOf}`,
      not: `មិនគួរត្រូវនឹងស្កីម៉ានៅក្នុង "not" ទេ`,
      oneOf: `ត្រូវតែត្រូវតែមួយស្កីម៉ានៅក្នុង "oneOf" ប៉ុណ្ណោះ`,
      pattern: `ត្រូវតែត្រូវនឹងលំនាំ "{pattern}"`,
      uniqueItems: `មិនគួរមានធាតុស្ទួន (ធាតុ ## {j} និង {i} ដូចគ្នា)`,
      custom: `ត្រូវតែស្របនឹងទ្រង់ទ្រាយ`,
      propertyNames: `ឈ្មោះលក្ខណៈ "{propertyName}" មិនត្រឹមត្រូវទេ`,
      patternRequired: `ត្រូវមានលក្ខណៈដែលត្រូវនឹងលំនាំ "{missingPattern}"`,
      switch: `មិនជោគជ័យក្នុងការផ្ទៀងផ្ទាត់តាមពាក្យគន្លឹះ "switch" ករណី {caseIndex} បរាជ័យ`,
      const: `ត្រូវស្មើនឹងតម្លៃថេរ`,
      contains: `ត្រូវមានធាតុត្រឹមត្រូវមួយ`,
      formatExclusiveMaximum: `formatExclusiveMaximum ត្រូវជាប៊ូលីន`,
      formatExclusiveMinimum: `formatExclusiveMinimum ត្រូវជាប៊ូលីន`,
      if: `ត្រូវតែត្រូវនឹងស្កីម៉ា "{failingKeyword}"`
    }
  },
  onboarding: {
    skip: `រំលង`,
    prev: `ថយក្រោយ`,
    next: `បន្ទាប់`,
    done: `រួចរាល់`
  },
  datePicker: {
    today: 'ថ្ងៃនេះ',
    yesterday: 'ម្សិលមិញ',
    last3Days: '៣ថ្ងៃចុងក្រោយ',
    last7Days: '៧ថ្ងៃចុងក្រោយ',
    thisWeek: 'សប្តាហ៍នេះ',
    lastWeek: 'សប្តាហ៍មុន',
    thisMonth: 'ខែនេះ',
    lastMonth: 'ខែមុន',
    thisYear: 'ឆ្នាំនេះ'
  },
  loading: {
    text: 'កំពុងផ្ទុក...'
  }
} as FullLocaleData;
