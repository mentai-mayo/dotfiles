import tslint from "typescript-eslint";
import globals from "globals";

/** @type { import("eslint").Linter.Config } */
const config = {
  // includes
  files: [ "src/**/*.ts" ],

  // language options
  languageOptions: {
    ecmaVersion: 2023,
    globals: globals.webextensions,
    sourceType: "module",
    parserOptions: {
      tsconfigRootdir: import.meta.dirname,
    }
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
    // "_"から始まるIDENTは基本的に不可
    "no-underscore-dangle": [ "error", {
      // const [ _a, b ] = array のような使い方を許可
      "allowInArrayDestructuring": true,
      // const { _a, b } = object のような使い方を許可
      "allowInObjectDestructuring": true,
      // 関数の引数で使わない引数に"_"から始まる名前を許可
      "allowFunctionParams": true
    } ],
    // 関数呼び出しの時の引数の書き方を制限
    "function-call-argument-newline": [ "error", "consistent" ],
    // var a, b; など1つの変数宣言で複数の変数を宣言することを不可
    "one-var": [ "error", "never" ],
    // 変数名などをキャメルケースに統一するルールを無視
    "camelcase": "off",
    // 三項演算子の使用を許可
    "no-ternary": "off",
    // 空白2文字以外のインデントをエラーに
    "indent": [ "error", 2 ],
    // 関数宣言時の関数名の後に空白を必要としない (ただし async () => {} のみ許可)
    "space-before-function-paren": [ "warn", { "anonymous": "never", "named": "never", "asyncArrow": "always" } ],
    // 1行の文字数が128文字より多いとき警告
    "max-len": [ "warn", {
      // 最大文字数
      "code": 128,
      // 行末のコメントを除く
      "ignoreTrailingComments": true,
      // URLを除く
      "ignoreUrls": true,
      // 文字列テンプレートを除く
      "ignoreTemplateLiterals": true,
      // 正規表現リテラルを除く
      "ignoreRegExpLiterals": true
    } ],
    // 文字リテラルの'および`の使用を禁止する (ただし、文字列リテラルの`は許可)
    "quotes": [ "error", "double", { "avoidEscape": true } ],
    // ブロック内の最初の行を空白行とするルールを無視
    "padded-blocks": "off",
    // "any"を型アノテーションとして明示定期に使用することを禁止する (ただし ...args: any[] など引数リストは可)
    "@typescript-eslint/no-explicit-any": [ "error", { "ignoreRestArgs": true } ],
  }
};

/** @type { import("eslint").Linter.Config[] } */
export default tslint.config(...tslint.configs.strict, config);
