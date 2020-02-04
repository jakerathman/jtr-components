import React, { useState, useMemo } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const ExpandCollapseWrapper = styled.div`
	${props =>
		props.triggerTransform
			? css`
					transform: scaleY(1);
			  `
			: css`
					transform: scaleY(0);
			  `}
	${props =>
		props.triggerHeight
			? css`
					max-height: fit-content;
			  `
			: css`
					max-height: 0px;
			  `}
	transform-origin: top;
	transition: all 250ms ease-in-out;
	padding-left: 32px;
`;

const ExpandCollapseButton = styled.button`
	margin: 8px;
	background: white;
	border: 3px black solid;
	border-radius: 5px;
	padding: 8px;
	margin-top: 16px;
	margin-bottom: 0px;
	width: fit-content;
`;

/**
 * 
 * Wrap your components in `ExpandCollapse` to quickly provide visibility toggle functionality to your components. 
 */
const ExpandCollapse = ({ children, showContentProp, expandedText, collapsedText }) => {
	const [showContent, setShowContent] = useState(showContentProp);

	const toggleShowContent = toggle => {
		if (toggle) {
			setShowContent(false);
		} else {
			setShowContent(true);
		}
	};

	useMemo(() => {
		setShowContent(showContentProp);
	}, [showContentProp]);

	const handleClick = () => {
		toggleShowContent(showContent);
	};

	return (
		<div>
			<ExpandCollapseButton type='button' onClick={handleClick}>
				{showContent ? expandedText : collapsedText}
			</ExpandCollapseButton>
			<ExpandCollapseWrapper triggerHeight={showContent} triggerTransform={showContent}>
				{children}
			</ExpandCollapseWrapper>
		</div>
	);
};

export default ExpandCollapse;

ExpandCollapse.propTypes = {
	children: PropTypes.element.isRequired,
	showContentProp: PropTypes.bool,
	expandedText: PropTypes.string,
	collapsedText: PropTypes.string
};

ExpandCollapse.defaultProps = {
	children: <div style={{ padding: "16px", margin: "16px", color: "white", background: "red", fontWeight: "600" }}>No child component provided. Please provide a child component.</div>,
	showContentProp: false,
	expandedText: "Less -",
	collapsedText: "More +"
};
