import { Request, Response } from 'express';
import { sqlConfig } from "../config";
import mssql from 'mssql'


export const placeOrder = async (req: Request, res: Response): Promise<void> => {
    try {
      const { user_id, product_id, quantity, price } = req.body;
      const pool = await mssql.connect(sqlConfig);
      const transaction = new mssql.Transaction(pool);
      await transaction.begin();
      await transaction.request().input('user_id', mssql.VarChar, user_id)
        .input('product_id', mssql.VarChar, product_id)
        .input('quantity', mssql.Int, quantity)
        .input('price', mssql.Decimal(10, 2), price)
        .execute('place_order');
      await transaction.commit();
      res.status(200).json({ message: 'Order placed successfully' });
    } catch (error:any) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };
  