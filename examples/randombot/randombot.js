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

let el = document.getElementById('content');
new RandomBot('ws://localhost:5000', el);