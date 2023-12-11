let events = require('events');

let myCallback = (data) => {
    console.log('Event' + ' ' + data);
}

let myEmitter = new events.EventEmitter();

myEmitter.on('event', myCallback);
myEmitter.emit('event', 'emitted');