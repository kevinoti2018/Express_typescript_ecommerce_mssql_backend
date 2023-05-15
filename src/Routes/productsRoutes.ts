import { Router } from "express";
import { addProduct, deleteProduct, getAllProductsController,getSingleProduct, updateProduct } from "../Controllers/Productscontroller";
import { verifyLogin } from "../middleware/verifyLogin";

 
 export const routerproducts=Router()

 routerproducts.post('/addproduct',addProduct)
 routerproducts.get('/getproducts',getAllProductsController)
 routerproducts.get('/getproduct/:id/',verifyLogin,getSingleProduct)
 routerproducts.put('/updateproduct/:id',verifyLogin,updateProduct)
 routerproducts.delete('/deleteproduct/:id/',verifyLogin,deleteProduct)