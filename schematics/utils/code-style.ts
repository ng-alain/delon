export const LINT_STAGED = 'lint-staged';

export const LINT_STAGED_CONFIG = {
  '(src)/**/*.{html,ts}': ['eslint --fix'],
  '(src)/**/*.less': ['stylelint --syntax less --fix']
};
