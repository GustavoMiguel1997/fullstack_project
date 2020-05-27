module.exports = {
  "env": {
      "browser": true,
      "jest": true
  },
  "extends": "plugin:react/recommended",
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 11,
      "sourceType": "module"
  },
  "plugins": [
      "react"
  ],
  "rules": {
  
  }
};
