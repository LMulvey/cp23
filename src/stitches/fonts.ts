const defaultFallbacks = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Helvetica',
  'Arial',
  'sans-serif',
  'Segoe UI Symbol',
  'Apple Color Emoji',
  'Segoe UI Emoji',
];

type BuildFontStackFunction = (
  fontsArray: string[],
  options?: { useDefaultFallbacks?: boolean }
) => string;

export const buildFontStack: BuildFontStackFunction = (
  fontsArray,
  options = {}
) => {
  const { useDefaultFallbacks = true } = options;
  const resolvedFontsArray = [
    ...fontsArray,
    ...(useDefaultFallbacks ? defaultFallbacks : []),
  ];
  return resolvedFontsArray
    .map((font) => (font.includes(' ') ? `"${font}"` : font))
    .join(', ');
};

export const fonts = {
  body: buildFontStack(['Inter'], { useDefaultFallbacks: true }),
};
