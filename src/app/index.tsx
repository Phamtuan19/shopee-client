import { BrowserRouter } from 'react-router-dom';

import Routers from '~/app/routes';

const App = () => {
   return (
      <BrowserRouter>
         <Routers />
      </BrowserRouter>
   );
};

export default App;
