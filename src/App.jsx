import React, { useState } from "react";
import { RgbaColorPicker } from "react-colorful";
import './_color-picker.scss'

const App = () => {
  const [color, setColor] = useState({ r: 200, g: 150, b: 35, a: 0.5 })

  return (
    <div className="App">
      <RgbaColorPicker color={color} onChange={setColor} />

      {/* <div className="value">{JSON.stringify(color)}</div> */}

      <div className="buttons">
        <button onClick={() => setColor({ r: 75, g: 75, b: 150, a: 1 })}>
          Choose blue
        </button>
        <button onClick={() => setColor({ r: 50, g: 150, b: 50, a: 1 })}>
          Choose green
        </button>
      </div>
    </div>
  );
}

export default App