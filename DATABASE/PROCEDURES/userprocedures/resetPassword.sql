CREATE OR ALTER PROCEDURE resetPassword(
    @email VARCHAR(100), 
    @newPassword VARCHAR(1000)
)
AS
BEGIN
    UPDATE USERDB 
    SET password = @newPassword 
    WHERE email = @email
END