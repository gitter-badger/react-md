import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classnames from 'classnames';

/**
 * Avatars can be used to symbolize people or objects.
 */
export default class Avatar extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static propTypes = {
    /**
     * The optional className for the avatar.
     */
    className: PropTypes.string,

    /**
     * The optional image source for an avatar (if it is an image). This will automatically
     * set the width and size to the avatar size.
     */
    src: PropTypes.string,

    /**
     * The optional alt attribute when the avatar is an image.
     */
    alt: PropTypes.string,

    /**
     * The optional `FontIcon` to use in the avatar.
     */
    icon: PropTypes.node,

    /**
     * A letter you would like to display in the avatar.
     */
    children: PropTypes.string,

    /**
     * A boolean that enables adding a random material design color to the
     * avatar from one of the `suffixes`.
     */
    random: PropTypes.bool,

    /**
     * An optional suffix to apply to the avatar. This will style the avatar
     * with one of the material design colors. This should most likely be one
     * of the `suffixes`.
     */
    suffix: PropTypes.string,

    /**
     * One of the available suffixes to use for the randomly coloring the avatar.
     */
    suffixes: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    suffixes: ['color-1', 'color-2', 'color-3'],
  };

  getColor = () => {
    const { suffix, suffixes, random } = this.props;
    if(suffix) {
      return `md-avatar-${suffix}`;
    } else if(!!suffixes && !random) {
      return null;
    }

    const i = (Math.floor(Math.random() * (suffixes.length - 1)) + 1);
    return `md-avatar-${suffixes[i]}`;
  };

  render() {
    const { className, src, alt, icon, children, ...props } = this.props;
    return (
      <div className={classnames('md-avatar', className, this.getColor())} {...props}>
        {src && <img src={src} alt={alt} className="md-img-avatar" />}
        {!src &&
          <div className="md-avatar-content">
            {icon || children}
          </div>
        }
      </div>
    );
  }
}
