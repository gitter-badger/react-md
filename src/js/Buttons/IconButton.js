import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classnames from 'classnames';

import FontIcon from '../FontIcons';
import injectInk from '../Inks';
import injectTooltip from '../Tooltips';

/**
 * An icon button is just a simple wrapper of a `FontIcon\` inside of a button.
 * It includes an ink effect on touch/click and includes a tooltip if a label is
 * given.
 *
 * > Depends on Ink, FontIcon, and Tooltip
 */
class IconButton extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static propTypes = {
    /**
     * The className to use for the `FontIcon`.
     */
    iconClassName: PropTypes.string,

    /**
     * The className for the button.
     */
    className: PropTypes.string,

    /**
     * Any children used to render the `FontIcon`.
     */
    children: PropTypes.node,

    /**
     * An optional onClick function.
     */
    onClick: PropTypes.func,

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
    href: PropTypes.string,

    /**
     * The button type.
     */
    type: PropTypes.string,

    /**
     * Boolean if the button is disabled.
     */
    disabled: PropTypes.bool,

    // Injected from injectInk
    ink: PropTypes.node,

    // Inject from injectTooltip
    tooltip: PropTypes.node,

    // Consumed from injectTooltip
    tooltipLabel: PropTypes.string,
    tooltipPosition: PropTypes.string,
    tooltipDelay: PropTypes.number,
  };

  static defaultProps = {
    type: 'button',
    tooltipPosition: 'bottom',
  };

  render() {
    const {
      iconClassName,
      children,
      className,
      href,
      type,
      tooltip,
      disabled,
      ink,
      ...props,
    } = this.props;

    const btnProps = {
      ...props,
      disabled,
      className: classnames('md-btn md-icon-btn', className),
    };

    if(href) {
      btnProps.href = href;
    } else {
      btnProps.type = type;
    }

    let displayedChildren = children;
    if(!(children && children.type && children.type === FontIcon)) {
      displayedChildren = <FontIcon key="icon" iconClassName={iconClassName}>{children}</FontIcon>;
    }

    return React.createElement(href ? 'a' : 'button', btnProps, [ink, displayedChildren, tooltip]);
  }
}

export default injectTooltip(injectInk(IconButton));
