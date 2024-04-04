import { type InternalAxiosRequestConfig } from 'axios';

const middleware = <T>(requestConfig: InternalAxiosRequestConfig<T>) => {
   const authToken = localStorage.getItem(import.meta.env.VITE_ACCESS_TOKEN_KEY as string);

   if (authToken) {
      requestConfig.headers.Authorization = `Bearer ${authToken}`;
      return requestConfig;
   }

   return requestConfig;
};

export default middleware;
