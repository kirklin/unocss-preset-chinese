# unocss-preset-chinese

## Introduction
这是一个用于优化中文网站或应用程序字体显示的项目。
这个项目提供了一个默认的字体排序方案，以确保在没有指定字体的情况下，页面中选择的字体尽可能符合中文阅读的要求。
字体排序方案基于中文阅读体验的考虑，优先选择在中文环境中广泛使用和受欢迎的字体，并根据字体支持的字形和符号以及跨平台支持来确定字体的优先级顺序。
该项目旨在提供unocss预设，使开发人员能够更轻松地创建适合中文阅读的界面。

## Install

```bash
npm i -D unocss-preset-chinese
```

```ts
// uno.config.ts
import presetChinese from "unocss-preset-chinese";
import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetChinese(),
    // ...custom presets
  ],
});
```

The following CSS will be generated

```css
.font-chinese {
    font-family: Helvetica Neue, Helvetica, Arial, Microsoft Yahei, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
}

.font-helvetica {
    font-family: -apple-system, Noto Sans, Helvetica Neue, Helvetica, Nimbus Sans L, Arial, Liberation Sans, PingFang SC, Hiragino Sans GB, Noto Sans CJK SC, Source Han Sans SC, Source Han Sans CN, Microsoft YaHei, Wenquanyi Micro Hei, WenQuanYi Zen Hei, ST Heiti, SimHei, WenQuanYi Zen Hei Sharp, sans-serif;
}

.font-imitation-song {
    font-family: Baskerville, Times New Roman, Liberation Serif, STFangsong, FangSong, FangSong_GB2312, CWTEX-F, serif;
}

.font-italics {
    font-family: Baskerville, Georgia, Liberation Serif, Kaiti SC, STKaiti, AR PL UKai CN, AR PL UKai HK, AR PL UKai TW, AR PL UKai TW MBE, AR PL KaitiM GB, KaiTi, KaiTi_GB2312, DFKai-SB, TW-Kai, serif;
}

.font-song {
    font-family: Georgia, Nimbus Roman No9 L, Songti SC, Noto Serif CJK SC, Source Han Serif SC, Source Han Serif CN, STSong, AR PL New Sung, AR PL SungtiL GB, NSimSun, SimSun, TW-Sung, WenQuanYi Bitmap Song, AR PL UMing CN, AR PL UMing HK, AR PL UMing TW, AR PL UMing TW MBE, PMingLiU, MingLiU, serif;
}

.font-new-song {
    font-family: SimSun-ExtB,NSimSun,Microsoft YaHei UI,Microsoft YaHei UI Light,Microsoft YaHei UI Bold,serif;
}

.font-li {
    font-family: LiSu,YouYuan,STXingkai,Xingkai SC,PMingLiU-ExtB,serif;
}
```


## License

[MIT](./LICENSE) License &copy; 2022-PRESENT [Kirk Lin](https://github.com/kirklin)
