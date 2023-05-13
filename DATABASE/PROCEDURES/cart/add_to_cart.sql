CREATE OR ALTER PROCEDURE add_to_cart
  @user_id VARCHAR,
  @product_id VARCHAR,
  @quantity INT,
  @price DECIMAL(10,2)
AS
BEGIN
  INSERT INTO cart (user_id, product_id, quantity, price)
  VALUES (@user_id, @product_id, @quantity, @price)
ENDuser_id, @product_id, @quantity, @price)
END