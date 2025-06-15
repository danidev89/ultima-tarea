import { Link } from 'react-router-dom'

const navLinks = [
  { id: 1, titulo: 'Inicio', path: '/' },
  { id: 2, titulo: 'Oferta de Cursos', path: '/cursos' }
]

const NavBar = () => {
  return (
    <div className='font-montserrat navbar bg-base-100 shadow-sm w-full  flex items-center justify-center'>

      <div>
        <ul className='menu menu-horizontal px-1'>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link to={link.path} className='text-md font-bold uppercase'>{link.titulo}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default NavBar
