import { Router } from "express";

import { placeOrder } from "../Controllers/ordercontroller";

export const orderRoutes=Router()


orderRoutes.post('/placeorder',placeOrder)