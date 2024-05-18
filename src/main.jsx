import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'

import { createHashRouter } from 'react-router-dom'
import PageVersion from './version/PagesVersion/index.jsx'
import PersonalData from './version/PagesVersion/Pages/PersonalData/index.jsx'
import Experience from './version/PagesVersion/Pages/Experience/index.jsx'
import Education from './version/PagesVersion/Pages/Education/index.jsx'
import Skills from './version/PagesVersion/Pages/Skills/index.jsx'
import Projects from './version/PagesVersion/Pages/Projects/index.jsx'
import PdfVersion1 from './version/PdfVersion/index.jsx'

import { LanguajeProvider } from './context/LanguajeContext.jsx'

const HashRouter = createHashRouter([
  { path: '/', element: <PageVersion /> },
  { path: '/PersonalData', element: <PersonalData /> },
  { path: '/Experience', element: <Experience /> },
  { path: '/Education', element: <Education /> },
  { path: '/Skills', element: <Skills /> },
  { path: '/Projects', element: <Projects /> },
  { path: '/pdfVersion', element: <PdfVersion1 /> }
]);

import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <LanguajeProvider>
    <RouterProvider router={HashRouter} />
  </LanguajeProvider>
)
