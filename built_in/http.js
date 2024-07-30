const http=require('http')
const myserver=http.createServer((req,res)=>{
    res.write("welcome")
    res.end()
   // console.log('running')
})
myserver.listen(8000)