import logo from './logo.svg';
import './App.css';

function App() {

  const styleP = {
    padding: '15px',
    border: 'solid 5px red'
  }

  const styles = {
    header: 'text-3xl font-light underline text-amber-600'
  }

  return (
    <>
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
    </>
  );
}

export default App;
