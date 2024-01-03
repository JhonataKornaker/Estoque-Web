import { isValidInputTimeValue } from '@testing-library/user-event/dist/utils'
import './ListaEstoque.css'

const ListaEstoque = ({ lista }) => {
    return (
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
            <div className='botao'>
                <button>Editar</button>
                <button>Excluir</button>
            </div>
        </section>
    )
}

export default ListaEstoque