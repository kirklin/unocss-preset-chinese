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
<b>English</b> | <a href="README.md">简体中文</a>
</div>

## Introduction
This is a project aimed at optimizing the display of fonts on Chinese websites or applications. By using this project, you can get a default font arrangement scheme to ensure that the selected fonts on your page meet the requirements of Chinese reading when no font is specified. The font arrangement scheme of this project is based on considerations of the Chinese reading experience. It prioritizes the selection of fonts widely used and popular in the Chinese environment and determines the priority order of fonts based on the fonts' supported glyphs, symbols, and cross-platform support.

## Features
- Provides multiple font arrangement schemes to accommodate different types of Chinese characters (simplified or traditional).
- Supports mixed Chinese and English text, effectively avoiding the impact of English fonts on Chinese punctuation marks.

## How to Use

1. Install unocss and unocss-preset-chinese using npm or pnpm:

```bash
npm install unocss unocss-preset-chinese --save-dev
```

2. In your UnoCss configuration file, import unocss-preset-chinese and add it to the presets section:

```ts
// unocss.config.js
import presetChinese from "unocss-preset-chinese";
import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetChinese({
      chineseType: "simplified", // Specify the text as Simplified Chinese
    }),
    // ...custom presets
  ],
});
```

## Configuration Options

You can use the following configuration options to customize the font arrangement scheme:

- **extendTheme** (boolean, default: true): Whether to extend the theme object.

- **themeKey** (string, default: "fontFamily"): The key of the theme object.

- **fonts** (Record<string, string | string[]>): Extend fonts, where you can specify different fonts and font weights.

- **chineseType** (ChineseType, default: "simplified"): Type of Chinese, with options "simplified" or "traditional".

- **fallbackFont** (string[] | null): Alternative fonts for Chinese characters.

- **declareEnglishFont** (string[]): Declare fonts for English text.

### Example

Here's an example configuration demonstrating how to use these options to customize the font arrangement scheme:

```typescript
import presetChinese from "unocss-preset-chinese";
import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetChinese({
      extendTheme: false, // Do not extend the theme object
      themeKey: "customFontFamily", // Use a custom theme key
      chineseType: "traditional", // Specify the text as Traditional Chinese
    }),
    // ...custom presets
  ],
});
```

## License

[MIT](./LICENSE) License &copy; 2022-PRESENT [Kirk Lin](https://github.com/kirklin)
