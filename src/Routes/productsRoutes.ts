import { Router } from "express";

 
 export const routerproducts=Router()

 routerproducts.delete('/deleteproduct/:id/',verifyAdmin,deleteProduct)