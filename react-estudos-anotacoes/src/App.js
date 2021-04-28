import React from 'react';
import Login from './login';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import NameProvider from './context/Name';

function App() {
  return (
    <BrowserRouter>
      <NameProvider>
        <Routes />;
      </NameProvider>
    </BrowserRouter>
  );
}

export default App;
