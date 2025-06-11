import { Rnd } from 'react-rnd'
import { useState } from 'react'

export interface ResizableDraggableBoxProps {
  initialX?: number
  initialY?: number
  initialWidth?: number
  initialHeight?: number
  minWidth?: number
  minHeight?: number
  gridSize?: number
}

const ResizableDraggableBox = ({
  initialX = 80,
  initialY = 80,
  initialWidth = 320,
  initialHeight = 200,
  minWidth = 120,
  minHeight = 80,
  gridSize = 20,
}: ResizableDraggableBoxProps) => {
  const [state, setState] = useState({
    x: initialX,
    y: initialY,
    width: initialWidth,
    height: initialHeight,
  })

  return (
    <Rnd
      size={{ width: state.width, height: state.height }}
      position={{ x: state.x, y: state.y }}
      bounds="parent"
      dragGrid={[gridSize, gridSize]}
      resizeGrid={[gridSize, gridSize]}
      minWidth={minWidth}
      minHeight={minHeight}
      onDragStop={(e, d) => {
        void e
        setState((prev) => ({ ...prev, x: d.x, y: d.y }))
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        void e
        void direction
        void delta
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
      Drag & Resize Me
      <br />
      <div style={{ fontSize: 12, marginTop: 8 }}>
        {state.width} × {state.height}
      </div>
    </Rnd>
  )
}

export default ResizableDraggableBox 