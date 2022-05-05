/*import logo from './logo.svg';
import './App.css';
/*import Saludo from './components/Saludo';
import ConHijos from './components/ConHijos';
import NavBar from './components/NavBar';
/*import ItemListContainer from './components/ItemListContainer';*/

import React from "react";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProductsContainer from "./components/ProductsContainer";


function App() {
  return (
    <>
    <div className="App">

    </div>
      <BrowserRouter>
        <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Saludo name='Flor' age='33'/>}/>
            <Route path="products" element={<ProductsContainer/>}/>
          </Routes>
      </BrowserRouter>
    
    <ProductsContainer></ProductsContainer>
    </>
  )
}

export default App;


/*
function App() {

  const miFuncion = () => {}

  const styleP = {
    padding: '15px',
    border: 'solid 5px red'
  }

  const styles = {
    header: 'text-3xl font-light underline text-amber-600'
  }

  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer greeting='Bienvenidos'></ItemListContainer>
      <ConHijos>
        <Saludo name='Maria' age='21' nationality='Francia'></Saludo>
      </ConHijos>
      <h1 style={{color:'pink'}}>Bienvenidos a la tienda Online de EXEL!</h1>
      <li>Facial</li>
      <li>Corporal</li>
      <li>Cabello</li>
      <li>{ 3+1 }</li>
      <p style={styleP}>Página en construcción, gracias por la espera, será sorprendente!</p>
      <h1 className={styles.header}>
        Hola, estás en EXELBIOCOSMÉTICA
      </h1>
      <button class="btn btn-primary">One</button>
      <button class="btn btn-secondary">Two</button>
      <button class="btn btn-accent btn-outline">Three</button>
      <Saludo name='Florencia' age='33' nationality='Argentina' action={miFuncion}/>
      <Saludo name='Luisa' age='50' nationality='Alemania'/>
    </>
  );
}

export default App;*/
