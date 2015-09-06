const React = require('react/addons');

const Entity = React.createClass({
  propTypes: {
    pos: React.PropTypes.object.isRequired,
    opacity: React.PropTypes.number,
  },

  getDefaultProps() {
    return {
      opacity: 1
    };
  },

  render() {
    let {pos, opacity} = this.props;
    return (
      <rect
        x={pos.x}
        y={pos.y}
        fillOpacity={opacity}
        width="1"
        height="1"
      />
    );
  }  
});

module.exports = Entity;