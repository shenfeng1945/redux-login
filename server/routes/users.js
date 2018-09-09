import express from 'express';
import isEmpty from 'lodash/isEmpty';
import validator from 'validator';

let router = express.Router();

const validtorInput = (data) =>{
   const errors = {}; 
   // 四个为空的判断
   if(validator.isEmpty(data.username)){
       errors.username = 'The field is required';
   }
   if(validator.isEmpty(data.email)){
       errors.email = 'The field is required';
   }
   if(!validator.isEmail(data.email)){
      errors.email = 'Email is invalid';
   }
   if(validator.isEmpty(data.password)){
       errors.password = 'The field is required';
   }
   if(validator.isEmpty(data.conPassword)){
       errors.conPassword = 'The field is required';
   }
   if(!validator.equals(data.password,data.conPassword)){
       errors.conPassword = 'Password must match'
   }
   return {
       errors,
       isValid: isEmpty(errors)
   }
}

router.post('/',(req,res)=>{
   const {errors,isValid} = validtorInput(req.body);
   if(!isValid){
       res.status(400).json(errors)
   }
})

export default router;