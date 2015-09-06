const React = require('react');
const KeplerMap = require('./KeplerMap');
const KeplerHUD = require('./KeplerHUD');
const RandomBot = require('./RandomBot');

function drawFn(state) {
  let {me, sensors} = state.toJS();
  let keplerViz = (
    <div>
      <KeplerMap
        pos = {me.pos}
        entities = {sensors}
      />
      <KeplerHUD
        life = {me.life}
      />
    </div>
  );
  React.render(keplerViz, document.getElementById('content'));
}

let bot = new RandomBot('ws://localhost:5000', drawFn);
