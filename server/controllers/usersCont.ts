 import User from '../models/usersModel'


 export  const addUser= async (req,res)=>{
    try{
       // const {username,password,role}=req.body;
        // if(typeof username==="string" && typeof password==="string" && typeof role==="string"){
     
           
            
        // }else{
        //    throw new Error("username or password or role is missing")
        // }
        let{password,username,email}=req.body;
        
        const newUser=new User({password,username,email});
        const result=await newUser.save();
       console.log(result)
      
       
        
    }catch(error){
        console.error(error.message)
        res.send({error:error.message})
    }

    
}