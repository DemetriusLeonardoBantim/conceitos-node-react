import React, { useState } from 'react';

//Multiplos Podemos definir um estado para cada item ou uma array que ira
//conter todos os itens selecionados

const App = () => {
  const [termos, setTermos] = useState();
  const [cores, setCores] = useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }

  return (
    <>
      <form>
        {termos && <p>Aceitou os termos</p>}
        <label>
          <input
            type="checkbox"
            value="Termos"
            checked={termos}
            onChange={({ target }) => setTermos(target.checked)}
          />
        </label>
      </form>
      <form>
        <label>
          <input
            type="checkbox"
            value="azul"
            checked={cores.includes('azul')}
            onChange={handleChange}
          />
          Azul
        </label>
        <label>
          <input
            type="checkbox"
            value="vermelho"
            checked={cores.includes('vermelho')}
            onChange={handleChange}
          />
          Vermelho
        </label>
      </form>
    </>
  );
};

export default App;
