import { createStitches } from '@stitches/react';
import { pxToRem } from '@/utilities/pxToRem';
import { colors } from './colorPrimitives';
import { fonts } from './fonts';
import { getMediaQueries } from './media';
import { shadows } from './shadows';
import { sizes } from './sizes';
import * as utils from './utils';
import { zIndices } from './zIndices';

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme,
} = createStitches({
  media: getMediaQueries(),
  theme: {
    borderWidths: {
      '0_5': '0.5px',
      1: '1px',
      '1_5': '1.5px',
      2: '2px',
      3: '3px',
      4: '4px',
    },
    colors,
    fonts,
    fontSizes: {
      ...sizes,
    },
    fontWeights: {
      body: 500,
      bold: 700,
      heading: 500,
    },
    height: {
      ...sizes,
    },
    letterSpacings: {
      '0_2': pxToRem(0.2),
      '0_5': pxToRem(0.5),
      '0_15': pxToRem(0.15),
      '0_25': pxToRem(0.25),
      '0_31': pxToRem(0.31),
      '0_42': pxToRem(0.42),
      '0_75': pxToRem(0.75),
      '1_5': pxToRem(1.5),
      2: pxToRem(2),
      '2_4': pxToRem(0.2),
      3: pxToRem(3),
      safe1px: `max(${pxToRem(1)}, 1px)`,
    },
    lineHeights: {
      280: pxToRem(280),
      body: 1.1,
      heading: 1.2,
    },
    radii: {
      3: pxToRem(3),
      4: pxToRem(4),
      8: pxToRem(8),
      10: pxToRem(10),
      16: pxToRem(16),
      20: pxToRem(20),
      25: pxToRem(25),
      30: pxToRem(30),
      32: pxToRem(32),
      40: pxToRem(40),
      50: pxToRem(50),
      60: pxToRem(60),
      68: pxToRem(68),
    },
    shadows,
    sizes: {
      ...sizes,
    },
    space: {
      ...sizes,
      themeButtonHeight: '$56',
      themeButtonPadding: '$16 $24',
    },
    width: {
      ...sizes,
    },
    zIndices,
  },
  utils,
});
