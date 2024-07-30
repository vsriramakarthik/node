const fs=require('fs');
const rs=fs.createReadStream('demo.txt',{encoding:"utf-8"});
const ws=fs.createWriteStream('new-lorem.txt');
rs.on('data',(dataChunk)=>{
    ws.write(dataChunk);
})