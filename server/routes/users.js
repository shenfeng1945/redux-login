import express from 'express';
import isEmpty from 'lodash/isEmpty';

let router = express.Router();

const validtorInput = (data) =>{
   const errors = {}; 
   // 四个为空的判断
   if(data.username === ''){
       errors.username = 'The field is required';
   }
   if(data.email === ''){
       errors.email = 'The field is required';
   }
   if(data.password === ''){
       errors.password = 'The field is required';
   }
   if(data.conPassword === ''){
       errors.conPassword = 'The field is required';
   }
   return {
       errors,
       isValid: isEmpty(errors)
   }
}

router.post('/',(req,res)=>{
   const {errors,isValid} = validtorInput(req.body);
   if(!isValid){
       res.status(404).json(errors)
   }
})

export default router;