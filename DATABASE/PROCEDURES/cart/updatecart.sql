CREATE OR ALTER PROCEDURE update_cart
  @cart_id VARCHAR(100),
  @quantity INT
AS
BEGIN

 UPDATE CART SET quantity=@quantity
 WHERE cart_id=@cart_id;
END;