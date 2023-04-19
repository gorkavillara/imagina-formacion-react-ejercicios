import { useEffect, useState } from 'react';
import './App.css';

const Saludo = ({ nombre }) => <h1>Hola {nombre}</h1>

const ComponenteCambio = () => {
  const [activo, setActivo] = useState(false)
  const cambiaEstado = () => setActivo(estadoanterior => !estadoanterior)

  return <button onClick={cambiaEstado}>Cambiar</button>
}

const ComponenteMontado = () => {
  useEffect(() => console.log("Se ha montado el componente"), [])
  return <h1>Componente montado</h1>
}

function App() {
  return (
    <div className="App">
      <Saludo nombre="Gorka" />
      <ComponenteMontado />
    </div>
  );
}

export default App;
