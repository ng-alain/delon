export interface AlainMockConfig {
  /**
   * 请求延迟，单位：毫秒，默认：`300`
   */
  delay?: number;
  /**
   * 是否强制所有请求都Mock，默认：`false`，`true` 表示当请求的URL不存在时直接返回 404 错误，`false` 表示未命中时发送真实HTTP请求
   */
  force?: boolean;
  /**
   * 是否打印 Mock 请求信息，弥补浏览器无Network信息，默认：`true`
   */
  log?: boolean;
}
