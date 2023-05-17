import { Request, Response } from 'express';
import { sqlConfig } from "../config";
import mssql from 'mssql'
import {v4 as uid} from 'uuid'
import { DatabaseHelper } from '../Helpers';


export const addToCart = async (req: Request, res: Response): Promise<void> => {
  try {
    let cart_id=uid();
    const { product_id } = req.params;
    const { quantity, price } = req.body;
  
    const data = {
      cart_id:cart_id,
      product_id: product_id,
      quantity: quantity,
      price: price
    };

    const result = await DatabaseHelper.exec('add_to_cart', data);
    const response = result.recordset[0].response;

    res.status(200).json({ message: response });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};


export const getCartDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const { cart_id } = req.params;

    const data = {
      cart_id: cart_id
    };

    const result = await DatabaseHelper.exec('get_cart_details', data);
    const cartDetails = result.recordset;

    res.status(200).json({ cartDetails });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};



