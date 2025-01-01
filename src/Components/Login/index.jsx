import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LogiPasswordLost from './LoginPasswordLost';
import LogiPasswordReset from './LoginPasswordLost';
import { UserContext } from '../../UserContext';

import styles from './Login.module.css';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LogiPasswordLost />} />
          <Route path="perdeu" element={<LogiPasswordReset />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
