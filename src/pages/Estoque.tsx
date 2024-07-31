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
            <form onSubmit={handleSubmit}  className="form-container"
            > 

                <div className="form-group">
                    <label htmlFor="nome">Nome do Estoque: </label>
                    <input onChange={pegarNome} type="text" className='nome  border-none outline-0' name='nome' placeholder='Nome do estoque'/>
                    </div>
                    <br />
                    <div className="form-group">
                    <label htmlFor="localizacao">Descrição: </label>
                    <input onChange={pegarDescrição} className='localizacao border-none  outline-0' type="text" name='localizacao' placeholder='Descrição'/>
                    </div>
                    <br />
                    <div className="form-group">
                    <label  htmlFor="capacidade">Quantidade de produtos: </label>
                    <input onChange={pegarqtda} className='capacidade  border-none outline-0' type="number" name='capacidade' placeholder='quantiade'/>
                    </div>
                    <br />
                    <div className="form-group">
                    <label  htmlFor="responsavel">Fabricante: </label>
                    <input onChange={pegarFabricante} className='responsavel border-none outline-0' type="text" name='responsavel' placeholder='Fabricante'/>
                   </div>
                    <br />
                  
                    <button type="submit" className="btn"  id="customBtn">Enviar</button>
                    <Link to='/'>
                    <button className="btn"  id="customBtn">Menu</button>
                     </Link>
                    
            </form>
        </>
    )
}
