import "./App.scss";
import PokeController from "./components/PokeController";
import PokeContextProvider from "./contexts/PokeContextProvider";

function App() {
  return (
    <PokeContextProvider>
      <PokeController />
    </PokeContextProvider>
  );
}

export default App;
