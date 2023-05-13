import { deleteUser, getAllUsersController, getSingleUser, registerusercontroller,loginUser} from "../Controllers/UserController";
import { Router } from "express";

 export const router=Router()
 router.get('/getusers',getAllUsersController)
router.post('/adduser',registerusercontroller)
router.post('/loginuser',loginUser)
router.get('/getuser/:id',getSingleUser)
router.delete('/deleteuser/:id',deleteUser)