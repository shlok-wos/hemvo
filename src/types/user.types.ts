export type UserLoginType = {
   email: string;
   password: string;
}
export type UserLoginErrorType = {
   email?: string;
   password?: string;
}

export type UseResetPasswordType = {
   email: string;
   newPassword: string;
   confirmPassword?: string;
}
export type UseResetPasswordErrorType = {
   email?: string;
   newPassword?: string;
   confirmPassword?: string;
}

export type UseChangePasswordType = {
   password: string;
   newPassword?: string;
}
export type UseChangePasswordErrorType = {
   password?: string;
   newPassword?: string;
}

export type UseUpdatePasswordType = {
   oldPassword: string;
   newPassword?: string;
}
export type UseUpdatePasswordErrorType = {
   oldPassword?: string;
   newPassword?: string;
}

export type UseVerifyOtpType = {
   email?: string;
   otp?: string;
}

export type UserCreateAccountType = {
   firstName: string;
   lastName: string;
   email: string;
   password: string;
}

export type UserCreateAccountErrorType = {
   firstName?: string;
   lastName?: string;
   email?: string;
   password?: string;
   phoneNumber?: string;
}

export type UpdateUserDetailsType = {
   firstName: string;
   lastName: string;
   email: string;
   phoneCode?:string
   phoneNumber?:string
}

export type UpdateUserDetailsErrorType = {
   firstName?: string;
   lastName?: string;
   email?: string;
   phoneCode?:string
   phoneNumber?:string
}