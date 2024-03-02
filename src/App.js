
import {useState } from 'react';
import './App.css';
import ListaEstoque from './componentes/lista-estoque';
import Pesquisar from './componentes/pesquisar';
import Modal from './componentes/modal';
import { Link } from 'react-router-dom';
import {useCadastroContext } from './context/Cadastro';


function App() {

  const { cadastro, setCadastro } = useCadastroContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemModal, setItemModal] = useState({});
  const [pesquisa, setPesquisa] = useState('');

  const openModal = (id) => {
    const valorModal = cadastro.find((item) => item.id === id);
    setItemModal(valorModal);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const removerItem = (id) => {
    console.log("Antes da remoção:", cadastro);

    setCadastro((item) => {
      const novaListaItem = item.filter((itemFiltro) => itemFiltro.id !== id);
      console.log("Depois da remoção:", novaListaItem);
      return novaListaItem;
    })
  }

  console.log('Varivel Global: ', cadastro);

  return (
    <div className="App">
      <h2>Lista de Estoque</h2>
      <Pesquisar pesquisa={pesquisa} setPesquisa={setPesquisa} />
      {
        cadastro && cadastro.length > 0 ? (
          cadastro
            .filter((lista) => lista.nome.toLowerCase()
              .includes(pesquisa.toLowerCase()))
            .map((lista) => (
              <ListaEstoque
                key={lista.id}
                lista={lista}
                openModal={openModal}
                excluirItem={removerItem} />
            ))
        ) : (
          <p>Lista Vazia!!</p>
        )
      }
    
      <Modal isOpen={isModalOpen} onClose={closeModal} listaModal={itemModal} setItem={setCadastro} />

      <button className='btnCadastrar'>
        <Link className='btnLink' to={'cadastrar'}>
          Cadastrar
        </Link>
      </button>
    </div>
  );
}

export default App;
