import { useNavigate } from 'react-router-dom';
import './Cadastrar.css';
import { useState } from 'react';
import {useCadastroContext } from '../../context/Cadastro';

const Cadastrar = () => {

    const {adicionarItem} = useCadastroContext();
    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState(0);
    const [local, setLocal] = useState('');
    const [categoria, setCategoria] = useState('');
    const navigate = useNavigate();

    const limparCampos = () => {
        // Define os valores iniciais ou strings vazias para limpar os campos
        setNome('');
        setQuantidade('');
        setCategoria('');
        setLocal('');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        //console.log('Dados: ', dadosFormulario);
        const novoItem = {
            nome,
            quantidade,
            categoria,
            local,
        }

        adicionarItem(novoItem);
        console.log(novoItem)

        navigate('/'); // Passa o novoCadastro como estado na transição para a página inicial
        limparCampos();
    }

    return (
        <section className='cadastro'>
            <h2>Cadastro de Estoque</h2>
            <img src='./img2_padrao.png' alt='imagem Padrao'></img>
            <div className='formulario'>
                <form onSubmit={onSubmit}>
                    <label htmlFor='nome'>Nome</label>
                    <input
                        type='text'
                        id='nome'
                        name='nome'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder='Digite o nome:'
                        required />

                    <label htmlFor='quantidade'>Quantidade</label>
                    <input
                        type='number'
                        id='quantidade'
                        name='quantidade'
                        value={quantidade}
                        onChange={(e) => setQuantidade(e.target.value)}
                        placeholder='Digite a quantidade:'
                        required />

                    <label htmlFor='categoria'>Categoria</label>
                    <input
                        type='text'
                        id='categoria'
                        name='categoria'
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        placeholder='Digite a categoria:'
                        required />

                    <label htmlFor='local'>Local</label>
                    <input
                        type='text'
                        id='local'
                        name='local'
                        value={local}
                        onChange={(e) => setLocal(e.target.value)}
                        placeholder='Digite o local:'
                        required />
                    <button
                        className='btnSalvar'
                        type='submit'>
                        Salvar
                    </button>

                </form>
            </div>
        </section>
    )
}

export default Cadastrar;