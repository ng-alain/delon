import { FullLocaleData } from '../locale.types';

export default {
  abbr: 'vi-VI',
  exception: {
    403: `Xin lỗi, bạn không có quyền truy cập vào trang này`,
    404: `Xin lỗi, trang bạn truy cập không tồn tại`,
    500: `Xin lỗi, máy chủ đang báo cáo một lỗi`,
    backToHome: 'Quay lại Trang chủ'
  },
  noticeIcon: {
    emptyText: 'Không có dữ liệu',
    clearText: 'Xóa'
  },
  reuseTab: {
    close: 'Đóng tab',
    closeOther: 'Đóng các tab khác',
    closeRight: 'Đóng các tab bên phải',
    refresh: 'Làm mới'
  },
  tagSelect: {
    expand: 'Mở rộng',
    collapse: 'Thu gọn'
  },
  miniProgress: {
    target: 'Mục tiêu: '
  },
  st: {
    total: '{{range[0]}} - {{range[1]}} của {{total}}',
    filterConfirm: 'OK',
    filterReset: 'Đặt lại'
  },
  sf: {
    submit: 'Gửi',
    reset: 'Đặt lại',
    search: 'Tìm kiếm',
    edit: 'Lưu',
    addText: 'Thêm',
    removeText: 'Xóa',
    checkAllText: 'Chọn tất cả',
    error: {
      'false schema': `Mô hình Boolean sai`,
      $ref: `Không thể giải quyết tham chiếu {ref}`,
      additionalItems: `Không nên có nhiều hơn {limit} mục`,
      additionalProperties: `Không nên có các thuộc tính bổ sung`,
      anyOf: `Nên phù hợp với một số mô hình trong "anyOf"`,
      dependencies: `nên có thuộc tính {deps} khi thuộc tính {property} hiện diện`,
      enum: `Nên bằng với một trong số các giá trị được xác định trước`,
      format: `Nên phù hợp với định dạng "{format}"`,
      type: `Nên là {type}`,
      required: `Bắt buộc`,
      maxLength: `Không nên dài hơn {limit} ký tự`,
      minLength: `Không nên ngắn hơn {limit} ký tự`,
      minimum: `Nên là {comparison} {limit}`,
      formatMinimum: `Nên là {comparison} {limit}`,
      maximum: `Nên là {comparison} {limit}`,
      formatMaximum: `Nên là {comparison} {limit}`,
      maxItems: `Không nên có nhiều hơn {limit} mục`,
      minItems: `Không nên có ít hơn {limit} mục`,
      maxProperties: `Không nên có nhiều hơn {limit} thuộc tính`,
      minProperties: `Không nên có ít hơn {limit} thuộc tính`,
      multipleOf: `Nên là bội số của {multipleOf}`,
      not: `Không nên hợp lệ theo mô hình trong "not"`,
      oneOf: `Nên phù hợp chính xác với một mô hình trong "oneOf"`,
      pattern: `Nên phù hợp với mẫu "{pattern}"`,
      uniqueItems: `Không nên có các mục trùng lặp (mục ## {j} và {i} giống nhau)`,
      custom: `Nên phù hợp với định dạng`,
      propertyNames: `Tên thuộc tính "{propertyName}" không hợp lệ`,
      patternRequired: `Nên có thuộc tính phù hợp với mẫu "{missingPattern}"`,
      switch: `Nên vượt qua việc xác nhận từ khóa "switch", trường hợp {caseIndex} thất bại`,
      const: `Nên bằng với hằng số`,
      contains: `Nên chứa một mục hợp lệ`,
      formatExclusiveMaximum: `formatExclusiveMaximum nên là boolean`,
      formatExclusiveMinimum: `formatExclusiveMinimum nên là boolean`,
      if: `Nên phù hợp với mô hình "{failingKeyword}"`
    }
  },
  onboarding: {
    skip: `Bỏ qua`,
    prev: `Trước`,
    next: `Tiếp`,
    done: `Hoàn thành`
  }
} as FullLocaleData;
