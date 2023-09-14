import type { DeepPartial } from "./types";

export function toArray<T>(value: T | T[] = []): T[] {
  return Array.isArray(value) ? value : [value];
}

export function isObject(item: any): item is Record<string, any> {
  return (item && typeof item === "object" && !Array.isArray(item));
}

/**
 * Deep merge two objects
 */
export function mergeDeep<T>(original: T, patch: DeepPartial<T>, mergeArray = false): T {
  const o = original as any;
  const p = patch as any;

  if (Array.isArray(p)) {
    if (mergeArray && Array.isArray(p)) {
      return [...o, ...p] as any;
    } else {
      return [...p] as any;
    }
  }

  const output = { ...o };
  if (isObject(o) && isObject(p)) {
    Object.keys(p).forEach((key) => {
      if (((isObject(o[key]) && isObject(p[key])) || (Array.isArray(o[key]) && Array.isArray(p[key])))) {
        output[key] = mergeDeep(o[key], p[key], mergeArray);
      } else {
        Object.assign(output, { [key]: p[key] });
      }
    });
  }
  return output;
}

/**
 * Serializes an object with key-value pairs of CSS properties and their values into a CSS string.
 * 将一个包含 CSS 属性及其值的键值对对象序列化为 CSS 字符串。
 *
 * @param cssObj An object with key-value pairs of CSS properties and their values.
 * @returns A CSS string representing the object's CSS properties and values.
 */
export function serializeCSS(cssObj: Record<string, string>): string {
  const cssArr: string[] = [];
  for (const prop in cssObj) {
    if (Object.prototype.hasOwnProperty.call(cssObj, prop)) {
      cssArr.push(`${prop}: ${cssObj[prop]};`);
    }
  }
  return cssArr.join(" ");
}
