import express  from "express";
import { router } from "./Routes/userRoutes";
import { routerproducts } from "./Routes/productsRoutes";
const app=express()
app.use(express.json())



app.use('/users',router)
app.use('/products',routerproducts)

app.listen(5000,()=>{
    console.log('server running')
})