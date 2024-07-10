import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Compras() {
    const [comp_cod, setCodigo] = useState<string>('');
    const [comp_descri, setDescricao] = useState<string>('');
    const [comp_fabricante, setFabricante] = useState<string>('');
    const [comp_qtda, setQuantidade] = useState<number>(0);
    const [comp_preco, setPreco] = useState<number>(0);
    const [comp_data, setData] = useState<string>('');
    const nav = useNavigate();

    const pegarCodigo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCodigo(e.target.value);    
    };
    const pegarDescricao = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescricao(e.target.value);    
    };
    const pegarFabricante = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFabricante(e.target.value);    
    };
    const pegarQuantidade = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantidade(Number(e.target.value));    
    };
    const pegarPreco = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPreco(Number(e.target.value));    
    };
    const pegarData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(e.target.value);    
    };
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        registrar();
    }

    async function registrar() {
        if(comp_cod === '' || comp_descri === '' || comp_fabricante === '' || comp_qtda === 0 || comp_preco === 0 || comp_data === '') {
            alert('Preencha todos os campos');
        } else {
            try {
                await axios.post('http://localhost:3334/compra', {
                    comp_cod: comp_cod,
                    comp_descri: comp_descri,
                    comp_fabricante: comp_fabricante,
                    comp_qtda: comp_qtda,
                    comp_preco: comp_preco,
                    comp_data: comp_data
                });
                console.log('Compra cadastrada com sucesso!');
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
                    
                    <label className='ml-12 text-black' htmlFor="nome">Código: </label>
                    <input onChange={pegarCodigo} type="text" className='nome  border-50 outline-0' name='nome' placeholder='Código da Compra'/>
                    <br />
                    <br />
                    <label className='ml-9 text-black' htmlFor="localizacao">Descrição: </label>
                    <input onChange={pegarDescricao} className='localizacao border-50  outline-0' type="text" name='localizacao' placeholder='Descrição da Compra'/>
                    <br />
                    <br />
                    <label className=' text-black' htmlFor="capacidade">Quantidade de produtos: </label>
                    <input onChange={pegarQuantidade} className='capacidade  border-50 outline-0' type="number" name='capacidade' placeholder='Quantidade de produtos' />
                    <br />
                    <br />
                    <label className=' text-black' htmlFor="Fabricante">Fabricante: </label>
                    <input onChange={pegarFabricante} className='responsavel border-none outline-0' type="text" name='fabricante' placeholder='Fabricante:'/>
                    <br />
                    <br />
                    <label className='ml-16 mr-1 text-black' htmlFor="preco">Preço</label>
                    <input onChange={pegarPreco} className='preco border-none outline-0' type="number" name='preco' placeholder='Preço:'/>
                    <br />
                    <br />
                    <label className='ml-8 text-black' htmlFor="data">Data</label>
                    <input onChange={pegarData} className='data border-none mb-4 outline-0' type="text" name='data' placeholder='Data da compra:'/>
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
