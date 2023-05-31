import { Router } from "express";
import { verifyAdmin } from "../Middleware/verifyLogin";
import { deleteProduct } from "../Controllers/Productscontroller";

 
 export const routerproducts=Router()

 routerproducts.delete('/deleteproduct/:id/',verifyAdmin,deleteProduct)
