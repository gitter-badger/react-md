import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classnames from 'classnames';

import Button from './Button';

/**
 * A flat button is a button made of ink that displays ink reactions on press but
 * does not lift.
 *
 * > Depends on Ink
 */
export default class FlatButton extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static propTypes = {
    /**
     * The text that is displayed in the button.
     */
    label: PropTypes.string,

    /**
     * An optional className to apply to the button.
     */
    className: PropTypes.string,

    /**
     * Boolean if the children (icon) should be displayed before the text.
     */
    iconBefore: PropTypes.bool,

    /**
     * Any children to display in the button. This _should_ be a `FontIcon` to
     * display in the button.
     */
    children: PropTypes.node,

    /**
     * An optional onClick function.
     */
    onClick: PropTypes.func,

    /**
     * Boolean if the button is disabled.
     */
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    type: 'button',
    iconBefore: true,
  };

  render() {
    const { className, ...props } = this.props;
    return <Button {...props} className={classnames('md-flat-btn', className)} />;
  }
}
