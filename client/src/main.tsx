import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Disable React DevTools warning
if (process.env.NODE_ENV === 'production') {
    console.warn = () => { };
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
