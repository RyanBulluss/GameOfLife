import "./App.css";
import Controls from "./Controls";
import Cell from "./Cell";
import { useState, useEffect } from "react";
import { boardSize, createState, adjacents } from "./constants";

function App() {
  const [state, setState] = useState(createState());
  const [reRender, setReRender] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!playing) return;
      nextTurn();
    }, 100);

    return () => clearInterval(interval);
  }, [nextTurn]);

  function handleCellClick(yIndex, xIndex) {
    if (playing) return;
    setState((s) => {
      const newState = JSON.parse(JSON.stringify(s));
      newState[yIndex][xIndex] = newState[yIndex][xIndex] === 1 ? 0 : 1;
      return newState;
    });
    setReRender((r) => !r);
  }

  function startPlaying() {
    setPlaying(true);
    setReRender((r) => !r);
    console.log(playing);
  }

  function stopPlaying() {
    setPlaying(false);
  }

  function resetState() {
    setState(createState());
    setPlaying(false);
  }

  function nextTurn() {
    const newState = JSON.parse(JSON.stringify(state));
    state.forEach((arr, yIndex) =>
      arr.forEach((value, xIndex) => {
        let count = countAdjacent(yIndex, xIndex);
        let newValue = 0;
        if (!value && count === 3) {
          newValue = 1;
        } else if (value && count > 1 && count < 4) {
          newValue = 1;
        }
        newState[yIndex][xIndex] = newValue;
      })
    );
    setState(newState);
  }

  function outOfBounds(yIndex, xIndex) {
    if (
      yIndex >= boardSize ||
      yIndex < 0 ||
      xIndex >= boardSize ||
      xIndex < 0
    ) {
      return true;
    } else return false;
  }

  function countAdjacent(yIndex, xIndex) {
    let count = 0;
    adjacents.forEach((arr) => {
      if (!outOfBounds(yIndex + arr[0], xIndex + arr[1])) {
        if (state[yIndex + arr[0]][xIndex + arr[1]] === 1) count++;
      }
    });
    return count;
  }

  return (
    <div className="App bg-gray-900 h-[100vh] flex flex-col items-center justify-end">
      <div className="h-[80vh] flex items-center justify-center">
        <div className={"bg-red-300 w-[70vmin] h-[70vmin] grid cols-20"}>
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
      <Controls
        playing={playing}
        nextTurn={nextTurn}
        resetState={resetState}
        startPlaying={startPlaying}
        stopPlaying={stopPlaying}
      />
    </div>
  );
}

export default App;
