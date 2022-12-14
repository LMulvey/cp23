import { globalCss, keyframes } from '@/stitches';
import { fontFace } from '@/stitches/fontFace';

const spin = keyframes({
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
});

export const globalStyles = globalCss({
  '#__next': { height: '100%' },
  '#nprogress': { pointerEvents: 'none' },
  '#nprogress .bar': {
    background: '$yellow',
    height: '$4',
    left: 0,
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1_031,
  },
  '#nprogress .peg': {
    boxShadow: '$basic20',
    display: 'block',
    height: '100%',
    opacity: 1,
    position: 'absolute',
    right: 0,
    transform: 'rotate(3deg) translate(0px, -4px)',
    width: '$100',
  },
  '#nprogress .spinner': {
    borderRadius: '$8',
    bottom: '$16',
    display: 'block',
    position: 'fixed',
    right: '$16',
    zIndex: 1_031,
  },
  '#nprogress .spinner-icon': {
    animation: `${spin} 800ms linear infinite`,
    border: '4px solid transparent',
    borderLeftColor: '$yellow',
    borderRadius: '$60',
    borderTopColor: '$yellow',
    boxSizing: 'border-box',
    height: '$32',
    width: '$32',
  },
  '*, *::after, *::before': {
    boxSizing: 'border-box',
  },
  '*:focus': {
    outline: 'none',
  },
  '.nprogress-custom-parent': { overflow: 'hidden', position: 'relative' },
  '.nprogress-custom-parent #nprogress .spinner,\n.nprogress-custom-parent #nprogress .bar':
    {
      position: 'absolute',
    },
  '::selection, ::-moz-selection': { background: '$brandYellow' },
  '@font-face': fontFace,
  a: { color: '$pink2 ', cursor: 'pointer', textDecoration: 'underline' },
  body: {
    background: '$pageBackground ',
    color: '$defaultFont',
    fontFamily: '$body',
    height: '100%',
    margin: 0,
    overflowX: 'hidden',
    overflowY: 'auto',
    transform: 'translate3d(0,0,0)',
  },
  'body, html': {
    '-moz-osx-font-smoothing': 'grayscale',
    '-webkit-font-smoothing': 'antialiased',
    fontSize: '14px',
    // eslint-disable-next-line canonical/sort-keys
    '@bp4': {
      fontSize: `clamp(14px, 280px, 0.95vw)`,
    },
  },
  button: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    color: 'initial',
    cursor: 'pointer',
    padding: 0,
  },
  'button, [type="button"], [type="reset"], [type="submit"]': {
    appearance: 'none',
  },
  cite: { fontStyle: 'normal' },
  fieldset: {
    borderWidth: 0,
    margin: 0,
    padding: 0,
  },
  figure: { margin: 0 },
  form: {
    marginBottom: 0,
  },
  'h1,h2,h3,h4,h5,h6': {
    fontSize: 'inherit',
    fontWeight: 'inherit',
    margin: 0,
  },
  html: {
    scrollBehavior: 'smooth',
    // eslint-disable-next-line canonical/sort-keys
    '&.no-scroll': {
      overflow: 'hidden',
    },
  },
  img: {
    maxWidth: '100%',
  },
  'input, input:focus, input::-moz-focus-inner': {
    border: 'none',
    margin: 0,
    padding: 0,
  },
  'p, p': {
    margin: 0,
  },
  'ul,ol,dd': { listStyle: 'none', margin: 0, padding: 0 },
});
