
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
  const [itemModal, setItemModal] = useState({});

  const openModal = (id) => {
    const valorModal = item.find((item) => item.id === id);
    setItemModal(valorModal);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const removerItem = (id) => {
    const itemAtual = [...item];
    const novaListaItem = itemAtual.filter((itemFiltro) => itemFiltro.id !== id ? itemAtual : null)
    setItem(novaListaItem);
  }

 // const adicionarItem = () => {}


  return (
    <div className="App">
      <h2>Lista de Estoque</h2>
      <Pesquisar />
      {
        item.map((lista) => (
          <ListaEstoque key={lista.id} lista={lista} openModal={openModal} excluirItem={removerItem} />
        ))
      }

      <button className='btnCadastrar'>
        Cadastrar
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal} listaModal={itemModal} setItem={setItem} />

    </div>
  );
}

export default App;
