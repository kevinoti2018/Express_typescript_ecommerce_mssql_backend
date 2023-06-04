import { Router } from "express";
import { addProduct, deleteProduct, getAllCategoriesController, getAllProductsController,getProductsByCategoryController,getSingleProduct, updateProduct } from "../Controllers/Productscontroller";
import { verifyAdmin,verifyLogin } from "../middleware/verifyLogin";


 
 export const routerproducts=Router()


 routerproducts.post('/addproduct',verifyLogin,addProduct)
//  routerproducts.post('/addproduct',verifyLogi,addProduct)

 routerproducts.get('/getproducts',getAllProductsController)
 routerproducts.get('/getcategories',getAllCategoriesController)
 routerproducts.get('/getcategory/:categoryId',getProductsByCategoryController)
 routerproducts.get('/getproduct/:id/',verifyAdmin,getSingleProduct)
 routerproducts.patch('/updateproduct/:id',verifyAdmin,updateProduct)
 routerproducts.delete('/deleteproduct/:id/',verifyAdmin,deleteProduct)