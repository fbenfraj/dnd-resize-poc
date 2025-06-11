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
  x?: number
  y?: number
  onPositionChange?: (pos: { x: number; y: number }) => void
}

const ResizableDraggableBox = ({
  initialX = 0,
  initialY = 0,
  initialWidth = 200,
  initialHeight = 200,
  minWidth = 200,
  minHeight = 200,
  gridSize = 200,
  x,
  y,
  onPositionChange,
}: ResizableDraggableBoxProps) => {
  const [size, setSize] = useState({ width: initialWidth, height: initialHeight })

  const handleDragStop = (_e: unknown, d: { x: number; y: number }) => {
    const snappedX = Math.round(d.x / gridSize) * gridSize
    const snappedY = Math.round(d.y / gridSize) * gridSize
    onPositionChange?.({ x: snappedX, y: snappedY })
  }

  return (
    <Rnd
      size={size}
      position={{ x: x ?? initialX, y: y ?? initialY }}
      bounds="parent"
      dragGrid={[gridSize, gridSize]}
      resizeGrid={[gridSize, gridSize]}
      minWidth={minWidth}
      minHeight={minHeight}
      onDragStop={handleDragStop}
      onResizeStop={(e, direction, ref) => {
        void e
        void direction
        void ref
        setSize({ width: parseInt(ref.style.width, 10), height: parseInt(ref.style.height, 10) })
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
        {size.width} × {size.height}
      </div>
    </Rnd>
  )
}

export default ResizableDraggableBox 