/* packages */
import React from 'react';

/* components */
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import { AuthProvider } from './context/AuthContext';

/* styles */
import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <GlobalStyles />
  </>
);
export default App;
