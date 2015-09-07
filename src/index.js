const WebSocket = require('ws');

let Display = null;

class KeplerClient {

  // overridable ------------------ 

  constructor(host, elementOrDrawFn) {
    this._ws = new WebSocket(host);
    this._ws.addEventListener('message', this._handleMessage.bind(this));
    this._actions = [];

    if (typeof elementOrDrawFn === 'function') {
      this._drawFn = drawFn;
    } else if (elementOrDrawFn) {
      this._drawFn = (state) => {
        Display = Display || require('./Display');
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

module.exports = KeplerClient;
window.KeplerClient = KeplerClient;
