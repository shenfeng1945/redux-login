import express from 'express';
import isEmpty from 'lodash/isEmpty';
import validator from 'validator';
import mongoose from 'mongoose';
import User from '../models/user';
import bcrypt from 'bcrypt'; //加密密码
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

router.post('/',(req,res,next)=>{
   const {errors,isValid} = validtorInput(req.body);
   const {username,password,email} = req.body;
   if(isValid){
       const a = new Promise((resolve,reject)=>{
         User.find({username}).exec().then(res=>{
            if(res.length>0){
                reject()
            }else{
                resolve()
            }
         })
       })
       const b = new Promise((resolve,reject)=>{
        User.find({email}).exec().then(res=>{
           if(res.length>0){
               reject()
           }else{
               resolve()
           }
        })
      })
      Promise.all([a,b]).then(res=>{
        bcrypt.hash(password,10,(error,hash)=>{
            if(error){
                return res.status(500).json({
                    error
                })
            }else{
                const user = {
                    username,
                    email,
                    password: hash,
                    created: new Date().toLocaleString()
                }
                User(user).save((err,data)=>{
                    if(err) throw err;
                    res.json({success: true});
                })
            }
        })
      }).catch(err=>{
          console.log('no')
      })
   }else{
       res.status(400).json(errors)
   }
})

export default router;