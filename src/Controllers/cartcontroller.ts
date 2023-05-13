import { Request, Response } from 'express';
import { sqlConfig } from "../config";
import mssql from 'mssql'


// interface Product {
//   id: string;
//   name: string;
//   description: string;
//   images: string[];
//   price: Price; // Use the Price type alias here
// }

interface ExtendedProduct extends Request{
 body: {id: string;
  name: string;
  description: string;
  quantity:string,
  images: string[];
  price: number}
}
export const addToCart = async (req:ExtendedProduct, res: Response): Promise<void> => {
  try {
    const {  quantity, price } = req.body;
    const {user_id, product_id}= req.params
    const pool = await mssql.connect(sqlConfig);
    const transaction = new mssql.Transaction(pool);
    await transaction.begin();
    await transaction.request().input('user_id', mssql.VarChar, user_id)
      .input('product_id', mssql.VarChar, product_id)
      .input('quantity', mssql.Int, quantity)
      .input('price', mssql.Decimal(18, 2), price)
      .execute('add_to_cart');
    await transaction.commit();
    res.status(200).json({ message: 'Item added to cart successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding item to cart' });
  }
};

  