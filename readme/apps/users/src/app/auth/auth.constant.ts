
export enum AuthUserMessage{
    AuthUserExists = 'User with this email exists',
    AuthUserNotFound = 'User not found',
    AuthUserPasswordWrong = 'User password is wrong',
    AuthUserNewPasswordWrong = 'User new password matches old password'
}