module.exports = {
  // JS/TS files: run eslint --fix and then prettier
  '**/*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  // Other files: just format with prettier
  '**/*.{json,css,md,yml,yaml}': ['prettier --write'],
};
