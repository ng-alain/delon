import extend from 'extend';

/**
 * 类似 `_.get`，根据 `path` 获取安全值
 * jsperf: https://jsperf.com/es-deep-getttps://jsperf.com/es-deep-get
 *
 * @param obj 数据源，无效时直接返回 `defaultValue` 值
 * @param path 若 `null`、`[]`、未定义及未找到时返回 `defaultValue` 值
 * @param defaultValue 默认值
 */
export function deepGet(obj: any | null, path: string | string[] | null | undefined, defaultValue?: any): any {
  if (!obj || path == null || path.length === 0) return defaultValue;
  if (!Array.isArray(path)) {
    path = ~path.indexOf('.') ? path.split('.') : [path];
  }
  if (path.length === 1) {
    const checkObj = obj[path[0]];
    return typeof checkObj === 'undefined' ? defaultValue : checkObj;
  }
  const res = path.reduce((o, k) => (o || {})[k], obj);
  return typeof res === 'undefined' ? defaultValue : res;
}

export function deepCopy(obj: any): any {
  const result = extend(true, {}, { _: obj });
  return result._;
}

/** 复制内容至剪贴板 */
export function copy(value: string): Promise<string> {
  return new Promise<string>(
    (resolve): void => {
      let copyTextArea: HTMLTextAreaElement | null = null;
      try {
        copyTextArea = document.createElement('textarea');
        copyTextArea.style.height = '0px';
        copyTextArea.style.opacity = '0';
        copyTextArea.style.width = '0px';
        document.body.appendChild(copyTextArea);
        copyTextArea.value = value;
        copyTextArea.select();
        document.execCommand('copy');
        resolve(value);
      } finally {
        if (copyTextArea && copyTextArea.parentNode) {
          copyTextArea.parentNode.removeChild(copyTextArea);
        }
      }
    },
  );
}

export function deepMergeKey(original: any, ingoreArray: boolean, ...objects: any[]): any {
  if (Array.isArray(original) || typeof original !== 'object') return original;

  const isObject = (v: any) => typeof v === 'object' || typeof v === 'function';

  const merge = (target: any, obj: {}) => {
    Object.keys(obj)
      .filter(key => key !== '__proto__' && Object.prototype.hasOwnProperty.call(obj, key))
      .forEach(key => {
        const oldValue = obj[key];
        const newValue = target[key];
        if (Array.isArray(newValue)) {
          target[key] = ingoreArray ? oldValue : [...newValue, ...oldValue];
        } else if (oldValue != null && isObject(oldValue) && newValue != null && isObject(newValue)) {
          target[key] = merge(newValue, oldValue);
        } else {
          target[key] = deepCopy(oldValue);
        }
      });
    return target;
  };

  objects.filter(v => isObject(v)).forEach(v => merge(original, v));

  return original;
}

export function deepMerge(original: any, ...objects: any[]): any {
  return deepMergeKey(original, false, ...objects);
}
