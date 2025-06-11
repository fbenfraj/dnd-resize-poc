import './App.css'
import ResizableDraggableBox from './components/ResizableDraggableBox'

function App() {
  return (
    <div className="grid-container" style={{ height: '100%', width: '100%', position: 'relative' }}>
      <ResizableDraggableBox />
    </div>
  )
}

export default App
