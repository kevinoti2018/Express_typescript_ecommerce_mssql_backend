CREATE OR ALTER PROCEDURE AddProduct(
  @id VARCHAR(100),
  @category_id VARCHAR(200)
  @name VARCHAR(100),
  @price VARCHAR(100),
  @description VARCHAR(200),
  @images VARCHAR(200)
  )
  AS
  BEGIN
   INSERT INTO PRODUCTS(
    category_id
   id,
   name,
   price,
   description,
   images
   )
   VALUES(@id,@name,@price,@description,@images,category_id)

  END