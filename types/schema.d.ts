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
  into_course: Array<{
    material: string;
  }>;
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
