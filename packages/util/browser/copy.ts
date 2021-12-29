/**
 * Copy text to clipboard
 *
 * 复制字符串文档至剪贴板
 */
export function copy(value: string): Promise<string> {
  return navigator.clipboard.writeText(value).then(() => Promise.resolve(value));
}
