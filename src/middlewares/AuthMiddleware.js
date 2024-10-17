import { DecodeToken } from "../utility/TokenUtility.js";
// token authentication
export default (req,res ,next) =>{
    let token =req.headers['token'];
    let decoded = DecodeToken(token);
    if(decoded==null) {
        return res.status(401).json({msg: "Unauthorized"});
    } 
    else {
    let email = decoded.email;
    let user_id = decoded.user_id;
    req.header.email = email;
    req.header.user_id = user_id;
    next();

    }
}
