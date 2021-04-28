import React, { useState } from 'react';

//Reatividade
//Para criarmos campos de formulario reativos, devemos definir o estado para o value
//e a funcao atualizadora para o onChange

const App = () => {
  const [nome, setNome] = useState('');
  return (
    <form>
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        id="nome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <p>{nome}</p>
    </form>
  );
};

export default App;
