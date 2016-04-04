import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classnames from 'classnames';

import FontIcon from '../FontIcons';
import Ink from '../Inks';
import Tooltip from '..//Tooltips';

/**
 * An icon button is just a simple wrapper of a `FontIcon\` inside of a button.
 * It includes an ink effect on touch/click and includes a tooltip if a label is
 * given.
 *
 * > Depends on Ink, FontIcon, and Tooltip
 */
export default class IconButton extends Component {
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
    tooltip: PropTypes.string,

    /**
     * An optional className to apply to the tooltip container (which wraps
     * around the entire `IconButton`).
     */
    tooltipClassName: PropTypes.string,

    /**
     * The position for the tooltip.
     */
    tooltipPosition: PropTypes.string,

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
      tooltipClassName,
      tooltipPosition,
      disabled,
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
      displayedChildren = <FontIcon iconClassName={iconClassName}>{children}</FontIcon>;
    }

    const wrappedButton = (
      <Ink disabled={disabled}>
        {React.createElement(href ? 'a' : 'button', btnProps, displayedChildren)}
      </Ink>
    );

    if(tooltip) {
      return (
        <Tooltip text={tooltip} position={tooltipPosition} className={tooltipClassName} selector={btnProps.className}>
          {wrappedButton}
        </Tooltip>
      );
    } else {
      return wrappedButton;
    }
  }
}
