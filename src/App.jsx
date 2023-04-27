import "./App.css";
import { useState } from "react";
import ButtonPlus from "./components/ButtonPlus";
import ButtonMoins from "./components/ButtonMoins";
import ButtonReset from "./components/ButtonReset";

function App() {
  // Je créer un state counter dont la valeur initiale est 0 et la fonction qui permettra de le mettre à jour s'appelle setCounter
  const [counter, setCounter] = useState(0);
  //   const handleClickPlus = () => {
  //     setCounter(counter + 1);
  //   };
  return (
    <>
      <div className="App">
        <ButtonMoins state={counter} setState={setCounter} />
        <p>{counter}</p>
        <ButtonPlus state={counter} setState={setCounter} />
      </div>
      <ButtonReset state={counter} setState={setCounter} />
    </>
  );
}

export default App;
