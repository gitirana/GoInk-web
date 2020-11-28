/* modules */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

/* routes */
import Routes from './routes';

/* hooks */
import { AppProvider } from './hooks/index';

/* styles */
import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <Routes />
    </AppProvider>

    <GlobalStyles />
  </Router>
);
export default App;
