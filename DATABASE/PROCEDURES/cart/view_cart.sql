CREATE OR ALTER PROCEDURE get_cart_details
  @cart_id VARCHAR(100)
AS
BEGIN
  SELECT *
  FROM CART
  WHERE cart_id = @cart_id
END;
