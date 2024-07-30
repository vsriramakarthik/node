const express=require('express');
const mongoose=require('mongoose')
const app=express()
const BrandName=require('./model')

//middleware
app.use(express.json())
//connection to db
mongoose.connect('mongodb+srv://vsrk112005:vsrk2005@cluster0.fimnkc9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(
    ()=>console.log('db connected..')
).catch(err=>console.log(err))


app.post('/addbrands',async(req,res)=>{
    const {brandname}=req.body;
    try{
        const newData = new BrandName({brandname});
        await newData.save()
        return res.json(await BrandName.find())
    }
    catch(err){
        console.log(err.message);
    }
})

//retriving the data
 app.get('/getallbrands',async(req,res)=>{
    try{
        const allData=await BrandName.find()
        return res.json(allData)
    }
    catch(err){
        console.log(err.message)
    }
 })

 app.get('/getallbranches/:id',async(req,res)=>{
    try{
        const Data=await BrandName.findById(req.params.id)
        return res.json(Data);
    }
    catch(err){
        console.log(err.message)
    }
 })

 app.get('/Deletebrand/:id',async(req,res)=>{
    try{
        await BrandName.findByIdAndDelete(req.params)
    }
    catch(err){
        console.log(err.message);
    }
 })
app.listen(9000,()=>console.log("my server is running ..")
)