import React, { useState } from "react";
import { saveMessage } from "../../jsonToFirestore";
import { useNavigate  } from "react-router-dom";


import "./Form.css";

export default function Form() {

  let navigate = useNavigate();

  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  function handleChange(evt) {
    setData({ ...data, [evt.target.name]: evt.target.value });
  }

  async function onSubmit(e) {
    e.preventDefault();
    console.log(data);
    await saveMessage(data);
    navigate("/");
    alert('Mensaje enviado');
  }

  return (
    <>
      <div>
        <div className="contact_form">

          <div className="formulario">
            <h1>Formulario de Contacto</h1>
            <h4>Escríbenos y en breve nos pondremos en contacto</h4>

            <form onSubmit={d => onSubmit(d)}>
              <p>
                <label htmlFor="nombre">Nombre
                  <span className="obligatorio">*</span>
                </label>
                <input type="text" name="name" onChange={(evt) => handleChange(evt)} required placeholder="Escribe tu nombre" />
              </p>

              <p>
                <label htmlFor="email">Email
                  <span className="obligatorio">*</span>
                </label>
                <input type="email" name="email" onChange={(evt) => handleChange(evt)} required placeholder="Escribe tu Email" />
              </p>

              <p>
                <label htmlFor="telefone">Teléfono</label>
                <input type="tel" name="phone" onChange={(evt) => handleChange(evt)} placeholder="Escribe tu teléfono" />
              </p>

              <p>
                <label htmlFor="asunto">Asunto
                  <span className="obligatorio">*</span>
                </label>
                <input type="text" name="subject" onChange={(evt) => handleChange(evt)} required placeholder="Escribe un asunto" />
              </p>

              <p>
                <label htmlFor="mensaje">Mensaje
                  <span className="obligatorio">*</span>
                </label>
                <textarea name="message" onChange={(evt) => handleChange(evt)} required placeholder="Deja aquí tu comentario..."></textarea>
              </p>

              <button className="btn-contact" type="submit"><p>Enviar</p></button>

              <p className="aviso">
                <span className="obligatorio"> * </span>los campos son obligatorios.
              </p>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}