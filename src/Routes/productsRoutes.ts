import { Router } from "express";
import { addProduct, deleteProduct, getAllProductsController,getSingleProduct, updateProduct } from "../Controllers/Productscontroller";
import { verifyAdmin } from "../Middleware/verifyLogin";


 
 export const routerproducts=Router()


 routerproducts.post('/addproduct',verifyAdmin,addProduct)
//  routerproducts.post('/addproduct',verifyLogin,addProduct)

 routerproducts.get('/getproducts',getAllProductsController)
 routerproducts.get('/getproduct/:id/',getSingleProduct)
 routerproducts.put('/updateproduct/:id',verifyAdmin,updateProduct)
 routerproducts.delete('/deleteproduct/:id/',verifyAdmin,deleteProduct)