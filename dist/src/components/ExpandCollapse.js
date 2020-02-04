"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\tmargin: 8px;\n\tbackground: white;\n\tborder: 3px black solid;\n\tborder-radius: 5px;\n\tpadding: 8px;\n\tmargin-top: 16px;\n\tmargin-bottom: 0px;\n\twidth: 50%;\n\tmax-width: 250px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\t\t\t\t\tmax-height: 0px;\n\t\t\t  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\t\t\t\t\tmax-height: fit-content;\n\t\t\t  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\t\t\t\t\ttransform: scaleY(0);\n\t\t\t  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\t\t\t\t\ttransform: scaleY(1);\n\t\t\t  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t", "\n\t", "\n\ttransform-origin: top;\n\ttransition: all 250ms ease-in-out;\n\tpadding-left: 32px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ExpandCollapseWrapper = _styledComponents.default.div(_templateObject(), function (props) {
  return props.triggerTransform ? (0, _styledComponents.css)(_templateObject2()) : (0, _styledComponents.css)(_templateObject3());
}, function (props) {
  return props.triggerHeight ? (0, _styledComponents.css)(_templateObject4()) : (0, _styledComponents.css)(_templateObject5());
});

var ExpandCollapseButton = _styledComponents.default.button(_templateObject6());

var ExpandCollapse = function ExpandCollapse(_ref) {
  var children = _ref.children,
      showContentProp = _ref.showContentProp,
      expandedText = _ref.expandedText,
      collapsedText = _ref.collapsedText;

  var _useState = (0, _react.useState)(showContentProp),
      _useState2 = _slicedToArray(_useState, 2),
      showContent = _useState2[0],
      setShowContent = _useState2[1];

  var toggleShowContent = function toggleShowContent(toggle) {
    if (toggle) {
      setShowContent(false);
    } else {
      setShowContent(true);
    }
  };

  (0, _react.useMemo)(function () {
    setShowContent(showContentProp);
  }, [showContentProp]);

  var handleClick = function handleClick() {
    toggleShowContent(showContent);
  };

  return _react.default.createElement("div", null, _react.default.createElement(ExpandCollapseButton, {
    type: "button",
    onClick: handleClick
  }, showContent ? expandedText : collapsedText), _react.default.createElement(ExpandCollapseWrapper, {
    triggerHeight: showContent,
    triggerTransform: showContent
  }, children));
};

var _default = ExpandCollapse;
exports.default = _default;
ExpandCollapse.propTypes = {
  children: _propTypes.default.element.isRequired,
  showContentProp: _propTypes.default.bool,
  expandedText: _propTypes.default.string,
  collapsedText: _propTypes.default.string
};
ExpandCollapse.defaultProps = {
  children: _react.default.createElement("div", {
    style: {
      padding: "16px",
      margin: "16px",
      color: "white",
      background: "red",
      fontWeight: "600"
    }
  }, "No child component provided. Please provide a child component."),
  showContentProp: false,
  expandedText: "Less -",
  collapsedText: "More +"
};

//# sourceMappingURL=ExpandCollapse.js.map