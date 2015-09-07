# KeplerClient

A base client for Kepler that you can extend to create your own swanky bot.

## usage

To do anything useful, a KeplerClient subclass should override the `doUpdate` method. Within that method, the client can respond to changes in state by executing commands.

    const KeplerClient = require('kepler-client');

    class RandomBot extends KeplerClient {

      doUpdate(state) {
        // Movin' on up
        this.move(this.UP);
      }
    } 

    let el = document.getElementById('content');
    new RandomBot('ws://localhost:5000', el);

Right now there's only one command: `this.move(dir)` where dir is one of ``. 

## examples

Start an HTTP localhost server from the root of the project to browse the examples. For example:

    $ cd kepler-client
    $ webpack-dev-server & open 'http://localhost:8080/webpack-dev-server/examples/randombot'