import React, { useState } from 'react';

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
    const { name, surname, age } = data;
    console.log(`Your name is ${name} ${surname} and you have ${age} years`);
  }

  return (
    <>
      <div>
        <>
          <div style={{ display: 'flex', marginBottom: 8 }}>
            <label style={{ marginRight: 4 }}>Nombre</label>
            <input
              type="text"
              name="name"
              onChange={(evt) => handleChange(evt)}
            />
          </div>
        </>
        <>
          <div style={{ display: 'flex', marginBottom: 8 }}>
            <label style={{ marginRight: 4 }}>Apellido</label>
            <input
              type="text"
              name="surname"
              onChange={(evt) => handleChange(evt)}
            />
          </div>
        </>
        <>
          <div style={{ display: 'flex', marginBottom: 8 }}>
            <label style={{ marginRight: 4 }}>Edad</label>
            <input
              type="text"
              name="age"
              onChange={(evt) => handleChange(evt)}
            />
          </div>
        </>

        {
          <button
            disabled={
              !(data.name !== '' && data.surname !== '' && data.age !== '')
            }
            onClick={(evt) => onSubmit(evt)}
            style={{}}
          >
            Generar Pedido
          </button>
        }
      </div>
    </>
  );
}