'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _FontIcons = require('../FontIcons');

var _FontIcons2 = _interopRequireDefault(_FontIcons);

var _Inks = require('../Inks');

var _Inks2 = _interopRequireDefault(_Inks);

var _Tooltips = require('../Tooltips');

var _Tooltips2 = _interopRequireDefault(_Tooltips);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * An icon button is just a simple wrapper of a `FontIcon\` inside of a button.
 * It includes an ink effect on touch/click and includes a tooltip if a label is
 * given.
 *
 * > Depends on Ink, FontIcon, and Tooltip
 */

var IconButton = function (_Component) {
  _inherits(IconButton, _Component);

  function IconButton(props) {
    _classCallCheck(this, IconButton);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(IconButton).call(this, props));

    _this.shouldComponentUpdate = _reactAddonsPureRenderMixin2.default.shouldComponentUpdate.bind(_this);
    return _this;
  }

  _createClass(IconButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var iconClassName = _props.iconClassName;
      var children = _props.children;
      var className = _props.className;
      var href = _props.href;
      var type = _props.type;
      var tooltip = _props.tooltip;
      var disabled = _props.disabled;
      var ink = _props.ink;

      var props = _objectWithoutProperties(_props, ['iconClassName', 'children', 'className', 'href', 'type', 'tooltip', 'disabled', 'ink']);

      var btnProps = _extends({}, props, {
        disabled: disabled,
        className: (0, _classnames2.default)('md-btn md-icon-btn', className)
      });

      if (href) {
        btnProps.href = href;
      } else {
        btnProps.type = type;
      }

      var displayedChildren = children;
      if (!(children && children.type && children.type === _FontIcons2.default)) {
        displayedChildren = _react2.default.createElement(
          _FontIcons2.default,
          { key: 'icon', iconClassName: iconClassName },
          children
        );
      }

      return _react2.default.createElement(href ? 'a' : 'button', btnProps, [ink, displayedChildren, tooltip]);
    }
  }]);

  return IconButton;
}(_react.Component);

IconButton.propTypes = {
  /**
   * The className to use for the `FontIcon`.
   */
  iconClassName: _react.PropTypes.string,

  /**
   * The className for the button.
   */
  className: _react.PropTypes.string,

  /**
   * Any children used to render the `FontIcon`.
   */
  children: _react.PropTypes.node,

  /**
   * An optional onClick function.
   */
  onClick: _react.PropTypes.func,

  /**
   * The optional tooltip text to display on hover or touch hold.
   */

  /**
   * An optional className to apply to the tooltip container (which wraps
   * around the entire `IconButton`).
   */

  /**
   * The position for the tooltip.
   */

  /**
   * An optional href to use for the button. It will * be turned into a link
   * component if this property is given.
   */
  href: _react.PropTypes.string,

  /**
   * The button type.
   */
  type: _react.PropTypes.string,

  /**
   * Boolean if the button is disabled.
   */
  disabled: _react.PropTypes.bool,

  // Injected from injectInk
  ink: _react.PropTypes.node,

  // Inject from injectTooltip
  tooltip: _react.PropTypes.node,

  // Consumed from injectTooltip
  tooltipLabel: _react.PropTypes.string,
  tooltipPosition: _react.PropTypes.string,
  tooltipDelay: _react.PropTypes.number
};
IconButton.defaultProps = {
  type: 'button',
  tooltipPosition: 'bottom'
};
exports.default = (0, _Tooltips2.default)((0, _Inks2.default)(IconButton));
module.exports = exports['default'];