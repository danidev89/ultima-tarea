import Titulos from '../../secciones/Titulos'
import Footer from '../ui/Footer'
import NavBar from '../ui/NavBar'

const LayoutInicio = ({ children }) => {
  return (
    <div className='min-h-screen font-lato container mx-auto flex flex-col items-center justify-center'>
      <Titulos />
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}

export default LayoutInicio
