import jwt from 'jsonwebtoken'
import {Request, Response,NextFunction} from 'express'
interface Decoded {
    email:string
}
interface ExtendedRequest extends Request{
    info?:Decoded
}
export const verifyLogin =  async (req:ExtendedRequest, res:Response,next:NextFunction)=>{
    try {
        const token = req.headers['token'] as string
        
        if(!token){
          return res.status(401).json({message:'Unathorized'})
        } 
 
        //token  i need to check two things: is it expired, is it valid token
        const dedodedData = jwt.verify(token, 'ttttweywastring' as string) as Decoded
        req.info=dedodedData
 
     } catch (error:any) {
         return res.status(403).json({message:error.message})
     }
     next()

}