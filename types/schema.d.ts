interface iCourse {
  id: number;
  title: string;
  description: string;
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
interface iCourseDetail {
  id: number;
  title: string;
  description: string;
  count_materials: string;
  description1: string;
  description2: string;
  description3: string;
  price: string;
  dostup_course: string;
  description4: any;
  description5: string;
  image_prepod: string;
  full_name: string;
  position: string;
  who_for_course: Array<{
    id: number;
    name: string;
  }>;
  you_learns: Array<{
    id: number;
    name: string;
  }>;
  modules: Array<{
    id: number;
    module_num: string;
    description: string;
  }>;
  course_pl: Array<{
    id: number;
    number: number;
    title: string;
    description: string;
  }>;

  private_video_course?: {
    module: number;
    name: string;
    video: string;
  }[];
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

interface iMasterClass {
  id: number;
  title: string;
  price: string;
  dostup: string;
}
interface iMasterClassById {
  id: number;
  title: string;
  description: string;
  dostup: string;
  count_lesson: string;
  price: string;
  description_about_master_class: string;
  image_master: string;
  position: string;
  description_process: string;
  materials: Array<{
    name: string;
  }>;
  programma_master_classes: Array<{
    name_master: string;
  }>;
  master_classes: Array<{
    title: string;
    description: string;
  }>;
}

// interface IStatyaDo {
//   id: number;
//   title: string;
//   description: string;
//   date: string;
//   image: string;
//   for_key_description: string;
//   keys_statya: Array<{
//     id: number;
//     key: string;
//   }>;
// }

interface IStatyaDo {
  id: number;
  title: string;
  description: string;
  date: number;
  image: string;
  for_key_description: string;
  keys_statya: [
    {
      id: number;
      key: string;
    }
  ];
  description1: string;
  description2: string;
  description3: string;
  for_key_description2: string;
  keys_statya2: [
    {
      id: number;
      keys: string;
    }
  ];

  // private_video_course?: {
  //   module: number;
  //   name: string;
  //   video: string;
  // }[];
}

interface IFeedback {
  id: number;
  user: {
    fio: string;
    image: string;
  };
  course: number;
  text: string;
  created_date: number;
}

interface IAboutUs {
  title: string;
  description1: string;
  description2: string;
  image1: string;
  image2: string;
  title_serti: string;
  description_serti: string;
  image_serti: string;
}

interface IAboutSchool {
  title1: string;
  description1: string;
  title2: string;
  description2: string;
}

interface iPaymentCourseTariff {
  user: number;
  course?: number;
  tariff?: number;
  fio: string;
  phone: string;
  email: string;
  card_number: number;
  is_active: boolean;
}
interface iPaketTarif {
  id: number;
  term_status: string;
  sum: number;
  tariff_pay: string;
  tariff_info: [
    {
      id: number;
      info: string;
    }
  ];
}

interface IVisaCart {
  user: number;
  bank_cart: string;
  number_cart: string;
  graduation_date: string;
  csv: string;
}

interface IVisaCartGet {
  id: number;
  bank_cart: string;
  number_cart: string;
  graduation_date: string;
}
