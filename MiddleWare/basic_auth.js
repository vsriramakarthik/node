const express=require('express')
const app=express()

//middleware

app.use(logger)

app.get('/',(req,res)=>{
    console.log('homepage')
    res.send('Home Page')
})
app.get('/users',auth,(req,res)=>{
    console.log(`User is admin = ${req.admin}`)
    console.log('userpage')
    res.send('user Page')
})

function auth(req,res,next){
    if(req.query.admin==='true'){
       req.admin=true
        next(true)
    }
    else{
    console.log('no auth')
    }
    
}

app.listen(3000)

//log 
//homepage 