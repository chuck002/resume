import './App.css'
import GridLanguages from './components/GridLanguages'
import {Routes, Route} from 'react-router-dom'
import PageVersion from './version/PagesVersion/index.jsx'
import PersonalData from './version/PagesVersion/Pages/PersonalData/index.jsx'
import Experience from './version/PagesVersion/Pages/Experience/index.jsx'

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<PageVersion />} />
          <Route path="/PersonalData" element={<PersonalData />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Education" element={<div><h1>Education Page</h1></div>} />
          <Route path="/Skills" element={<div><h1>Skills Page</h1></div>} />
          <Route path="/Languages" element={<GridLanguages />} />
        </Routes>
    </>
  )
}

export default App
