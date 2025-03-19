const config = {
    env: {
        browser: true,
        node: true,
      },
      extends: 'airbnb-base',
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 2024,
      },
      rules: {
        'no-underscore-dangle': [1, { allow: ['_id'] }],
        'consistent-return': [0],
      },
}

export default config;