 import {User} from '../models/usersModel'


 export  const addUser= async (req,res)=>{
    try{
     
        const {password,username,email,typeOfUser,joinedDate,firstName,lastName,description,birthYear,country,phoneNum,language,facebookLink,twitterLink,linkedinLink,youtubeLink,otherLink}=req.body;
  
        const newUser=new User({password,username,email,typeOfUser,joinedDate,firstName,lastName,description,birthYear,country,phoneNum,language,facebookLink,twitterLink,linkedinLink,youtubeLink,otherLink});
        const result=await newUser.save();
       console.log(result)
     
       
        
    }catch(error){
        console.error(error.message)
        res.send({error:error.message})
    }

    
}