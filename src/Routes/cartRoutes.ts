import { Router } from "express";
import { addToCart, getCartDetails } from "../Controllers/cartcontroller";

export const cartrouter=Router()

cartrouter.post('/add_to_cart/:product_id',addToCart)
cartrouter.get('/view_cart/:cart_id',getCartDetails)