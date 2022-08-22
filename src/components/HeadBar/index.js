import React, { useState } from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { startNewGame } from "../../actions/board";

function HeadBar() {
  const [width, setWidth] = useState(
    useSelector((state) => state.boardReducer.width)
  );
  const [height, setHeight] = useState(
    useSelector((state) => state.boardReducer.height)
  );
  const [numOfMines, setNumOfMines] = useState(
    useSelector((state) => state.boardReducer.numOfMines)
  );
  const dispatch = useDispatch();

  return (
    <div className="head-bar">
      <div className="input-group">
        <label>Width:</label>
        <input
          type="number"
          value={width}
          onChange={(event) => setWidth(event.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Height:</label>
        <input
          type="number"
          value={height}
          onChange={(event) => setHeight(event.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Mines:</label>
        <input
          type="number"
          value={numOfMines}
          onChange={(event) => setNumOfMines(event.target.value)}
        />
      </div>

      <div className="actions">
        <label>
          <input type="checkbox" />
          Superman?
        </label>
        <button
          onClick={() => dispatch(startNewGame(width, height, numOfMines))}
        >
          New game
        </button>
        Flags left: 10
      </div>
    </div>
  );
}

export default HeadBar;
