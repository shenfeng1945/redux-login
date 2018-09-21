import express from 'express'
import users from './routes/users'
import bodyParser from 'body-parser'
// import morgan from 'morgan'
import cors from 'cors'
import mongoose from 'mongoose';
const app = express();

mongoose.connect('mongodb://shenfeng1945:shenfeng1945@ds211143.mlab.com:11143/reduxlogin',(error)=>{
    if(error){
        console.log(error)
    }else{
        console.log('mongodb has been connected')
    }
})

app.use(bodyParser.json());
app.use(cors())
// app.use(morgan('dev'))



app.use('/api/users',users);
app.get('/',(req,res)=>{
    res.send('hello')
})
app.listen(6060,()=>console.log('localhost:6060'))