/**
 * Using $ REM tokens for box shadow attributes doesn't
 * map correctly with stitches - it attempts to self-map all
 * the variables to the shadows namespace, not the sizes one.
 *
 * So, they output as: '0 0 var(--shadows-64) rgba...' for
 * example.
 */
export const shadows = {
  basic10: '0 0 64px rgba(228, 232, 247, 0.4)',
  basic20: '0 0 24px rgba(228, 232, 247, 0.8)',
  basic24: '0 0 24px rgba(228, 232, 247, 0.8)',
  blue20: '0 -2px 20px rgba(146, 200, 220, 0.32)',
  blue40: '0 -2px 40px rgba(146, 200, 220, 0.32)',
  blue100: '0px 8px 100px rgba(172, 168, 218, 0.5)',
};
