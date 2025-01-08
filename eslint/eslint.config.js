// @ts-check

/**
 * @file eslint.config.js
**/

import eslint from "@eslint/js";
import tslint from "typescript-eslint";

const load_tsconfig = {
  languageOptions: {
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    }
  }
};

const ignore_js_files = {
  files: [ "**/*.js" ],
  extends: [ tslint.configs.disableTypeChecked ],
};

/** @type { import("typescript-eslint").InfiniteDepthConfigWithExtends } */
const myconfig = {
  // language options
  languageOptions: {
    ecmaVersion: 2024,
    sourceType: "module",
  },

  // rules
  rules: {
    // namespaceを使うと怒られるのを抑止
    "no-namespace": "off",
    "@typescript-eslint/no-namespace": "off",
    // LFではなくCRLFのとき警告
    "linebreak-style": [ "warn", "windows" ],
    // 文字列テンプレートにて`${}`と式の間に空白がないとき警告
    "template-curly-spacing": [ "warn", "always" ],
    // 複数行にまたがる三項演算子のルールを無視
    "multiline-ternary": "off",
    // '_'から始まる識別子は基本的に不可
    "no-underscore-dangle": [ "error", {
      // const [ _a, b ] = array のような使い方を許可
      "allowInArrayDestructuring": true,
      // const { _a, b } = object のような使い方を許可
      "allowInObjectDestructuring": true,
      // 関数の引数で使わない引数に'_'から始まる識別子を許可
      "allowFunctionParams": true,
    } ],
    // 関数呼び出しの時の引数の書き方を制限
    "function-call-argument-newline": [ "error", "consistent" ],
    // var a, b など1つの変数宣言で複数の変数を宣言することを不許可
    "one-var": [ "error", "never" ],
    // 変数名などをキャメルケースに統一するルールを無視
    "camelcase": "off",
    // 三項演算子の使用を許可
    "no-ternary": "off",
    // 空白2文字以外のインデントをエラーに
    "indent": [ "error", 2 ],
    // 関数宣言時の関数名の後の空白を警告
    "space-before-function-paren": [ "warn", {
      "anonymous": "never",
      "named": "never",
      // ただし async () => {} のときは空白がない場合警告
      "asyncArrow": "always",
    } ],
    // 1行の文字数が128文字より多いとき警告
    "max-len": [ "warn", {
      "code": 128,
      // 行末のコメントを除く
      "ignoreTrailingComments": true,
      // URLを除く
      "ignoreUrls": true,
      // 文字列テンプレートを除く
      "ignoreTemplateLiterals": true,
      // 正規表現リテラルを除く
      "ignoreRegExpLiterals": true,
    } ],
    // 文字列リテラルは"以外を禁止
    "quotes": [ "error", "double", {
      // ただし、文字列内に"がある場合などのエスケープ回避に使うことを許可
      "avoidEscape": true,
    } ],
    // ブロック内の最初の行を空白行とするルールを無視
    "padded-blocks": "off",
    // "any"を型アノテーションとして明示的に使用することを禁止
    "@typescript-eslint/no-explicit-any": [ "error", {
      // ただし ...args: any[] などの引数リストに使用することを許可
      "ignoreRestArgs": true,
    } ],
  },
};

export default tslint.config(
  eslint.configs.all,
  tslint.configs.all,
  load_tsconfig,
  ignore_js_files,
  myconfig,
);
