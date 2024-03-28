// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig } = require("pollen-css/utils");

const PRECISION = 0;
const RATIO = Object.freeze({
  minorSecond: 1.067,
  majorSecond: 1.125,
  minorThird: 1.2,
  majorThird: 1.25,
  perfectFourth: 1.333,
  augmentedFourth: 1.414,
  perfectFifth: 1.5,
  minorSixth: 1.6,
  goldenSection: 1.618,
});

function calculateTypoScale(
  base = 1,
  ratio = 1.3,
  lineHeight = 1.33,
  unit = "rem",
  stepsUp = 11,
  stepsDown = 4,
) {
  const baseLine = (lineHeight * base).toFixed(PRECISION);
  const scaleUp = Array.from({ length: stepsUp }, (_, i) => {
    const fs = ~~(base * Math.pow(ratio, i)).toFixed(PRECISION);
    const lh = (lineHeight * fs).toFixed(PRECISION);
    const tslh =
      lh % baseLine === 0
        ? lh
        : Math.ceil(~~(lh / baseLine) * baseLine).toFixed(PRECISION);
    return {
      fs: `${fs}${unit}`,
      lh: `${tslh}${unit}`,
    };
  });
  const scaleDown = Array.from({ length: stepsDown }, (_, i) => {
    const fs = (base / Math.pow(ratio, i)).toFixed(PRECISION);
    const lh = (lineHeight * ~~fs).toFixed(PRECISION);
    const tslh =
      lh % baseLine === 0
        ? lh
        : Math.ceil(~~(lh / baseLine) * baseLine).toFixed(PRECISION);
    return {
      fs: `${fs}${unit}`,
      lh: `${tslh}${unit}`,
    };
  });
  return {
    up: scaleUp,
    base: {
      fs: `${base}${unit}`,
      lh: `${baseLine}${unit}`,
    },
    down: scaleDown,
  };
}

const ts = {
  sm: calculateTypoScale(16, RATIO.minorThird, 1.3, "px"),
  md: calculateTypoScale(16, RATIO.majorThird, 1.4, "px"),
  lg: calculateTypoScale(18, RATIO.perfectFourth, 1.4, "px"),
  xl: calculateTypoScale(20, RATIO.augmentedFourth, 1.4, "px"),
};

module.exports = defineConfig((pollen) => ({
  output: {
    css: "./src/theme/vars.css",
    json: "./src/theme/vars.json",
  },
  modules: {
    baseline: {
      height: ts.sm.base.lh,
    },
    font: {
      ...pollen.font,
      heading: "'League Spartan Variable', helvetica, arial, sans-serif",
      body: "'Quicksand Variable', sans-serif",
      serif:
        "'Noto Serif Display Variable', 'Noto Serif Display', 'Noto Serif', georgia, times, serif",
    },
    scale: {
      0: ts.sm.base.fs,
      1: ts.sm.up[1].fs,
      2: ts.sm.up[2].fs,
      3: ts.sm.up[3].fs,
      4: ts.sm.up[4].fs,
      5: ts.sm.up[5].fs,
      6: ts.sm.up[6].fs,
      7: ts.sm.up[7].fs,
      8: ts.sm.up[8].fs,
      9: ts.sm.up[9].fs,
      10: ts.sm.up[10].fs,
      "00": ts.sm.down[1].fs,
      "000": ts.sm.down[2].fs,
      "0000": ts.sm.down[3].fs,
      canon: "var(--scale-5)",
      trafalgar: "var(--scale-4)",
      "double-pica": "var(--scale-3)",
      "great-primer": "var(--scale-2)",
      "body-copy": "var(--scale-0)",
      pica: "var(--scale-00)",
      "long-primer": "var(--scale-000)",
      brevier: "var(--scale-0000)",
      minion: "calc(var(--scale-0000) / 0.8)",
    },
    color: {
      // primary brand colour...
      "primary-50": "hsl(20, 6%, 40%)",
      "primary-100": "hsl(22, 6%, 36%)",
      "primary-200": "hsl(20, 6%, 32%)",
      "primary-300": "hsl(20, 6%, 28%)",
      "primary-400": "hsl(17, 6%, 24%)",
      "primary-500": "hsl(20, 6%, 20%)",
      "primary-600": "hsl(24, 6%, 16%)",
      "primary-700": "hsl(20, 6%, 9%)",
      "primary-800": "hsl(20, 7%, 8%)",
      "primary-900": "hsl(0, 5%, 4%)",
      primary: "var(--color-primary-700)",
      "primary-dark": "var(--color-primary-900)",
      "primary-light": "var(--color-primary-500)",
      // secondary brand colour...
      secondary: "hsl(240, 100%, 99%)",
      "secondary-dark": "hsl(240, 100%, 96%)",
      "secondary-darker": "hsl(240, 100%, 92%)",
      // supplementary brand colour...
      "supplenentary-50": `hsl(46, 37%, 72%)`,
      "supplementary-100": `hsl(46, 37%, 68%)`,
      "supplementary-200": `hsl(46, 37%, 64%)`,
      "supplementary-300": `hsl(46, 37%, 60%)`,
      "supplementary-400": `hsl(46, 37%, 56%)`,
      "supplementary-500": `hsl(46, 37%, 49%)`,
      "supplementary-600": `hsl(46, 37%, 48%)`,
      "supplementary-700": `hsl(46, 37%, 44%)`,
      "supplementary-800": `hsl(46, 37%, 40%)`,
      "supplementary-900": `hsl(46, 37%, 36%)`,
      supplementary: "var(--color-supplementary-500)",
      "supplementary-dark": "var(--color-supplementary-700)",
      "supplementary-light": "var(--color-supplementary-300)",
      white: "hsl(0,0%,100%)",
      black: "hsl(0,0%,0%)",
      grey: "hsl(0,0%,50%)",
      "grey-dark": "hsl(0,0%,25%)",
      "grey-light": "hsl(0,0%,93%)",
      "grey-lighter:": "hsl(0,0%,75%)",
      "ink-light": "hsl(0,0%,40%)",
      ink: "hsl(0,0%,24%)",
      "ink-dark": "hsl(0,0%,16%)",
      success: "hsl(170, 79%, 39%)",
      "success-dark": "hsl(120, 100%, 36%)",
      "success-light": "hsl(170, 79%, 32%)",
      warning: "hsl(13, 94%, 63%)",
      "warning-dark": "hsl(37, 98%, 48%)",
      "warning-light": "hsl(13, 94%, 56%)",
      danger: "hsl(352, 93%, 53%)",
      "danger-dark": "hsl(352, 93%, 48%)",
      "danger-light": "hsl(352, 93%, 64%)",
      info: "hsl(215, 76%, 57%)",
      "info-dark": "hsl(215, 76%, 52%)",
      "info-light": "hsl(215, 76%, 68%)",

      "paper-light": "hsl(33,38%,97%)",
      paper: "hsl(33,38%,94%)",
      "paper-dark": "hsl(33,38%,81%)",

      headings: "var(--color-ink-dark)",
      paragraphs: "var(--color-ink)",
      background: "var(--color-paper)",
    },
    size: {
      ...pollen.size,
      1: "calc(var(--baseline-height) * 0.25)",
      2: "calc(var(--baseline-height) * 0.5)",
      3: "calc(var(--baseline-height) * 0.75)",
      4: "var(--baseline-height)",
      5: "calc(var(--baseline-height) * 1.25)",
      6: "calc(var(--baseline-height) * 1.5)",
      7: "calc(var(--baseline-height) * 1.75)",
      8: "calc(var(--baseline-height) * 2)",
      9: "calc(var(--baseline-height) * 2.25)",
      10: "calc(var(--baseline-height) * 2.5)",
      11: "calc(var(--baseline-height) * 2.75)",
      12: "calc(var(--baseline-height) * 3)",
      14: "calc(var(--baseline-height) * 3.5)",
      16: "calc(var(--baseline-height) * 4)",
      20: "calc(var(--baseline-height) * 5)",
      24: "calc(var(--baseline-height) * 6)",
      28: "calc(var(--baseline-height) * 7)",
      32: "calc(var(--baseline-height) * 8)",
      36: "calc(var(--baseline-height) * 9)",
      40: "calc(var(--baseline-height) * 10)",
      44: "calc(var(--baseline-height) * 11)",
      48: "calc(var(--baseline-height) * 12)",
      52: "calc(var(--baseline-height) * 13)",
      56: "calc(var(--baseline-height) * 14)",
      60: "calc(var(--baseline-height) * 15)",
      64: "calc(var(--baseline-height) * 16)",
      72: "calc(var(--baseline-height) * 18)",
      76: "calc(var(--baseline-height) * 19)",
      80: "calc(var(--baseline-height) * 20)",
      96: "calc(var(--baseline-height) * 24)",
      base: "var(--baseline-height)",
      "base-2": "calc(var(--baseline-height) * 2)",
      "base-3": "calc(var(--baseline-height) * 3)",
      "base-4": "calc(var(--baseline-height) * 4)",
      "base-5": "calc(var(--baseline-height) * 5)",
      "base-6": "calc(var(--baseline-height) * 6)",
      "base-7": "calc(var(--baseline-height) * 7)",
      "base-8": "calc(var(--baseline-height) * 8)",
      "base-9": "calc(var(--baseline-height) * 9)",
      "base-10": "calc(var(--baseline-height) * 10)",
      "base-15": "calc(var(--baseline-height) * 15)",
      "base-20": "calc(var(--baseline-height) * 20)",
      "base-25": "calc(var(--baseline-height) * 25)",
      "base-30": "calc(var(--baseline-height) * 30)",
      "base-40": "calc(var(--baseline-height) * 40)",
      "base-50": "calc(var(--baseline-height) * 50)",
      "base-60": "calc(var(--baseline-height) * 60)",
      "base-70": "calc(var(--baseline-height) * 70)",
      "base-80": "calc(var(--baseline-height) * 80)",
      "base-90": "calc(var(--baseline-height) * 90)",
      "base-100": "calc(var(--baseline-height) * 100)",
      "base-150": "calc(var(--baseline-height) * 150)",
      "base-200": "calc(var(--baseline-height) * 200)",
    },
    width: {
      ...pollen.width,
      xxl: "1620px",
    },
  },
  media: {
    "(min-width: 640px)": {
      baseline: {
        height: ts.md.base.lh,
      },
      scale: {
        0: ts.md.base.fs,
        1: ts.md.up[1].fs,
        2: ts.md.up[2].fs,
        3: ts.md.up[3].fs,
        4: ts.md.up[4].fs,
        5: ts.md.up[5].fs,
        6: ts.md.up[6].fs,
        7: ts.md.up[7].fs,
        8: ts.md.up[8].fs,
        9: ts.md.up[9].fs,
        10: ts.md.up[10].fs,
        "00": ts.md.down[1].fs,
        "000": ts.md.down[2].fs,
        "0000": ts.md.down[3].fs,
      },
    },
    "(min-width: 1280px)": {
      baseline: {
        height: ts.lg.base.lh,
      },
      scale: {
        0: ts.lg.base.fs,
        1: ts.lg.up[1].fs,
        2: ts.lg.up[2].fs,
        3: ts.lg.up[3].fs,
        4: ts.lg.up[4].fs,
        5: ts.lg.up[5].fs,
        6: ts.lg.up[6].fs,
        7: ts.lg.up[7].fs,
        8: ts.lg.up[8].fs,
        9: ts.lg.up[9].fs,
        10: ts.lg.up[10].fs,
        "00": ts.lg.down[1].fs,
        "000": ts.lg.down[2].fs,
        "0000": ts.lg.down[3].fs,
      },
    },
    "(min-width: 1920px)": {
      baseline: {
        height: ts.xl.base.lh,
      },
      scale: {
        0: ts.xl.base.fs,
        1: ts.xl.up[1].fs,
        2: ts.xl.up[2].fs,
        3: ts.xl.up[3].fs,
        4: ts.xl.up[4].fs,
        5: ts.xl.up[5].fs,
        6: ts.xl.up[6].fs,
        7: ts.xl.up[7].fs,
        8: ts.xl.up[8].fs,
        9: ts.xl.up[9].fs,
        10: ts.xl.up[10].fs,
        "00": ts.xl.down[1].fs,
        "000": ts.xl.down[2].fs,
        "0000": ts.xl.down[3].fs,
      },
    },
  },
}));
