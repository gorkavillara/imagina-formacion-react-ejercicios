import { useState } from "react";
import "./App.scss";
import Saludo from "./components/Saludo";

function App() {
  const [estado, setEstado] = useState(false);
  const cambiaEstado = () => setEstado((estadoanterior) => !estadoanterior);
  return (
    <div className="App">
      <Saludo />
      <button onClick={cambiaEstado}>Cambia</button>
    </div>
  );
}

export default App;
