CREATE OR ALTER PROCEDURE place_order
  @user_id VARCHAR(100),
  @product_id VARCHAR(100),
  @quantity INT,
  @price DECIMAL(10, 2)
AS
BEGIN
  INSERT INTO ORDERS (user_id, product_id, quantity, price)
  VALUES (@user_id, @product_id, @quantity, @price);
END;
