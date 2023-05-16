import { Request, Response } from 'express';
import { sqlConfig } from "../config";
import mssql from 'mssql'

export const addToCart = async (req: Request, res: Response): Promise<void> => {
  try {
    const{product_id}=req.params
    const {quantity, price } = req.body;
    const pool = await mssql.connect(sqlConfig);
    const transaction = new mssql.Transaction(pool);
    await transaction.begin();
    await transaction.request()
    .input('product_id', mssql.VarChar(100), product_id)
    .input('quantity', mssql.Int, quantity)
    .input('price', mssql.Decimal(10, 2), price)
    .execute('add_to_cart');
    await transaction.commit();
    res.status(200).json({ message: 'Item added to cart successfully' });
  } catch (error:any) {
    console.error(error);
    res.status(500).json({message:error.message});
  }
};




