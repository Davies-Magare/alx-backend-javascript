module.exports = {
  env: {
    browser: false, // Backend environment, not browser-based
    es6: true, // Enable ES6 features
    jest: true, // Enable Jest globals for testing
  },
  extends: [
    'airbnb-base', // Airbnb style guide for base rules
    'plugin:jest/recommended', // Recommended Jest rules
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018, // Support ES2018 syntax
    sourceType: 'module', // Allow import/export statements
  },
  plugins: ['jest'], // Include Jest plugin
  rules: {
    'max-classes-per-file': 'off', // Allow multiple classes in a single file
    'no-underscore-dangle': 'off', // Permit variables with underscores (e.g., `_id`)
    'no-console': 'off', // Allow `console.log` for debugging
    'no-shadow': 'off', // Disable variable shadowing restriction
    'no-tabs': 'error', // Disallow tab characters for indentation
    'indent': ['error', 2], // Enforce 2-space indentation
    'no-mixed-spaces-and-tabs': 'error', // Disallow mixing spaces and tabs
    'jest/no-disabled-tests': 'warn', // Warn about skipped tests
    'jest/no-focused-tests': 'error', // Prevent committed focused tests
    'jest/no-identical-title': 'error', // Ensure unique test titles
    'jest/prefer-to-have-length': 'warn', // Prefer `.toHaveLength()` in tests
    'jest/valid-expect': 'error', // Ensure valid `expect()` usage
  },
  overrides: [
    {
      files: ['*.js'], // Apply to all `.js` files
      excludedFiles: 'babel.config.js', // Exclude `babel.config.js`
    },
  ],
};

