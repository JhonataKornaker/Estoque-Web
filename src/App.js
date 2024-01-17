
import { useState } from 'react';
import './App.css';
import ListaEstoque from './componentes/lista-estoque';
import Pesquisar from './componentes/pesquisar';
import Modal from './componentes/modal';
import { Link } from 'react-router-dom';
import ModalImagem from './componentes/modal-imagem';


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
    {
      id: 3,
      nome: 'Notebook',
      categoria: 'Informatica',
      quantidade: 4,
      local: 'Almoxarifado',
    },
  ])

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemModal, setItemModal] = useState({});
  const [pesquisa, setPesquisa] = useState('');
  

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
      <Pesquisar pesquisa={pesquisa} setPesquisa={setPesquisa}/>
      
      {
        item
        .filter((lista) => lista.nome.toLowerCase()
        .includes(pesquisa.toLowerCase()))
        .map((lista) => (
          <ListaEstoque 
          key={lista.id} 
          lista={lista} 
          openModal={openModal} 
          excluirItem={removerItem} />
        ))
      }

      <Modal isOpen={isModalOpen} onClose={closeModal} listaModal={itemModal} setItem={setItem} />

      <button className='btnCadastrar'>
      <Link className='btnLink' to={'cadastrar'}>
        Cadastrar
      </Link>
      </button>
    </div>
  );
}

export default App;
