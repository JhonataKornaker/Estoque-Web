import './Modal.css'
import {FaTimes} from 'react-icons/fa'

const Modal = ({isOpen, onClose, listaModal}) => {

    if (!isOpen) return null; //Esta é uma estrutura condicional que verifica se isOpen é falso. Se for, retornara falso ou seja não sera exibido o modal.

    return (
        <div className='modalStyle'>
            <div>
                <h2>Editar Item</h2>
            </div>
            <div className='lista-editar'>
                Nome:
                <input type='text' value={listaModal.nome} onChange={(e) => console.log(e.target.value)}/>
                Quantidade:
                <input type='number' value={listaModal.quantidade} onChange={(e) => console.log(e.target.value)}/>
                Categoria:
                <input type='text' value={listaModal.categoria} onChange={(e) => console.log(e.target.value)}/>
                Local:
                <input type='text' value={listaModal.local} onChange={(e) => console.log(e.target.value)}/>
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