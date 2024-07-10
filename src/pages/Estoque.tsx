import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Estoque() {
    const [est_nome, setNome] = useState<string>('');
    const [est_descri, setdescri] = useState<string>('');
    const [est_qtda, setqtda] = useState<number>(0);
    const [est_fabricante, setFabricante] = useState<string>('');
    const nav = useNavigate();

    const pegarNome = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNome(e.target.value);    
    };
    const pegarDescrição = (e: React.ChangeEvent<HTMLInputElement>) => {
        setdescri(e.target.value);    
    };
    const pegarqtda = (e: React.ChangeEvent<HTMLInputElement>) => {
        setqtda(Number(e.target.value));    
    };
    const pegarFabricante = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFabricante(e.target.value);    
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        registrar();
    }

    async function registrar() {
        if(est_nome === '' || est_descri === '' || est_qtda === 0 || est_fabricante === '') {
            alert('Preencha todos os campos');
        } else {
            try {
                await axios.post('http://localhost:3334/estoque', {
                    est_nome: est_nome,
                    est_descri: est_descri,
                    est_qtda: est_qtda,
                    est_fabricante: est_fabricante
                });
                console.log('Estoque cadastrado com sucesso!');
                nav('/Principal');
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="container bg-gray-300 mx-auto h-96 w-96">
                    
                    <label className='ml-12 text-black' htmlFor="nome">Nome do Estoque: </label>
                    <input onChange={pegarNome} type="text" className='nome ml-1 mt-16 mb-4 border-none outline-0' name='nome' placeholder='Nome do estoque'/>
                    <br />
                    <br />
                    <label className='ml-9 text-black' htmlFor="localizacao">Descrição: </label>
                    <input onChange={pegarDescrição} className='localizacao border-none mb-4 outline-0' type="text" name='localizacao' placeholder='Descrição'/>
                    <br />
                    <br />
                    <label className='ml-8 text-black' htmlFor="capacidade">Quantidade de produtos: </label>
                    <input onChange={pegarqtda} className='capacidade mb-4 border-none outline-0' type="number" name='capacidade' placeholder='quantiade'/>
                    <br />
                    <br />
                    <label className='ml-16 mr-1 text-black' htmlFor="responsavel">Fabricante: </label>
                    <input onChange={pegarFabricante} className='responsavel border-none outline-0' type="text" name='responsavel' placeholder='Fabricante'/>
                    <br />
                    <br />
                    <button type="submit" className='mt-6 ml-24'>Enviar</button>
                    <Link to='/'>
                    <button>Menu</button>
                     </Link>
                </div>      
            </form>
        </>
    )
}
