CREATE OR ALTER PROCEDURE get_cart_details
  @user_id VARCHAR(100)
AS
BEGIN
  SELECT *
  FROM CART
  WHERE user_id = @user_id
END;
