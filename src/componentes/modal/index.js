import { useEffect, useState } from 'react';
import './Modal.css'
import {FaTimes} from 'react-icons/fa'

const Modal = ({isOpen, onClose, listaModal, setItem}) => {

    const [dadosModal, setDadosModal] = useState(
        {
            nome: '',
            quantidade: 0,
            categoria: '',
            local: '',
        }
    );

    const att = (e) => {
        setDadosModal({
/* criando uma nova versão do objeto modalData onde todas as propriedades originais são mantidas (...modalData) e
, em seguida, a propriedade especificada por [e.target.name] é atualizada com o novo valor (e.target.value). */            
            ...dadosModal, 
            [e.target.name]: e.target.value, //A expressão [e.target.name]: e.target.value garantirá que o estado local (modalData) seja atualizado corretamente para o campo específico que foi modificado no formulário.
        })
    }

    const salvar = () => {
        // Atualizar o estado global com os novos dados
        setItem((prevItem) => {
          const updatedItem = prevItem.map((item) =>
            item.id === listaModal.id ? { ...item, ...dadosModal } : item
          );
          return updatedItem;
        });
    
        // Fechar a modal após salvar
        onClose();
      };
      
    useEffect(() => {
        // Atualizar o estado local quando a propriedade listaModal for alterada
        setDadosModal(listaModal);  
      }, [listaModal]);

    if (!isOpen) return null; //Esta é uma estrutura condicional que verifica se isOpen é falso. Se for, retornara falso ou seja não sera exibido o modal.
      //Verifica se isOpen é falso, se for retorna nulo, caso isOpen for verdadeiro retorna o modal.


    return (
        <div className='modalStyle'>
            <div>
                <h2>Editar Item</h2>
            </div>
            <div className='lista-editar'>
                Nome:
                <input 
                type='text' 
                name='nome'
                value={dadosModal.nome} 
                onChange={att}/>
                Quantidade:
                <input 
                type='number'
                name='quantidade' 
                value={dadosModal.quantidade} 
                onChange={att}/>
                Categoria:
                <input 
                type='text'
                name='categoria' 
                value={dadosModal.categoria} 
                onChange={att}/>
                Local:
                <input 
                type='text'
                name='local' 
                value={dadosModal.local} 
                onChange={att}/>
            </div>
            <div>
                <button onClick={salvar}>Salvar</button>
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