import React from 'react'

interface FloatingButtonProps {
  onClick?: () => void
  label?: string
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick, label = '+' }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        border: 'none',
        background: '#646cff',
        color: '#fff',
        fontSize: 28,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0,0,0,0.25)',
      }}
    >
      {label}
    </button>
  )
}

export default FloatingButton 