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
import { useState } from 'react'
import ProtectorRutas from './components/routes/ProtectorRutas'
import RutasAdmin from './components/routes/RutasAdmin'

function App() {
  const usuario = JSON.parse(sessionStorage.getItem('userKey')) || '';
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario)
 
  return (
    <>
     <BrowserRouter>
     <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Menu>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/login' element={<Login setUsuarioLogueado ={setUsuarioLogueado}/>}/>
        <Route path='/detalle-producto/:id' element={<DetalleProducto/>}/>
        <Route path='/administrador/*' element={<ProtectorRutas>
          <RutasAdmin></RutasAdmin>
        </ProtectorRutas>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
      <Footer></Footer>
     </BrowserRouter>
    </>
  )
}

export default App
