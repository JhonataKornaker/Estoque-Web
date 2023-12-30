import './ListaEstoque.css'

const ListaEstoque = () => {
    return (
        <section className='container-lista'>
            <div className='imagem'>
                <img src='' alt='Imagem padrao' />
            </div>
            <div className='lista'>
            <label htmlFor='nome'>Nome</label>
            <input type='text' id='nome'></input>

            <label htmlFor='quantidade'>Quantidade</label>
            <input type='number' id='quantidade'></input>

            <label htmlFor='categoria'>Categoria</label>
            <input type='text' id='categoria'></input>

            <label htmlFor='local'>Local</label>
            <input type='text' id='local'></input>
            </div>
            <div className='botao'>
                <button>Editar</button>
                <button>Excluir</button>
            </div>
        </section>
    )
}

export default ListaEstoque