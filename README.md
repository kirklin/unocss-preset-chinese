# unocss-preset-chinese

## Install

```bash
npm i -D unocss-preset-chinese
```

```ts
import presetChinese from "unocss-preset-chinese";
import presetUno from "@unocss/preset-uno";

UnoCSS({
  presets: [
    presetUno(),
    presetChinese({
      fonts: {
        // these will extend the default theme
        // 宋体
        song: [
          "Georgia",
          "Nimbus Roman No9 L",
          "Songti SC",
          "Noto Serif CJK SC",
          "Source Han Serif SC",
          "Source Han Serif CN",
          "STSong",
          "AR PL New Sung",
          "AR PL SungtiL GB",
          "NSimSun",
          "SimSun",
          "TW-Sung",
          "WenQuanYi Bitmap Song",
          "AR PL UMing CN",
          "AR PL UMing HK",
          "AR PL UMing TW",
          "AR PL UMing TW MBE",
          "PMingLiU",
          "MingLiU",
          "serif",
        ],
      },
    }),
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
```


## License

[MIT](./LICENSE) License &copy; 2022-PRESENT [Kirk Lin](https://github.com/kirklin)
