import './App.css'
import { Rnd } from 'react-rnd'
import { useState } from 'react'

function App() {
  // Initial size & position stored in state so we can display them
  const [state, setState] = useState({
    x: 80,
    y: 80,
    width: 320,
    height: 200,
  })

  return (
    <div style={{ height: '100%', width: '100%', position: 'relative' }}>
      <Rnd
        size={{ width: state.width, height: state.height }}
        position={{ x: state.x, y: state.y }}
        bounds="parent"
        minWidth={120}
        minHeight={80}
        onDragStop={(e, d) => {
          setState((prev) => ({ ...prev, x: d.x, y: d.y }))
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
          setState({
            width: parseInt(ref.style.width, 10),
            height: parseInt(ref.style.height, 10),
            ...position,
          })
        }}
        style={{
          border: '2px solid #646cff',
          background: '#f5f5ff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 18,
          fontWeight: 500,
          color: '#333',
        }}
      >
        Drag & Resize Me<br />
        <div style={{ fontSize: 12, marginTop: 8 }}>
          {state.width} × {state.height}
        </div>
      </Rnd>
    </div>
  )
}

export default App
