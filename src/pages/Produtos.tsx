import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export function Produtos(){
    const [pro_nome, setProduto] = useState<string>('');
    const [pro_descri, setDescri] = useState<string>('');
    const [pro_fabricante, setFabricante] = useState<string>('');
    const [pro_qtda, setQtda] = useState<number>(0);
    const [pro_preco, setPreco] = useState<number>(0);
    const nav = useNavigate();

    const pegarProduto = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProduto(e.target.value);    
    };
    const pegarDescri = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescri(e.target.value);    
    };
    const pegarFabricante = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFabricante(e.target.value);    
    };
    const pegarQtda = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQtda(Number(e.target.value));    
    };
    const pegarPreco = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPreco(Number(e.target.value));    
    };
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        registrar();
    }

    async function registrar(){
        if(pro_nome === '' || pro_descri === '' || pro_fabricante === '' || pro_qtda === 0 || pro_preco === 0){
            alert('Preencha todos os campos');
        }else{
            try {
                await axios.post('http://localhost:3334/produtos', {
                    pro_nome: pro_nome,
                    pro_descri: pro_descri,
                    pro_fabricante: pro_fabricante,
                    pro_qtda: pro_qtda,
                    pro_preco: pro_preco
                });
                console.log('Produto cadastrado com sucesso!');
                nav('/Principal');
            } catch (error) {
                console.log(error);
            }
        }
    }

    return(
        <>
            
            <form onSubmit={handleSubmit} className="form-container">
                <div  className="form-group">
                    
                    <label  htmlFor="produto">Produto: </label>
                    <input onChange={pegarProduto} type="text" className='border-50 outline-0' name='produto' placeholder='Nome do produto:'/>
                    </div>
                    <br/>
                 <div className="form-group">
                    <label   htmlFor="descri">Descrição: </label>
                    <input onChange={pegarDescri} className='border-50  outline-0' type="text" name='descri' placeholder='Descrição:'/>
                    </div>
                    <br />
                <div className="form-group">
                    <label   htmlFor="fabricante">Fabricante: </label>
                    <input onChange={pegarFabricante} className='senha  border-none outline-0' type="text" name='fabricante' placeholder='Nome do fabricante:'/>
                    </div>
                    <br />
                <div className="form-group">
                    <label   htmlFor="qtda">Quantidade: </label>
                    <input onChange={pegarQtda} className='senha border-none  outline-0' type="number" name='qtda' placeholder='Quantidade:'/>
                    </div>
                    <br/>
                <div className="form-group">
                    <label  htmlFor="preco">Preço: </label>
                    <input onChange={pegarPreco} className='senha border-none outline-0' type="number" name='preco' placeholder='Preço:'/>
                   </div>
                    <br />

                    <button type="submit" className="btn"  id="customBtn">Enviar</button>
                    <Link to='/'>
                    <button  className="btn"  id="customBtn">Menu</button>
                     </Link>

            
            </form>
        </>
    )
}
