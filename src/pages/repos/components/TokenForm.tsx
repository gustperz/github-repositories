import React, { useState } from 'react';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { ReactComponent as Key } from './search.svg';
import styles from './TokenForm.module.scss';

export interface TokenFormProps {
  token?: string;
  loading: boolean;
  setToken: (token: string) => void;
}

export default function TokenForm({ token = '', setToken, loading }: TokenFormProps) {
  const [myToken, setMyToken] = useState(token);

  return (
    <div className={styles.tokenForm}>
      <h3>GitHub user name</h3>
      <div className={styles.token}>
        <Input
          value={myToken}
          onChange={e => setMyToken(e.target.value)}
          placeholder="Example gustperz"
        />
        <Button onClick={() => setToken(myToken)} loading={loading}>
          <Key />
        </Button>
      </div>
    </div>
  );
}
