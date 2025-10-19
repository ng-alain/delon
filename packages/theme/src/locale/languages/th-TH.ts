import { FullLocaleData } from '../locale.types';

export default {
  abbr: 'th-TH',
  exception: {
    403: `ขอโทษค่ะ คุณไม่มีสิทธิ์เข้าถึงหน้านี้`,
    404: `ขอโทษค่ะ หน้าที่คุณเข้าชมไม่มีอยู่`,
    500: `ขอโทษค่ะ เซิร์ฟเวอร์รายงานข้อผิดพลาด`,
    backToHome: 'กลับไปหน้าหลัก'
  },
  noticeIcon: {
    emptyText: 'ไม่มีข้อมูล',
    clearText: 'ล้างข้อมูล'
  },
  reuseTab: {
    close: 'ปิดแท็บ',
    closeOther: 'ปิดแท็บอื่น',
    closeRight: 'ปิดแท็บทางขวา',
    refresh: 'รีเฟรช'
  },
  tagSelect: {
    expand: 'ขยาย',
    collapse: 'ย่อ'
  },
  miniProgress: {
    target: 'เป้าหมาย: '
  },
  st: {
    total: '{{range[0]}} - {{range[1]}} จาก {{total}}',
    filterConfirm: 'ตกลง',
    filterReset: 'รีเซ็ต'
  },
  sf: {
    submit: 'ส่งข้อมูล',
    reset: 'รีเซ็ต',
    search: 'ค้นหา',
    edit: 'บันทึก',
    addText: 'เพิ่ม',
    removeText: 'ลบ',
    checkAllText: 'เลือกทั้งหมด',
    error: {
      'false schema': `สคีมาแบบบูลีนเป็นเท็จ`,
      $ref: `ไม่สามารถแก้ไขการอ้างอิง {ref} ได้`,
      additionalItems: `ไม่ควรมีมากกว่า {limit} รายการ`,
      additionalProperties: `ไม่ควรมีคุณสมบัติเพิ่มเติม`,
      anyOf: `ควรตรงกับบางสคีมาใน "anyOf"`,
      dependencies: `ควรมีคุณสมบัติ {deps} เมื่อมีคุณสมบัติ {property}`,
      enum: `ควรมีค่าเท่ากับค่าที่กำหนดไว้ล่วงหน้า`,
      format: `ควรตรงกับรูปแบบ "{format}"`,
      type: `ควรเป็น {type}`,
      required: `จำเป็นต้องกรอก`,
      maxLength: `ไม่ควรยาวเกิน {limit} ตัวอักษร`,
      minLength: `ไม่ควรสั้นกว่า {limit} ตัวอักษร`,
      minimum: `ควรเป็น {comparison} {limit}`,
      formatMinimum: `ควรเป็น {comparison} {limit}`,
      maximum: `ควรเป็น {comparison} {limit}`,
      formatMaximum: `ควรเป็น {comparison} {limit}`,
      maxItems: `ไม่ควรมีมากกว่า {limit} รายการ`,
      minItems: `ไม่ควรมีน้อยกว่า {limit} รายการ`,
      maxProperties: `ไม่ควรมีมากกว่า {limit} คุณสมบัติ`,
      minProperties: `ไม่ควรมีน้อยกว่า {limit} คุณสมบัติ`,
      multipleOf: `ควรเป็นผลคูณของ {multipleOf}`,
      not: `ไม่ควรถูกต้องตามสคีมาใน "not"`,
      oneOf: `ควรตรงกับเพียงหนึ่งสคีมาใน "oneOf"`,
      pattern: `ควรตรงกับรูปแบบ "{pattern}"`,
      uniqueItems: `ไม่ควรมีรายการซ้ำกัน (รายการ ## {j} และ {i} เหมือนกัน)`,
      custom: `ควรตรงกับรูปแบบ`,
      propertyNames: `ชื่อคุณสมบัติ "{propertyName}" ไม่ถูกต้อง`,
      patternRequired: `ควรมีคุณสมบัติที่ตรงกับรูปแบบ "{missingPattern}"`,
      switch: `ควรผ่านการตรวจสอบคำสำคัญ "switch" กรณี {caseIndex} ล้มเหลว`,
      const: `ควรเท่ากับค่าคงที่`,
      contains: `ควรมีรายการที่ถูกต้อง`,
      formatExclusiveMaximum: `formatExclusiveMaximum ควรเป็นบูลีน`,
      formatExclusiveMinimum: `formatExclusiveMinimum ควรเป็นบูลีน`,
      if: `ควรตรงกับสคีมา "{failingKeyword}"`
    }
  },
  onboarding: {
    skip: `ข้าม`,
    prev: `ก่อนหน้า`,
    next: `ถัดไป`,
    done: `เสร็จสิ้น`
  }
} as FullLocaleData;
