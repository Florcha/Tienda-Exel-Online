import React, { useState } from "react";

import "./Form.css";

export default function App() {
  const [data, setData] = useState({
    name: '',
    surname: '',
    age: '',
  });

  function handleChange(evt) {
    setData({ ...data, [evt.target.name]: evt.target.value });
  }

  function onSubmit() {
    const { name, phone, order } = data;
    console.log(`Your name is ${name} your phone number is ${phone} and you have ${order}`);
  }

  return (
    <>
      <div>
        <>
          <div style={{ display: 'flex', marginBottom: 5 }}>
            <label style={{ marginRight: 20 }}>Nombre y Apellido</label>
            <input className="btn-go-to-cart"
              type="text"
              name="name"
              onChange={(evt) => handleChange(evt)}
            />
          </div>
        </>
        <>
          <div style={{ display: 'flex', marginBottom: 5 }}>
            <label style={{ marginRight: 20 }}>Teléfono</label>
            <input className="btn-go-to-cart"
              type="text"
              name="phone"
              onChange={(evt) => handleChange(evt)}
            />
          </div>
        </>
        <>
          <div style={{ display: 'flex', marginBottom: 5 }}>
            <label style={{ marginRight: 20 }}>Pedido</label>
            <input className="btn-go-to-cart"
              type="text"
              name="order"
              onChange={(evt) => handleChange(evt)}
            />
          </div>
        </>

        {
          <button className="btn-go-to-cart"
            disabled={
              !(data.name !== '' && data.phone !== '' && data.order !== '')
            }
            onClick={(evt) => onSubmit(evt)}
          >
            Generar Orden
          </button>
        }
      </div>
    </>
  );
}