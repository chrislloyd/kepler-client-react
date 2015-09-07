const WebSocket = require('ws');
const Display = require('./Display');

class KeplerClient {

  // overridable ------------------ 

  constructor(host, elementOrDrawFn) {
    this._ws = typeof host === 'string' ? new WebSocket(host) : host;
    this._ws.addEventListener('message', this._handleMessage.bind(this));
    this._actions = [];

    if (typeof elementOrDrawFn === 'function') {
      this._drawFn = elementOrDrawFn;
    } else if (elementOrDrawFn) {
      this._drawFn = (state) => {
        Display.draw(state, elementOrDrawFn);
      }
    } else {
      this._drawFn = () => {};
    }
  }

  doUpdate(state) {
    // Subclasses should override this.
  }

  // commands ---------------------

  move(dir) {
    this._actions.push(['MOVE', dir]);
  }

  // internals --------------------

  _handleMessage(ev) {
    let state = JSON.parse(ev.data);
    this._drawFn(state);
    this.doUpdate(state);
    this.state = state;
    this._actions.map(action => {
      this._ws.send(JSON.stringify(action));
    });
    this._actions = [];
  }

}


// constants --------------------

KeplerClient.prototype.DIRS = ['←', '↓', '↑', '→'];
KeplerClient.prototype.UP = '↑';
KeplerClient.prototype.DOWN = '↓';
KeplerClient.prototype.LEFT = '←';
KeplerClient.prototype.RIGHT = '→';


// exports ----------------------


KeplerClient.MapView = Display.MapView;
KeplerClient.HUD = Display.HUD;

module.exports = KeplerClient;
window.KeplerClient = KeplerClient;
