/**
 * Copy text to clipboard
 *
 * 复制字符串文档至剪贴板
 */
export function copy(value: string): Promise<string> {
  return new Promise<string>((resolve): void => {
    let copyTextArea: HTMLTextAreaElement | null = null;
    try {
      copyTextArea = document.createElement('textarea');
      copyTextArea.style.height = '0px';
      copyTextArea.style.opacity = '0';
      copyTextArea.style.width = '0px';
      document.body.appendChild(copyTextArea);
      copyTextArea.value = value;
      copyTextArea.select();
      // eslint-disable-next-line deprecation/deprecation
      document.execCommand('copy');
      resolve(value);
    } finally {
      if (copyTextArea && copyTextArea.parentNode) {
        copyTextArea.parentNode.removeChild(copyTextArea);
      }
    }
  });
}
