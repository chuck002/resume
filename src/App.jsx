import './App.css'
import GridLanguages from './components/GridLanguages'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<div><h1>HomePage</h1></div>} />
          <Route path="/Experience" element={<div><h1>Expericence Page</h1></div>} />
          <Route path="/Education" element={<div><h1>Education Page</h1></div>} />
          <Route path="/Skills" element={<div><h1>Skills Page</h1></div>} />
          <Route path="/Languages" element={<GridLanguages />} />
        </Routes>
    </>
  )
}

export default App
