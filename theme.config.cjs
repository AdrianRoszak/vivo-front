// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig } = require("pollen-css/utils")

const PRECISION = 0
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
})

function calculateTypoScale(
  base = 1,
  ratio = 1.3,
  lineHeight = 1.33,
  unit = "rem",
  stepsUp = 11,
  stepsDown = 4,
) {
  const baseLine = (lineHeight * base).toFixed(PRECISION)
  const scaleUp = Array.from({ length: stepsUp }, (_, i) => {
    const fs = ~~(base * Math.pow(ratio, i)).toFixed(PRECISION)
    const lh = (lineHeight * fs).toFixed(PRECISION)
    const tslh =
      lh % baseLine === 0
        ? lh
        : Math.ceil(~~(lh / baseLine) * baseLine).toFixed(PRECISION)
    return {
      fs: `${fs}${unit}`,
      lh: `${tslh}${unit}`,
    }
  })
  const scaleDown = Array.from({ length: stepsDown }, (_, i) => {
    const fs = (base / Math.pow(ratio, i)).toFixed(PRECISION)
    const lh = (lineHeight * ~~fs).toFixed(PRECISION)
    const tslh =
      lh % baseLine === 0
        ? lh
        : Math.ceil(~~(lh / baseLine) * baseLine).toFixed(PRECISION)
    return {
      fs: `${fs}${unit}`,
      lh: `${tslh}${unit}`,
    }
  })
  return {
    up: scaleUp,
    base: {
      fs: `${base}${unit}`,
      lh: `${baseLine}${unit}`,
    },
    down: scaleDown,
  }
}

const ts = {
  sm: calculateTypoScale(14, RATIO.minorThird, 1.3, "px"),
  md: calculateTypoScale(16, RATIO.majorThird, 1.4, "px"),
  lg: calculateTypoScale(18, RATIO.perfectFourth, 1.4, "px"),
  xl: calculateTypoScale(20, RATIO.augmentedFourth, 1.4, "px"),
}

module.exports = defineConfig((pollen) => ({
  output: {
    css: "./src/styles/vars.css",
    json: "./src/styles/vars.json",
  },
  modules: {
    baseline: {
      height: ts.sm.base.lh,
    },
    font: {
      ...pollen.font,
      heading: "'Libre Baskerville', sans",
      body: "'Work Sans', sans-serif",
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
      "primary-50": "hsl(143,37.9%,79.8%)",
      "primary-100": "hsl(144,38.3%,73.9%)",
      "primary-300": "hsl(143,37.8%,50.8%)",
      "primary-400": "hsl(143,58.8%,39%)",
      "primary-500": "hsl(143,100%,27.5%)",
      "primary-600": "hsl(143,100%,23.1%)",
      "primary-700": "hsl(143,100%,18.6%)",
      "primary-800": "hsl(143,100%,14.3%)",
      "primary-900": "hsl(143,100%,9.8%)",
      primary: "var(--color-primary-500)",
      "secondary-50": "hsl(75,56.5%,86.5%)",
      "secondary-100": "hsl(75,55.1%,82.5%)",
      "secondary-200": "hsl(74,55%,74.7%)",
      "secondary-300": "hsl(75,56%,67.1%)",
      "secondary-400": "hsl(75,55.8%,59.2%)",
      "secondary-500": "hsl(75,55.6%,51.4%)",
      "secondary-600": "hsl(75,52.7%,43.1%)",
      "secondary-700": "hsl(75,52.8%,34.9%)",
      "secondary-800": "hsl(75,52.9%,26.7%)",
      "secondary-900": "hsl(74,53.2%,18.4%)",
      secondary: "var(--color-secondary-500)",
      "dark-50": "hsl(210,8.3%,81.2%)",
      "dark-100": "hsl(210,8.1%,75.7%)",
      "dark-200": "hsl(210,7.9%,65.1%)",
      "dark-300": "hsl(212,8.2%,54.3%)",
      "dark-400": "hsl(211,10.3%,43.7%)",
      "dark-500": "hsl(212,16.7%,32.9%)",
      "dark-600": "hsl(211,16.3%,27.6%)",
      "dark-700": "hsl(215,16.5%,22.5%)",
      "dark-800": "hsl(212,17.2%,17.1%)",
      "dark-900": "hsl(210,16.7%,11.8%)",
      "light-50": "hsl(0,20%,99%)",
      "light-100": "hsl(0,14.3%,98.6%)",
      "light-200": "hsl(0,20%,98%)",
      "light-300": "hsl(20,23.1%,97.5%)",
      "light-400": "hsl(20,17.6%,96.7%)",
      "light-500": "hsl(15,20%,96.1%)",
      "light-600": "hsl(20,3%,80.6%)",
      "light-700": "hsl(20,1.7%,65.3%)",
      "light-800": "hsl(30,0.8%,49.8%)",
      "light-900": "hsl(30,1.1%,34.5%)",
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
}))
