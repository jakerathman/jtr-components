import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { sunburst as syntaxStyle } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeSnippet = ({ children, language, showLineNumbers }) => {
    
	return (
		<SyntaxHighlighter language={language} showLineNumbers={showLineNumbers} style={syntaxStyle} customStyle={{ padding: "16px", borderRadius: "16px" }}>
			{children}
		</SyntaxHighlighter>
	);
};

export default CodeSnippet;
