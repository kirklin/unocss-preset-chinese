/**
 * Get error message from an error object. If the error object is not an instance of Error,
 * it will be converted to string and returned.
 * 从错误对象中获取错误信息。如果错误对象不是 Error 的实例，
 * 则会将其转换为字符串并返回。
 *
 * @param error The error object to extract error message from. 用于提取错误信息的错误对象。
 * @returns The error message string. 错误信息字符串。
 */
export function getErrorMessage(error): string {
  if (error instanceof Error) {
    return error.message;
  } else {
    return String(error);
  }
}

// A constant function that does nothing and returns undefined
// 一个什么都不做并返回 undefined 的常量函数
export function NOOP(): undefined {
  return void 0;
}
