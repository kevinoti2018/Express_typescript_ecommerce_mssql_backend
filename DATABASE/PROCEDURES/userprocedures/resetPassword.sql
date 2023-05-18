CREATE OR ALTER PROCEDURE resetingPassword(
@email VARCHAR(100),
@newPassword VARCHAR(100))
AS
DECLARE @resetSuccess INT = 0;
BEGIN
	UPDATE USERDB 
        SET password = @newPassword, resetSuccess = 1
        WHERE email = @email;

END