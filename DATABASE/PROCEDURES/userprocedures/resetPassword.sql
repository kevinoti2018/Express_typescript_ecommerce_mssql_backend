CREATE OR ALTER PROCEDURE resetPassword
    @email VARCHAR(100),
    @newPassword VARCHAR(100)
AS
BEGIN
    DECLARE @resetSuccess INT = 0;

    BEGIN TRY
        -- Update the password and set the reset status
        UPDATE USERDB 
        SET password = @newPassword, resetSuccess = 1
        WHERE email = @email;

        -- If no rows were affected by the update, the password reset failed
        IF @@ROWCOUNT = 0
            SET @resetSuccess = 0;
        ELSE
            SET @resetSuccess = 1;
    END TRY
    BEGIN CATCH
        SET @resetSuccess = 0;
    END CATCH;

    -- Return the reset status
    SELECT @resetSuccess AS resetStatus;
END