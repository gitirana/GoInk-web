/* packages */
import React from 'react';

/* components */
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

/* styles */
import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyles />
  </>
);
export default App;
