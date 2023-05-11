import { Router } from "express";
import { addProduct, deleteProduct, getAllProductsController,getSingleProduct, updateProduct } from "../Controllers/Productscontroller";

 export const routerproducts=Router()

 routerproducts.post('/addproduct',addProduct)
 routerproducts.get('/getproducts',getAllProductsController)
 routerproducts.get('/getproduct/:id/',getSingleProduct)
 routerproducts.put('/updateproduct/:id',updateProduct)
 routerproducts.delete('/deleteproduct/:id/',deleteProduct)