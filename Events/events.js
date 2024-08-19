const EventEmitter =require('events');
const emitter = new EventEmitter();

//register a listner
emitter.on('messageLogged',function(){
    console.log('Listener Called');
})

//raise an event
emitter.emit('messageLogged');