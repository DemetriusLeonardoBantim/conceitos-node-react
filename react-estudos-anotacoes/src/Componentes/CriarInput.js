import React from 'react';

// Podemos definir um componente para cada tipo de campo de formulario, assim evitamos criar codigos repetidos

// criarcao de um input

const Input = ({ id, label, setValue, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </>
  );
};

export default Input;
