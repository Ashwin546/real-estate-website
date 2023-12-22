const jwt=require('jsonwebtoken');
const generateToken=(id)=>{
   return jwt.sign({id},'random123',{
       expiresIn:"30d"
   });
}
module.exports=generateToken;