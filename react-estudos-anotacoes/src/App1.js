import React, { useState } from 'react';
import Index1 from './input-1/index';
import Index2 from './input-1/index2';
import Index3 from './input-1/index3';
import Select1 from './input-1/select1';
import Desafio from './input-1/desafio';
import Check from './input-1/checkbox';
import CriarInput from './Componentes/CriarInput';
import CriarSelect from './Componentes/Select';
import Validacao from './Componentes/Validacao';
import Teste from './teste';

function App() {
  const [value, setValue] = useState('');
  const [produto, setProduto] = useState('');

  return (
    <div className="App">
      <Select1 />
      <Check />
      <CriarInput
        type={'buttom'}
        id={'nome'}
        label={'Teste'}
        setValue={setValue}
        value={value}
      />
      <CriarInput
        id={'nome'}
        label={'Teste'}
        setValue={setValue}
        value={value}
      />
      {value}
      <CriarSelect
        options={['SmartPhone', 'Tablet']}
        value={produto}
        setValue={setProduto}
      />
      <Validacao />
      <Teste name={'oi'} numero={5} />
    </div>
  );
}

export default App;
