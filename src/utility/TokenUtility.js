import { JWT_KEY, JWT_EXPIRE_TIME } from "../config/config.js";

import jwt from "jsonwebtoken"
// token encoding
export const EncodeToken = (email, user_id) => {
    const KEY = JWT_KEY;
    const expire = {expiresIn: JWT_EXPIRE_TIME};
    const payload = {email: email, user_id: user_id};
    return jwt.sign(payload, KEY, expire);
}
// token verification
export const DecodeToken = (token) => {
   try {
    const KEY = JWT_KEY;
    return jwt.verify(token, KEY)
    
   }
   catch (error) {
    return null
   }
}