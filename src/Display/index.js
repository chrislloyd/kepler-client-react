const React = require('react');
const MapView = require('./MapView');
const HUD = require('./HUD');

function draw(state, element) {
  let {me, sensors} = state;
  let view = (
    <div>
      <MapView
        pos = {me.pos}
        entities = {sensors}
      />
      <HUD
        life = {me.life}
      />
    </div>
  );

  React.render(view, element);
}

module.exports = {draw};
