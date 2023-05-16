import { Router } from "express";
import { addProduct, deleteProduct, getAllProductsController,getSingleProduct, updateProduct } from "../Controllers/Productscontroller";
import { verifyAdmin, verifyLogin } from "../middleware/verifyLogin";

 
 export const routerproducts=Router()


//  routerproducts.post('/addproduct',verifyAdmin,addProduct)
 routerproducts.post('/addproduct',verifyLogin,addProduct)

 routerproducts.get('/getproducts',getAllProductsController)
 routerproducts.get('/getproduct/:id/',verifyAdmin,getSingleProduct)
 routerproducts.put('/updateproduct/:id',verifyAdmin,updateProduct)
 routerproducts.delete('/deleteproduct/:id/',verifyAdmin,deleteProduct)