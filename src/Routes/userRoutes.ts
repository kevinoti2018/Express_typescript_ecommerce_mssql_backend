import { updateProduct } from "../Controllers/Productscontroller";
import { deleteUser, getAllUsersController, getSingleUser, registerusercontroller,loginUser} from "../Controllers/UserController";
import { Router } from "express";

 export const router=Router()

router.post('/adduser',registerusercontroller)
router.post('/loginuser',loginUser)
router.get('/getusers',getAllUsersController)
router.get('/getuser/:id',getSingleUser)
router.delete('/deleteuser/:id',deleteUser)