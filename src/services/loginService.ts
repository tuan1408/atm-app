import { AxiosRequestConfig } from "axios";
import { http } from "./httpService";

type TypeLoginRequestBody = {
  email: string;
  password: string;
};

export const loginServices = {
  login: async (data: TypeLoginRequestBody, config?: AxiosRequestConfig) => {
    return http.post("http://localhost:4001/api/v1/auth/login", data, {
      ...config,
    });
  },
  register: async (data: TypeLoginRequestBody, config?: AxiosRequestConfig) => {
    return http.post("http://localhost:4001/api/v1/auth/register", data, {
      ...config,
    });
  },
};
