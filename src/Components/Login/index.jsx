import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LogiPasswordLost from './LoginPasswordLost';
import LogiPasswordReset from './LoginPasswordLost';
import { UserContext } from '../../UserContext';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LogiPasswordLost />} />
        <Route path="perdeu" element={<LogiPasswordReset />} />
      </Routes>
    </div>
  );
};

export default Login;
