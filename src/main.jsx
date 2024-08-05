import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserProvider, UserContext } from './context/UserContext';
import Router from './router/router.jsx';
import NameForm from './views/NameForm/NameForm';
import { ThemeProvider } from './context/ThemeContext.jsx';
import FloatingButton from './components/FloatingButton/FloatingButton.jsx';
import './index.css';

const MainApp = () => {
  const { nombre } = React.useContext(UserContext);

  return (
    <div className="App">
      {!nombre && <NameForm />}
      {nombre && <Router />}
      <FloatingButton />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <UserProvider>
        <MainApp />
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
