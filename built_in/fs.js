const fs=require('fs')
//reading a file
fs.readFile("demo.txt",'utf8',(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data)
})

//creating a file

fs.writeFile('example.html',"hi",(err)=>{
    if(err){
        console.log(err)
    }
    console.log("file created")
})

//renamefile example to newfile.txt

fs.rename('example.html',"newfile.txt",(err)=>{
    if(err){
        console.log(err)
    }
    console.log("file name change")
})

//deleing a file by fs.unlink('file',(err)=>)