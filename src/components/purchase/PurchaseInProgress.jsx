import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveCart } from "../../jsonToFirestore";

import './PurchaseInProgress.css';

const PurchaseInProgress = ({ productList, totalPrice, emptyCart }) => {

  let navigate = useNavigate();

  const [validationFormClass, setValidationFormClass] = useState('');
  const [data, setData] = useState({
    name: '',
    email: '',
    dni: '',
    city: '',
    locality: '',
    postalCode: '',
    address: '',
    phone: '',
  });

  function handleChange(evt) {
    setValidationFormClass(evt.target.form.checkValidity() ? 'valid' : '');
    setData({ ...data, [evt.target.name]: evt.target.value });
  }

  async function onSubmit(e, list) {
    e.preventDefault();
    try {
      saveCart({ ...data, cart: list }).then((response) => {
        alert(`Su pedido ha sido registrado con el id: ${response.id}`);
        navigate("/");
        emptyCart();
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="purchase_form">
        <h1>Finalizar compra</h1>
        <h2 className="subtitle">Por favor rellene los datos de envio</h2>
        <h2 className="subtitle">Precio total a pagar ${totalPrice}</h2>
        <form onSubmit={d => onSubmit(d, productList)}>
          <p>
            <label htmlFor="nombre">Nombre
              <span className="obligatorio">*</span>
            </label>
            <input type="text" name="name" onChange={(evt) => handleChange(evt)} required placeholder="Escribe tu nombre" />
          </p>
          <p>
            <label htmlFor="nombre">Correo electrónico
              <span className="obligatorio">*</span>
            </label>
            <input type="text" name="email" onChange={(evt) => handleChange(evt)} required placeholder="Escribe tu nombre" />
          </p>
          <p>
            <label htmlFor="nombre">Número de documento
              <span className="obligatorio">*</span>
            </label>
            <input type="number" name="dni" onChange={(evt) => handleChange(evt)} required placeholder="Escribe tu número de documento" />
          </p>
          <p>
            <label htmlFor="nombre">Provincia
              <span className="obligatorio">*</span>
            </label>
            <input type="text" name="city" onChange={(evt) => handleChange(evt)} required placeholder="Escribe tu Provincia" />
          </p>
          <p>
            <label htmlFor="nombre">Localidad
              <span className="obligatorio">*</span>
            </label>
            <input type="text" name="locality" onChange={(evt) => handleChange(evt)} required placeholder="Escribe tu localidad" />
          </p>
          <p>
            <label htmlFor="nombre">Código postal
              <span className="obligatorio">*</span>
            </label>
            <input type="text" name="postalCode" onChange={(evt) => handleChange(evt)} required placeholder="Escribe tu código postal" />
          </p>
          <p>
            <label htmlFor="nombre">Dirección
              <span className="obligatorio">*</span>
            </label>
            <input type="text" name="address" onChange={(evt) => handleChange(evt)} required placeholder="Escribe tu dirección completa" />
          </p>
          <p>
            <label htmlFor="nombre">Télefono
              <span className="obligatorio">*</span>
            </label>
            <input type="text" name="phone" onChange={(evt) => handleChange(evt)} required placeholder="Escribe tu número de télefono" />
          </p>

          <button className={`btn-contact ${validationFormClass}`} type="submit"><p>Finalizar</p></button>

          <p className="aviso">
            <span className="obligatorio"> * </span>los campos son obligatorios.
          </p>
        </form>
      </div>
    </>
  );

}

export default PurchaseInProgress;