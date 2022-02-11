import axios, { AxiosRequestConfig } from "axios";

const BASE_URL =
  (process.env.REACT_APP_BASE_URL as string) || "http://localhost:4001";

export const http = axios.create({
  baseURL: BASE_URL,
});

export const httpToken = axios.create({
  baseURL: BASE_URL,
});

http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error) => {
    console.log(error);
  }
);

http.interceptors.response.use(
  (response) => {
    const { data } = response;

    if (data.user && data.PRIVATE_TOKEN) {
      const { PRIVATE_TOKEN, user } = data;

      window.localStorage.setItem(
        "data_user_login",
        JSON.stringify({ PRIVATE_TOKEN: PRIVATE_TOKEN, user: user })
      );
    }
    return response;
  },
  (error) => {
    return error.message;
  }
);

httpToken.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const dataUserLogin = window.localStorage.getItem("data_user_login");

    const { PRIVATE_TOKEN } = JSON.parse(dataUserLogin as string) || "";
    if (!PRIVATE_TOKEN) {
    }
    if (config.headers) {
      config.headers.Authorization = `Bearer ${PRIVATE_TOKEN}`;
    }
    return config;
  },
  (error) => {
    if (error && error.status === 401) {
    }
  }
);

httpToken.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error.message;
  }
);
