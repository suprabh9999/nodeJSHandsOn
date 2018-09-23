const EventEmitter = require('events');
const myEmitter = new EventEmitter();

/*
    newListener (built-in) event will be invoked everytime whenever a custom event or node js 
    built-in event are attached to a listener. 
*/

/* event is the name for which you want to attach a listener and listener is the function which will
    be invoked when that event get emits */
    myEmitter.once('newListener',()=>console.log('newListener has two listeners'));
    myEmitter.on('newListener',(event, listener)=>console.log(event, listener));
    myEmitter.on('newListener',()=>console.log('Third'));

    /* removeListener will we emitted when using once() to attach a listener*/
    myEmitter.on('removeListener',(event, listener)=>console.log(`${event} is removed...`));

/* There is a little difference when using on() and once(), when you want your listener to respond each and 
    everytime your event gets emitted. Then you can use on() but when you want your listener to get invoked
    once irrespective of how many times the event gets emitted, in that case you can use once().
*/

myEmitter.once('customEvent',()=>console.log('Hi!, I am custom event listener...'));
myEmitter.emit('customEvent');
myEmitter.emit('customEvent');
myEmitter.emit('customEvent');

//Run the code in the same directory and analyze the output by hitting the command : node newListener.js
// Don't forget to play around.