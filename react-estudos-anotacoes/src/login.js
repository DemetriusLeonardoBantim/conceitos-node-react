import React from 'react';
import { Link } from 'react-router-dom';

import { useName } from './context/Name';

export default function Login() {
  const { name, setName } = useName();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(name);
  }

  return (
    <div>
      <span>{name}</span>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Link to="store">Entrar na loja</Link>
      </form>
    </div>
  );
}
