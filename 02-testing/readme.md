## Jest installieren

```
npm install --save-dev webpack-babel-jest jest-cli
npm install --save-dev babel-jest babel-polyfill
```

```
{
  "devDependencies": {
    "webpack-babel-jest": "*",
    "jest-cli": "*"
  },
  "scripts": {
    "test": "jest"
  },
  "jest": {
    "scriptPreprocessor": "<rootDir>/node_modules/webpack-babel-jest",
    "testFileExtensions": ["es6", "js"],
    "moduleFileExtensions": ["js", "json", "es6"]
  }
}
```