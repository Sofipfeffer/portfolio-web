import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserProvider, UserContext } from './context/UserContext';
import Router from './router/router.jsx';
import NameForm from './views/NameForm/NameForm';
import './index.css';

const MainApp = () => {
  const { nombre } = React.useContext(UserContext);

  return (
    <div className="App">
      {!nombre && <NameForm />}
      {nombre && <Router />}

    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <UserProvider>
      <MainApp />
    </UserProvider>

  </React.StrictMode>,
);
