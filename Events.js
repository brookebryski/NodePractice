let events = require('events');

let listenerCallback = (data) => {
    console.log('Event' + ' ' + data);
}

let myEmitter = new events.EventEmitter();

myEmitter.on('start', listenerCallback);

myEmitter.emit('start', 'started');