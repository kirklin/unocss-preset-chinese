# unocss-preset-chinese

[![CI][ci-image]][ci-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![javascript_code style][code-style-image]][code-style-url]

[ci-image]: https://github.com/kirklin/unocss-preset-chinese/actions/workflows/release.yml/badge.svg?branch=main
[ci-url]: https://github.com/kirklin/unocss-preset-chinese/actions/workflows/release.yml
[npm-image]: https://img.shields.io/npm/v/unocss-preset-chinese.svg
[npm-url]: https://npmjs.org/package/unocss-preset-chinese
[downloads-image]: https://img.shields.io/npm/dm/unocss-preset-chinese.svg
[downloads-url]: https://npmjs.org/package/unocss-preset-chinese
[code-style-image]: https://img.shields.io/badge/code__style-%40kirklin%2Feslint--config-brightgreen
[code-style-url]: https://github.com/kirklin/eslint-config/

<div align='center'>
<a href="README.en.md">English</a> | <b>简体中文</b>
</div>

## 简介
这是一个旨在优化中文网站或应用程序字体显示的项目。
通过使用这个项目，您可以获得一个默认的字体排列方案，以确保在没有指定字体的情况下，页面中选择的字体尽可能符合中文阅读的要求。
这个项目的字体排列方案是基于中文阅读体验的考虑，它优先选择在中文环境中广泛使用和受欢迎的字体，并根据字体支持的字形、符号以及跨平台支持来确定字体的优先级顺序。

## 功能
提供多种字体排列方案，以适应不同类型的中文字符（简体或繁体）。
支持中英文混排，有效避免中文标点符号受英文字体影响。

## 如何使用

1. 使用 npm 或 pnpm 安装 unocss 和 unocss-preset-chinese：

```bash
npm install unocss unocss-preset-chinese --save-dev
```

2. 在您的 UnoCss 配置文件中引入 unocss-preset-chinese 并将其添加到 presets 部分：

```ts
// unocss.config.js
import presetChinese from "unocss-preset-chinese";
import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetChinese({
      chineseType: "simplified", // 指定文本为简体中文
    }),
    // ...custom presets
  ],
});
```

## 配置选项

您可以使用以下配置选项来自定义字体排列方案：

- **extendTheme** (boolean, 默认值: true): 是否扩展主题对象。

- **themeKey** (string, 默认值: "fontFamily"): 主题对象的键。

- **fonts** (Record<string, string | string[]>): 扩展字体，您可以指定不同的字体和字体权重。

- **chineseType** (ChineseType, 默认值: "simplified"): 中文的类型，可选值为 "simplified"（简体）或 "traditional"（繁体）。

- **fallbackFont** (string[] | null): 用于中文字符的备选字体。

- **declareEnglishFont** (string[]): 声明英文文本的字体。

### 示例

以下是一个示例配置，演示如何使用这些选项来自定义字体排列方案：

```typescript
import presetChinese from "unocss-preset-chinese";
import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetChinese({
      extendTheme: false, // 不扩展主题对象
      themeKey: "customFontFamily", // 使用自定义的主题键
      chineseType: "traditional", // 指定文本为繁体中文
    }),
    // ...custom presets
  ],
});
```

## License

[MIT](./LICENSE) License &copy; 2022-PRESENT [Kirk Lin](https://github.com/kirklin)
