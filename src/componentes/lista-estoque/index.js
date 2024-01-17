
import './ListaEstoque.css'

const ListaEstoque = ({ lista, openModal, excluirItem }) => {
    return (
    
            <section className='principal'>
            <section className='botao'>
                <button onClick={() => openModal(lista.id)}>Editar</button>
                <button onClick={() => excluirItem(lista.id)}>Excluir</button>
            </section>
            <section className='container-lista'>
                <div className='imagem'>
                    <img src='/img2_padrao.png' alt='Imagem padrao' />
                </div>
                <div className='lista'>
                    Nome:
                    <span>{lista.nome}</span>
                    Quantidade:
                    <span>{lista.quantidade}</span>
                    Categoria:
                    <span>{lista.categoria}</span>
                    Local:
                    <span>{lista.local}</span>
                </div>
            </section>
            </section>
        
    )
}

export default ListaEstoque