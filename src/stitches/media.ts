/* eslint-disable canonical/sort-keys */
export type BreakpointNames = 'bp0' | 'bp1' | 'bp2' | 'bp3' | 'bp4' | 'bp5';

export type Breakpoints = {
  [breakpoint in BreakpointNames]: number;
};

export type MediaQuery = {
  [breakpoint in BreakpointNames]: string;
};

export const createBreakpoints = (
  initial: number,
  sm: number,
  md: number,
  lg: number,
  xl: number,
  xxl: number
): Breakpoints => {
  return Object.assign([], [initial, sm, md, lg, xl, xxl], {
    bp0: initial,
    bp1: sm,
    bp2: md,
    bp3: lg,
    bp4: xl,
    bp5: xxl,
  });
};

const breakpointValues = [0, 576, 768, 992, 1_200, 1_440] as const;

export const breakpoints = createBreakpoints(...breakpointValues);

export const createMediaQueries = (
  initial: string,
  sm: string,
  md: string,
  lg: string,
  xl: string,
  xxl: string
): MediaQuery => {
  return Object.assign([], [initial, sm, md, lg, xl, xxl], {
    bp0: initial,
    bp1: sm,
    bp2: md,
    bp3: lg,
    bp4: xl,
    bp5: xxl,
  });
};

const getMinWidthQuery = (value: number) => {
  return `(min-width: ${value}px)`;
};

const getMinAndMaxWithQuery = (min: number, max?: number) =>
  max
    ? `${getMinWidthQuery(min)} and (max-width: ${max}px)`
    : getMinWidthQuery(min);

export const minWidthMediaQueries = createMediaQueries(
  getMinWidthQuery(breakpoints.bp0),
  getMinWidthQuery(breakpoints.bp1),
  getMinWidthQuery(breakpoints.bp2),
  getMinWidthQuery(breakpoints.bp3),
  getMinWidthQuery(breakpoints.bp4),
  getMinWidthQuery(breakpoints.bp5)
);

export const minAndMaxWidthMediaQueries = createMediaQueries(
  getMinAndMaxWithQuery(breakpoints.bp0, breakpoints.bp1 - 1),
  getMinAndMaxWithQuery(breakpoints.bp1, breakpoints.bp2 - 1),
  getMinAndMaxWithQuery(breakpoints.bp2, breakpoints.bp3 - 1),
  getMinAndMaxWithQuery(breakpoints.bp3, breakpoints.bp4 - 1),
  getMinAndMaxWithQuery(breakpoints.bp4, breakpoints.bp5 - 1),
  getMinAndMaxWithQuery(breakpoints.bp5)
);

export const getMediaQueries = () => {
  const nonBreakpointMediaQueries = {
    dark: '(prefers-color-scheme: dark)',
    reduceMotion: '(prefers-reduced-motion)',
    hover: '(hover: hover)',
  };

  return {
    ...nonBreakpointMediaQueries,
    ...minWidthMediaQueries,
  };
};
