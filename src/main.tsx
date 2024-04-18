/* eslint-disable import/order */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { Provider } from 'react-redux';

import './styles/global.css';
import { BrowserRouter } from 'react-router-dom';

import { store } from './redux';

import { LANGUAGE } from '@constants';
import { resources } from '@language';
import Routers from '~/routes';

void i18next.init({
   resources,
   interpolation: { escapeValue: false },
   lng: LANGUAGE.VI,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.Fragment>
      <Provider store={store}>
         <I18nextProvider i18n={i18next}>
            <BrowserRouter>
               <Routers />
            </BrowserRouter>
         </I18nextProvider>
      </Provider>
   </React.Fragment>,
);
