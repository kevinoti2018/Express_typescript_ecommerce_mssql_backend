CREATE OR ALTER PROCEDURE loginUser
(
  @email VARCHAR(100),
  @password VARCHAR(100)
)
AS
BEGIN
  DECLARE @is_valid_login BIT;
  SET @is_valid_login = 0;
  IF EXISTS (SELECT * FROM USERDB WHERE email = @email AND password = @password)
  BEGIN
    SET @is_valid_login = 1;
  END
  SELECT @is_valid_login;
END