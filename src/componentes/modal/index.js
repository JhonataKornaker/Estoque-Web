import './Modal.css'
import {FaTimes} from 'react-icons/fa'

const Modal = ({isOpen, onClose}) => {

    if (!isOpen) return null; //Esta é uma estrutura condicional que verifica se isOpen é falso. Se for, retornara falso ou seja não sera exibido o modal.

    return (
        <div className='modalStyle'>
            <div>
                <h2>Editar Item</h2>
            </div>
            <div className='lista-editar'>
                Nome:
                <input type='text'></input>
                Quantidade:
                <input type='number'></input>
                Categoria:
                <input type='text'></input>
                Local:
                <input type='text'></input>
            </div>
            <div>
                <button>Salvar</button>
            </div>
            <div className='btnFechar'>
                <button onClick={onClose}>
                    <FaTimes />
                </button>
            </div>  
    </div>
  );
}

export default Modal;