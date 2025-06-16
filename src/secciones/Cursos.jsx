import Modal from '../componentes/ui/Modal'
const clasesData = [
  {
    id: 1,
    src: 'https://www.tierraplus.com.bo/img/thumb/CAPORAL_ES_BOLIVIA_PIX20I5_08.jpg',
    titulo: 'Caporales - Fuerza y Pasión',
    descripcion: 'Aprende los enérgicos pasos del Caporal, uno de los bailes más queridos de Bolivia. Domina los saltos, el zapateo y la gallardía del varón, o la sensualidad y el movimiento de faldas de la cholita. ¡Una clase de alta intensidad que te llenará de energía y confianza!',
    precio: '280 Bs. / mes'
  },
  {
    id: 2,
    src: 'https://morenadacentral.com.bo/public/pagina/imgs/32534-foto.jpg',
    titulo: 'Morenada - Elegancia y Tradición',
    descripcion: 'Sumérgete en la cadencia y la fuerza de la Morenada. Este curso se enfoca en el característico paso lento y pesado, la elegancia de la figura de la "China Morena" y la historia detrás de los trajes. Un baile poderoso que cuenta una historia en cada movimiento.',
    precio: '250 Bs. / mes'
  },
  {
    id: 3,
    src: 'https://www.lostiempos.com/sites/default/files/media_imagen/2019/10/17/637069647115470726.jpg',
    titulo: 'Cueca Paceña - El Baile de La Paz',
    descripcion: 'Como paceños, ¡tenemos que saber bailar nuestra Cueca! Aprende el arte del coqueteo y el romance a través del pañuelo. Este curso te enseñará la estructura, los pasos y la elegancia para brillar en cualquier evento social o peña folklórica.',
    precio: '260 Bs. / mes'
  }
]

const Cursos = () => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 p-8'>
      {
        clasesData.map((clase) => (
          <div key={clase.id} className='card bg-base-100 w-80 shadow-sm'>
            <figure>
              <img
                src={clase.src}
                alt='Shoes'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>{clase.titulo}</h2>
              <p>{clase.descripcion}</p>
              <div className='card-actions justify-end'>
                <Modal modalId={clase.id} precio={clase.precio} />
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Cursos
