import "./App.css";
import Controls from "./Controls";
import Cell from "./Cell";
import { useState } from "react";
import { boardSize, createState } from "./constants";

function App() {
  const [state, setState] = useState(createState());
  const [reRender, setReRender] = useState(false);

  function handleCellClick(yIndex, xIndex) {
    setState((s) => {
      const newState = JSON.parse(JSON.stringify(s));
      newState[yIndex][xIndex] = newState[yIndex][xIndex] === 1 ? 0 : 1;
      return newState;
    });
    setReRender(r => !r)
  }

  return (
    <div className="App bg-sky-300 h-[100vh] flex flex-col items-center justify-end">
      <div className="h-[80vh] flex items-center justify-center">
        <div className={"bg-red-300 w-[70vmin] h-[70vmin] grid cols-5"}>
          {state.map((arr, yIndex) =>
            arr.map((value, xIndex) => (
              <Cell
                value={value}
                yIndex={yIndex}
                xIndex={xIndex}
                handleCellClick={handleCellClick}
              />
            ))
          )}
        </div>
      </div>
      <Controls />
    </div>
  );
}

export default App;
