CREATE OR ALTER PROCEDURE updateProduct(
  @id VARCHAR(100),
  @name VARCHAR(100),
  @description VARCHAR(1000),
  @price VARCHAR(100),
  @images VARCHAR(200)
)
AS
BEGIN
  UPDATE PRODUCTS SET name=@name,description=@description, price=@price,images=@images
  WHERE id=@id

END