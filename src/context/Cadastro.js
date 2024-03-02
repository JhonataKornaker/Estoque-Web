import { createContext, useContext, useState } from "react";
import React from "react";

export const CadastroContext = createContext();

export default function CadastroProvider({ children }) {
    const [cadastro, setCadastro] = useState([]);

    return (
        <CadastroContext.Provider value={{ cadastro, setCadastro }}>
            {children}
        </CadastroContext.Provider>
    )
}

export function useCadastroContext() {
    const {cadastro, setCadastro} = useContext(CadastroContext);

    function adicionarItem(novoItem) {

        let novaLista = [...cadastro,
            {
                id: Math.floor(Math.random() * 1000),
                nome: novoItem.nome,
                quantidade: novoItem.quantidade,
                categoria: novoItem.categoria,
                local: novoItem.local,
            }
        ];
        return setCadastro(novaLista);
    }
    return {
        cadastro,
        setCadastro,
        adicionarItem
    }
}