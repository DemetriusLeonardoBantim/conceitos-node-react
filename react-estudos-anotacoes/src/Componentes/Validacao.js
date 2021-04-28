import React, { useState } from 'react';
import Input from './CriarInput';

//OnBlur  -> Ativado sempre que o campo fica fora de foco, momento perfeito para validarmos o dado do campo. A validacao
// pode ser feita com JS utilizando REGEX`s

const Validation = () => {
  const [cep, setCep] = useState('');
  const [error, setError] = useState(null);

  function validateCep(value) {
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (!/\d{5}-?\d{3}/.test(value)) {
      setError('Preencha um cep valido');
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur({ target }) {
    console.log(validateCep(target.value));
  }

  return (
    <form>
      <Input
        label="CEP"
        id="cep"
        type="text"
        value={cep}
        onBlur={handleBlur}
        setValue={setCep}
        placeholde="00000-000"
      />
      {error && <p>{error}</p>}
    </form>
  );
};

export default Validation;
