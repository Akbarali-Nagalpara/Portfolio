import React from 'react'
import { createRoot } from 'react-dom/client'
import ThemeShowcase from './src/components/ThemeShowcase'
import './src/App.css'

// Demo page to showcase all themes
const ThemeDemoApp = () => {
  return (
    <div className="app">
      <ThemeShowcase />
    </div>
  )
}

// Uncomment this and comment out the main App to see theme showcase
// const container = document.getElementById('root')
// const root = createRoot(container)
// root.render(<ThemeDemoApp />)

export default ThemeDemoApp