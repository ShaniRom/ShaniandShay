 import {User} from '../models/usersModel'


 export  const addUser= async (req,res)=>{
    try{
     
        const {password,username,email,typeOfUser}=req.body;
        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();   
        let created= `${day}-${month}-${year}`;
      
        const newUser=new User({password,username,email,typeOfUser,created});
        const result=await newUser.save();
       console.log(result)
      
       
        
    }catch(error){
        console.error(error.message)
        res.send({error:error.message})
    }

    
}