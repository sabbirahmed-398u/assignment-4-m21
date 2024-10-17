import { StudentsModel } from "../models/studentmodel.js";
import { EncodeToken } from "../utility/TokenUtility.js";


// student registration
export const register= async (req,res)=>{
    try{
    let reqbody=req.body;
    let data = await StudentsModel.create(reqbody);
    return res.json({status: "success", data: data});
    }
    catch(error){
       return res.status(500).json({msg: error.message})
    }
}

// student login process
export const login= async (req,res)=>{
    try{
    let {email,password}=req.body;
    let data = await StudentsModel.find({email: email, password: password});
    let user = await StudentsModel.find({email:email}).select("_id")
   let token = EncodeToken(email, user[0]["_id"].toString());
      let options = {
         maxAge : 30*24*60*60*1000,
         httpOnly : true,
         secure : true,
         sameSite : "none"
      }
    res.cookie("token", token, options)
   return res.json({status: "success", data: {token: token, data: data}})
    
    }
    catch(error){
      return res.status(404).json({msg: "Invalid credentials"})
    }
}

// profile read process

export const readProfile= async (req,res)=>{
    try{
    let user_id = req.header.user_id;
    let data = await StudentsModel.find({"_id": user_id});
    if(!data) return res.status(404).json({msg: "User not found"})
    else{
      return res.json({status: "success", data: data})
       }
    }
    catch(error){
       return res.status(500).json({msg: error.message})
    }
}

// profile update process
export const updateProfile= async (req,res)=>{
   try{
      let user_id =req.headers.user_id;
      let reqbody=req.body;
      let data = await StudentsModel.updateOne({user_id},reqbody);
      if(data==null){
         return res.status(404).json({msg: "User not found"})
      } 
      else {
         return res.json({status:"success", data:data})
      }
   }
   catch(error){
      return res.status(500).json({msg: error.message})
   }
}
////////////

