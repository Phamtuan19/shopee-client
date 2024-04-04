import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/global.css';
import App from '@pages';

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.Fragment>
      <App />
   </React.Fragment>,
);
