const React = require('react/addons');

const KeplerHUD = React.createClass({

  propTypes: {
    life: React.PropTypes.number.isRequired
  },

  render() {
    return (
      <div>{this.props.life}</div>
    );
  }  
});

module.exports = KeplerHUD;