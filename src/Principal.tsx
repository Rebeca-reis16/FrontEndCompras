import { useNavigate } from 'react-router-dom';
  import './App.css';
  import './index.css';

  function Principal() {

    const navigate = useNavigate()

    return (
      <>
        <h1>Sistema de compras</h1>
        
        <p>Aqui você pode visualizar o estoque, adicionar produtos no estoque ou deletar, 
          e também podera comprar algum produto </p>
          <br/>
          <button onClick={()=> navigate('/Compras')}>Comprar</button>
          <button onClick={()=> navigate('/Estoque')}>Estoque</button>
          <button onClick={()=> navigate('/Produtos')}>Produtos</button>
      </>
    )
  }
  
  export default Principal;
  
