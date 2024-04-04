import { PAGE, type Language, type Page, LANGUAGE } from '@constants';

type SettingConfig = {
   FALLBACK_LANGUAGE: Language;
   SIGN_IN_REDIRECT_URL: Page;
   SIGN_OUT_REDIRECT_URL: Page;
   UNAUTHORIZED_REDIRECT_URL: Page;
   REDIRECT_URL_KEY: string;
   ACCESS_TOKEN_KEY: string;
   REFRESH_TOKEN_KEY: string;
};

export const SETTINGS_CONFIG: SettingConfig = {
   /**
    * The fallback language to use in case the user's preferred language is not available.
    */
   FALLBACK_LANGUAGE: LANGUAGE.EN,

   /**
    * The URL to redirect to after a successful sign-in.
    */
   SIGN_IN_REDIRECT_URL: PAGE.HOME,

   /**
    * The URL to redirect to after a successful sign-out.
    */
   SIGN_OUT_REDIRECT_URL: PAGE.HOME,

   /**
    * The URL to redirect to when a user is not authorized
    */
   UNAUTHORIZED_REDIRECT_URL: PAGE.SIGN_IN,

   /**
    * The key used to store the redirect URL in local storage.
    */
   REDIRECT_URL_KEY: 'redirect-url',

   /**
    * The key used to store the access token in local storage.
    */
   ACCESS_TOKEN_KEY: import.meta.env.VITE_ACCESS_TOKEN_KEY as string,

   /**
    * The key used to store the refresh token in local storage.
    */
   REFRESH_TOKEN_KEY: import.meta.env.VITE_REFRESH_TOKEN_KEY as string,
};
