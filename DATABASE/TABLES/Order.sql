
-- CREATE TABLE ORDERS (
--     id INT IDENTITY(1, 1) PRIMARY KEY,
--     user_id VARCHAR(100) NOT NULL,
--     product_id VARCHAR(100) NOT NULL,
--     quantity INT NOT NULL,
--     price DECIMAL(10, 2) NOT NULL,
--     total AS (quantity * price) PERSISTED,
--     order_date DATETIME DEFAULT GETDATE(),
--     FOREIGN KEY (user_id) REFERENCES USERDB (id),
--     FOREIGN KEY (product_id) REFERENCES PRODUCTS (id)
-- );



CREATE TABLE ORDERSDB (
    id INT IDENTITY(1, 1) PRIMARY KEY,
    user_id VARCHAR(100) NOT NULL,
    cart_id VARCHAR(100) NOT NULL,
    total DECIMAL(10, 2) NOT NULL, -- Remove quantity and price columns
    order_date DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (user_id) REFERENCES USERDB (id),
    FOREIGN KEY (cart_id) REFERENCES CART (id)
);

/**Procedure***/
CREATE PROCEDURE MakeOrder
    @cart_id VARCHAR(100)
AS
BEGIN
    -- Declare variables to store cart data
    DECLARE @user_id VARCHAR(100), @quantity INT, @price DECIMAL(18, 2)

    -- Retrieve cart data
    SELECT @user_id = user_id, @quantity = quantity, @price = price
    FROM CART
    WHERE id = @cart_id

    -- Insert order into ORDERS table
    INSERT INTO ORDERS (user_id, cart_id, total)
    VALUES (@user_id, @cart_id, @quantity * @price)

    -- Optional: Delete the cart entry after the order is made
    DELETE FROM CART WHERE id = @cart_id
END


/**endpoint**/

export const placeOrder = async (req: Request, res: Response) => {
  const { cart_id } = req.body;

  try {
    /*Execute the PlaceOrder stored procedure*/
    await DatabaseHelper.exec('PlaceOrder', { cart_id });

    return res.status(200).json({ message: 'Order placed successfully' });
  } catch (error) {
    console.error('Error placing order:', error);
    return res.status(500).json({ error: 'Failed to place order' });
  }
};

