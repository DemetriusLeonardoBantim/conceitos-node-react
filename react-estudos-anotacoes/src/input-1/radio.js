import React from 'react';

//No radio comparamos o valor selecionado com o valor do input, dentro do atributo checked. O que retornar true ira
// marcar o botao

const App = () => {
  return (
    <form>
      {produto}
      <label>
        <input
          type="radio"
          onChange={handleChange}
          checked={produto === 'smartphone'}
          value="smartphone"
        />
        Smartphone
      </label>
      <label>
        <input
          type="radio"
          onChange={handleChange}
          checked={produto === 'notebook'}
          value="notebook"
        />
        Notebook
      </label>
    </form>
  );
};
