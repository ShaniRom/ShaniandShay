 import User from '../models/usersModel'


 export  const addUser= async (req,res)=>{
    try{
     
        const {password,username,email}=req.body;
        
        const newUser=new User({password,username,email});
        const result=await newUser.save();
       console.log(result)
      
       
        
    }catch(error){
        console.error(error.message)
        res.send({error:error.message})
    }

    
}