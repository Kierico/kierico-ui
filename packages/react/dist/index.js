"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Box: () => Box
});
module.exports = __toCommonJS(src_exports);

// ../tokens/dist/index.mjs
var colors = {
  white: "#FFFFFF",
  black: "#000000",
  gray_100: "#E1E1E6",
  gray_200: "#C4C4CC",
  gray_300: "#8D8D99",
  gray_400: "#7C7C8A",
  gray_500: "#505059",
  gray_600: "#323238",
  gray_700: "#29292E",
  gray_800: "#202024",
  gray_900: "#121214",
  gray_950: "#09090A",
  green_light: "#00B37E",
  green_mid: "#00875F",
  green_dark: "#015F43",
  green_low: "#00291D",
  purple_light: "#996DFF",
  purple_mid: "#8257E5",
  purple_dark: "#633BBC",
  purple_low: "#271A45",
  blue_light: "#6A80FF",
  blue_mid: "#4863F7",
  blue_dark: "#3249CB",
  blue_low: "#182049",
  red_light: "#FC4737",
  red_mid: "#D73628",
  red_dark: "#AD1E12",
  red_low: "#42110D",
  success_light: "#04D361",
  success_base: "#1B873F",
  success_low: "#051B0D",
  danger_light: "#F75A68",
  danger_base: "#CC2937",
  danger_low: "#2D090C",
  warning_light: "#FBA94C",
  warning_base: "#EB8A1D",
  warning_low: "#2E1B06",
  new_light: "#1EF7D0",
  new_base: "#07847E",
  new_low: "#163840"
};
var fontSizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "4xl": "2rem",
  "5xl": "2.25rem",
  "6xl": "3rem",
  "7xl": "4rem",
  "8xl": "4.5rem",
  "9xl": "6rem"
};
var fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700"
};
var fonts = {
  default: "Roboto, sans-serif",
  // heading: '',
  code: "monospace"
};
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  // 1.6
  tall: "180%"
};
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};
var space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  // 16px / 4 = 4 || 4 * 4 = 16
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  40: "10rem",
  64: "16rem",
  80: "20rem"
};

// src/styles/index.ts
var import_react = require("@stitches/react");
var {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = (0, import_react.createStitches)({
  /** Mapear propriedades do CSS para algum tipo de Token */
  themeMap: __spreadProps(__spreadValues({}, import_react.defaultThemeMap), {
    width: "space",
    height: "space"
  }),
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space
  }
});

// src/components/Box.tsx
var Box = styled("div", {
  padding: "$4",
  borderRadius: "$md",
  backgroundColor: "$gray_800",
  border: "1px solid $gray_600"
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Box
});
