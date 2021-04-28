import React, { useState } from 'react';

const App = () => {
  const [select, setSelect] = useState('tablet');

  function handleTeste(event) {
    console.log(event);
  }

  return (
    <form onSubmit={handleTeste}>
      <select value={select} onChange={({ target }) => setSelect(target.value)}>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      {select === 'notebook' ? 'vai tomar no cu' : 'vai se fuder'}
    </form>
  );
};

export default App;
