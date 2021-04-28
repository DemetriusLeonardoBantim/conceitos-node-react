import React, { useState } from 'react';

//Form
//No form controlamos o que acontece ao enviar o mesmo, por isso definimos uma funcao para lidar com o onSubmit.
//O PreventDefault() ira prevenir o comportamento padrao, que seria de atualizar a pagine, enviando uma requisicao
//para o que esver em action

const App = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  //pode-se tbm criar um objeto que ira conter todos os valores dos campos do formulario

  const [form, setForm] = useState({
    nome: '',
    email: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(nome);
    console.log(email);
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function handleSubmit2(event) {
    event.preventDefault();
    console.log(form);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
        <p>{nome}</p>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {email}
        <button>Go</button>
      </form>

      <div>
        <form onSubmit={handleSubmit2}>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            value={form.nome}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            typr="email"
            id="email"
            value={form.email}
            onChange={handleChange}
          />
          <button>Enviar</button>
        </form>
      </div>
    </>
  );
};

export default App;
