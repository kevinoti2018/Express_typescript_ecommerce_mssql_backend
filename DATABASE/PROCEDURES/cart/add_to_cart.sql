CREATE OR ALTER PROCEDURE add_to_cart
  @product_id VARCHAR(100),
  @quantity INT,
  @price DECIMAL(18, 2)
AS
BEGIN
<<<<<<< HEAD
  -- Check if the product is already in the cart
  IF EXISTS (
    SELECT 1
    FROM CART
    WHERE product_id = @product_id
  )
  BEGIN
    -- Update the quantity of the existing product in the cart
    UPDATE CART
    SET quantity = quantity + @quantity
    WHERE product_id = @product_id
  END
  ELSE
  BEGIN
    -- Insert a new product into the cart
    INSERT INTO CART (product_id, quantity, price)
    VALUES (@product_id, @quantity, @price)
  END
END;


=======
  INSERT INTO cart (user_id, product_id, quantity, price)
  VALUES (@user_id, @product_id, @quantity, @price)
END
>>>>>>> dd1b5583271db5ff3b4a0dd6191b8cb4cb1259a6
