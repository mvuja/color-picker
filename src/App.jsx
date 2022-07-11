import React, { useState, useEffect } from "react"
import { RgbaColorPicker } from "react-colorful"
import './_color-picker.scss'

const App = () => {
  const [color, setColor] = useState({ r: 145, g: 109, b: 249, a: 1 })

  return (
    <>
      <RgbaColorPicker color={color} onChange={setColor} />

      <div className="value" style={{backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`}}></div>

      <div className="buttons">
        <button className="purple" onClick={() => setColor({ r: 145, g: 109, b: 249, a: 1 })}></button>
        <button className="blue" onClick={() => setColor({ r: 16, g: 223, b: 212, a: 1 })}></button>
        <button className="green" onClick={() => setColor({ r: 6, g: 254, b: 73, a: 1 })}></button>
        <button className="orange" onClick={() => setColor({ r: 247, g: 156, b: 28, a: 1 })}></button>
        <button className="red" onClick={() => setColor({ r: 242, g: 51, b: 63, a: 1 })}></button>
      </div>
    </>
  )
}

export default App