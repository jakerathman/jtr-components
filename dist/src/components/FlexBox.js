"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tflex-flow: ", ";\n\theight: ", ";\n\twidth: ", ";\n\tjustify-content: ", ";\n\talign-items: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledFlexBox = _styledComponents.default.div(_templateObject(), function (props) {
  return "".concat(props.flexDirection, " ").concat(props.flexWrap);
}, function (props) {
  return props.height;
}, function (props) {
  return props.width;
}, function (props) {
  return props.justifyContent;
}, function (props) {
  return props.alignItems;
});

var FlexBox = function FlexBox(_ref) {
  var children = _ref.children,
      flexDirection = _ref.flexDirection,
      flexWrap = _ref.flexWrap,
      height = _ref.height,
      width = _ref.width,
      justifyContent = _ref.justifyContent,
      alignItems = _ref.alignItems,
      style = _ref.style;
  return _react.default.createElement(StyledFlexBox, {
    flexDirection: flexDirection,
    flexWrap: flexWrap,
    height: height,
    width: width,
    justifyContent: justifyContent,
    alignItems: alignItems,
    style: style
  }, children);
};

FlexBox.propTypes = {
  children: _propTypes.default.object,
  flexDirection: _propTypes.default.string,
  flexWrap: _propTypes.default.string,
  height: _propTypes.default.string,
  width: _propTypes.default.string,
  justifyContent: _propTypes.default.string,
  alignItems: _propTypes.default.string,
  style: _propTypes.default.object
};
FlexBox.defaultProps = {
  children: _react.default.createElement("div", null, "No child component provided!"),
  flexDirection: "row",
  flexWrap: "wrap",
  height: "fit-content",
  width: "fit-content",
  justifyContent: "space-evenly",
  alignItems: "center"
};
var _default = FlexBox;
exports.default = _default;

//# sourceMappingURL=FlexBox.js.map