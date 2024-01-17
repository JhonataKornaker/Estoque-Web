import { Link } from 'react-router-dom';
import './Cadastrar.css';
import ModalImagem from '../modalImagem';
import { useState } from 'react';

const Cadastrar = () => {


    const [modalUrl, setModalUrl] = useState(false);
    const [url, setUrl] = useState('');

    const openModalUrl = () => {
        setModalUrl(true);
    }

    const closedModalUrl = () => {
        setModalUrl(false);
    }

    return (
        <>
            <section className='cadastro'>
                <h2>Cadastro de Estoque</h2>
                <img src='./img2_padrao.png' alt='imagem Padrao'></img>
                <div className='formulario'>
                    <form>
                        <label htmlFor='nome'>Nome</label>
                        <input type='text' id='nome' name='nome' placeholder='Digite o nome:' />

                        <label htmlFor='quantidade'>Quantidade</label>
                        <input type='number' id='quantidade' name='quantidade' placeholder='Digite a quantidade:' />

                        <label htmlFor='categoria'>Categoria</label>
                        <input type='text' id='categoria' name='categoria' placeholder='Digite a categoria:' />

                        <label htmlFor='local'>Local</label>
                        <input type='text' id='local' name='local' placeholder='Digite o local:' />

                        <button>Salvar</button>
                    </form>
                </div>
            </section>

            <ModalImagem />

        </>
    )
}

export default Cadastrar;