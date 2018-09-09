import express from 'express'
import users from './routes/users'
import bodyParser from 'body-parser'
const app = express();
app.use(bodyParser.json());
app.use('/api/users',users);
app.get('/',(req,res)=>{
    res.send('hello')
})
app.listen(6060,()=>console.log('localhost:6060'))