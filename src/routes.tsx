import { BrowserRouter, Routes, Route } from "react-router-dom"
import Principal from "./Principal";
import { Compras } from "./pages/Compras"
import { Estoque } from "./pages/Estoque"
import { Produtos } from "./pages/Produtos"



export function RouteApp(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal/>}/>
        <Route path="/Compras" element={<Compras/>}/>
        <Route path="/Estoque" element={<Estoque/>}/>
        <Route path="/Produtos" element={<Produtos/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}