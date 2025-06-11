import './App.css'
import { useState } from 'react'
import ResizableDraggableBox from './components/ResizableDraggableBox'
import FloatingButton from './components/FloatingButton'

function App() {
  const GRID = 200
  type Box = { id: number; x: number; y: number }
  const [boxes, setBoxes] = useState<Box[]>([{ id: 0, x: 0, y: 0 }])

  const addBox = () => {
    setBoxes((prev) => {
      const newId = prev.length
      return [...prev, { id: newId, x: newId * GRID, y: 0 }]
    })
  }

  const updateBoxPos = (id: number, pos: { x: number; y: number }) => {
    setBoxes((prev) => {
      const updated = prev.map((b) => (b.id === id ? { ...b, ...pos } : b))
      // compact algorithm
      return compact(updated)
    })
  }

  const compact = (items: Box[]): Box[] => {
    // simple left/up compaction without overlap
    const occupied = new Set<string>()
    const result: Box[] = []
    // sort by y then x so compaction predictable
    const sorted = [...items].sort((a, b) => (a.y === b.y ? a.x - b.x : a.y - b.y))
    for (const box of sorted) {
      let { x, y } = box
      // move up as much as possible first
      while (y - GRID >= 0 && !occupied.has(`${x}_${y - GRID}`)) {
        y -= GRID
      }
      while (x - GRID >= 0 && !occupied.has(`${x - GRID}_${y}`)) {
        x -= GRID
      }
      occupied.add(`${x}_${y}`)
      result.push({ ...box, x, y })
    }
    // restore original order
    return items.map((b) => result.find((r) => r.id === b.id)!)
  }

  return (
    <div className="grid-container" style={{ height: '100%', width: '100%', position: 'relative' }}>
      {boxes.map((box) => (
        <ResizableDraggableBox
          key={box.id}
          x={box.x}
          y={box.y}
          onPositionChange={(pos) => updateBoxPos(box.id, pos)}
        />
      ))}
      <FloatingButton onClick={addBox} />
    </div>
  )
}

export default App
