import React from "react";
import PropTypes from "prop-types";
import FlexBox from "../common/FlexBox";
import styled from "styled-components";

const ElementText = styled.div`
	font-size: 0.75em;
	text-align: center;
`;
const ElementImage = styled.img`
	width: 2em;
`;

/**
 * No Man's Sky Element. See stories for code examples with property details.
 *
 * See live application here: http://nms-companion-66697.web.app/
 */
const Element = ({ name, imageUri, abbrev, group, rarity, units, visible, amount, showDetails, clickHandler }) => {
	return visible ? (
		<div onClick={clickHandler}>
			<FlexBox
				flexDirection={"column"}
				style={{ background: "white", border: "2px solid black", padding: "8px", borderRadius: "3px" }}
			>
				{amount ? <ElementText style={{ fontWeight: "600", fontSize: "1em" }}>{amount}</ElementText> : null}
				<ElementText style={{ fontWeight: "600" }}>{name}</ElementText>
				<ElementImage src={imageUri}></ElementImage>
				{showDetails ? (
					<>
						<ElementText style={{ fontWeight: "600" }}>{abbrev}</ElementText>
						<ElementText>{`Group: ${group}`}</ElementText>
						<ElementText>{`Rarity: ${rarity}`}</ElementText>
						<ElementText>{`Units: ${units}`}</ElementText>
					</>
				) : null}
			</FlexBox>
		</div>
	) : null;
};

export default Element;

Element.defaultProps = {
	visible: true,
	showDetails: true
};

Element.propTypes = {
	name: PropTypes.string.isRequired,
	imageUri: PropTypes.string.isRequired,
	abbrev: PropTypes.string.isRequired,
	group: PropTypes.string.isRequired,
	rarity: PropTypes.string.isRequired,
	units: PropTypes.string.isRequired,
	visible: PropTypes.bool,
	amount: PropTypes.string,
	showDetails: PropTypes.bool,
	clickHandler: PropTypes.func
};
