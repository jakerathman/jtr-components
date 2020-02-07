import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { sunburst as syntaxStyle } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeSnippet = ({
  children,
  language,
  showLineNumbers
}) => {
  return React.createElement(SyntaxHighlighter, {
    language: language,
    showLineNumbers: showLineNumbers,
    style: syntaxStyle,
    customStyle: {
      padding: "16px",
      borderRadius: "16px"
    }
  }, children);
};

export default CodeSnippet;