import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Button from '../../components/Button';
import Input from '../../components/Input';
import styles from './SignUp.module.scss';
import useSignUp, { SignUpData } from './useSignUp';

interface Inputs extends SignUpData {
  confirmPassword: string;
}

export default function SignUp() {
  const history = useHistory();
  const [error, setError] = useState<string>();

  const { signUp } = useSignUp();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors: inputsErrors, isValidating },
  } = useForm<Inputs>();

  useEffect(() => {
    setError(undefined);
  }, [isValidating]);

  const onSubmit = async (data: Inputs) => {
    try {
      signUp(data);
      history.push('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.loginBox}>
          <h2>Sing Up</h2>

          {!!error && <h4 className={styles.error}>{error}</h4>}

          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register('firstName')}
              invalid={!!inputsErrors.firstName}
              placeholder="first name"
              required
            />
            <Input
              {...register('lastName')}
              invalid={!!inputsErrors.lastName}
              placeholder="last name"
              required
            />

            <Input
              {...register('email', {
                pattern: /\b[\w.-]+@[\w.-]+\.\w{2,4}\b/,
              })}
              type="email"
              placeholder="email"
              autoComplete="email"
              required
              invalid={!!inputsErrors.email}
              className="mt-1"
            />

            <Input
              {...register('password')}
              type="password"
              placeholder="password"
              required
              invalid={!!inputsErrors.password}
              className="mt-2"
            />
            <Input
              {...register('confirmPassword', {
                validate: value => value === getValues('password'),
              })}
              type="password"
              placeholder="confirm password"
              invalid={!!inputsErrors.confirmPassword}
              required
            />

            <div className={styles.actions}>
              <Button text="Sign Up" raised type="submit" />
              <Button text="Login" onClick={() => history.push('/login')} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
