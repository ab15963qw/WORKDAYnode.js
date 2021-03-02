
var events = require('events');
var eventEmitter = new events.EventEmitter();
// Create an event handler as follows
var connectHandler = function connected() {
 console.log('connection successful.');
 eventEmitter.emit('data_received');
}
 // Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
eventEmitter.on('data_received', function(){
 console.log('data received successfully.');
});
// Fire the connection event
 eventEmitter.emit('connection');
console.log("Program Ended.");
