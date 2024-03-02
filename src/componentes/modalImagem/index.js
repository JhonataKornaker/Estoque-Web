import { useState } from 'react';
import './ModalImagem.css'

const ModalImagem = (isOpen, onClose) => {

    const [img, setImg] = useState('');

    const exibirImagem = () => {
        if(img.trim() === '') {
            alert('Por favor,insira um link valido');
            return;
        }
        onClose();
    }

    if(!isOpen) return null;

    return (
        <section className='modal-imagem'>
            <label htmlFor='url'>Insira o link da imagem</label>
            <input
            type='text'
            name='url'
            value={img}
            placeholder='Cole o link aqui'
            onChange={(e) => setImg(e.target.value)}></input>

            <button onClick={exibirImagem}>Salvar</button>
        </section>
    )
};

export default ModalImagem;