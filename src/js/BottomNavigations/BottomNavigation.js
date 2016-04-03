import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class BottomNavigation extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  static propTypes = {
    className: PropTypes.string,
    scrollFn: PropTypes.func.isRequired,
    children: PropTypes.node,
  };

  static defaultProps = {
    scrollFn: () => (document.body || document.documentElement).scrollTop = 0,
  };

  render() {
    return (
      <div />
    );
  }
}
