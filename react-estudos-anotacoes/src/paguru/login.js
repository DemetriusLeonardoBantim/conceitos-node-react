import React, { useState, useEffect } from 'react';
import Modal from './modal';
import { Div } from './styles';

const Login = () => {
  const [store, setStore] = useState([]);
  const [cart, setCart] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    fetch('https://paguru-challenge-api.herokuapp.com/products')
      .then((response) => response.json())
      .then((data) => setStore(data), console.log(store));
  }, []);

  function handleModal(event) {
    event.preventDefault();
    setModal(!modal);
  }

  return (
    <>
      {store
        .filter((store) => store.id <= 4)
        .map((store) => (
          <Div key={store.id}>
            <img src={store.image_url} alt="" />
            <h1>{store.name}</h1>
            <p>{store.price}</p>
            <button
              type="submit"
              onClick={(e) => setCart((oldCart) => [...oldCart, store])}
            >
              Comprar esse produto
            </button>
          </Div>
        ))}
      <button onClick={handleModal}>Testar ne</button>
      {modal && <Modal stores={cart} />}
    </>
  );
};

export default Login;
