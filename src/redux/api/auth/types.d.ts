namespace AUTH {
  type RegisterUserResponse = iUserRegister[];
  type RegisterUserRequest = iUserRegister;
  type LoginUserResponse = {
    message: string;
    tokens: {
      refresh: string;
      access: string;
    };
  };
  type LoginUserRequest = iUserLogin;
  type ForgotPasswordResponse = {
    email: string;
  };
  type ForgotPasswordRequest = {
    email: string;
  };
}
