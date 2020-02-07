import React from "react";
import FlexBox from "../common/FlexBox";
import PropTypes from "prop-types";
/**
 * No Man's Sky Element. See stories for code examples with property details.
 * 
 * See live application here: http://nms-companion-66697.web.app/
 */

const Recipe = ({
  inputElements,
  outputElements
}) => {
  return React.createElement(FlexBox, {
    container: true,
    width: "maximize-content",
    style: {
      background: "lightgray",
      padding: "16px"
    }
  }, React.createElement(FlexBox, {
    container: true,
    flexDirection: "column",
    width: "75%",
    style: {
      background: "darkgrey"
    }
  }, React.createElement("div", {
    style: {
      fontWeight: "600"
    }
  }, "Input"), React.createElement(FlexBox, {
    flexWrap: "nowrap",
    container: true,
    flexDirection: "row",
    justifyContent: "space-evenly",
    style: {
      margin: "8px",
      width: "calc(100% - 16px)"
    }
  }, inputElements.map(element => {
    return element;
  }))), React.createElement(FlexBox, {
    container: true,
    flexDirection: "column",
    width: "25%",
    style: {
      background: "grey"
    }
  }, React.createElement("div", {
    style: {
      fontWeight: "600"
    }
  }, "Output"), React.createElement(FlexBox, {
    container: true,
    justifyContent: "space-evenly",
    style: {
      margin: "8px",
      width: "calc(100% - 16px)"
    }
  }, outputElements)));
};

export default Recipe;
Recipe.propTypes = {
  inputElements: PropTypes.arrayOf(PropTypes.elementType).isRequired,
  outputElements: PropTypes.elementType.isRequired
};