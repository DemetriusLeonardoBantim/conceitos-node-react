import React, { useState } from 'react';

//Form
//No form controlamos o que acontece ao enviar o mesmo, por isso definimos uma funcao para lidar com o onSubmit.
//O PreventDefault() ira prevenir o comportamento padrao, que seria de atualizar a pagine, enviando uma requisicao
//para o que esver em action

const App = () => {
  const [nome, setNome] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(nome);
  }

  return (
    <form onSubmit={handleSubmit}>
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
