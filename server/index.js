import express from 'express'

const app = express()
app.get('/',(req,res)=>{
    res.send('hello world')
})
app.listen(6060,()=>console.log('localhost:6060'))