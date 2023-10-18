type StrapiResponse<T> = {
  data: T;
  message: string;
};

export interface Event {
    title: string,
    description: string,
    eventDate: Date,
    signUpOpenDate: Date,
    signUpEndDate: Date,
}
