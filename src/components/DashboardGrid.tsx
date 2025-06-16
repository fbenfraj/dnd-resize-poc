import React, { useState } from 'react'
import GridLayout from 'react-grid-layout'
import type { Layout } from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

type DashboardGridProps = Record<string, never>

const GRID_COLS = 12
const COL_WIDTH = 200

const DashboardGrid: React.FC<DashboardGridProps> = () => {
  const [layout, setLayout] = useState<Layout[]>([
    { i: '0', x: 0, y: 0, w: 1, h: 1 },
  ])

  const addItem = () => {
    const index = layout.length
    // Place new item to the right of the previous one; wrap to next row if needed
    const newX = index % GRID_COLS
    const newY = Math.floor(index / GRID_COLS)

    const newItem: Layout = { i: index.toString(), x: newX, y: newY, w: 1, h: 1 }
    setLayout((prev) => [...prev, newItem])
  }

  return (
    <>
      <GridLayout
        className="layout"
        cols={GRID_COLS}
        rowHeight={COL_WIDTH}
        width={GRID_COLS * COL_WIDTH}
        margin={[0, 0]}
        containerPadding={[0, 0]}
        layout={layout}
        onLayoutChange={(l: Layout[]) => setLayout(l)}
        compactType="vertical"
        verticalCompact={true}
        preventCollision={false}
      >
        {layout.map((item) => (
          <div
            key={item.i}
            style={{
              border: '2px solid #646cff',
              background: '#f5f5ff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              width: '100%',
            }}
          >
            <div style={{ color: 'red', fontWeight: 'bold' }}>#{item.i}</div>
            <div style={{ fontSize: 12, color: '#000' }}>
              x1: {item.x}, y1: {item.y}
              <br />
              x2: {item.x + item.w - 1}, y2: {item.y + item.h - 1}
            </div>
          </div>
        ))}
      </GridLayout>
      <button
        onClick={addItem}
        style={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          borderRadius: '50%',
          width: 72,
          height: 72,
          fontSize: 32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#646cff',
          color: '#fff',
          border: 'none',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          cursor: 'pointer',
        }}
        aria-label="Add tile"
      >
        +
      </button>
    </>
  )
}

export default DashboardGrid 