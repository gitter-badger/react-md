'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Subheader = function (_Component) {
  _inherits(Subheader, _Component);

  function Subheader(props) {
    _classCallCheck(this, Subheader);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Subheader).call(this, props));

    _this.shouldComponentUpdate = _reactAddonsPureRenderMixin2.default.shouldComponentUpdate.bind(_this);
    return _this;
  }

  _createClass(Subheader, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var menu = _props.menu;
      var menuComponent = _props.menuComponent;
      var inset = _props.inset;
      var primary = _props.primary;
      var primaryText = _props.primaryText;
      var className = _props.className;

      var props = _objectWithoutProperties(_props, ['menu', 'menuComponent', 'inset', 'primary', 'primaryText', 'className']);

      return _react2.default.createElement(menu ? menuComponent : 'li', _extends({}, props, {
        className: (0, _classnames2.default)('md-subheader', className, {
          inset: inset,
          'md-primary': primary
        })
      }), primaryText);
    }
  }]);

  return Subheader;
}(_react.Component);

Subheader.propTypes = {
  className: _react.PropTypes.string,
  primary: _react.PropTypes.bool,
  inset: _react.PropTypes.bool,
  menu: _react.PropTypes.bool,
  menuComponent: _react.PropTypes.string,
  primaryText: _react.PropTypes.string.isRequired
};
Subheader.defaultProps = {
  menuComponent: 'h5'
};
exports.default = Subheader;
module.exports = exports['default'];