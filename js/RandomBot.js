const KeplerClient = require('./KeplerClient');

function rand(lim) {
  return Math.floor(Math.random(lim) * lim)
}

function sample(col) {
  return col[rand(col.length)]
}

class RandomBot extends KeplerClient {

  doUpdate(state) {
    let dir = sample(KeplerClient.DIRS);
    this.move(dir);
  }
}

module.exports = RandomBot;