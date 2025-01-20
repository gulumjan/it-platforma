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

interface IStatya {
  id: number;
  title: string;
  date: string;
  image: string;
}

interface IStatyaDo {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  for_key_description: string;
  keys_statya: Array<{
    id: number;
    key: string;
  }>;
}

interface IStatyaPosle {
  id: number;
  title: string;
  description: string;
  date: number;
  image: string;
  keys_statya: [
    {
      id: number;
      key: string;
    }
  ];
  description1: string;
  description2: string;
  description3: string;
  keys_statya2: [
    {
      id: number;
      keys: string;
    }
  ];
}
