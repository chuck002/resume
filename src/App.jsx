import './App.css'
import {Routes, Route} from 'react-router-dom'
import PageVersion from './version/PagesVersion/index.jsx'
import PersonalData from './version/PagesVersion/Pages/PersonalData/index.jsx'
import Experience from './version/PagesVersion/Pages/Experience/index.jsx'
import Education from './version/PagesVersion/Pages/Education/index.jsx'
import Skills from './version/PagesVersion/Pages/Skills/index.jsx'
import Projects from './version/PagesVersion/Pages/Projects/index.jsx'

function App() {

  return (
        <Routes>
          <Route path="/" element={<PageVersion />} />
          <Route path="/PersonalData" element={<PersonalData />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="*" element={<Projects />} />
        </Routes>
  )
}

export default App
