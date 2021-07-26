import React from 'react';
import { useAuth } from '../auth/Authcontext';
import Button from './Button';

export default function AppHeadder() {
  let { user, logout } = useAuth();

  return (
    <div className="p-8 flex justify-between">
      <span className="text-lg">
        Hi{' '}
        <b>
          {user?.firstName} {user?.lastName}
        </b>
      </span>
      <div>
        <Button text="logout" onClick={logout} />
      </div>
    </div>
  );
}
