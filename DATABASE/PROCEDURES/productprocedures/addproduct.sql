CREATE OR ALTER PROCEDURE AddProduct(
  @id VARCHAR(100),
  @name VARCHAR(100),
  @price VARCHAR(100),
  @description VARCHAR(200),
  @images VARCHAR(200)
  )
  AS
  BEGIN
   INSERT INTO PRODUCTS(
   id,
   name,
   price,
   description,
   images
   )
   VALUES(@id,@name,@price,@description,@images)

  END