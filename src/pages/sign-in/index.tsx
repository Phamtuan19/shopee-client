import { useTranslation } from 'react-i18next';

const SignIn = () => {
   const { t } = useTranslation();

   return <div>{t('home')}</div>;
};

export default SignIn;
