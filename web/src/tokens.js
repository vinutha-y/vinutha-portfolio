// JS-side mirror of src/styles/tokens.css — for contexts CSS vars can't
// reach directly (R3F material colors, GSAP tween values, JS breakpoint
// checks). Keep in sync with tokens.css by hand; both trace back to the
// same validated Figma Foundations values.

export const colors = {
  vellum: '#EEF0EA',
  vellumLine: '#D6DBD0',
  ink: '#17222E',
  inkSoft: '#59636C',
  blueprint: '#2F5C96',
  redline: '#D6301F',
};

export const space = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 40,
  '2xl': 64,
  '3xl': 96,
};

export const radius = {
  none: 0,
  sm: 2,
};

export const breakpoints = {
  mobile: 390,
  desktop: 1440,
};

// Motion durations/easing for the "assembly and settling" language from the
// approved plan — discrete drafted gestures, not ambient drift.
export const motion = {
  explodeDuration: 0.5,
  explodeEase: 'power3.out',
  staggerStep: 0.09, // 90ms per layer, per the plan's load-sequence spec
  settleDuration: 0.35,
};
