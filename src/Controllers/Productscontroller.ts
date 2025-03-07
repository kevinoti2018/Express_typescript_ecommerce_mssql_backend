import {Response,Request, RequestHandler } from "express";
import { sqlConfig } from "../config";
import mssql from 'mssql'
import {v4 as uid} from 'uuid'
import { DatabaseHelper } from "../Helpers";
interface ExtendedRequest extends Request{
    body:{
      categoryId:string,
        id:string,
        name:string,
        description:string,
        price:string,
        images:string
    }
}
interface PRODUCT {
    categoryId:string,
    id:string,
    name :string,
    description:string,
    images:string,
    price:string
}

interface CATEGORIES{
  id:string,
  name:string,
  image:string
}
export const addProduct:RequestHandler = async (req:ExtendedRequest,res:Response)=>{
  try {
    const id = uid();
    const {categoryId,name,description,price,images} = req.body;
     //connect to database
     await DatabaseHelper.exec('AddProduct',{id,categoryId,name,description,price,images})
     
     return res.status(201).json({message:"product added"})
  } catch (error:any) {
    res.status(500).json(error.message)
  }

}

export const getAllProductsController:RequestHandler=async(req,res)=>{
    
    try {
        
      let products:PRODUCT[] = await (await DatabaseHelper.exec('getProducts',{})).recordset
        // const pool =  await mssql.connect(sqlConfig)
        // let products:PRODUCT[] =(await (await pool.request()).execute('getProducts')).recordset
        res.status(200).json(products)
    } catch (error:any) {
         //server side error
         return res.status(500).json(error.message)
    }
}

export const getAllCategoriesController:RequestHandler=async(req,res)=>{
    
    try {
        
      let categories:CATEGORIES[] = await (await DatabaseHelper.exec('getCategories',{})).recordset
        // const pool =  await mssql.connect(sqlConfig)
        // let products:PRODUCT[] =(await (await pool.request()).execute('getProducts')).recordset
        res.status(200).json(categories)
    } catch (error:any) {
         //server side error
         return res.status(500).json(error.message)
    }
}


export const getSingleProduct=async(req:Request<{id:string}>,res:Response)=>{
   try {
       let {id}=req.params
       let product:PRODUCT = await (await DatabaseHelper.exec('getSingleProduct',{id})).recordset[0]
       if(product){
        res.status(200).json(product)
       }else{
        res.status(500).json({message:"product does not exist"})
       }
      


   } catch (error:any) {
    res.status(500).json(error.message)
   }

}

export const deleteProduct=async(req:Request<{id:string}>,res:Response)=>{

    try {
         
        let {id}=req.params
        let prod = await DatabaseHelper.exec('deleteProduct',{id})
      //   let pool=await mssql.connect(sqlConfig)
      //  let prod = await pool.request().input('id',id).execute('deleteProduct')
        if(prod.rowsAffected[0]>0){
          res.status(200).json({message:"product deleted successfully"})
        }
        else{
          res.status(404).json({message:"product does not exist"})
        }

    }
    catch(error:any){
         res.status(500).json(error.message)
    } 
}

export const updateProduct = async (req: Request<{ id: string }>, res: Response) => {
    try {
      const { id } = req.params;
      const { name, description, price, images } = req.body;
      const pool = await mssql.connect(sqlConfig);
      let product =  await DatabaseHelper.exec('updateProduct',{id,name,description,price,images})
      if(product.rowsAffected[0]>0){
        res.status(200).json({ message: "product updated successfully" });
      }
      else{
        res.status(404).json({message:"not found"})
      }
    } catch (error: any) {
      res.status(500).json(error.message);
    }
  };
  

  export const getProductsByCategoryController: RequestHandler = async (req, res) => {
    const categoryId = req.params.categoryId;
  
    try {
      const query = `SELECT * FROM products WHERE category_id = @categoryId`;
      const result = await DatabaseHelper.query(query, { categoryId });
  
      res.status(200).json(result.recordset);
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  };
  

