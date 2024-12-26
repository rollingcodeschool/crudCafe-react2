import { BrowserRouter, Routes, Route } from 'react-router'
import Inicio from './components/pages/Inicio'
import Administrador from './components/pages/Administrador'
import Menu from './components/common/Menu'
import Footer from './components/common/Footer'
import Error404 from './components/pages/Error404'
import FormularioProducto from './components/pages/producto/FormularioProducto'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import DetalleProducto from './components/pages/DetalleProducto'
import Login from './components/pages/Login'
function App() {
 
  return (
    <>
     <BrowserRouter>
     <Menu></Menu>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/detalle-producto' element={<DetalleProducto/>}/>
        <Route path='/administrador' element={<Administrador/>}/>
        <Route exact path="/administrador/crear" element={<FormularioProducto crearProducto={true}></FormularioProducto>}></Route>
        <Route exact path="/administrador/editar" element={<FormularioProducto crearProducto={false}></FormularioProducto>}></Route>
        <Route path='*' element={<Error404/>}/>
      </Routes>
      <Footer></Footer>
     </BrowserRouter>
    </>
  )
}

export default App
