import React from 'react';

import { useName } from './context/Name';

export default function Login() {
  const { name } = useName();

  return (
    <div>
      <h1>Oi</h1>
      <h1>{name}</h1>
    </div>
  );
}
