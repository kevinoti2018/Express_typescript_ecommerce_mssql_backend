import { Router } from "express";
import { addProduct, deleteProduct, getAllProductsController,getSingleProduct, updateProduct } from "../Controllers/Productscontroller";
import { verifyLogin } from "../Middleware/verifyLogin";

 export const routerproducts=Router()

 routerproducts.post('/addproduct',verifyLogin,addProduct)
 routerproducts.get('/getproducts',verifyLogin,getAllProductsController)
 routerproducts.get('/getproduct/:id/',verifyLogin,getSingleProduct)
 routerproducts.put('/updateproduct/:id',verifyLogin,updateProduct)
 routerproducts.delete('/deleteproduct/:id/',verifyLogin,deleteProduct)