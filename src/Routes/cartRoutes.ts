import { Router } from "express";
import { addToCart } from "../Controllers/cartcontroller";

export const cartrouter=Router()

cartrouter.post('/add_to_cart/:user_id/:product_id',addToCart)