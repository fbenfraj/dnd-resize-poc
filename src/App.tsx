import './App.css'
import ResizableDraggableBox from './components/ResizableDraggableBox'
import FloatingButton from './components/FloatingButton'

function App() {
  return (
    <div className="grid-container" style={{ height: '100%', width: '100%', position: 'relative' }}>
      <ResizableDraggableBox />
      <FloatingButton onClick={() => console.log('FAB clicked')} />
    </div>
  )
}

export default App
