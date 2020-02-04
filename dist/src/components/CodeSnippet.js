"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactSyntaxHighlighter = _interopRequireDefault(require("react-syntax-highlighter"));

var _hljs = require("react-syntax-highlighter/dist/esm/styles/hljs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CodeSnippet = function CodeSnippet(_ref) {
  var children = _ref.children,
      language = _ref.language,
      showLineNumbers = _ref.showLineNumbers;
  return _react.default.createElement(_reactSyntaxHighlighter.default, {
    language: language,
    showLineNumbers: showLineNumbers,
    style: _hljs.sunburst,
    customStyle: {
      padding: "16px",
      borderRadius: "16px"
    }
  }, children);
};

var _default = CodeSnippet;
exports.default = _default;

//# sourceMappingURL=CodeSnippet.js.map