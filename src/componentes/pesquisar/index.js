import './Pesquisar.css'

const Pesquisar = ({pesquisa, setPesquisa}) => {
    return (
        <div className='busca'>
            <input 
            type='text' 
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
            placeholder='Digite o nome para busca' />
        </div>
    )
}

export default Pesquisar;