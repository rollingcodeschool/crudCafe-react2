import { Route, Routes } from "react-router"
import Administrador from "../pages/Administrador";
import FormularioProducto from "../pages/producto/FormularioProducto";

const RutasAdmin = () => {
    return (
        <Routes>
            <Route path='/' element={<Administrador/>}/>
            <Route exact path="/crear" element={<FormularioProducto crearProducto={true}></FormularioProducto>}></Route>
            <Route exact path="/editar/:id" element={<FormularioProducto crearProducto={false}></FormularioProducto>}></Route>
        </Routes>
    );
};

export default RutasAdmin;