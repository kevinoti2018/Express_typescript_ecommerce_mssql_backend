CREATE OR ALTER PROCEDURE add_to_cart
  @product_id VARCHAR(100),
  @quantity INT,
  @price DECIMAL(18, 2)
AS
BEGIN
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


