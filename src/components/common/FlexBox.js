import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledFlexBox = styled.div`
	display: flex;
	flex-flow: ${props => `${props.flexDirection} ${props.flexWrap}`};
	height: ${props => props.height};
	width: ${props => props.width};
	justify-content: ${props => props.justifyContent};
	align-items: ${props => props.alignItems};
`;

const FlexBox = ({ children, flexDirection, flexWrap, height, width, justifyContent, alignItems, style }) => {
	return (
		<StyledFlexBox
			flexDirection={flexDirection}
			flexWrap={flexWrap}
			height={height}
			width={width}
			justifyContent={justifyContent}
			alignItems={alignItems}
			style={style}
		>
			{children}
		</StyledFlexBox>
	);
};

FlexBox.propTypes = {
	children: PropTypes.element,
	flexDirection: PropTypes.string,
	flexWrap: PropTypes.string,
	height: PropTypes.string,
	width: PropTypes.string,
	justifyContent: PropTypes.string,
	alignItems: PropTypes.string,
	style: PropTypes.object
};

FlexBox.defaultProps = {
	children: <div>No child component provided!</div>,
	flexDirection: "row",
	flexWrap: "wrap",
	height: "fit-content",
	width: "fit-content",
	justifyContent: "space-evenly",
	alignItems: "center"
};

export default FlexBox;
