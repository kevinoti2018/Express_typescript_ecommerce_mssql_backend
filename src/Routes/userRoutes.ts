import { deleteUser, getAllUsersController, getSingleUser, registerusercontroller,loginUser, resetPassword} from "../Controllers/UserController";
import { Router } from "express";

 export const router=Router()

router.post('/adduser',registerusercontroller)
router.post('/loginuser',loginUser)
router.get('/getusers',getAllUsersController)
router.put('/reset',resetPassword)
router.get('/getuser/:id',getSingleUser)
router.delete('/deleteuser/:id',deleteUser)