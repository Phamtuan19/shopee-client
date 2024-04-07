import { ROUTE_PATH, type Language, LANGUAGE, type RoutePath } from '@constants';

type SettingConfig = {
   FALLBACK_LANGUAGE: Language;
   SIGN_IN_REDIRECT_URL_ADMIN: RoutePath;
   SIGN_IN_REDIRECT_URL_CLIENT: RoutePath;
   SIGN_OUT_REDIRECT_URL: RoutePath;
   UNAUTHORIZED_REDIRECT_URL: RoutePath;
   REDIRECT_URL_KEY: string;
   ACCESS_TOKEN_KEY: string;
   REFRESH_TOKEN_KEY: string;
};

const { VITE_ACCESS_TOKEN_KEY, VITE_REFRESH_TOKEN_KEY } = process.env;

export const SETTINGS_CONFIG: SettingConfig = {
   /**
    * The fallback language to use in case the user's preferred language is not available.
    */
   FALLBACK_LANGUAGE: LANGUAGE.EN,

   /**
    * The URL to redirect to after a successful sign-in.
    */
   SIGN_IN_REDIRECT_URL_CLIENT: ROUTE_PATH.CLIENT_HOME,

   SIGN_IN_REDIRECT_URL_ADMIN: ROUTE_PATH.ADMIN_HOME,

   /**
    * The URL to redirect to after a successful sign-out.
    */
   SIGN_OUT_REDIRECT_URL: ROUTE_PATH.CLIENT_HOME,

   /**
    * The URL to redirect to when a user is not authorized
    */
   UNAUTHORIZED_REDIRECT_URL: ROUTE_PATH.SIGN_IN,

   /**
    * The key used to store the redirect URL in local storage.
    */
   REDIRECT_URL_KEY: 'redirect-url',

   /**
    * The key used to store the access token in local storage.
    */
   ACCESS_TOKEN_KEY: VITE_ACCESS_TOKEN_KEY as string,

   /**
    * The key used to store the refresh token in local storage.
    */
   REFRESH_TOKEN_KEY: VITE_REFRESH_TOKEN_KEY as string,
};
