import { type InternalAxiosRequestConfig } from 'axios';

const { VITE_ACCESS_TOKEN_KEY } = process.env;

const middleware = <T>(requestConfig: InternalAxiosRequestConfig<T>) => {
   const authToken = localStorage.getItem(VITE_ACCESS_TOKEN_KEY as string);

   if (authToken) {
      requestConfig.headers.Authorization = `Bearer ${authToken}`;
      return requestConfig;
   }

   return requestConfig;
};

export default middleware;
