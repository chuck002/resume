import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStyle from './StyledComponents.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
  <GlobalStyle />
    <App />
  </Router>
)
