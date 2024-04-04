/* eslint-disable @typescript-eslint/no-floating-promises */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import './styles/global.css';
import App from '@pages';
import { LANGUAGE } from '@constants';
import { resources } from '@language';

i18next.init({
   resources,
   interpolation: { escapeValue: false },
   lng: LANGUAGE.VI,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.Fragment>
      <I18nextProvider i18n={i18next}>
         <App />
      </I18nextProvider>
   </React.Fragment>,
);
