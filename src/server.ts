import express  from "express";
import { router } from "./Routes/userRoutes"
import { routerproducts } from "./Routes/productsRoutes";
import  { cartrouter } from "./Routes/cartRoutes";
import { orderRoutes } from "./Routes/orderRoutes";

import cors from 'cors'
const app=express()
app.use(express.json()) 
app.use(cors())

// import cors from 'cors';
// const app=express()
// app.use(express.json())
// app.use(cors())




app.use('/users',router)
app.use('/products',routerproducts)
app.use('/cart',cartrouter)
app.use('/orders',orderRoutes)

app.listen(5000,()=>{
    console.log('server running')
})