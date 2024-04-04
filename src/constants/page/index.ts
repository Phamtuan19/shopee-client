import * as yup from 'yup';

export const PAGE = {
   HOME: '/',

   SIGN_IN: '/sign-in',

   ERROR_404: '/error/404',

   ALL: '*',
} as const;

export const pageSchema = yup.string().oneOf(Object.values(PAGE)).required();

export type Page = yup.InferType<typeof pageSchema>;
