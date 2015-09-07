# KeplerClient

A base client for Kepler that you can extend to create your own swanky bot.

## usage

To do anything useful, a KeplerClient subclass should override the `doUpdate` method. Within that method, the client can respond to changes in state by executing commands.

When you create a new KeplerClient you can pass in an HTML element. KeplerClient will then render a view of the game from your bot's perspective. 
Example:

    const KeplerClient = require('kepler-client');

    class UpBot extends KeplerClient {

      doUpdate(state) {
        // Movin' on up
        this.move(this.UP);
      }

    } 

    let el = document.getElementById('content');
    new UpBot('ws://localhost:5000', el);
    

Right now there's only one command: `this.move(dir)` where dir is one of `this.UP`, `this.DOWN`, `this.LEFT`, or `this.RIGHT`. 

## examples

Start an HTTP localhost server from the root of the project to browse the examples. For example:

    $ cd kepler-client
    $ webpack-dev-server & open 'http://localhost:8080/webpack-dev-server/examples/randombot'