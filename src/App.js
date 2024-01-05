
import { useState } from 'react';
import './App.css';
import ListaEstoque from './componentes/lista-estoque';
import Pesquisar from './componentes/pesquisar';
import Modal from './componentes/modal';

function App() {

  const [item, setItem] = useState([
    {
      id: 1,
      nome: 'Alicate',
      categoria: 'Ferramenta',
      quantidade: 10,
      local: 'Almoxarifado',
    },
    {
      id: 2,
      nome: 'Radio',
      categoria: 'Comunicação',
      quantidade: 20,
      local: 'Almoxarifado',
    },
  ])

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemModal, setItemModal] = useState(null);

  const openModal = (id) => {
    const valorModal = item.find((item) => item.id === id);
    setItemModal(valorModal);
    setIsModalOpen(true);
  };  

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="App">
      <h2>Lista de Estoque</h2>
      <Pesquisar />
      {
        item.map((lista) => (
          <ListaEstoque key={lista.id} lista={lista} openModal={openModal}/>
        ))
      }

    <Modal isOpen={isModalOpen} onClose={closeModal} listaModal={itemModal}/>
      
    </div>
  );
}

export default App;
