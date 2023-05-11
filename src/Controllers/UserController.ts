import {Response,Request, RequestHandler } from "express";
import { sqlConfig } from "../config";
import mssql from 'mssql'
import bcrypt from 'bcrypt';
import {v4 as uid} from 'uuid'
import jwt from 'jsonwebtoken'
import { registrationSchema } from "../Helpers/joiauth";
interface ExtendedRequest extends Request{
    body:{
        id:string,
        username:string,
        email:string,
        password:string
    }
}

interface User{
    // id?:string
    name:string
    email:string
    password:string
}

export const registerusercontroller= async(req:ExtendedRequest,res:Response)=>{
    try {

        //creates users id
        let id=uid()

        //gets users data from the body
        const {username,email,password} = req.body

         //validate first
         const {error}= registrationSchema.validate(req.body)
         if(error){
             return res.status(404).json(error.details[0].message)
         }
        //hashes password
        const hashedPassword = await bcrypt.hash(password,10)

        //connect to database
        let pool=await mssql.connect(sqlConfig)
        await pool.request()
        .input('id',mssql.VarChar,id)
        .input('username',mssql.VarChar,username)
        .input('email',mssql.VarChar,email)
        .input('password',mssql.VarChar,hashedPassword)
        .execute('insertUser')
        
        return res.status(201).json({message:"user added"})


    } catch (err:any) {
       return res.status(500).json(err.message)
    }
}


export const getAllUsersController:RequestHandler=async(req,res)=>{
    
    try {
        const pool =  await mssql.connect(sqlConfig)
        let users:User[] =(await (await pool.request()).execute('getusers')).recordset
        res.status(200).json(users)
    } catch (error:any) {
         //server side error
         return res.status(500).json(error.message)
    }
}
export const getSingleUser=async(req:Request<{id:string}>,res:Response)=>{
   try {
       let {id}=req.params
       //connect to database
       let pool=await mssql.connect(sqlConfig)

       let user:User[]=await (await pool.request().input('id',mssql.VarChar,id).execute('getUser')).recordset
       
      res.status(200).json(user)


   } catch (error) {
    
   }

}

export const deleteUser=async(req:Request<{id:string}>,res:Response)=>{

    try {
         
        let {id}=req.params
        let pool=await mssql.connect(sqlConfig)
        let user:User[]=( await (await pool.request()).input('id',id).execute('deleteUser')).recordset
        return res.status(200).json({message:"user deleted successfully"})

    } catch (error:any) {
        res.status(500).json(error.message)
    }

}



export const loginUser = async (req: Request<{ email: string; password: string }>, res: Response) => {
  try {
    const { email, password } = req.body;
    const pool = await mssql.connect(sqlConfig);
    const result = await pool
      .request()
      .input("email", mssql.VarChar(100), email)
      .execute("getUserByEmail");
    const user = result.recordset[0];
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const token = jwt.sign(email,'ttttweywastring' as string)
    return res.json({mesage:"Login Successfull!!",token})
  } catch (error: any) {
    res.status(500).json(error.message);
  }
};

