import React from 'react';

import styles from './Login.module.scss';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const history = useHistory();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.loginBox}>
          <h2>Login</h2>

          <form method="POST">
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="email"
              autoComplete="email"
              required
            />

            <Input
              id="password"
              type="password"
              name="password"
              placeholder="password"
              autoComplete="current-password"
              required
            />

            <div className={styles.actions}>
              <Button text="Login" raised />
              <Button text="Sign Up" onClick={() => history.push('/sign-up')} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
