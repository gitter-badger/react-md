import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classnames from 'classnames';

const CLOCK_PADDING = 4;

export default class ClockTime extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      // default size in scss
      size: 18,
    };
  }

  static propTypes = {
    index: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired,
    radius: PropTypes.number.isRequired,
    minutes: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    const { offsetWidth } = this.refs.time;
    this.setState({ size: offsetWidth / 2 }); // eslint-disable-line react/no-did-mount-set-state
  }

  calcPos = (r, inner, isTop) => {
    const { radius } = this.props;
    const { size } = this.state;

    const outerR = radius - size;
    let innerR = outerR - CLOCK_PADDING;
    if(inner) {
      innerR = outerR - size * 2 - CLOCK_PADDING;
    }

    if(isTop) {
      return outerR - innerR * Math.sin(r);
    } else {
      return outerR + innerR * Math.cos(r);
    }
  };

  render() {
    const { time, active, index } = this.props;

    const r = (Math.PI / 2) - index * (Math.PI / 6);
    const inner = index > 12;
    return (
      <div
        ref="time"
        className={classnames('md-clock-time', { active })}
        style={{
          top: this.calcPos(r, inner, true),
          left: this.calcPos(r, inner, false),
        }}
      >
        <span className="md-clock-time-value">{time}</span>
      </div>
    );
  }
}
