export const LINT_STAGED = {
  '(src)/**/*.{html,ts}': ['eslint --fix'],
  '(src)/**/*.less': ['stylelint --syntax less --fix']
};
