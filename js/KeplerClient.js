const WebSocket = require('ws');
const Immutable = require('immutable');

class KeplerClient {

  // constants --------------------

  static get DIRS() {
    return ['←', '↓', '↑', '→'];
  }

  // overridable ------------------ 

  constructor(host, drawFn) {
    this._ws = new WebSocket(host);
    this._ws.addEventListener('message', this._handleMessage.bind(this));
    this._actions = [];
    this._drawFn = drawFn || ()=>{};
  }

  doUpdate(state) {
  }

  // commands ---------------------

  move(dir) {
    this._actions.push(['MOVE', dir]);
  }

  // internals --------------------

  _handleMessage(ev) {
    let state = Immutable.fromJS(JSON.parse(ev.data));
    this._drawFn(state);
    this.doUpdate(state);
    this.state = state;
    this._actions.map(action => {
      this._ws.send(JSON.stringify(action));
    });
    this._actions = [];
  }

}

module.exports = KeplerClient;


