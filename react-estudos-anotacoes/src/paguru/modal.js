import React, { useState } from 'react';

const Modal = ({ stores }) => {
  const [count, setCount] = useState(1);

  function menosUm() {
    if (count >= 1) {
      setCount(count - 1);
    }
  }

  function mainUm() {
    setCount(count + 1);
  }

  return (
    <>
      {stores.map((store) => (
        <div key={store.id}>
          <img src={store.image_url} alt="" />
          <h1>{store.name}</h1>
          <p>{store.price}</p>
          <p>Quantidade {count}</p>
          <button onClick={mainUm}>+1</button>
          <button onClick={menosUm}> -1 </button>
          <p>Total a pagar : {count * store.price}</p>
        </div>
      ))}
    </>
  );
};

//{cart.map((cart) => (
//  <div key={cart.id}>
//    <h1>{cart.name}</h1>
//    <p>{cart.price}</p>
//  </div>
// ))}

export default Modal;
