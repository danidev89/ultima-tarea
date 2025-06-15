const Modal = ({ precio, modalId }) => {
  return (
    <div>
      <button className='btn' onClick={() => document.getElementById(`my_modal_${modalId}`).showModal()}>Precio</button>
      <dialog id={`my_modal_${modalId}`} className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>El precio es:</h3>
          <p className='py-4'>{precio}</p>
          <div className='modal-action'>
            <form method='dialog'>
              <button className='btn'>Cerrar</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default Modal
