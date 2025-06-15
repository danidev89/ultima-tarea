import { Route, Routes } from 'react-router-dom'
import LayoutContenido from './componentes/layout/layout-contenido'
import LayoutInicio from './componentes/layout/layout-inicio'
import './fuentes.css'
import Inicio from './secciones/Inicio'
import Cursos from './secciones/Cursos'

function App () {
  return (
    <LayoutInicio>
      <LayoutContenido>
        <Routes>
          <Route path='/ultima-tarea' element={<Inicio />} />
          <Route path='/cursos' element={<Cursos />} />
        </Routes>
      </LayoutContenido>
    </LayoutInicio>
  )
}

export default App
