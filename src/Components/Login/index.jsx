import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LogiPasswordLost from './LoginPasswordLost';
import LogiPasswordReset from './LoginPasswordLost';

const Login = () => {
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
