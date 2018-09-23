import jwt from 'jsonwebtoken'
import config from '../config'
import User from '../models/user'
export default (req,res,next) => {
    const authorizationHeader = req.headers['authorization']
    let token;

    if(authorizationHeader){
        token = authorizationHeader.split(' ')[1]
    }
    
    if(token){
      jwt.verify(token,config.jwtSecret,(err_verify,decoded)=> {
          if(err_verify){
              res.status(401).json({error: 'Failed to authenticate'})
          }else{
             User.findById(decoded.id,(err,docs)=>{
                if(!docs){
                    res.status(404).json({error: 'No such user'})
                }else{
                  req.user = docs
                  next()
                }
             })
          }
      }) 
    }else{
        res.status(403).json({
            error: 'No token privided'
        })
    }
}