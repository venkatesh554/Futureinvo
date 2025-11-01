// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { BrowserRouter } from 'react-router-dom'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//  <BrowserRouter>
//  <App />
//  </BrowserRouter>
// )




import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles' // Added Material-UI imports
import App from './App.jsx'

// Create a custom theme with white background
const theme = createTheme({
  palette: {
    background: {
      default: 'white', // Override default background to white
    },
  },
});

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>  {/* Wrap everything with ThemeProvider */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
)
