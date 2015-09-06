const React = require('react/addons');
const Immutable = require('Immutable');

const Entity = require('./Entity');

const MAX_HISTORY = 10;

const EntitySelf = React.createClass({
  propTypes: {
    pos: React.PropTypes.object.isRequired,
  },

  getInitialState() {
    return {
      history: Immutable.List()
    };
  },

  componentWillReceiveProps(newProps) {
    let {history} = this.state;
    history = history.unshift(newProps);
    history = history.slice(0,MAX_HISTORY);
    // console.log(history.map((p, i)=>`${p.pos.x} ${p.pos.y}`).toJS());
    this.setState({history});
  },

  renderHistory(state, age) {
    let opacity = (MAX_HISTORY - age) / (3 * MAX_HISTORY);
    return <Entity pos={state.pos} opacity={opacity} key={age}/>;        
  },

  render() {
    let {pos} = this.props;
    let {history} = this.state;
    return (
      <g>
        {history.map((s, i) => this.renderHistory(s, i))}
        <Entity pos={pos} />
      </g>
    );
  }  
});

module.exports = EntitySelf;