import { useEffect, useState, useRef } from "react";
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
      Cambiar
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
      <ComponenteMontado />
    </div>
  );
}

export default App;
