const express=require('express')
const app=express()

//middleware

app.use(logger)

app.get('/',(req,res)=>{
    console.log('homepage')
    res.send('Home Page')
})
app.get('/users',(req,res)=>{
    console.log('userpage')
    res.send('user Page')
})

function logger(req,res,next){
    console.log('LOg')
    next()
}

app.listen(3000)

//log 
//homepage 