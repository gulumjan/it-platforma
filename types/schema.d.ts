interface iCourse {
  id: number;
  title: string;
  about_description: string;
}
interface iUserRegister {
  id: number;
  username: string;
  email: string;
  password: string;
  phone_number?: string;
  gender_status?: string;
  birthday?: string;
  country?: string;
  city?: string;
  position?: string;
}

interface iUserLogin {
  email: string;
  password: string;
}
