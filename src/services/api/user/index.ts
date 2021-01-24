import { axiosInstance } from "services/axios/axios";

export const userBaseUrl = '/user';

export const profileKey = '/profile';
export const profileFetcher = async (key: string, userId: any) => {
  const {data} = await axiosInstance.get(`${userBaseUrl}/${userId}/profile`);
  return data.profile;
};

export const lessonsKey = '/lessons';
export const lessonsFetcher = async (key: string, userId: string) => {
  const {data} = await axiosInstance.get(`${userBaseUrl}/${userId}/lessons`);
  console.log(data)
  return data.lessons;
};


