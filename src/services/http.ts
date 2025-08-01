import { QueryClient } from "@tanstack/vue-query";
import Axios, {
  AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";

type BaseResponseMovies<T> = {
  Search: T[];
  totalResults: string;
  Response: string;
};

const apikey = import.meta.env.VITE_API_KEY;

const fetcher = Axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    apikey,
  },
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const onRequest = (config: InternalAxiosRequestConfig) => config;

const onRequestError = (error: InternalAxiosRequestConfig) =>
  Promise.reject(error);

const onResponse = (res: AxiosResponse) => res.data;

const onResponseError = (error: AxiosError) => {
  // const status = error.response?.status;
  return Promise.reject(error.response?.data);
};

/* interceptor */
fetcher.interceptors.request.use(onRequest, onRequestError);
fetcher.interceptors.response.use(onResponse, onResponseError);

export { type BaseResponseMovies, fetcher, queryClient };
