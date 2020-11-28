/* packages */
import React from 'react';

/* components */
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

/* hooks */
import { AppProvider } from './hooks/index';

/* styles */
import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>

    <GlobalStyles />
  </>
);
export default App;
