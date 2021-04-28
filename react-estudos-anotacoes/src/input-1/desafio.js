import React, { useEffect, useState } from 'react';

const Desafio = () => {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  });
  const [response, setResponse] = useState(null);

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function handleSubmit2(event) {
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response);
    });
  }

  return (
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
        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          value={form.senha}
          onChange={handleChange}
        />
        <label htmlFor="cep">Cep</label>
        <input
          type="number"
          id="cep"
          value={form.cep}
          onChange={handleChange}
        />
        <label htmlFor="rua">Rua</label>
        <input type="text" id="rua" value={form.rua} onChange={handleChange} />
        <label htmlFor="numero">Numero</label>
        <input
          type="number"
          id="numero"
          value={form.numero}
          onChange={handleChange}
        />
        <label htmlFor="bairro">Bairro</label>
        <input
          type="text"
          id="bairro"
          value={form.bairro}
          onChange={handleChange}
        />
        <label htmlFor="cidade">Cidade</label>
        <input
          type="text"
          id="cidade"
          value={form.cidade}
          onChange={handleChange}
        />
        <label htmlFor="estado">Estado</label>
        <input
          type="text"
          id="estado"
          value={form.estado}
          onChange={handleChange}
        />
        {response && response.ok && <p>Formulario enviado</p>}
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Desafio;
