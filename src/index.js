import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { AuthProvider } from './context/AuthProvider'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { disableReactDevTools } from '@fvilers/disable-react-devtools'

// Disable React DevTools in production
// disableReactDevTools()

// Set title for the page
document.title = 'St Michael Irish Pub'

// Render the App component into the root element
ReactDOM.createRoot(
  document.getElementById('root'))
    .render(
      <React.StrictMode>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>
          </AuthProvider>
        </Router>
      </React.StrictMode>
    )
