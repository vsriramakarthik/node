const EventEmitter =require('events');
const emitter = new EventEmitter();

//register a listner
emitter.on('messageLogged',(arg)=>{
    console.log('Listener Called',arg);
})

//raise an event
emitter.emit('messageLogged',{id:1,url:'http://'});