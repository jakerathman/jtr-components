import React from "react";
import FlexBox from "../common/FlexBox";
import PropTypes from "prop-types";


/**
 * No Man's Sky Element. See stories for code examples with property details.
 * 
 * See live application here: http://nms-companion-66697.web.app/
 */
const Recipe = ({ inputElements, outputElements }) => {
	return (
		<FlexBox container width={"maximize-content"} style={{ background: "lightgray", padding: "16px" }}>
			<FlexBox container flexDirection='column' width={"75%"} style={{ background: "darkgrey" }}>
				<div style={{ fontWeight: "600" }}>Input</div>
				<FlexBox
					flexWrap={"nowrap"}
					container
					flexDirection='row'
					justifyContent='space-evenly'
					style={{ margin: "8px", width: "calc(100% - 16px)" }}
				>
                    {inputElements.map(element => {
                        return element;
                    })}
				</FlexBox>
			</FlexBox>
			<FlexBox container flexDirection='column' width='25%' style={{ background: "grey" }}>
				<div style={{ fontWeight: "600" }}>Output</div>
				<FlexBox container justifyContent='space-evenly' style={{ margin: "8px", width: "calc(100% - 16px)" }}>
                    {outputElements}
				</FlexBox>
			</FlexBox>
		</FlexBox>
	);
};

export default Recipe;

Recipe.propTypes = { inputElements: PropTypes.arrayOf(PropTypes.elementType).isRequired, outputElements: PropTypes.elementType.isRequired };
