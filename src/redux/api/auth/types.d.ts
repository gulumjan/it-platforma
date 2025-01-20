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
  type GetUserResponse = {
    id: number;
    username: string;
    fio: string;
    image: string;
    phone_number: string;
    gender_status: string;
    birthday: string;
    country: string;
    city: string;
    position: string;
  };

  type GetUserRequest = void;
}
