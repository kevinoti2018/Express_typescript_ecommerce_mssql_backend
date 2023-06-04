import { Router } from "express";
import { addProduct, deleteProduct, getAllCategoriesController, getAllProductsController,getProductsByCategoryController,getSingleProduct, updateProduct } from "../Controllers/Productscontroller";
import { verifyAdmin,verifyLogin } from "../middleware/verifyLogin";

// import { verifyAdmin } from "../Middleware/verifyLogin";
// import { addProduct, deleteProduct, getAllProductsController, getSingleProduct, updateProduct } from "../Controllers/Productscontroller";

 
 export const routerproducts=Router()

 routerproducts.delete('/deleteproduct/:id/',verifyAdmin,deleteProduct)
 

routerproducts.post('/addproduct',verifyAdmin,addProduct)
//  routerproducts.post('/addproduct',verifyLogin,addProduct)

 routerproducts.get('/getproducts',getAllProductsController)
 routerproducts.get('/getcategories',getAllCategoriesController)
 routerproducts.get('/getcategory/:categoryId',getProductsByCategoryController)
 routerproducts.get('/getproduct/:id/',verifyAdmin,getSingleProduct)
 routerproducts.patch('/updateproduct/:id',verifyAdmin,updateProduct)
 routerproducts.delete('/deleteproduct/:id/',verifyAdmin,deleteProduct)
 routerproducts.get('/getproduct/:id/',getSingleProduct)
 routerproducts.put('/updateproduct/:id',verifyAdmin,updateProduct)
 routerproducts.delete('/deleteproduct/:id/',verifyAdmin,deleteProduct)
