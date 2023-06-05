import { Router } from "express";
import { verifyAdmin } from "../Middleware/verifyLogin";
import { addProduct, deleteProduct, getAllCategoriesController, getAllProductsController, getSingleProduct, updateProduct } from "../Controllers/Productscontroller";

 
 export const routerproducts=Router()

 routerproducts.delete('/deleteproduct/:id/',verifyAdmin,deleteProduct)
 

routerproducts.post('/addproduct',verifyAdmin,addProduct)
//  routerproducts.post('/addproduct',verifyLogin,addProduct)

 routerproducts.get('/getproducts',getAllProductsController)
 routerproducts.get('/getproduct/:id/',getSingleProduct)
 routerproducts.put('/updateproduct/:id',verifyAdmin,updateProduct)
 routerproducts.delete('/deleteproduct/:id/',verifyAdmin,deleteProduct)
