namespace PRODUCT {
  type GetCoursesResponse = iCourse[];
  type GetCoursesRequest = void;
  type GetCourseDetailResponse = iCourseDetail;
  type GetCourseDetailRequest = number;

  type GetStatyasResponse = IStatya[];

  type GetStatyaRequest = void;

  type GetMasterClassResponse = iMasterClass[];
  type GetMasterClassRequest = void;

  type GetMasterClassDetailResponse = iMasterClassById;
  type GetMasterClassDetailRequest = number;

  type GetStatyaDoResponse = IStatyaDo;
  type GetStatyaDoRequest = number;

  type GetStatyaAfterResponse = IStatyaAfter;
  type GetStatyaAfterRequest = number;

  type GetFeedbackResponse = IFeedback[];
  type GetFeedbackRequest = void;
}
