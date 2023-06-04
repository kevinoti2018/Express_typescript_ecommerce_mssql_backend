CREATE PROCEDURE InsertOrder
  @orderId VARCHAR(100),
  @firstName VARCHAR(100),
  @lastName VARCHAR(100),
  @email VARCHAR(100),
  @county VARCHAR(100),
  @city VARCHAR(100),
  @shippingAddress VARCHAR(200)
AS
BEGIN
  INSERT INTO Orders (orderId, firstName, lastName, email, county, city, shippingAddress)
  VALUES (@orderId, @firstName, @lastName, @email, @county, @city, @shippingAddress)
END



