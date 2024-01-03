
import './App.css';
import ListaEstoque from './componentes/lista-estoque';
import Pesquisar from './componentes/pesquisar';

const listaEstatica = [
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
]

function App() {
  return (
    <div className="App">
      <h2>Lista de Estoque</h2>
      <Pesquisar />
      {
        listaEstatica.map((lista) => (
          <ListaEstoque lista={lista}/>
        ))
      }
      
    </div>
  );
}

export default App;
