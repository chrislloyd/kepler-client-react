const React = require('react/addons');
const EntitySelf = require('./EntitySelf');

const KeplerMap = React.createClass({

  propTypes: {
    entities: React.PropTypes.array.isRequired,
    pos: React.PropTypes.object.isRequired
  },

  render() {
    return (
      <svg 
        width="100%" 
        height="100%" 
        viewBox="-50 -50 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <EntitySelf pos={this.props.pos} />
      </svg>
    );
  }  
});

module.exports = KeplerMap;