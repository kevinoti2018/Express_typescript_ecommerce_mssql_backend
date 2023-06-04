CREATE OR ALTER PROCEDURE incrementProductInCart ( @id VARCHAR(200) )
AS
BEGIN

UPDATE cart SET quantity = quantity + 1
WHERE id=@id AND isDeleted = 0
END