const express = require('express'); 
const router = express.Router(); 
let user = [
    { username: "Shiv" ,email : "shivrajkumar2006@gmail.com"  , password: "ghost9096"},
    {username: "Shivu", email :"anand1996@gmail.com" , password: "ghost7896"},
]

router.post('/user',(req,res)=>{
    const{username , email , passowrd} = req.body;
    const existing = user.find(user => user.email === email);
    if(!username || !email || password){
        return res.status(400).json({message:'Please Fill all the required fileds'})
    }
    if( passowrd.length()<8){
        return res.status(400).json({message:'The passowrd Has to be atleast 8 characters long'})
    }
    if(passowrd.length()>16){
        return res.status(400).json({message:'Password is too long'})
    }
    if(existing){ 
     return res.status(400).json({message :'This email already exists'})
    }
    user.push({username , email , password});
    return res.status(200).json({message:'User created Successfully'});
})

module.exports= router