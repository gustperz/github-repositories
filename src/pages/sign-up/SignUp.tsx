import React from 'react';
import { useHistory } from 'react-router-dom';

import styles from './SignUp.module.scss';
import Button from '../../components/Button';
import Input from '../../components/Input';

export default function SignUp() {
  const history = useHistory();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.loginBox}>
          <h2>Sing Up</h2>

          <form method="POST">
            <Input id="firstName" name="firstName" placeholder="first name" required />
            <Input id="lastName" name="lastName" placeholder="last name" required />

            <Input
              id="email"
              type="email"
              name="email"
              placeholder="email"
              autoComplete="email"
              required
              className="mt-1"
            />

            <Input
              id="password"
              type="password"
              name="password"
              placeholder="password"
              required
              className="mt-2"
            />
            <Input
              id="confirmPassword"
              type="password"
              name="password"
              placeholder="confirm password"
              required
            />

            <div className={styles.actions}>
              <Button text="Sign Up" raised />
              <Button text="Login" onClick={() => history.push('/login')} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
