import { Request, Response } from 'express';
import {v4 as uid} from 'uuid'
import { DatabaseHelper } from '../Helpers';




export const addToCart = async (req: Request, res: Response): Promise<void> => {
  try {
    let cart_id = uid();
    const { product_id } = req.params;

    const data = {
      id: cart_id,
      product_id: product_id,
      user_id:'bdjeyhd83494'
      // user_id: req.user.id // Assuming you have the user's ID available in the request object
    };

    const result = await DatabaseHelper.exec('insertProductToCart', data);
    const response = result.recordset;

    res.status(200).json({ message: response });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export const getCartDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const user_id = 'bdjeyhd83494';

    const data = {
      user_id: user_id
    };

    const result = await DatabaseHelper.exec('getAllInCart', data);
    const cartDetails = result.recordset;

    res.status(200).json(cartDetails);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};


export const incrementProductInCart = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    await DatabaseHelper.exec('incrementProductInCart', { id });

    res.status(200).json({ message: 'Product quantity incremented successfully' });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export const decrementProductInCart = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    await DatabaseHelper.exec('decrementProductInCart', { id });

    res.status(200).json({ message: 'Product quantity decremented successfully' });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export const deleteFromCart = async (req: Request, res: Response): Promise<void> => {
  try {
    const { product_id, user_id } = req.params;

    await DatabaseHelper.exec('deleteToCart', { product_id, user_id });

    res.status(200).json({ message: 'Product deleted from cart successfully' });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};