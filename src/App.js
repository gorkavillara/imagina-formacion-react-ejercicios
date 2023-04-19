import { useEffect, useState, useRef, Component } from "react";
import "./App.css";

const Saludo = ({ nombre }) => <h1>Hola {nombre}</h1>;

const ComponenteCambio = () => {
  const [activo, setActivo] = useState(false);
  const buttonRef = useRef(null);
  const cambiaEstado = () => setActivo((estadoanterior) => !estadoanterior);

  const obtenInfo = () => {
    const target = buttonRef.current.target;
    console.log(target); 
  };

  return (
    <button ref={buttonRef} onMouseEnter={obtenInfo} onClick={cambiaEstado}>
      {activo ? "Encendido" : "Apagado"}
    </button>
  );
};

const ComponenteMontado = () => {
  useEffect(() => console.log("Se ha montado el componente"), []);
  return <h1>Componente montado</h1>;
};

function App() {
  return (
    <div className="App">
      <Saludo nombre="Gorka" />
      <ComponenteCambio />
      <ComponenteMontado />
    </div>
  );
}

export default App;
