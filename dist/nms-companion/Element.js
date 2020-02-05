import React from "react";
import PropTypes from "prop-types";
import FlexBox from "../FlexBox";
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
 */

const Element = ({
  name,
  imageUri,
  abbrev,
  group,
  rarity,
  units,
  visible,
  amount,
  showDetails
}) => {
  return visible ? React.createElement(FlexBox, {
    flexDirection: "column",
    style: {
      background: "white",
      border: "2px solid black",
      padding: "8px",
      borderRadius: "3px"
    }
  }, amount ? React.createElement(ElementText, {
    style: {
      fontWeight: "600",
      fontSize: "1em"
    }
  }, amount) : null, React.createElement(ElementText, {
    style: {
      fontWeight: "600"
    }
  }, name), React.createElement(ElementImage, {
    src: imageUri
  }), showDetails ? React.createElement(React.Fragment, null, React.createElement(ElementText, {
    style: {
      fontWeight: "600"
    }
  }, abbrev), React.createElement(ElementText, null, `Group: ${group}`), React.createElement(ElementText, null, `Rarity: ${rarity}`), React.createElement(ElementText, null, `Units: ${units}`)) : null) : null;
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
  showDetails: PropTypes.bool
};