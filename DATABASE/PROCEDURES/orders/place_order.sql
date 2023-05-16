CREATE OR ALTER PROCEDURE place_order
  @product_id VARCHAR,
  @quantity INT,
  @price DECIMAL(10,2)
AS
BEGIN
  INSERT INTO orders ( product_id, quantity, price)
  VALUES ( @product_id, @quantity, @price)
END