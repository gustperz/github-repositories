import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import Input from '../../components/Input';
import styles from './Login.module.scss';
import useLogin, { Credentials } from './useLogin';

export default function Login() {
  const history = useHistory();
  const [error, setError] = useState<string>();

  const { login } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors: inputsErrors, isValidating },
  } = useForm<Credentials>();

  useEffect(() => {
    setError(undefined);
  }, [isValidating]);

  const onSubmit = async (data: Credentials) => {
    try {
      login(data);
      history.push('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.loginBox}>
          <h2>Login</h2>

          {!!error && <h4 className={styles.error}>{error}</h4>}

          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register('email', {
                pattern: /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/,
                required: true,
              })}
              type="email"
              placeholder="email"
              autoComplete="email"
              invalid={!!inputsErrors.email}
            />

            <Input
              {...register('password', {
                required: true,
              })}
              type="password"
              placeholder="password"
              autoComplete="current-password"
              invalid={!!inputsErrors.password}
            />

            <div className={styles.actions}>
              <Button text="Login" raised type="submit" />
              <Button text="Sign Up" onClick={() => history.push('/sign-up')} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
