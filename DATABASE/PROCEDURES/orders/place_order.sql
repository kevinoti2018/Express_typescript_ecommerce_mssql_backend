CREATE OR ALTER PROCEDURE place_order
  @user_id VARCHAR,
  @product_id VARCHAR,
  @quantity INT,
  @price DECIMAL(10,2)
AS
BEGIN
  INSERT INTO orders (user_id, product_id, quantity, price)
  VALUES (@user_id, @product_id, @quantity, @price)
END